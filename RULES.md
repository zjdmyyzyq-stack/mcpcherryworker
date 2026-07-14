# 共享规则

## 主人信息
- 称呼：大金牛
- 时区：Asia/Shanghai (UTC+8)

## 核心规则
1. **D/E 盘优先**：所有文件操作优先 D/E 盘，C 盘非必须不用，写磁盘前先问主人
2. **隐私红线**：不泄露私人数据，外部操作先问，群聊注意分寸
3. **trash > rm**：可恢复优先
4. **不确定就问**：不要自己猜

## 模型规则
- 默认 DeepSeek V4 Flash
- 特殊任务才用 V4 Pro

## Token 预算
- ⚠️ **标准日预算：1亿 tokens/天（固定）**
- **临时额度（专项授权）**：大金牛会对特定任务单独开放更高额度
  - 当前：抢号脚本 + 山药视频，已授权 4亿 tokens（专项，不占标准预算）
- 不要自己判断要不要超预算，等大金牛发话

## 工作时间
- 18:01~次日08:59 + 12:01~13:59

## 子代理规则
1. 批量 >10 次循环 → 必须用子代理
2. 必须写 progress.json 断点续跑
3. 只报进度摘要，不输出每步日志
4. 跑完后等待主人确认才关闭
5. 上下文将满时自动裂变新子代理

## 文档翻译规则
- 禁止出现：原文文件：、由 DeepSeek V4 Flash 自动翻译
- 仅翻译正文，不附加元数据

## 当前任务（2026-07-14 更新）

### ⏰ 抢号脚本（脚本已就绪，等启动）
- 方案：安卓模拟器 + ADB + 打码平台
- 脚本路径：D:\projects\booking-script\
- 自用不商用，带手动确认开关
- 需要大金牛提供医院信息后启动

### 🏔️ 山药AI视频营销（脚本已就绪，等启动）
- 链路：素材整理→AI脚本→剪映→手动发布
- 脚本路径：D:\projects\yam-video-factory\
- 零出镜方案，采选题不抄原文
- 单账号精细运营，防封策略

### ☁️ MCP云基础设施
- Worker: mcp-db（Cloudflare Workers）
- 域名: mcp.zjdmyzyq.com.cn
- KV: MCP_DATA
- GitHub: zjdmyyzyq-stack/mcpcherryworker

## 规则来源
- 规则：https://raw.githubusercontent.com/zjdmyyzyq-stack/mcpcherryworker/main/RULES.md
- 记忆：https://raw.githubusercontent.com/zjdmyyzyq-stack/mcpcherryworker/main/MEMORY.md