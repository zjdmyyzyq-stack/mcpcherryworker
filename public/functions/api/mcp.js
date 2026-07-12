// 🦞 Cloudflare MCP Worker — 数据库式规则/记忆服务器
// 使用 Cloudflare KV 做存储
//
// 部署方法：
// 1. 打开 https://dash.cloudflare.com
// 2. Workers 和 Pages → 创建 Worker
// 3. 把这段代码全选覆盖，点部署
// 4. 然后去 Worker 设置 → 绑定 KV 命名空间（下面有详细说明）

// ===================== KV 命名空间绑定 =====================
// 部署前需要在 Cloudflare 面板：
// 1. 创建 KV 命名空间 → 取名 "MCP_DATA"
// 2. Worker 设置 → 变量 → KV 命名空间绑定
// 3. 变量名填：MCP_DATA
// 4. 选择你刚建的 "MCP_DATA" 命名空间
// ==========================================================

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // CORS 预检
    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders });
    }

    // ---- GET / — 状态页 ----
    if (request.method === 'GET' && url.pathname === '/') {
      let ruleCount = 0;
      try {
        const keys = await env.MCP_DATA.list();
        ruleCount = keys.keys.length;
      } catch (e) {
        // KV 可能没绑定
      }
      return new Response(`
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"><title>🦞 MCP Database Server</title>
        <style>body{font-family:sans-serif;max-width:600px;margin:50px auto;padding:20px}
        .ok{color:green}.stat{margin:10px 0;background:#f5f5f5;padding:10px;border-radius:4px}</style>
        </head>
        <body>
          <h1>🦞 MCP Database Server</h1>
          <p class="ok">✅ 运行中（Cloudflare Workers）</p>
          <div class="stat">📦 存储类型: KV 数据库</div>
          <div class="stat">📝 规则条目数: ${ruleCount}</div>
          <p>MCP 端点: <code>POST /mcp</code></p>
          <p>SSE 端点: <code>GET /sse</code></p>
        </body>
        </html>
      `, { status: 200, headers: { ...corsHeaders, 'Content-Type': 'text/html; charset=utf-8' } });
    }

    // ---- GET /sse — SSE 长连接 ----
    if (request.method === 'GET' && url.pathname === '/sse') {
      const { readable, writable } = new TransformStream();
      const writer = writable.getWriter();
      const encoder = new TextEncoder();

      // 发送 connected 事件
      writer.write(encoder.encode(`event: connected\ndata: ${JSON.stringify({ message: 'MCP Server connected' })}\n\n`));

      // 心跳（每 25 秒）
      const heartbeat = setInterval(() => {
        writer.write(encoder.encode(': heartbeat\n\n')).catch(() => clearInterval(heartbeat));
      }, 25000);

      // 客户端断开时清理
      request.signal.addEventListener('abort', () => {
        clearInterval(heartbeat);
        writer.close();
      });

      return new Response(readable, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          'Connection': 'keep-alive',
          ...corsHeaders,
        },
      });
    }

    // ---- POST /mcp — MCP 调用 ----
    if (request.method === 'POST' && url.pathname === '/mcp') {
      try {
        const body = await request.json();
        const response = await handleMCP(body, env);
        return new Response(JSON.stringify(response), {
          status: 200,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      } catch (e) {
        return new Response(JSON.stringify({
          jsonrpc: '2.0',
          error: { code: -32700, message: 'Parse error' },
        }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }
    }

    return new Response('Not Found', { status: 404 });
  },
};

// ===================== MCP 逻辑 =====================
async function handleMCP(body, env) {
  const { id, method, params = {} } = body;

  // ---- 通知不需要响应 ----
  if (method === 'notifications/initialized') return null;

  // ---- ping ----
  if (method === 'ping') return { jsonrpc: '2.0', id, result: {} };

  // ---- 初始化 ----
  if (method === 'initialize') {
    return {
      jsonrpc: '2.0',
      id,
      result: {
        protocolVersion: '2025-03-26',
        capabilities: { tools: {}, resources: {} },
        serverInfo: { name: 'mcp-db-worker', version: '1.0.0' },
      },
    };
  }

  // ---- 获取工具列表 ----
  if (method === 'tools/list') {
    return {
      jsonrpc: '2.0',
      id,
      result: {
        tools: [
          {
            name: 'get_rule',
            description: '按 key 查询一条规则（数据库查询）',
            inputSchema: {
              type: 'object',
              properties: {
                key: { type: 'string', description: '规则名称，如 model-rule' },
              },
              required: ['key'],
            },
          },
          {
            name: 'set_rule',
            description: '写入/更新一条规则（数据库写入）',
            inputSchema: {
              type: 'object',
              properties: {
                key: { type: 'string', description: '规则名称' },
                value: { type: 'string', description: '规则内容' },
              },
              required: ['key', 'value'],
            },
          },
          {
            name: 'list_rules',
            description: '列出所有规则名称',
            inputSchema: { type: 'object', properties: {} },
          },
          {
            name: 'delete_rule',
            description: '删除一条规则',
            inputSchema: {
              type: 'object',
              properties: {
                key: { type: 'string', description: '要删除的规则名称' },
              },
              required: ['key'],
            },
          },
          {
            name: 'search_rules',
            description: '搜索规则内容（模糊搜索）',
            inputSchema: {
              type: 'object',
              properties: {
                query: { type: 'string', description: '搜索关键词' },
              },
              required: ['query'],
            },
          },
        ],
      },
    };
  }

  // ---- 调用工具 ----
  if (method === 'tools/call') {
    const toolName = params.name;
    const args = params.arguments || {};

    try {
      switch (toolName) {
        case 'get_rule': {
          const value = await env.MCP_DATA.get(args.key);
          return {
            jsonrpc: '2.0',
            id,
            result: {
              content: [{ type: 'text', text: value ? value : `未找到规则: ${args.key}` }],
            },
          };
        }

        case 'set_rule': {
          await env.MCP_DATA.put(args.key, args.value);
          return {
            jsonrpc: '2.0',
            id,
            result: {
              content: [{ type: 'text', text: `✅ 规则已保存: ${args.key}` }],
            },
          };
        }

        case 'list_rules': {
          const list = await env.MCP_DATA.list();
          const keys = list.keys.map(k => k.name);
          return {
            jsonrpc: '2.0',
            id,
            result: {
              content: [{ type: 'text', text: keys.join('\n') || '暂无规则' }],
            },
          };
        }

        case 'delete_rule': {
          await env.MCP_DATA.delete(args.key);
          return {
            jsonrpc: '2.0',
            id,
            result: {
              content: [{ type: 'text', text: `✅ 已删除: ${args.key}` }],
            },
          };
        }

        case 'search_rules': {
          const all = await env.MCP_DATA.list();
          const results = [];
          for (const key of all.keys) {
            const val = await env.MCP_DATA.get(key.name);
            if (val && val.includes(args.query)) {
              results.push(`${key.name}: ${val.substring(0, 100)}`);
            }
          }
          return {
            jsonrpc: '2.0',
            id,
            result: {
              content: [{ type: 'text', text: results.length > 0 ? results.join('\n---\n') : '未找到匹配内容' }],
            },
          };
        }

        default:
          return {
            jsonrpc: '2.0',
            id,
            error: { code: -32601, message: `未知工具: ${toolName}` },
          };
      }
    } catch (e) {
      return {
        jsonrpc: '2.0',
        id,
        error: { code: -32603, message: e.message },
      };
    }
  }

  // ---- 获取资源列表 ----
  if (method === 'resources/list') {
    const all = await env.MCP_DATA.list();
    const resources = all.keys.map(k => ({
      uri: `mcp-db://rules/${k.name}`,
      name: k.name,
      mimeType: 'text/plain',
    }));
    return { jsonrpc: '2.0', id, result: { resources } };
  }

  return {
    jsonrpc: '2.0',
    id,
    error: { code: -32601, message: `方法未找到: ${method}` },
  };
}
