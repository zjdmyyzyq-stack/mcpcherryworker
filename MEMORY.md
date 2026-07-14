# 共享记忆

## 已完成
- 182篇智库英文军事文章翻译（DOCX→中文Markdown）
- V4 Pro 审查 + 截图嵌入 + Pandoc转换
- MCP-DB Cloudflare Worker 部署
- GitHub 共享仓库搭建

## 进行中
- 抢号脚本：等待主人提供医院信息后启动搭建
- 山药视频营销：等待主人确认方案后启动搭建

## 基础设施
- Cloudflare Workers mcp-db 已部署（mcp.zjdmyzyq.com.cn）
- KV 命名空间 MCP_DATA 已绑定
- 腾讯云域名已指向 Cloudflare
- D:\shared-context\server.js 本地 MCP Server 就绪
- 翻译工具链完整（Pandoc/嵌入/审查）

## 待提醒
- 腾讯云 NS 是否已完全切到 Cloudflare 需确认
- workers.dev 被墙，必须走自定义域名
- Cherry Studio + Workbuddy 的 MCP 连接尚未测试