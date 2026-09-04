# 云 MCP 规则完整汇总

> 本地权威源：`D:\\龙虾记忆\\工具与缓存\\cloud-registry\\rules\`
> 云端 Worker：mcp-db（mcp.zjdmyzyq.com.cn）· KV: MCP_DATA
> 生成时间：2026/9/4 16:23:13（本地零 token 脚本生成，规则变更后必须重建）

---

## 规则清单（10 条）

| key | visibility | 本地 hash | 说明 |
|---|---|---|---|
| `dsh-agent-memory` | openclaw-only | `8286172794d0` | DSH Agent 记忆 / Onboarding（key: dsh-agent-memory） |
| `dsh-plugin-review` | all | `af5358f46cf6` | DSH 插件安装前必须做「运行时」审查（key: dsh-plugin-review） |
| `glossary_military_geopolitics` | all | `da901cf3ffae` | 国际军事与地缘政治专用名词中译对照表(合并版) |
| `rule-openclaw-only` | openclaw-only | `6a1fa8077daa` | OpenClaw 专用规则（openclaw-only） |
| `rule-run-all` | all | `8a02cb4e3a8c` | 运行规则汇总（Token/模型/子代理/版本/盘符/文档/状态等） |
| `rule-translation-all` | all | `0f72893baa4e` | 任务与规则：翻译（智库翻译 + 线索翻译 + 输出规则） |
| `status_health` | all | `2e724154e25e` | 状态上报区（status_* 前缀） |
| `tool-markdown-editor` | all | `998b055dfb73` | 工具备用：Markdown Editor（棱一 lengyi） |
| `wb-token-budget` | workbuddy-only | `b8d8b0065f04` | WorkBuddy Token 预算 |
| `workbuddy-rules` | workbuddy-only | `6bfcfe4bd804` | WorkBuddy 使用规则（WB 专用） |

## 云端非规则数据 key（3，不入注册表）

| key | 说明 |
|---|---|
| status_vpn | VPN 检测状态上报（status-watchdog 脚本写入） |
| status_translation | 翻译进度状态上报（线索翻译脚本写入） |
| 阿傍君头像 | WorkBuddy 保留资产（base64 图片，非规则，勿删） |

---

## 各规则全文

### dsh-agent-memory（openclaw-only）

visibility: openclaw-only

# DSH Agent 记忆 / Onboarding（key: dsh-agent-memory）
> DeepSeek Harness(DSH) = 与 OpenClaw「龙虾」并存、独立工作的第二套 agent。
> 新 DSH 会话开工第一步读此，最快接续语境。

## 〇、定位与续接用法
- 开新 DSH 会话时接续的记忆入口。
- 一级记忆源：主配置 openclaw.json、OpenClaw workspace🧠记忆正本、D:\龙虾记忆 业务/任务主库。
- ⚠️ 本 agent 的完整「路径主地图」另存于本机 D:\deepseek-harness\（含 vs 云端两份自动文件的映射），不在此规则里维护——避免向云端规则灌入盘符/路径细节。见 D:\deepseek-harness 内 DSH 记忆文件。

## 一、人物与并存约定
- 主人：大金牛 🐂（Asia/Shanghai UTC+8）
- OpenClaw「龙虾」🦞：主 agent（记忆正本在 openclaw workspace）
- WorkBuddy(hy3)：另一 agent
- DeepSeek Harness(DSH)=我：与龙虾**并存独立 agent，只共享成果/文件**；不主动改龙虾在跑任务文件，需大金牛指派才动业务文件
- 会话约定：沿用龙虾「新会话=主对话，读全上下文」

## 二、MCP 云 API
- Endpoint(mcp-db worker)：https://mcp.zjdmyzyq.com.cn（国内走自定义域名；workers.dev 被墙）
- API Key：mcp-lobster-2026（Bearer / X-API-Key）
- set_rule 参数名 value；delete_rule 必须 Bearer
- 管理脚本：sync_all_cloud.js / gen-cloud-summary.js（位于龙虾记忆 工具与缓存\scripts\）

## 三、主配置要点（openclaw.json）
- 版本 2026.6.11；默认模型 cherry-deepseek/deepseek-v4-flash；Gateway 127.0.0.1:18790
- Token/峰谷/子代理隔离/文档规范等＝以龙虾 MEMORY.md 为权威，不在此重复

## 四、任务文件夹约定（两处都建）
- 开新任务：D:\龙虾记忆\<任务名>\ ＋ D:\deepseek-harness\<任务名>\
- 临时产物/备份归 D:\龙虾记忆\工具与缓存\，不散落业务根目录

## 五、待办/提醒
- 2026-09-04 军事线索翻译**质检低分口径改为 ≤4.5 分**（原 ≤4）。历史两份低分清单已回源重算并合并为唯一正本 `翻译输出/质检低分清单-合并版.md`（第〇节为对账表，今后统计以它为准）；`工作台/翻译进度看板.md` 已同步。权威数字：剔作废批 1-99 后 2589 篇有分 / 1029 篇低分 / 均分 4.57；作废批内另 157 篇单列。重算源＝`临时产物/检查结果/batch-*-result.json`（370 文件 / 3691 行，按 basename 去重取最新 ts）。
- DSH 后续更新与龙虾既有「三文档联动」（规则台账/汇总/看板）机制保持一致。
- 微信 ClawBot 接入（2026-09-04 起由 DSH 操作）：OpenClaw 侧解绑已完成（channels list 已空）；DSH 侧待办＝启动网关→channels login 出二维码（**须大金牛本人手机微信扫码，机器不可代扫**）→pairing approve 批准首个私信→验证私信路由后汇报。细节与红线见本机 DSH 记忆主地图；原交接文档已按规矩删除。

---

### dsh-plugin-review（all）

visibility: all

# DSH 插件安装前必须做「运行时」审查（key: dsh-plugin-review）
> 2026-09-04 由 dsh-plugin-translation 事故触发立条。
> 适用范围：任何要往 DeepSeek Harness(DSH) 的 profile（如 web）装第三方插件 (dsh plugin add <pkg>) 的场景，无论执行者是 DSH 还是 OpenClaw(龙虾)。

## 一、铁律：能装 ≠ 能跑
- 一个包在 npm 存在、命中 peer、pnpm 装成功，只代表“装得上”，不代表在目标 DSH 运行时能加载/能用。
- 事故实例：dsh-plugin-translation@0.2.0 在 dsh 0.1.1-rc.2 上 pnpm 安装无报错，但加载/运行时异常导致 web GUI 起不来（用户连不上 GUI），最终只能卸载回退。
- 因此装完必须重启 GUI 验证“界面/工具真起来、GUI 打得开”，不能只看 node_modules/package.json 落盘就向用户报成功。

## 二、装前必查的运行时兼容点（针对 0.1.1-rc.2 的已知坑）
1. 版本漂移：目标 dsh 是 0.1.1-rc.2，而插件 peer 要客户端模块 @deepseek-ai/dsh-client-* 的 ^0.1.2-rc.x（高于已装的 0.1.1-rc.2）= 高危，大概率加载/UI 问题。
2. 缺 dsh-client-ui-slots：0.1.1-rc.2 未提供该模块（空占位/无 client）。凡插件 dsh.client.inject 或客户端依赖 @deepseek-ai/dsh-client-ui-slots 的：
   - 纯 UI/嵌入类（往设置/侧栏/composer 插槽渲染）→ 基本渲染不出来（dsh-plugin 市场、dsh-visualize 卡片同病），装前就应预期“UI 看不到”。
   - 服务端/tool 类把该 peer 标 optional → 工具侧或仍可用，但 UI 侧不要承诺。
3. 下载二进制或带构造/安装脚本的插件（视频下载、OCR/文档解析）→ 额外信任面，装前审源码。
4. 重写 settings / 注册模型包装的插件（如 vision-router 类）→ 先备份 profile，卸载可能留残留。

## 三、安装/回退安全流程
1. 装前先备份目标 profile（package.json + 记下 bundle 清单）。
2. 一条一条装，装完单独重启验证，别一次批量装完才重启（否则定位不了是谁弄挂的）。
3. 装后验证：GUI 打得开（注意 dsh web 端口是自动分配的，--port 0 会漂，别死认 50599/3080，看实际监听）；该插件的工具/UI 真存在且不报红。
4. 出事立刻回退：还原备份或 dsh plugin remove <pkg> + 重启，别让用户干等。

## 四、给用户的承诺口径
- 不要看见 pnpm 装成功就答“可以用了”。必须“装上 → 重启 → GUI 打得开 + 功能可见”才算可用。
- 拿不准（版本漂移 / 缺 ui-slots / 带二进制）先如实说风险，别硬装。


---

### glossary_military_geopolitics（all）

visibility: all
# 国际军事与地缘政治专用名词中译对照表(合并版)

建库:2026-08-03 | 最近更新:2026-08-24(词库审计补录:作战军语/能源与非洲组织/装备技术/地名 15 条,见各章 2026-08-24 小节;此前 2026-08-23 批:中美AI模型与芯片/美洲政要/装备/机构媒体 30 余条;2026-08-17 批:金穹/高超音速/舰艇/欧洲政要/定居点/军事AI 等 50 余条,来源 ECFR+IISS 2026-06 文)| 来源:外文智库、外军官网、外文期刊;中译依据:国内官方媒体、军方媒体、外交部/国防部表态、国内核心期刊与高校智库

---

## 使用说明

**译名可信度分级(必看)**

| 标记  | 含义       | 判定依据                                |
| --- | -------- | ----------------------------------- |
| ◎   | **官方定译** | 新华社、参考消息、军网(解放军报系)、外交部/国防部发言人表态中已使用 |
| ○   | **学界通行** | 国内核心期刊、高校智库、主流军事媒体多处一致使用,但无官方定调     |
| △   | **暂未划分** | 国内无可靠定译,不收录为正式词条,仅列入"暂未划分"表待核       |

**三条编纂原则**

1. 凡标 ◎ 的,均在国内公开信源中找到实际用例,不是我自己造的词。
2. 凡国内无可靠定译的,一律列入「第十四章 暂未划分」表待核,不冒充通行译名(△ = 暂未划分,不收录为正式词条)。
3. 一词多译的(如 Golden Dome、Hellscape),并列给出并注明各自出处,不强行统一。

---

## 一、美国国防与安全战略(2026 版《国防战略》核心语汇)

新华社《解读美国新版国防战略四个关键词》(2026-01-26,记者徐剑梅)为本节主要中译依据,四个关键词构成 2026 NDS 的骨架。

| 英文 | 中译 | 级 | 释义与备注 |
|---|---|---|---|
| National Defense Strategy (NDS) | 国防战略报告 | ◎ | 一届政府发布一次,指导国防预算、兵力部署、军工规划 |
| Key Terrain | "关键地域" | ◎ | 2026 NDS 关键词一。指对美军事行动、商业利益、力量投送至关重要的地区,文件点名格陵兰岛、巴拿马运河、墨西哥湾。**注**:传统军语中 key terrain 译"要点/关键地形"(战术层面),新华社在 NDS 语境下译"关键地域"(战略层面),两者不可混用 |
| Golden Dome | "金穹" / "黄金穹顶" | ◎ | 关键词二。天基为主的多层导弹防御系统。新华社、外交部用"金穹";观察者网并用"黄金穹顶"。原名沿用以色列"铁穹"(Iron Dome)意象 |
| Burden-sharing | 负担分摊 / 责任分担 | ◎ | 关键词三。美将驻军规模与盟友分摊多少直接挂钩 |
| Supercharging the DIB | "超级快充"国防工业基础 | ◎ | 关键词四。非仅加投资扩产能,含结构性改革,目标重回"世界头号兵工厂" |
| Defense Industrial Base (DIB) | 国防工业基础 | ◎ | - |
| Homeland Defense | 本土防御 | ◎ | 2026 NDS 首要优先事项,范围外延至整个西半球 |
| Critical but more limited support | "关键但更为有限的支持" | ◎ | 描述美对欧洲、朝鲜半岛军事承诺的关键措辞 |
| Narco-terrorism / narco-terrorists | 毒品恐怖主义 / "毒品恐怖分子" | ◎ | 美方为在拉美动武提供的话语依据 |
| Monroe Doctrine, Trump Corollary | 门罗主义的特朗普推论 | ◎ | 新华社军事频道《美国新版国防战略"靶心"何在》用语 |
| Gulf of America | "美国湾" | ◎ | 美方对墨西哥湾的单方面改称。**国际社会及我方仍称墨西哥湾**,引用时应加引号并说明 |
| Free-riding | 搭便车 | ◎ | 美对盟友的指责话语 |
| Rules-based international order | 基于规则的国际秩序 | ◎ | 2026 NDS 明确弃用该旗号,转向"美国人的现实利益" |
| Strategic drift | "战略迷失" | ◎ | NDS 开篇对冷战后美国的自我诊断 |

---

### 2026-08-22 补录(美国军事司法体系)
> 来源:2026-05-27 美国防部长赫格塞斯下令全面审查军事司法体系报道。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| JAG Corps | 军法署署长团(JAG Corps) | △ | Judge Advocate General's Corps,美军各军种军法人员建制(陆军/海军/空军/海军陆战队/太空军各有军法署);国内无定译,本表拟译 |
| Uniform Code of Military Justice (UCMJ) | 《统一军事司法法典》(UCMJ) | ○ | 美国军事刑法典(1950 年生效);中国法学界/军事研究文章有此译法 |
| Rules of Engagement (ROE) | 交战规则 | ◎ | 军语通用;新华社/军网常用"交战规则",注意正文勿漏译 ROE |
| Protect Our Defenders | "保卫我们的卫士"组织 | △ | 美国军中性侵与问责倡导组织(军事司法改革语境);国内无定译,本表拟译 |

## 二、北约与欧洲防务

| 英文 | 中译 | 级 | 释义与备注 |
|---|---|---|---|
| Eastern Flank | 东翼 | ◎ | 参考消息、新华社固定用法。不宜译"东侧翼""东部侧翼" |
| Operation Eastern Sentry | "东部哨兵"行动 | ◎ | 2025 年 9 月启动,应对无人机侵扰。部分媒体作"东方哨兵",**以新华社/参考消息"东部哨兵"为准** |
| Arctic Sentry | "北极哨兵"(任务) | ○ | 覆盖北极与远北地区 |
| Baltic Air Policing | 波罗的海空中警戒任务 | ◎ | 2026 年安卡拉峰会后由"警戒巡逻"调整为"空域防御任务",交战权限下放至巡逻飞行员 |
| East Shield (Poland) | "东方盾牌"(波兰) | ◎ | 2024 年 5 月起在波白、波俄(加里宁格勒)边境展开的工事化行动 |
| Baltic Defence Line | 波罗的海防线 | ○ | 波罗的海三国自建工事体系 |
| Drone Wall / European Drone Wall | "无人机墙" / 欧洲"无人机墙" | ◎ | 2024 年由立陶宛、波兰发起,2025 年 9 月升格为欧盟旗舰项目。波兰段超 700 公里,总耗资逾 20 亿欧元 |
| European Drone Defence Initiative | 欧洲无人机防御倡议 | ○ | 《防务备战路线图2030》两大旗舰之一 |
| Defence Readiness Roadmap 2030 | 《防务备战路线图2030》 | ◎ | 2025 年 10 月欧盟发布 |
| Security Action for Europe (SAFE) | "欧洲安全行动"(防务融资工具) | ○ | 1500 亿欧元贷款计划 |
| European Defence Industry Programme (EDIP) | 欧洲防务工业计划 | ○ | - |
| Article 5 | 《北大西洋公约》第五条 | ◎ | 即集体防御条款。无人机侵扰事件因无国家认领,未触发该条 |
| Forward Land Forces (FLF) | 前沿地面部队 | ◎ | 参考消息用语 |
| Multinational Corps Northeast | "东北多国军团" | ◎ | 驻波兰什切青,2017 年成立 |
| Suwałki Gap | 苏瓦乌基走廊 / 苏瓦乌基缺口 | ○ | 波兰-立陶宛间连接白俄与加里宁格勒的战略地峡 |
| Forward Defense | 防御前移 | ○ | 同济大学《德国研究》用语 |
| Strategic Autonomy | 战略自主 | ◎ | 欧洲防务一体化核心诉求;亦用于描述全球南方国家取向 |
| Digital sovereignty | 数字主权 | ◎ | 联军数据互联中各国的保留条款 |
| JOA (Joint Operations Area) | 联合作战区(JOA) | ○ | 北约地区防御计划三大作战区域划分(JOA-NW/JOA-C/JOA-SE) |
| JFC Brunssum | 布林瑟姆联合部队司令部 | ○ | 北约中央联合作战区(JOA-C)指挥机构,驻荷兰 |
| JFC Naples | 那不勒斯联合部队司令部 | ○ | 北约东南联合作战区(JOA-SE)指挥机构,驻意大利 |
| MCLCC | 多军团地面组成部队司令部(MCLCC) | ○ | 北约战区级地面作战指挥层(驻米凯利/威斯巴登/伊兹密尔) |
| MNC-SE | 东南多国军团(MNC-SE) | ○ | 驻罗马尼亚,东南战线 |
| MNC-TR | 土耳其多国军团(MNC-TR) | ○ | 基于土第6军团(阿达纳)筹建的拟设多国军团 |
| 1GNC | 第1德荷军团(1GNC) | ○ | 1 German-Netherlands Corps,负责爱沙尼亚和拉脱维亚 |
| JSEC | 联合支援与赋能司令部(JSEC) | ○ | Joint Support and Enabling Command,北约后方增援与保障协调 |
| SACEUR | 欧洲盟军最高司令(SACEUR) | ◎ | Supreme Allied Commander Europe,北约欧洲盟军最高司令部(旧译) |
| Allied Rapid Reaction Corps | 盟军快速反应军团 | ○ | 北约战略预备队组成部队之一,驻英国 |
| NATO Force Integration Units | 北约部队整合单位 | ○ | 联系国家部队、北约司令部与增援部队的接缝协调单位 |
| NATO 3.0 | "北约3.0" | ○ | 美国对北约改革的愿景,减少对美贡献的"不健康相互依赖" |
| NATO Force Model | 北约部队模式 | ○ | 北约成员国部队贡献框架 |
| STANAG | 北约标准化协议(STANAG) | ◎ | NATO Standardization Agreements |
| European Long-range Strike Approach | 欧洲远程打击路径 | ○ | 欧洲远程火力替代方案(词库已收ELSA缩写) |

---


| KFOR | 驻科部队(KFOR) | ○ | NATO Kosovo Force,北约科索沃维和部队 |
### 欧盟扩盟、欧洲防务与右翼
> 来源:ECFR《The Magnificent Ten》、ECFR《Making Defence European Again》《Home Alone》、Carnegie 法国极右/AfD/欧尔班/土耳其文章等。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| Friends of Western Balkans | 西巴尔干之友 | ○ | 欧盟成员国非正式小组;直译通用 |
| associate membership | 准成员国地位 | ○ | 默茨 2026-05 致信提议(乌在理事会/委员会/议会获席位);欧盟术语通行 |
| cohesion funding | 凝聚基金 | ◎ | 欧盟官方译名 |
| growth plan | 增长计划 | ○ | 西巴尔干入盟前"增长计划";媒体通用 |
| Confederation | 联盟党 | ○ | 波兰极右翼党(Konfederacja);国内媒体有"联盟党"提法。依据:"联盟党是波兰极右翼政治力量代表"等多处 |
| Volhynia massacre | 沃伦大屠杀 | ◎ | 二战历史事件;国内学界通用 |
| Manchesterism | 曼彻斯特主义 | ○ | 19 世纪自由贸易主义;政治经济学术语有定译;RUSI 文借指伯纳姆执政愿景 |
| sui generis | 特殊(独一无二) | ○ | 拉丁语;学术通用 |
| Patriots for Europe | 欧洲爱国者党团 | ○ | 2024 年成立的欧洲议会党团;国内报道通用 |
| remigration | 再移民 | ○ | 德媒热议概念;国内有"再移民/遣返移民"译法 |
| Mittellage | 中间位置 | ○ | 德国地缘概念(欧洲中央位置);学界通行 |
| ordoliberalism | 秩序自由主义 | ◎ | 德国经济思想;学界通用 |
| nouvelle droite | 新右翼 | ◎ | 法国/欧洲思潮;学界通用 |
| neo-patrimonial | 新庇护主义 | ○ | 政治学术语;通行 |
| Make Europe Great Again (MEGA) | 让欧洲再次伟大 | ○ | 欧右翼口号(仿 MAGA);媒体通用 |
| Party of Davos | 达沃斯党 | ○ | 右翼对全球主义精英的贬称。依据:庞中英《裂变中的世界还有"达沃斯党"吗?》、班农世界观文章 |
| Zeitenwende | 时代转折 | ◎ | 朔尔茨 2022 演讲词;国内通用 |
| Democracy Shield | 民主盾牌 | ○ | 欧盟反外国干涉机制。依据:马克龙呼吁欧盟建立"民主盾牌"、欧盟"民主盾牌"计划 |
| MiCA | 加密资产市场条例 | ◎ | 欧盟 MiCA 法规;国内金融媒体通用 |
| anti-coercion instrument | 反胁迫工具 | ○ | 欧盟经济反制工具。依据:欧盟《反胁迫工具法》、马克龙启动反胁迫工具等 |
| friendshoring | 友岸外包 | ◎ | 官方媒体通用 |
| CADA | 云与人工智能发展法案 | ○ | 欧盟《云与人工智能发展法案》(CADA),2026-06-03 欧盟数字主权政策组合。依据:欧盟法案多处(原注「美国参议院法案」待核,检索实例均为欧盟法案) |
| DORA | 数字运营韧性法 | ◎ | 欧盟金融数字韧性法规;国内金融媒体通用 |
| greenlash | 绿色反弹 | ○ | 对绿色转型的抵制;媒体有"绿色反弹"提法 |
| Bundeswehr | 德国联邦国防军 | ◎ | - |
| Luftwaffe | 德国空军(Luftwaffe) | ○ | - |
| DLR | 德国航空航天中心(DLR) | ○ | - |
| European Sky Shield Initiative | 欧洲天空之盾倡议 | ○ | 德国主导的欧洲防空一体化 |
| AGS | 盟国地面监视(AGS) | ○ | 北约无人机项目 |
| DSRB | 国防安全与韧性银行(DSRB) | △ | Defence Security and Resilience Bank;卢森堡/英国推动的欧洲国防融资机制 |
| Orbán | 欧尔班(维克托·欧尔班) | ◎ | 匈牙利前总理(2010-2026),欧盟"搅局者";2026 年被毛焦尔击败。国内媒体通用 |
| Magyar (Péter) | 毛焦尔(彼得·毛焦尔) | ◎ | 匈牙利新总理,2026 年击败欧尔班;国内媒体通用"毛焦尔" |
| Fico (Robert) | 菲佐(罗伯特·菲佐) | ◎ | 斯洛伐克总理,与欧尔班结盟;国内媒体通用"菲佐" |
| Pellegrini (Peter) | 佩莱格里尼(彼得·佩莱格里尼) | ○ | 斯洛伐克总统;国内媒体通用 |
| Smer | 方向党(Smer) | ◎ | 斯洛伐克菲佐所在党;国内媒体通用"方向党" |
| Progressive Slovakia | 进步斯洛伐克党 | ○ | 斯洛伐克主要自由反对党;直译 |
| Beneš decrees | 《贝奈斯法令》 | ◎ | 二战后捷克斯洛伐克驱逐德/匈族并没收财产的法令;斯洛伐克 2025 年重新启用引发争议。依据:国内学界/媒体通用"贝奈斯法令" |
| Felvidek | 费尔维德克(Felvidek) | △ | 匈牙利语对上斯洛伐克的旧称("上地"),毛焦尔使用引发斯方不快;本表拟译 |
| Reform (UK) | 改革党 | ◎ | 英国法拉奇所在党(原脱欧党);国内媒体通用 |
| Luminate Projects | 卢米内特项目有限公司 | ○ | 美国亿万富翁斯科尔资助的民间组织,资助 ECFR 评论;无国内定译 |

### 2026-08-22 补录(欧洲政要)
> 来源:2026-06-17 马克龙核赌博一文(法德核指导小组、法国国内政治背景人物)。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| Macron (Emmanuel) | 马克龙(埃马纽埃尔·马克龙) | ◎ | 法国总统(2017-);国内媒体通用 |
| Merz (Friedrich) | 默茨(弗里德里希·默茨) | ◎ | 德国总理;国内媒体通用"默茨"(此前词库仅在"准成员国地位"备注中出现) |
| Rassemblement National | 国民联盟 | ◎ | 法国极右翼政党(勒庞/巴尔代拉);新华社通用"国民联盟" |
| Le Pen (Marine) | 勒庞(玛丽娜·勒庞) | ◎ | 法国国民联盟领导人;国内媒体通用 |
| Bardella (Jordan) | 巴尔代拉(乔丹·巴尔代拉) | ◎ | 法国国民联盟主席;国内媒体通用 |
| de Gaulle | 戴高乐 | ◎ | 法国前总统;国内媒体通用 |
| Mitterrand | 密特朗(弗朗索瓦·密特朗) | ◎ | 法国前总统;国内媒体通用 |
| Hollande | 奥朗德(弗朗索瓦·奥朗德) | ◎ | 法国前总统;国内媒体通用 |
| Sarkozy | 萨科齐(尼古拉·萨科齐) | ◎ | 法国前总统;国内媒体通用 |
| Mollet (Guy) | 居伊·摩勒 | ○ | 法国前总理(1956-1957);20 世纪 50 年代末法意德核武器计划提出者;国内历史/国际政治文章通用 |

## 三、作战概念(美军体系)

军网(web.junhao.mil.cn)《从"网络中心"到"决策中心"》、《指挥控制与仿真》《中国舰船研究》等为本节主要中译依据。

| 英文 | 中译 | 级 | 释义与备注 |
|---|---|---|---|
| Multi-Domain Operations (MDO) | 多域作战 | ◎ | 美陆军与北约的转型作战概念。英国称 Multi-Domain Integration(多域融合),德国称"多维度性" |
| Multi-Domain Task Force (MDTF) | 多域特遣部队 | ○ | 上校指挥,相当于旅级 |
| Multi-Domain Command (MDC) | 多域司令部 | ○ | 2025 年首个设于欧洲(MDC-E) |
| Mosaic Warfare | 马赛克战 | ◎ | DARPA 战略技术办公室 2017 年 8 月提出。核心:打散作战功能要素,用自组织网络拼成高度分散、动态组合的"杀伤网" |
| Decision-Centric Warfare | 决策中心战 | ◎ | 马赛克战的上位概念,CSBA 2020 年报告确立 |
| Network-Centric Warfare | 网络中心战 | ◎ | 20 世纪 90 年代概念,靠集中式指挥 + 强通信网 |
| Kill Chain | 杀伤链 | ◎ | 1996 年美空军参谋长福格尔曼提出。探测-识别-决策-打击-评估的闭环链式结构 |
| Kill Web | 杀伤网 | ◎ | DARPA 2018 年提出。多维空间要素交织协作,冗余节点强抗毁 |
| Adaptive Cross-Domain Kill-webs (ACK) | 自适应跨域杀伤网 | ○ | 马赛克战关键子项目 |
| Offset Strategy | 抵消战略 | ◎ | 第一次(核)、第二次(精导+隐身)、第三次(自主系统+人机协同) |
| Anti-Access/Area Denial (A2/AD) | 反介入/区域拒止 | ◎ | 亦作"反进入/区域拒止"。**注意**:这是美方对我军体系的描述性标签,非我方自称 |
| Distributed Lethality | 分布式杀伤 | ◎ | "漂浮者都是战斗者" |
| Distributed Maritime Operations (DMO) | 分布式海上作战 | ◎ | 2016 年《保持海上优势的战略设计1.0》确立,2018 年定为海军顶层作战概念 |
| Expeditionary Advanced Base Operations (EABO) | 远征前进基地作战 | ○ | 美海军陆战队概念 |
| Agile Combat Employment (ACE) | 敏捷战斗部署 | ○ | 2010 年代末起步,针对我军远程打击压制机场的能力。亦见译"敏捷作战运用"。IISS 2026-03 报告为最新评估来源 |
| Hot-pit refuelling | 热坑加油 | ○ | 发动机不熄火状态下加油,缩短战机周转 |
| Forward Arming and Refueling Point (FARP) | 前方区域加油点 | ◎ | 飞机之间快速转油,不依赖固定加油站 |
| Regional Basing Cluster Prepositioning (RBCP) | 区域基地群预置 | ○ | 从关键节点前推部署补给套件,支撑分散地点短期作战 |
| JADC2 / CJADC2 | 联合全域指挥控制 / 联合全域一体化指挥控制 | ◎ | 美国防部跨军种数据流整合伞形项目 |
| Manned-Unmanned Teaming (MUM-T) | 有人-无人协同 | ◎ | 如"阿帕奇"与无人系统编组 |
| Mission Command | 任务式指挥 | ◎ | 通信降级/失效下的分散自主指挥 |
| Military Decision-Making Process (MDMP) | 军事决策流程 | ○ | 清华 CISS 译法。西点现代战争研究所实验称 AI 可将旅级作战命令周期压至约 23 小时 |
| Reconnaissance-strike complex | 侦察打击一体化 / 侦察-打击综合体 | ○ | 俄军"Glaz/Groza"软件复合体为典型,把探测到命中从小时压到分钟 |
| pacing threat | 步调威胁(pacing threat) | ○ | 美战略规划术语,指需追赶的主要对手 |
| deconfliction | 冲突消解(deconfliction) | ○ | 军事协调术语,避免误击 |
| Multi-Domain Task Force (MDTF) | 多域特遣部队(MDTF) | ○ | 美陆军新型编制 |
| Mahanian playbook | 马汉式战略剧本 | △ | 以马汉海权论为指导的战略 |
| Operation Supercharge | 超级充能行动 | △ | 行动代号 |
| Operation Midnight Hammer | 午夜之锤行动 | △ | 行动代号 |
| Operation Rough Rider | 莽骑兵行动 | △ | 行动代号 |
| Operation Absolute Resolve | 绝对决心行动 | △ | 行动代号 |
| Operation Spiderweb | 蛛网行动 | △ | 乌克兰无人机打击行动代号 |
| BALTOPS | 波罗的海行动(BALTOPS) | ○ | 美主导波罗的海军演 |
| Airfield Denial Challenge | 机场拒止挑战赛 | △ | 北约-乌克兰联合演习 |

---

### 假想敌与空战训练
| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| adversary air / aggressor | 假想敌空中力量 / 假想敌 | ○ | 美军训练术语:red air 红方=扮演敌方,blue air 蓝方=己方;aggressor 飞行员=假想敌飞行员 |
| Top Aces | Top Aces | ○ | 加拿大私营假想敌训练公司,全球唯一运营 F-16 假想敌机的私营公司,名称保留英文。依据:F-16"假想敌"飞机获美空军许可证等报道多处 |
| F-16 Viper | F-16"蝰蛇" | ○ | F-16 俗称,国内军媒通行 |
| AESA radar | 有源相控阵雷达 | ◎ | 军媒定译 |
| IRST (infrared-search-and-track) | 红外搜索与跟踪 | ◎ | 军媒定译,吊舱式作 IRST 吊舱 |
| Link-16 | Link-16 数据链 | ◎ | 美军标准战术数据链 |
| Scorpion helmet-mounted display (Thales Visionix Gen III) | "蝎子"头盔显示器 | ○ | 泰雷兹 Visionix 第三代,可投射 Link-16 信息至 AR 视野 |
| WSINT (Weapons School Integration) | 武器学校整合(WSINT) | ○ | 武器学校各期课程的收官大规模演习。依据:空军武器学校集成演习 WSINT 多处 |
| Combat Readiness Training Center (CRTC) | 战备训练中心 | ○ | 佐治亚州 CRTC 即空中优势中心 |
| Formal Training Unit (FTU) | 正式训练单位 | ○ | 美空军换装初始训练单位 |

### 2026-08-24 补录(反潜与防空军语)
> 来源:质检低分清单点名的翻译文件(俄认为格陵兰危机蕴含机遇/乌克兰流星空空导弹等文,2026-08-24 词库审计)。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| ASW | 反潜战(ASW) | ◎ | Anti-Submarine Warfare;军媒通用"反潜战";2026-02 俄北方舰队格陵兰议题文使用 |
| no-escape zone | 不可逃逸区 | ○ | 空空导弹作战术语,目标无法逃出导弹射程包线的区域;国内军事媒体通用"不可逃逸区" |
| mission systems | 任务系统 | ○ | 通用军语(战机/舰艇任务系统);质检曾误译为"情报系统",注意与 intelligence(情报)区分 |

## 四、威慑与军控

| 英文 | 中译 | 级 | 释义与备注 |
|---|---|---|---|
| Deterrence by Denial | 拒止性威慑 | ○ | 让对手达不成目标。EFDI、"地狱景象"均属此类 |
| Deterrence by Punishment | 惩罚性威慑 | ○ | 让对手承担不可接受的代价 |
| Integrated Deterrence | 一体化威慑 | ○ | 2022 版 NDS 核心概念,跨域、跨战区、跨盟友整合 |
| Mutual Assured Destruction (MAD) | 相互确保摧毁 | ◎ | 新华社评"金穹"标志美核战略从 MAD 转向"单边防御优势" |
| Strategic Stability | 战略稳定 | ◎ | 外交部高频用语 |
| Undiminished security for all | 安全不受减损(原则) | ◎ | 外交部发言人批"金穹"时的援引原则 |
| Extended Deterrence | 延伸威慑 / 扩展威慑 | ○ | 对盟友提供的核保护伞 |
| New START | 《新削减战略武器条约》 | ◎ | 美俄现存唯一双边核军控条约 |
| Outer Space Treaty | 《外空条约》 | ◎ | 我方指"金穹"违反其和平利用原则 |
| Space weaponization / battlefieldization | 外空武器化 / 外空战场化 | ◎ | 国防部发言人张晓刚用语 |
| Lethal Autonomous Weapons Systems (LAWS) | 致命性自主武器系统 | ◎ | 2026 年 3 月 CCW 政府专家组磋商中,逾 70 国主张全生命周期约束性人类管控标准,美国反对 |
| Convention on Certain Conventional Weapons (CCW) | 《特定常规武器公约》 | ◎ | - |
| CBRN | 化学、生物、放射性、核(化生放核) | ◎ | 清华 CISS 译法 |
| Saturation attack | 饱和攻击 | ◎ | CBO 报告称大国核武库仍可用饱和攻击突破"金穹" |
| human in the loop (nuclear decision) | 核决策"人在回路"(人类掌控核武器使用决定) | ○ | 2024-11 中美联合声明核心承诺:核武器使用决定必须由人而非 AI 掌控;IISS 2026-06 评其"象征意义与实际内容差距扩大"。依据:军控学界通用"人在回路" |
| REAIM | 军事领域负责任人工智能(REAIM)峰会 | ○ | Responsible AI in the Military Domain,韩国/荷兰发起;中国未背书其人类控制承诺、拒签 2024《REAIM 行动蓝图》。依据:国防部/外交部相关表态及国内媒体"负责任地使用人工智能"提法,峰会名暂用英文缩写 |
| INCSEA | 《海上意外相遇协定》 | ◎ | 1972 美苏协定,防海空意外冲突;IISS 2026-06 建议美中仿此建 AI 事件管理框架。依据:国内通行"海上意外相遇协定" |
| Space-based interceptor | 天基拦截器 | ◎ | 占"金穹"总成本约 60% |
| Fait accompli | 既成事实(式夺取) | ○ | 对手在防御方形成有效反应前完成"领土既成事实"。EFDI/"地狱景象"共同针对的胜利理论。(2026-08-03 修正:原表该行夹杂英文 territorial,已清理) |
| Escalate to de-escalate | "以升级促降级" | ○ | RAND 用以描述伊朗策略 |
| Nuclear taboo | 核禁忌 | ○ | 有模拟研究显示 AI 会弱化核禁忌 |
| Lancaster House Treaty | 《兰开斯特宫条约》 | ○ | 英法核合作条约 |
| Northwood Declaration | 《诺斯伍德宣言》 | △ | 英法核合作声明 |
| W76-2 | W76-2 低当量弹头 | ○ | 美三叉戟潜射弹道导弹低当量核弹头 |
| WE-177 | WE-177 核重力炸弹 | ○ | 英已退役核炸弹 |

---

### 核威慑与核门槛
> 来源:Carnegie《Demystifying the Nuclear Threshold》、RUSI《The Bear with the Bomb》等核威慑文章 + 马克龙核战略报道。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| nuclear threshold | 核门槛 | ◎ | 核领域通行(跨过即使用核武器的临界) |
| nuclear latency | 核潜势 | ○ | 具备核能力但未部署的状态;军控学界通行 |
| hedging | 核对冲 | ◎ | 保留核选项的模糊策略;国内媒体通用 |
| breakout time | 突破时间 | ○ | 从民用核活动到武器化的时间;军控学界通行 |
| non-weaponized deterrence | 非武器化威慑 | ○ | 未部署核武器即形成威慑;军控文献通行 |
| screwdriver turn away | 只差拧一下螺丝 | ○ | 俄式表述(距核武化只差一步)。依据:日本拥核"只差拧螺丝刀"等(解放军报口径) |
| State Level Concept | 国家一级评估概念 | ○ | IAEA 保障监督概念;核不扩散文献通行 |
| Broader Conclusion | 总体结论 | ○ | IAEA 保障结论(无未申报核材料与活动);核领域通行 |
| integrated employment | 一体化运用 | ○ | 俄"核常一体"战略术语;军事文献通行 |
| strategic operations | 战略行动 | ○ | 俄军术语(战略级行动);军事文献通行 |
| forward deterrence | 前沿威慑 | ◎ | 马克龙 2026 核战略构想(法核保护伞覆盖欧洲、与八国合作);检索核实:济南日报《马克龙提出"前沿威慑"战略构想》等主流媒体使用 |
| Northwood Declaration | 诺斯伍德宣言 | ○ | 2025-07 英法核合作宣言;检索核实:公众号《经济学人精读》译《诺斯伍德宣言》(Northwood Declaration),音译规范 |
| Steadfast Noon | 坚定正午 | ○ | 北约年度核演习;国内媒体有"坚定正午"译法 |
| Cold Response | 寒冷反应 | ○ | 北约挪威演习;国内媒体通用 |
| Euromissiles | 欧洲导弹危机 | ◎ | 1980 年代中导危机历史名词;学界通用 |
| mowing the grass | 割草(作战) | ○ | 以色列式定期打击管控威胁;国内媒体有"割草行动/割草策略"提法 |

### 2026-08-22 补录(法国核政策与欧洲核威慑)
> 来源:2026-06-17 马克龙核赌博一文(法国核学说原则、欧洲核威慑框架)。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| force de frappe | "打击力量"(force de frappe) | ○ | 法国核力量法语统称;国内媒体/学界有"法国核打击力量"译法 |
| advanced deterrence | "先进威慑" | △ | 马克龙 2026 核战略框架(向欧洲伙伴提供战略对话、邀请参加法核演习、双能力飞机前沿部署);国内无定译,本表拟译。与词库已有 forward deterrence"前沿威慑"(济南日报译法)同指马克龙构想,两译并存待核 |
| strict sufficiency | 严格足够(原则) | △ | 法国核学说原则(法语 stricte suffisance);国内军控文献偶见"严格足够",本表拟译 |
| calibrated disclosure | 校准披露 | △ | 法国核学说"有节制披露"原则;国内无定译,本表拟译 |
| sovereign restraint | 主权克制 | △ | 法国核学说原则;国内无定译,本表拟译 |
| counterforce | 反力 / 对等威慑 | ○ | 军控学界通行"反力(打击军事目标)";本文译"对等威慑",两译并存 |
| counter-value | 打击城市目标(反价值) | ○ | 军控学界通行"打击城市/反价值目标";本文译"打击城市目标" |
| nuclear sharing | 核共享 | ○ | 北约核共享安排;国内媒体/学界通用"核共享" |
| double-capable aircraft | 双能力飞机 | ○ | 可投送核与常规武器的飞机(北约术语);国内军控文章"双重能力飞机/双能力飞机" |
| Poker (exercise) | "扑克"演习 | △ | 法国年度机密核打击模拟演习(Poker);国内无定译,本表拟译 |

## 五、印太与台海方向

> **立场声明**:台湾是中国领土不可分割的一部分。本节收录的是美西方话语体系中的作战概念与政策标签,收录目的是便于研判其战略意图,**其表述、预设与措辞均不代表我方立场**。凡涉台词条引用时须加引号并说明为美方用语。

| 英文 | 中译 | 级 | 释义与备注 |
|---|---|---|---|
| Indo-Pacific | 印太 | ◎ | - |
| First / Second Island Chain | 第一岛链 / 第二岛链 | ◎ | - |
| Hellscape | "地狱景象" / "地狱景观" | ◎ | 美印太司令部司令帕帕罗 2024 年 6 月提出。环球时报、中国社科院台湾研究所均用"地狱景象";台媒及部分陆媒作"地狱景观"。CNAS 2026 年 2 月报告《台湾的地狱景象》进一步细化为四层海上防御体系 |
| Replicator Initiative | "复制器"计划 | ◎ | 美国防部大规模低成本无人作战项目,是"地狱景象"的硬件基础 |
| Porcupine Strategy | "豪猪战略" | ◎ | "地狱景象"被视为豪猪战略的强化升级版 |
| Asymmetric Defense | 非对称防御 / 不对称防卫 | ◎ | - |
| Loitering Munition | 巡飞弹 / 滞空弹药 | ◎ | 如"弹簧刀"系列 |
| FPV drone | FPV 无人机(第一人称视角无人机) | ○ | 俄乌战场主力,成本极低 |
| Counter-UAS (C-UAS) | 反无人机系统 / 反无人系统 | ◎ | - |
| Pacific Deterrence Initiative (PDI) | 太平洋威慑倡议 | ○ | - |
| Guam Defense System / Aegis Guam | 关岛宙斯盾系统 | ○ | 2024 年首次完成弹道导弹防御测试 |
| ISR | 情报、监视与侦察 | ◎ | - |
| Axis of Resistance | 抵抗之弧 | ○ | 伊朗领导的地区联盟 |
| JCPOA | 《联合全面行动计划》(JCPOA) | ◎ | 伊核协议官方译名 |
| Gwadar | 瓜达尔港 | ◎ | 巴基斯坦港口,中巴经济走廊节点 |
| IP4 | 印太四国(IP4) | △ | 澳日新韩,区别于美日印澳"四方" |
| track-two | 第二轨道外交 | ○ | 非官方外交渠道 |
| Scarborough Shoal | 黄岩岛 | ◎ | 南海岛礁;中方正式名"黄岩岛",Scarborough Shoal 为外方称呼 |

---

## 六、地缘政治与国际秩序

| 英文 | 中译 | 级 | 释义与备注 |
|---|---|---|---|
| Global South | 全球南方 | ◎ | - |
| Middle Power | 中等强国 | ◎ | 2026 年最热术语之一。复旦孙德刚《"全球南方"中等强国的崛起》分为资源型、技术型、政治型、地缘型四类 |
| Niche Diplomacy | 利基外交 | ○ | 中等强国在特定议题上集中投入以获取超额影响力 |
| Minilateralism | 小多边 / 小多边主义 | ◎ | 以发展为导向的小规模多边合作机制 |
| Hedging Strategy | 对冲战略 | ◎ | 上海国际问题研究院陈东晓:经济靠中国、安全靠美国,不以意识形态划线 |
| Sphere of Influence | 势力范围 | ◎ | 陈东晓概括的"新势力范围秩序"为未来三种可能秩序之一 |
| "Carneyism" order | "卡尼主义秩序" | ○ | 加总理卡尼 2026 年达沃斯演讲主张:中等强国抱团维护后冷战规则秩序。陈东晓命名 |
| "World Minus One" order | "世界减一"秩序 | ○ | 即除美国之外的世界继续运转。陈东晓用语 |
| De-risking | 去风险 | ◎ | - |
| Decoupling / breaking chains | 脱钩断链 | ◎ | - |
| Gray Zone | 灰色地带 | ◎ | 战争与和平之间的模糊地带 |
| Hybrid Warfare / Hybrid Attack | 混合战争 / 混合攻击 | ◎ | 新华社:无人机即使不带危险载荷,也可作破坏工具,属混合攻击 |
| Cognitive Warfare | 认知战 | ◎ | RAND 2026-03 提出"叙事语言游戏化"是认知战新战术 |
| Lawfare | 法律战 | ◎ | 把法律用作战略工具 |
| Rally-'round-the-flag effect | 聚旗效应 | ◎ | 清华 CISS 译法 |
| Strategic Ambiguity | 战略模糊 | ◎ | - |
| Maximum Pressure | 最大压力 | ◎ | 美中东研究所称美对伊已从"最大压力"转向"最大不确定性" |
| Total War | 总体战 | ○ | RAND 2026-04 报告用以描述所研判的中方国家安全概念(该报告为美方视角,其判断我方并不认可) |
| Two-front strategy | 两线战略 | ○ | CSIS 2026-06《Wartime Footing》报告主张 |
| Wartime Footing | 战时体制 / 临战状态 | ○ | 本表拟译。依据:中文通用表述(台海动员语境多处) |
| Donroe Doctrine | 唐罗主义(Donroe Doctrine) | △ | Trump+Monroe 合成词,待核 |
| two-state solution | 两国方案 | ◎ | 巴以和平框架;国内媒体通用 |
| settlements (Israeli) | 以色列定居点 | ◎ | 约旦河西岸犹太定居点,国际法院 2024 咨询意见认定违法;国内媒体通用 |
| Amana | "阿马纳"(Amana) | △ | 以色列定居点主要出资与建设组织(1970 年代末起);2026 年欧盟拟制裁。国内无定译,音译 |
| Ateret Cohanim | "阿特雷特·科哈尼姆"(Ateret Cohanim) | △ | 以色列定居点扩张组织;国内无定译 |
| Himnuta | "希姆努塔"(Himnuta) | △ | 犹太国民基金旗下房地产子公司,涉定居点土地;国内无定译 |
| Smotrich (Bezalel) | 斯莫特里赫(贝扎莱尔·斯莫特里赫) | ◎ | 以色列财政部长、定居者活动人士;国内媒体通用"斯莫特里赫" |
| Ben-Gvir (Itamar) | 本-格维尔(伊塔马尔·本-格维尔) | ◎ | 以色列国家安全部长;国内媒体通用 |
| Netanyahu | 内塔尼亚胡 | ◎ | 以色列总理;国内媒体通用 |
| Givat Hamatos / Khan al-Ahmar | 吉瓦特哈马托斯 / 汗艾哈迈尔 | ○ | 约旦河西岸战略要地/巴勒斯坦社区,2014 年欧盟警告扩张将触发制裁;直译音译 |
| High Representative (Bosnia) | (波黑)高级代表 | ◎ | 《代顿协议》设立的驻波黑最高国际官员;国内媒体通用"高级代表" |
| Southern Interconnection | "南部互联"天然气管道 | △ | 波黑新建天然气管道,2026 年美关联公司获建设权引发争议;本表拟译 |
| Nis refinery | 尼什炼油厂 | ○ | 塞尔维亚最大炼油企业,俄资,美制裁对象;国内媒体有"尼什炼油厂"提法 |
| MOL | 匈牙利油气集团(MOL) | ◎ | 匈牙利国有石油公司;国内媒体通用 |

---

### 反盗贼统治与制裁网络
> 来源:Hudson《U.S. Counter-Kleptocracy Strategy》等。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| kleptocracy | 盗贼统治 | ◎ | 学界/媒体通用 |
| kleptocratic networks | 盗贼统治网络 | ○ | 哈德逊报告主题词;直译 |
| counter-kleptocracy | 反盗贼统治 | ○ | 对盗贼统治的对抗战略;直译 |
| odious debt | 恶意债务 | ○ | 国际法概念(亦见"恶债"译法)。依据:"恶债不继"、国际法"恶债不予继承"原则多处(建议以「恶债」为主) |
| siloviki | 西罗维基 | ◎ | 俄安全部门出身精英;学界通用 |
| access money | 准入资金 | ○ | 为获市场准入支付的费用(俄精英资本外逃渠道);直译 |
| hawala | 哈瓦拉 | ◎ | 非正式汇款网络;国内通用 |
| teapot refiners | 茶壶炼油厂 | ○ | 中国民营小炼厂;媒体通用 |
| Setad | 塞塔德 | ○ | 伊朗最高领袖掌控的经济组织。依据:塞塔德子公司 Rey Investment、塞塔德基金会等多处 |
| Orinoco Mining Arc | 奥里诺科矿业带 | ○ | 委内瑞拉矿带;媒体通用 |
| anti-SLAPP | 反SLAPP(反战略诉讼) | ○ | 反打压公众参与的战略诉讼;媒体通用 |


| nomenklatura | 干部名录(体制内精英) | ○ | 苏联干部任命名录制度,借指普京体制精英阶层 |
| depoliticization | 去政治化 | ○ | 政治学术语 |
### 网络与结构性权力
> 来源:Carnegie《Network and Structural Power》等。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| weaponized interdependence | 武器化相互依赖 | ○ | 法雷尔/纽曼概念;国际关系学界通用 |
| panopticon effect | 全景敞视效应 | ○ | 网络中心信息优势;学界通用 |
| chokepoint effect | 咽喉点效应 | ○ | 网络节点扼控效应;学界通用 |
| financial statecraft | 金融治国术 | ○ | 学界通用 |
| buck-passing | 推卸责任 | ○ | 国际关系通行 |
| soft balancing | 软制衡 | ◎ | 国际关系通行 |
| entrapment | 卷入(被拖入) | ○ | 同盟政治术语;通行 |
| enshittification | 平台腐化 | ○ | Cory Doctorow 造词;国内有"平台腐化/平台劣化"译法 |
| wolf warrior diplomacy | 战狼外交 | ◎ | 官方媒体通用 |
| tipping points | 临界点 | ◎ | 通用 |
| cascade effects | 级联效应 | ○ | 通用 |
| credible commitment | 可信承诺 | ○ | 国际关系/经济学通行 |
| self-binding | 自我约束 | ○ | 通行 |
| extractive | 榨取性(战略) | ○ | 本文语境"从包容转向榨取";直译 |
| survivor bias | 幸存者偏差 | ○ | 通用 |
| Latin Monetary Union | 拉丁货币联盟 | ◎ | 19 世纪历史名词;学界通用 |
| Greater East Asia Co-Prosperity Sphere | 大东亚共荣圈 | ◎ | 历史名词;国内通用 |
| Council for Mutual Economic Assistance | 经济互助委员会 | ◎ | 历史名词(经互会);国内通用 |
| Islamabad Memorandum of Understanding | 伊斯兰堡谅解备忘录 | ○ | 2026-06 美伊核谅解文件。依据:《伊斯兰堡谅解备忘录》十四条协议、美伊核谅解文件多处 |
| technological stack | 技术栈 | ◎ | 通用 |

| stablecoin | 稳定币 | ○ | 法币锚定加密货币(多与美元挂钩),2025年约占加密总交易量84%;国内媒体通用"稳定币" |
| Garantex | 加兰特克斯(Garantex) | △ | 俄罗斯关联加密货币交易所,涉制裁规避;本表拟译。依据:IISS《稳定币轨道和金融权力的局限性》(2026-02) |
| Nobitex | 诺比特克斯(Nobitex) | △ | 伊朗加密货币交易所,2025年遭网络行动致约9000万美元无法动用;本表拟译。依据:同上 |
| ByBit | ByBit 交易所 | △ | 2025-02 遭16亿美元黑客劫案,归因朝鲜关联行为体;本表拟译。依据:同上 |
| Ronin Bridge | Ronin 桥 | △ | 2022年遭朝鲜关联攻击(被盗约6亿美元),2024年追回3000万美元;本表拟译。依据:同上 |
| A7A5 | A7A5 稳定币 | △ | 卢布锚定稳定币,俄制裁规避常用;本表拟译。依据:同上 |
| USDKG | USDKG 稳定币 | △ | 吉尔吉斯斯坦黄金锚定稳定币;本表拟译。依据:同上 |
| Prince Holding Group | 太子集团 | △ | 柬埔寨企业集团,美方估计其网络涉加密诈骗收入150亿美元;本表拟译。依据:同上 |

### 电池矿产与资源地缘
| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| critical minerals | 关键矿产 | ◎ | 官方媒体通用 |
| CRMA | 关键原材料法案 | ○ | 欧盟《关键原材料法案》;国内欧盟研究通用 |
| NMC | 镍钴锰(三元)电池 | ◎ | 电化学通用 |
| LFP | 磷酸铁锂 | ◎ | 通用 |
| Si-anode | 硅负极 | ◎ | 电化学通用 |
| Li-S | 锂硫(电池) | ◎ | 电化学通用 |
| intercalation | 嵌入(反应) | ◎ | 电化学标准术语 |
| BESS | 电池储能系统 | ◎ | 能源圈通用 |
| Na-ion | 钠离子电池 | ◎ | 通用 |
| LMFP | 磷酸锰铁锂 | ◎ | 电化学通用 |

### 联盟与民主支持
| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| Coalition of the Willing | 意愿联盟 | ◎ | 通用 |
| Summit for Democracy | 民主峰会 | ◎ | 官方媒体通用 |
| Global Democracy Coalition | 全球民主联盟 | ○ | 本表拟译。依据:中国社科院美国所袁征研究员专文《美国"全球民主联盟"的构建及其影响》 |
| MIKTA | 中等强国合作体 | ◎ | 墨西哥/印尼/韩国/土耳其/澳大利亚;学界通用 |
| AUKUS | 奥库斯(AUKUS) | ◎ | 美英澳三边安全伙伴关系,核潜艇合作 |
| G7 | 七国集团(G7) | ◎ | - |
| GCC | 海湾合作委员会(GCC) | ○ | 海合会 |
| UAE | 阿联酋(UAE) | ◎ | 阿拉伯联合酋长国,海湾国家 |
| Abraham Accords | 《亚伯拉罕协议》 | ◎ | 2020年阿联酋/巴林等与以色列关系正常化协议 |
| Mercosur | 南方共同市场 | ○ | - |
| Negev Forum | 内盖夫论坛 | ○ | 美以与阿拉伯国家机制 |
| IMEC | 印度-中东-欧洲经济走廊(IMEC) | ○ | - |
| Southern Transitional Council | 也门南方过渡委员会 | ○ | - |
| Arctic Council | 北极理事会 | ◎ | - |
| UNIFIL | 联合国驻黎巴嫩临时部队(联黎部队) | ◎ | - |
| LAF | 黎巴嫩武装部队(LAF) | ○ | - |
| ISIS-WA | "伊斯兰国"西非分支 | ○ | - |
| Boko Haram | 博科圣地 | ◎ | - |
| Al-Shabaab | 索马里"青年党" | ◎ | 基地组织分支 |
| RSF | 快速支援部队(RSF) | ○ | 苏丹准军事武装 |
| MNJTF | 多国联合特遣部队(MNJTF) | ○ | 乍得湖盆地反恐 |
| Khatam al-Anbiya | "哈塔姆安比亚"中央司令部 | △ | 伊朗武装力量协调中枢 |
| IRGC | 伊朗伊斯兰革命卫队(IRGC) | ◎ | - |
| Kinburn Spit | 金本沙嘴 | ○ | 乌克兰南部尼古拉耶夫州,第聂伯河河口 |
| Ras Laffan | 拉斯拉凡 | ○ | 卡塔尔液化天然气港 |

### 2026-08-18 补录(民粹外交/制裁网络/网络与结构性权力)
| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| Rodrigo Duterte | 罗德里戈·杜特尔特 | ◎ | 菲律宾前总统(2016-2022),禁毒战争与亲华转向;新华社通用 |
| Ferdinand Marcos Jr. | 费迪南德·马科斯(小马科斯) | ◎ | 菲律宾总统(2022-),杜特尔特继任者;国内媒体通用"小马科斯" |
| Sara Duterte | 萨拉·杜特尔特 | ◎ | 菲律宾副总统(2022-),杜特尔特长女;国内媒体通用 |
| Joseph Estrada | 约瑟夫·埃斯特拉达 | ◎ | 菲律宾前总统(1998-2001),演员出身,2001 年被 EDSA II 推翻 |
| Hugo Chávez | 乌戈·查韦斯 | ◎ | 委内瑞拉前总统,玻利瓦尔革命领袖;国内媒体通用 |
| Jair Bolsonaro | 雅伊尔·博索纳罗 | ◎ | 巴西前总统(2019-2022),右翼民粹代表;国内媒体通用 |
| Juan Guaidó | 胡安·瓜伊多 | ◎ | 委内瑞拉反对派领袖,2019 年自行宣布"临时总统";国内媒体通用 |
| megaphone diplomacy | 扩音器外交 | ○ | 民粹外交概念(借助个性与魅力博取国际承认);学界译法 |
| penal populism | 惩罚性民粹主义 | ○ | 犯罪学/政治学术语:以严刑峻法迎合民意;学界通用 |
| Dutertismo | 杜特尔特主义 | ○ | 菲律宾民粹政治标签(主权、反西方、强人话语);学界直译 |
| minor power | 次等国家 | ○ | 国际关系层级概念(介于中等强国与小国之间);学界通用 |
| coercive pressure | 强制性压力 | ○ | 制裁与施压机制术语;学界通用 |
| resistance economy | 抵抗经济 | ◎ | 伊朗经济模式(革命卫队+宗教基金会网络);新华网已用 |
| bonyads | 博尼亚德(准国家宗教基金会) | ○ | 伊朗经济网络核心,制裁下资本调配;与十三章"军事-博尼亚德复合体"呼应 |
| Enhanced Defense Cooperation Agreement | 加强防务合作协议(EDCA) | ◎ | 美菲军事协定;新华社通用 |
| Visiting Forces Agreement | 访问部队协议(VFA) | ◎ | 美菲驻军协定(杜特尔特曾威胁废除);国内媒体通用 |
| EDSA II | 第二次人民力量革命 | ○ | 2001 年菲律宾街头运动推翻埃斯特拉达;学界通用 |
| ASEAN | 东南亚国家联盟(东盟) | ◎ | 官方译名"东盟" |
| defend forward | 前出防御 | ○ | 美网络司令部战略;安全内参等网安媒体使用 |
| persistent engagement | 持续交战 | ○ | 美网络司令部作战理念;网安媒体/学界 |
| economic statecraft | 经济治国(术) | ○ | 学界通用;与词库已有 financial statecraft 并列 |
| WannaCry | WannaCry 勒索病毒 | ○ | 2017 年全球勒索软件攻击;国内媒体保留英文原名 |
| NotPetya | NotPetya 勒索病毒 | ○ | 2017 年勒索攻击(归因俄);国内媒体保留英文原名 |
| Agent.BTZ | Agent.BTZ 蠕虫 | ○ | 2008 年入侵美军机密网络事件,促成网络司令部组建;网安媒体 |
| SolarWinds | SolarWinds 黑客事件 | ○ | 2020 年供应链攻击;国内媒体通用 |
| Shields Up | "盾牌高举"(Shields Up) | ○ | CISA 网络防御动员活动(2022 年起);网安媒体译法 |

### 2026-08-23 补录(美洲政要与涉华专家)
> 来源:质检低分清单点名的翻译文件(委内瑞拉民主转型/委内瑞拉行动与中国周边防务/独立选民/英雄法案/五角大楼解放军军力报告等)。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| Nicolás Maduro | 尼古拉斯·马杜罗 | ◎ | 委内瑞拉前总统(2013-2026),2026-01-03 美夜间突袭中被捕;国内媒体通用"马杜罗" |
| María Corina Machado | 玛丽亚·科里纳·马查多 | ○ | 委内瑞拉反对派领袖;国内媒体通用"马查多" |
| Delcy Rodríguez | 德尔西·罗德里格斯 | ○ | 委内瑞拉临时总统(马杜罗被捕后),原副总统;国内媒体有报道 |
| Marco Rubio | 马尔科·卢比奥 | ◎ | 美国国务卿;国内媒体通用"卢比奥" |
| Tom Homan | 汤姆·霍曼 | ○ | 白宫边境事务主管(2026);国内媒体有报道 |
| Joni Ernst | 乔尼·恩斯特 | ○ | 美国共和党参议员(艾奥瓦州),参议院军事委员会成员,"英雄法案"发起人;国内媒体有报道 |
| Tong Zhao | 赵通(Tong Zhao) | ○ | 卡内基国际和平基金会中国项目高级研究员(核政策);中文名"赵通" |
| Zhou Bo | 周波(Zhou Bo) | ○ | 清华大学战略与安全研究中心(CISS)高级研究员,原解放军大校;中文名"周波" |
| Shi Yinhong | 时殷弘(Shi Yinhong) | ◎ | 中国人民大学国际关系学院教授;国内媒体通用"时殷弘" |
| Michael C. Horowitz | 迈克尔·霍洛维茨 | ○ | 美国外交关系委员会技术与创新高级研究员,宾大佩里世界之家主任;学界通用 |


### 2026-08-24 补录(能源与非洲组织)
> 来源:质检低分清单点名的翻译文件(能源安全:回到未来/非洲政变和职业军队等文,2026-08-24 词库审计)。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| CERAWeek | 剑桥能源周(CERAWeek) | ◎ | 标普全球(S&P Global)旗下年度能源会议(休斯敦);国内媒体通用"剑桥能源周" |
| TotalEnergies | 道达尔能源(TotalEnergies) | ◎ | 法国能源巨头(2021 年由道达尔更名);国内媒体通用"道达尔能源"/"道达尔" |
| Chris Wright | 克里斯·赖特 | ◎ | 美国能源部长(2025 年 2 月上任);新华社/参考消息通用"克里斯·赖特" |
| ECOWAS | 西非国家经济共同体(西共体) | ◎ | 西非地区组织;新华社通用"西共体" |
| AU | 非洲联盟(非盟) | ◎ | 非洲大陆组织;新华社通用"非盟" |

## 七、2026 年新兴术语(多数尚无定译,慎用)

这一组是本次搜寻中最有价值的部分--它们刚在外文智库里成型,国内译法尚未沉淀。凡标 △ 的都是我按语义拟译,**引用前请自行核校**。

| 英文 | 中译 | 级 | 释义与出处 |
|---|---|---|---|
| **Warification** | **"战争化"** | ○ | **2026 年最值得注意的法理新概念**。西点军校利伯研究所 2026-05 提出:区别于"法律战"(把法律用作工具),"战争化"指冲突方在作战压力下主动解释法律、扭曲其原意的过程。AI 深度介入打击流程正引发国际人道法适用危机。清华 CISS 译"战争化" |
| Stochastic parrots | "随机鹦鹉" | ◎ | 指大模型只做语言的统计性模拟、无真实情境理解,故无法胜任国际人道法要求的具体语境判断。清华 CISS 译法 |
| Affordable mass | 低成本规模化 / 可负担的规模 | ○ | 用足够便宜的装备堆出规模优势。社科院台研所摘编 CNAS 报告时用"低成本规模化",可作参考译法。依据:《加速变革,否则失败》等 + 社科院台研所摘编 |
| Attritable | 可消耗 / 低成本可损耗 | ○ | 形容"打掉了不心疼"的装备,是 EFDI、"复制器"的共同前提 |
| Magazine depth | 弹药储备深度 / 弹仓深度 | ○ | 指持续作战的弹药家底。美军多次表达印太高强度冲突中的弹药不足担忧。依据:《美以伊冲突研究》《美伊战局取决弹药库深度》等 |
| Operation Epic Fury | "史诗狂怒行动" / "史诗之怒" | ○ | 2026-02-28 起美以对伊军事行动代号。清华 CISS 用"史诗狂怒行动",华南理工 IPP 用"史诗之怒",**尚未统一** |
| Technology Readiness Level (TRL) | 技术成熟度等级 | ◎ | CSIS 评估:俄军计算机视觉/传感器融合处 TRL 6-9,自然语言处理仅 TRL 1-3 |
| Maven Smart System (MSS) | "马文"智能系统 | ○ | 帕兰蒂尔公司目标识别系统。美中央司令部称每小时可生成 1000 个目标 |

---

### 前沿AI、算力与AI电力
> 来源:2026-08-13 补录批次(batch-0348 + 0372full,126 篇含 Carnegie/Hudson/ECFR/RUSI/Brookings 等 8-11 后新文)。分级规则同上:◎官方定译/○学界通行/△本表拟译(国内无定译)。分级依据与检索核实见 11.5。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| frontier AI | 前沿AI | ◎ | 业界与媒体通用;哈德逊《谁主宰机器?》主题词 |
| agentic AI | 智能体AI | ○ | AI 领域通行译法("智能体") |
| hyperscalers | 超大规模企业(云厂商) | ◎ | 科技媒体通用"超大规模企业/超大规模云厂商";检索核实:秦淮数据等中文报道用例 |
| Stargate Project | 星际之门计划 | ◎ | OpenAI+软银+甲骨文 5000 亿美元算力项目;检索核实:量子位《OpenAI星际之门搁浅》等媒体通用 |
| Pax Silica | 硅和平 | ○ | 特朗普政府 AI 供应链联盟倡议(与"金库计划"Project Vault 并列);检索核实:公众号《美国科技战新策略:硅和平(Pax Silica)计划》(海峡硅谷) |
| time to power | 通电时间 | ○ | 数据中心从签约到供电的周期;能源电力圈通行 |
| behind-the-meter power | 表后电力 | ○ | 用户侧自发自用电力;能源领域通行 |
| front-of-the-meter | 表前 | ○ | 电网计量点之前;能源领域通行 |
| One Big Beautiful Bill Act | 《一项大而美的法案》 | ○ | 美国 2025 年税改/预算协调法案;国内媒体有"大而美法案"提法。依据:《大而美法案》(OBBBA) 多处(众议院通过、对中国企业影响分析等) |
| Loan Programs Office | 贷款项目办公室(LPO) | ○ | 美国能源部(DOE)机构;国内能源媒体通行 |
| HALEU | 高丰度低浓缩铀 | ◎ | 核领域标准译法(High-Assay Low-Enriched Uranium) |
| TerraPower | 泰拉能源 | ◎ | 比尔·盖茨核能公司;国内媒体通用 |
| Kairos Power | 凯洛斯电力 | ○ | 美国氟盐冷却高温堆公司。依据:ORNL 与凯罗斯电力2700万美元合作等多处 |
| Oklo | 奥克洛 | ○ | 美国微型堆公司(Sam Altman 投资)。依据:量子位等科技媒体通用「Oklo」(英文名保留),「奥克洛」译名未见通用 |
| SMR | 小堆(小模块化反应堆) | ◎ | Small Modular Reactor;国内核能圈通用 |
| Techlash | 科技反弹 | ○ | 对科技巨头的抵制浪潮;媒体有"科技反弹/科技抵制"译法 |
| Magnifica Humanitas | 《壮丽人性》 | ○ | 教皇利奥十四世 2026 年首份通谕(AI 时代守护人性)。依据:《壮丽人性》(Magnifica Humanitas) 多处(教皇良十四世首份AI通谕报道、学者评论) |

### 2026-08-23 补录(中美AI竞争:模型与芯片)
> 来源:2026-04-29 CFR 三研究员评 DeepSeek V4 一文(中美AI竞争新阶段)。分级规则:◎官方/○学界通行/△拟译。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| DeepSeek V4 | DeepSeek V4(深度求索V4) | ○ | 深度求索 2026-04 新架构模型(接 R1);公司中文名"深度求索",模型名国内媒体通用保留英文 |
| OpenAI | OpenAI(开放人工智能) | ○ | 美国 AI 公司(GPT 系列开发商);国内媒体通用保留英文 |
| Anthropic | Anthropic | ○ | 美国 AI 公司(Claude 开发商);国内媒体通用保留英文 |
| GPT-5 | GPT-5(系列) | ○ | OpenAI 大模型;报道中常见 GPT-5.2/5.4/5.5 等版本号,保留英文 |
| Gemini | Gemini(谷歌大模型) | ○ | 谷歌大模型;报道中常见 Gemini 3.0 Pro/3.1 Pro 等,国内媒体通用保留英文 |
| Claude | Claude | ○ | Anthropic 大模型系列(Opus/Sonnet/Haiku/Mythos 等);国内媒体通用保留英文 |
| Grok | Grok | ○ | xAI 大模型;国内媒体通用保留英文 |
| Hugging Face | Hugging Face(抱抱脸) | ○ | 开源AI模型托管平台;国内AI媒体通用,社区俗称"抱抱脸" |
| Moonshot AI | 月之暗面(Moonshot AI) | ◎ | 中国 AI 公司,Kimi 大模型开发商;官方中文名"月之暗面" |
| Zhipu AI | 智谱(Zhipu AI) | ◎ | 中国 AI 公司,GLM 大模型开发商;官方中文名"智谱" |
| Huawei Ascend | 华为昇腾(Ascend) | ◎ | 华为 AI 芯片系列;官方名称"昇腾" |
| NVIDIA Blackwell | 英伟达 Blackwell 芯片 | ○ | 英伟达新一代 GPU 架构(对华禁售对象);国内科技媒体通用 Blackwell |

## 八、武器系统与装备

### 武器系统与弹药
| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| Tomahawk | 战斧(巡航导弹) | ◎ | 官方媒体长期定译"战斧",文中可直接写"战斧巡航导弹" |
| JASSM (AGM-158) | JASSM 空射巡航导弹 / 联合空对地防区外导弹 | ◎ | 军网等用"联合空对地防区外导弹"全称,媒体常用 JASSM 原文+中文注释;战前约 4000 枚,2026 对伊消耗 1100+ 枚 |
| THAAD | "萨德"(末段高空区域防御系统) | ◎ | 新华社/军网定译"萨德";我文中采用"末段高空区域防御系统(THAAD)"括注式,正式报道建议"萨德(THAAD)" |
| Patriot | 爱国者(防空导弹系统) | ◎ | 含 PAC-2/PAC-3 系列 |
| PAC-3 MSE | 爱国者-3 增程型拦截弹(PAC-3 MSE) | ◎ | MSE=Missile Segment Enhancement,导引头产线在阿拉巴马州亨茨维尔,单线产能 650-700 枚/年 |
| SM-2 / SM-3 / SM-6 | 标准-2 / 标准-3 / 标准-6(拦截弹) | ◎ | 美国海军标准导弹系列,SM-3 为反弹道导弹拦截弹,SM-6 多用途 |
| AMRAAM (AIM-120) | 先进中程空空导弹(AMRAAM) | ◎ | 2027 财年申请 494 枚 |
| AIM-260 JATM | AIM-260 联合先进战术导弹 | ○ | AMRAAM 后继型号 |
| AGM-181A LRSO | AGM-181A 远程防区外(核)巡航导弹 | ○ | 替代 AGM-86B,配 W80-4 核弹头,B-52J 平台相关 |
| AGM-86B | AGM-86B 空射巡航导弹 | ○ | 老一代核巡航导弹 |
| ARRW (AGM-183) | 空射快速响应武器(ARRW) | ○ | 高超音速;2026 年出现反舰改进型(ARRW Increment 2,加末制导导引头+数据链),项目复活,勿再用"2023 已取消"旧说法 |
| LRHW | 远程高超音速武器(LRHW,"暗鹰") | ○ | 陆军中程高超音速导弹 |
| C-HGB | 通用高超音速滑翔体(C-HGB) | ○ | LRHW/CPS 共用弹头 |
| ATACMS | 陆军战术导弹系统(ATACMS) | ◎ | 已停产,被 PrSM 替代 |
| PrSM | 精确打击导弹(PrSM) | ○ | 洛马生产,目标 400 枚/年,2026 对伊战中消耗 40-70 枚 |
| GMLRS | 制导多管火箭炮弹(GMLRS) | ○ | 海马斯/MLRS 用制导火箭弹 |
| HIMARS | 海马斯(高机动性火箭炮系统) | ◎ | 官方媒体通用"海马斯" |
| NSM | 海军打击导弹(NSM) | ○ | 挪威康斯伯格+雷神 |
| LRASM | 远程反舰导弹(LRASM) | ○ | AGM-158C |
| JDAM | 联合直接攻击弹药(JDAM) | ◎ | 制导炸弹套件 |
| GBU-57 MOP | GBU-57 巨型钻地弹(MOP) | ○ | "碉堡克星"级钻地弹 |
| MALD | 微型空射诱饵(MALD) | ○ | 诱饵/干扰弹 |
| APKWS | 先进精确杀伤武器系统(APKWS) | ○ | 70mm 激光制导火箭弹 |
| Javelin | "标枪"反坦克导弹 | ◎ | - |
| Stinger | "毒刺"便携式防空导弹 | ◎ | - |
| MK-48 | Mk-48 重型鱼雷 | ○ | 美潜艇主战鱼雷 |
| ESSM | 改进型"海麻雀"导弹(ESSM) | ○ | 舰载防空 |
| CCA | 协同作战飞机 | ○ | Collaborative Combat Aircraft,无人机僚机概念 |
| VLS | 垂直发射系统 | ◎ | - |
| MQ-9 / RQ-4 / MQ-4C / MQ-25 | "死神" / "全球鹰" / "人鱼海神" / "黄貂鱼"(无人机) | ◎ | 前两者官方媒体常见,后两者学界媒体通行 |
| P-8A | P-8A"海神"巡逻机 | ◎ | - |
| F-35 | F-35"闪电II" | ◎ | 含 A/B/C 型;注意区分"任务执行率(MC 口径)"与"完全任务能力(FMC 口径)" |
| F-22 | F-22"猛禽" | ◎ | - |
| B-52 / B-52J | B-52"同温层堡垒" / B-52J | ◎ | B-52J 为雷达换装后的新编号(AN/APG-79B 有源相控阵) |
| E-130J | E-130J"凤凰II"核指挥机 | ○ | 替代 E-6B"水星",俗称"末日飞机"(doomsday plane),GAO 评估延期约 1 年 |
| E-6B / E-4B | E-6B"水星"核指挥机 / E-4B 国家空中指挥机 | ○ | "末日飞机"家族,TACAMO 任务 |
| B-21 | B-21"突袭者"轰炸机 | ◎ | - |
| Virginia 级 / USS Idaho | 弗吉尼亚级核潜艇 / "爱达荷"号(SSN-799) | ◎ | 舰名按音译+引号 |
| 155mm | 155 毫米炮弹 | ◎ | 含 M795/M107 等弹种;2026-03 月产 3.6 万发(目标 10 万) |
| A-10 "疣猪" Thunderbolt II | A-10"疣猪"雷电II攻击机 | ◎ | 2026 多次延期:原定 2026-10 退役→延至 2030;本文(TWZ 2026-06-15)为其延期论证 |
| F/A-18 | F/A-18"大黄蜂"战斗攻击机 | ◎ | 含 A/B/C/D/E/F 型;TOPGUN 武器学校平台 |
| F-15E | F-15E"攻击鹰"战斗轰炸机 | ◎ | 双座双重任务型 |
| F-47 | F-47 第六代战斗机 | ○ | 拟替代 F-22,预计 2030 年代中期交付 |


| V-22 Osprey | V-22"鱼鹰"倾转旋翼机 | ◎ | 含 MV-22/CV-22 改型;词库已有 MV-75,补 V-22 本体 |
| A-10 Thunderbolt II | A-10"雷电II"攻击机 | ◎ | 昵称"疣猪"(Warthog);"桑迪"(Sandy)战斗搜救任务主力 |
| AC-130J Ghostrider | AC-130J"幽灵骑士"炮艇机 | ○ | 改装 AESA 雷达+AGM-190A 小型巡航导弹 |
| F/A-XX | F/A-XX 第六代舰载战斗机 | △ | 美海军下一代舰载机,波音/诺格竞标,2026-08 定标 |
| Su-57 / Su-57D | 苏-57"重罪犯"(Felon) | ◎ | 俄五代机;双座型 Su-57D 于 2026-05 首飞 |
| JDAM LR | 远程联合直接攻击弹药(JDAM LR) | △ | JDAM 增程改型,带翼+动力,射程数百英里;词条 JDAM 已存在 |
| OA-1K Skyraider II | OA-1K"空中袭击者II" | △ | AFSOC 轻型攻击机,沿袭 A-1"天袭者"名号 |
| C-146 Wolfhound | C-146"狼犬"运输机 | △ | AFSOC 特种作战运输机 |
| Dornier Do-328 | 道尼尔 Do-328 | ○ | C-146 的民用原型 |
| Barracuda-500M | 梭鱼-500M 巡航导弹 | △ | 安杜里尔陆射型,美陆军三年框架采购 |
| RAIVEN | RAIVEN 智能传感器 | △ | RTX/雷神新一代 EO/IR 凝视型传感器,保留英文 |
| BlitzBox | BlitzBox 集装箱式无人机发射系统 | △ | DZYNE 公司,最大可发射 100 架 |
| Blitz | Blitz 无人机 | △ | DZYNE 低成本消耗性无人机 |
| Merops | Merops 反无人机截击机 | △ | Perennial Autonomy,原型为乌克兰战场开发 |
| Bumblebee | 大黄蜂(Bumblebee)四旋翼无人机 | △ | Perennial 反无人机系统;勿与 F/A-18"大黄蜂"混 |
| Hornet (Perennial) | 马蜂(Hornet)中程打击无人机 | △ | Perennial 反无人机系统 |
| YFQ-44A | YFQ-44A"狂怒"(Fury) | △ | 安杜里尔 CCA 协同作战飞机 |
| AGM-190A (SCM) | AGM-190A"浩劫之矛"小型巡航导弹 | △ | SOCOM+莱多斯,AC-130J 集成测试 |
| Low Cost Interceptor (LCI) | 低成本拦截弹(LCI) | △ | 美陆军新拦截弹项目,目标单价低于 100 万美元 |
| Freedom Trainer | "自由"教练机 | △ | SNC 竞标美海军教练机 |
| FCLP | 陆上航母着舰练习(FCLP) | ○ | 舰载机岸基着舰训练 |
| UJTS | 初级喷气训练系统(UJTS) | △ | 美海军本科喷气训练系统 |
| NMESIS | 海军-海军陆战队远征舰船拦截系统(NMESIS) | ○ | 陆战队岸基反舰导弹系统 |
| Ghost Fleet Overlord | "幽灵舰队霸主"计划 | △ | 美海军无人水面舰计划 |
| Sea Hunter | "海上猎手"号 | ○ | 美海军无人反潜巡逻舰 |
| MADIS | 海军陆战队防空综合系统(MADIS) | △ | Marine Air Defense Integrated System |
| SDV | 蛙人输送艇(SDV) | ○ | SEAL Delivery Vehicle |
| UUV | 无人潜航器(UUV) | ◎ | 水下无人系统统称 |
| ASBM | 反舰弹道导弹(ASBM) | ◎ | - |
| SRBM | 短程弹道导弹(SRBM) | ◎ | 通常指最大射程低于约 620 英里(998 公里) |
| CRBM | 近程弹道导弹(CRBM) | ○ | - |
| ABT | 吸气式威胁(ABT) | △ | air-breathing threat,如巡航导弹/无人机 |
| Eurofighter Typhoon | 欧洲战斗机"台风" | ◎ | 德国第四批(Tranche 4)2026-05 亮相 |
| Rafale | "阵风"战斗机 | ◎ | - |
| Gripen | "鹰狮"战斗机 | ◎ | - |
| Meteor | "流星"空空导弹 | ◎ | 欧洲超视距空空导弹 |
| Exocet | "飞鱼"反舰导弹 | ◎ | MM40 型 |
| RBS 15 | RBS 15 反舰导弹 | ○ | 萨博 |
| Torped 47 | Torped 47 轻型鱼雷 | △ | 萨博 |
| Sea Giraffe 1X | "海长颈鹿1X"雷达 | △ | 萨博;亦作"长颈鹿G1X" |
| Trackfire | Trackfire 遥控武器站 | △ | 萨博 |
| Bofors 57mm | 博福斯57毫米舰炮 | ○ | BAE 博福斯 |
| OTO 76mm | 奥托76毫米舰炮 | ○ | 意大利 |
| CIWS | 近防武器系统(CIWS) | ◎ | - |
| RIM-116 RAM | RIM-116"拉姆"近程导弹 | ○ | - |
| CAMM-ER | CAMM-ER 增程防空导弹 | △ | 通用防空模块化导弹增程型 |
| GlobalEye | 萨博"全球之眼"预警机 | ○ | - |
| AWACS | 预警机(AWACS) | ◎ | 含 E-3"哨兵" |
| Stryker | "斯特赖克"装甲车 | ◎ | - |
| SDB | 小直径炸弹(SDB) | ○ | GBU-39/B |
| GBU-53/B (SDB II) | "风暴破坏者"(GBU-53/B) | ○ | SDB II |
| Aegis Baseline 9 | "宙斯盾"基线9 | ○ | 一体化防空反导能力升级 |
| ODIN (laser) | ODIN 舰载激光眩目武器 | ○ | Optical Dazzling Interdictor, Navy |
| SSL | 舰载固态激光器(SSL) | ○ | - |
| SB-MTI | 天基移动目标指示(SB-MTI) | △ | 美太空军新任务 |
| LVC | 实况-虚拟-构造(LVC)训练 | ○ | - |
| FAC-A | 空中前进空中控制(FAC-A) | ○ | - |
| ANGLICO | 空中-海军炮火联络(ANGLICO) | ○ | 陆战队火力协调组 |
| Blue Line | "蓝线" | ◎ | 黎以停火线 |
| GIUK Gap | GIUK缺口 | ○ | 格陵兰-冰岛-英国反潜屏障 |
| AOR | 责任区(AOR) | ○ | Area of Responsibility |
| FIAC | 快速近岸攻击艇(FIAC) | ○ | - |
| CUAS | 反无人机系统(CUAS) | ○ | - |
| CRADA | 合作研发协议(CRADA) | ○ | - |
| SRM | 固体火箭发动机(SRM) | ◎ | - |
| EMD | 工程与制造开发(EMD) | ○ | 采办阶段 |
| RDT&E | 研究、开发、测试与评估(RDT&E) | ○ | 预算科目 |
| IAMD | 一体化防空反导(IAMD) | ○ | - |
| CADDS | "集装箱化自主无人机投送系统"(CADDS) | △ | DIU 招标项目 |
| Project Eagle | "鹰计划"(Project Eagle) | △ | Perennial 前身,埃里克·施密特创立 |
| Task Force ODIN | "奥丁"特遣队 | ○ | 观察、探测、识别与摧毁 |
| Task Force Scorpion Strike | "天蝎打击"特遣队 | △ | 美海军特遣队 |
| Low-Cost Uncrewed Combat Attack System | 低成本无人作战攻击系统 | △ | 亦拼作 Unmanned;SpektreWorks 等制造 |
| Purple Rhombus | 紫菱公司(Purple Rhombus) | △ | 美防务初创企业 |
| Scorpio 1000 | 天蝎座1000 | △ | XTEND 轻型无人机 |
| Tactically Responsive Space | 战术响应太空 | ○ | 快速响应太空能力 |
| Nacelle Improvement (NI) | 短舱改进计划(NI) | △ | V-22 战备升级 |
| Balikatan | "肩并肩"演习 | ◎ | 美菲年度联合演习 |
| Project Quadriga | "四马战车"计划 | △ | 德采购38架欧洲战斗机第四批 |
| Chunmoo | "天舞"(Chunmoo)多管火箭炮 | △ | 韩华 K239 |
| CA-1 Europa | CA-1"欧罗巴"无人机 | △ | 赫尔辛 |
| FRS | 舰队换装中队(FRS) | ○ | Fleet Replacement Squadron |
| C-130 | C-130"大力神"运输机 | ◎ | 含 C-130J 等改型 |
| MQ-1C | MQ-1C"灰鹰"无人机 | ○ | 与 MQ-1"捕食者"相关但不同 |
| MQ-1 | MQ-1"捕食者"无人机 | ◎ | 词库已有 MQ-9 家族,补 MQ-1 本体 |
| HADES | 高精度探测与利用系统(HADES) | △ | 美陆军下一代侦察机,基于庞巴迪"环球快车",代号 ME-11B |
| NGAD | 下一代空中优势(NGAD) | ○ | F-47 所属计划,波音/洛马验证机 |
| Boxer | "拳师犬"(Boxer)8×8 轮式装甲输送车 | ○ | 德国 KNDS 生产 |
| Corsair (USV) | "海盗"(Corsair)无人水面艇 | △ | 美海军中东无人机特遣部队使用 |
| BACN | 战场机载通信节点(BACN) | ○ | E-11A 飞机搭载 |
| CGN-9 | "长滩"号(CGN-9)核动力导弹巡洋舰 | ◎ | 美海军,已退役 |
| SSN 788 | "科罗拉多"号(SSN 788) | ◎ | 弗吉尼亚级核潜艇 |
| MRGG-A | MK24 中程气动步枪(MRGG-A) | △ | SOCOM 列装 |
| AMARG | 第309航空航天维修与再生大队(AMARG) | △ | 戴维斯-蒙森"飞机坟场" |
| VMA-223 | 第223陆战队攻击中队(VMA-223) | ○ | 最后一个鹞式中队 |
| Starlink | "星链"(Starlink)卫星互联网 | ○ | 军事通信语境高频(俄乌/美军) |
| SIGINT | 信号情报(SIGINT) | ◎ | 军事情报术语 |
| Joint Expeditionary Force | 联合远征军(JEF) | ○ | 同 JEF 词条 |
| MGCS | 地面主战系统(MGCS) | ○ | Main Ground Combat System,法德下一代主战坦克项目 |
| Leclerc | "勒克莱尔"主战坦克 | ◎ | 法国现役主战坦克(AMX-56),KNDS 提出替代方案 |
| ASCALON | ASCALON 火炮 | △ | 法国下一代坦克火炮方案(120mm);保留英文,待核 |
| Storm Shadow | "风暴阴影"巡航导弹 | ◎ | MBDA 英法空射巡航导弹;英军称 Shadow Storm |
| MARTE | 欧洲主装甲坦克(MARTE) | △ | Main Armoured Tank for Europe,欧洲下一代坦克项目;单一来源 |
| FCAS | 未来空中作战系统(FCAS) | ○ | 法德西第六代战机项目 |
| Hivemind | Hivemind 蜂群智能软件 | △ | Shield AI 自主飞行软件;保留英文 |
| Loras | "洛拉斯"自行榴弹炮 | △ | KNDS 58倍径155mm自行榴弹炮,射程60公里;本表拟译 |
| Capint | 过渡能力坦克(Capint) | △ | KNDS 概念:法国炮塔+豹2车体;保留英文 |
| PzH 2000 | PzH 2000 自行榴弹炮 | ◎ | 德国155mm自行榴弹炮 |
| ERCA | 增程火炮计划(ERCA) | ○ | Extended Range Cannon Artillery,美陆军 |
| MdCN / MdCT | MdCN 海军巡航导弹 / MdCT 陆基巡航导弹 | ○ | MBDA 法制巡航导弹,陆基型支撑欧洲远程打击方案 |
| ELSA | 欧洲远程打击方案(ELSA) | △ | European Long-range Strike Approach;单一来源 |
| X-BAT | X-BAT 自主无人机 | △ | Shield AI 产品,原 V-BAT 改型;波兰拟产 |
| FV-014 | FV-014 巡飞弹 | △ | 莱茵金属20英尺集装箱发射巡飞弹概念 |
| Shahed / Shahed-136 | 沙赫德-136 自杀式无人机 | ○ | 伊朗见证者系列无人机;俄称 Geran-2"天竺葵" |
| LUCAS | 低成本无人作战攻击系统(LUCAS) | △ | Low-Cost Unmanned Combat Attack System,美国防部低成本无人机项目 |
| Burevestnik | 海燕(Burevestnik) | ○ | 俄核动力巡航导弹;北约代号 SSC-X-9 Skyfall"天落" |
| Kinzhal | 匕首(Kinzhal) | ◎ | 俄空射高超音速导弹 |
| T-90M | T-90M 主战坦克 | ○ | 俄军现役主战坦克改进型 |
| Tu-95MS | 图-95MS"熊-H" | ○ | 俄战略轰炸机;北约代号 Bear-H |
| Tu-160 | 图-160"海盗旗" | ○ | 俄战略轰炸机;北约代号 Blackjack |
| Tu-22M3 | 图-22M3"逆火-C" | ○ | 俄中程轰炸机;北约代号 Backfire-C |
| CH-47 Chinook | CH-47"奇努克"运输直升机 | ◎ | 美波音重型运输直升机 |
| UH-60 Blackhawk | UH-60"黑鹰"通用直升机 | ◎ | 美西科斯基通用直升机 |
| GCAP | 全球作战空中计划(GCAP) | ○ | Global Combat Air Programme,英日意六代机项目 |
| Tempest | 暴风(Tempest) | ○ | 英六代机项目,后并入 GCAP |
| AS9 | AS9"猎人"自行榴弹炮 | △ | 韩华澳产 155mm 自行榴弹炮 |
| AS21 | AS21"红背蜘蛛"步兵战车 | △ | 韩华澳产步兵战车 |
| AS10 | AS10 装甲弹药补给车 | △ | 韩华澳产装甲补给车 |
| M1150 | M1150 突击破障车 | ○ | 美"艾布拉姆斯"底盘破障车 |
| M1074 | M1074 联合突击桥 | ○ | 美装甲架桥车 |
| M88A2 | M88A2"大力神"装甲抢救车 | ○ | 美装甲抢修车 |
| ASLAV | ASLAV 轮式装甲车 | ○ | 澳产 LAV 改型 |
| Spyder | 蜘蛛(Spyder)防空系统 | ○ | 以色列拉斐尔中程防空系统 |
| Derby | 德比(Derby)空空导弹 | ○ | 以色列拉斐尔中程空空导弹 |
| Python | 怪蛇(Python)空空导弹 | ○ | 以色列拉斐尔近程空空导弹 |
| MMR | MMR 多任务雷达 | △ | 以色列 ELTA 雷达,Spyder 系统配套 |
| MICA | 米卡(MICA)空空导弹 | ○ | 法 MBDA 空空导弹 |
| Magic 2 | 魔术2(Magic 2)空空导弹 | ○ | 法近程空空导弹 |
| AASM-250 Hammer | AASM-250"铁锤"制导炸弹 | ○ | 法模块化空对地制导武器 |
| HAVA SOJ | HAVA 防区外干扰机 | △ | 土耳其电子战机项目 |
| Borsuk | 獾(Borsuk)步兵战车 | △ | 波兰履带式步兵战车 |
| Krab | 蟹(Krab)自行榴弹炮 | ○ | 波兰 155mm 自行榴弹炮 |
| Homar-K | Homar-K 多管火箭炮 | △ | 波兰"海马斯"改型 |
| Rak | 小龙虾(Rak)自行迫击炮 | △ | 波兰 120mm 自行迫击炮 |
| Kizilelma | 红苹果(Kizilelma) | △ | 土耳其 Baykar 隐形无人机 |
| Bayraktar | 拜拉克塔尔(Bayraktar) | ○ | 土耳其 Baykar 无人机品牌/产品系名(TB2/Akıncı/Kızılelma/K2 等均冠此名),本义"旗手";亦译"巴伊拉克塔尔",媒体或意译"旗手";首现建议注原文,勿与 Akıncı 混淆 |
| Hurjet | 胡尔杰特(Hurjet) | △ | 土耳其 TAI 高级教练机/轻型攻击机 |
| Prisma | Prisma 作战软件 | △ | 乌克兰 AI 辅助无人机作战平台 |
| VC-25A/B | VC-25A/B"空军一号" | ◎ | 美总统专机 |
| P1-Sun | P1-Sun FPV 拦截无人机 | △ | 乌克兰反无人机型号 |
| AARGM-ER | AGM-88G先进反辐射导弹增程型(AARGM-ER) | ○ | AGM-88E先进反辐射导弹(AARGM)增程型;海军新RFI寻求等效替代源 |
| RAACM-ER | 快速适配经济型巡航导弹-增程型(RAACM-ER) | △ | CoAspire公司开发;亦译"快速适配低成本巡航导弹-增程型";美海军2026-07选定用于盟国武装项目 |
| RAACM | 快速适配经济型巡航导弹(RAACM) | △ | 美海军项目名;RAACM-ER为其增程型 |
| LCCM | 低成本集装箱化导弹(LCCM) | △ | 美陆军项目;GHOST为其水面发射型号 |
| AESM | 先进辐射抑制导弹(AESM) | △ | Advanced Emission Suppression Missile;NAVAIR 2026-07 RFI,年产能600枚 |
| IRCPS | 中程常规快速打击(IRCPS) | ○ | 美海军高超音速导弹,朱姆沃尔特级搭载 |
| GEM-T | 爱国者GEM-T导弹 | ○ | 制导增强型导弹-战术型(PAC-2 GEM-T);欧洲MBDA-雷神联合工厂制造 |
| JLTV | 联合轻型战术车辆(JLTV) | ○ | 取代悍马;AMP-HEL高能激光项目测试平台 |
| MRTT | A330多用途加油运输机(MRTT) | ○ | 空客;北约/多国联合运营 |
| KC-135 | KC-135加油机 | ○ | 波音,美空军主力加油机 |
| KC-46 | KC-46"飞马座"加油机 | ○ | 波音,替代KC-135 |
| MH-60S | MH-60S"海鹰"直升机 | ○ | 美海军舰载直升机 |
| VH-92A | VH-92A"爱国者"总统直升机 | ○ | 2026-08-19交付第23架(末架),替代VH-3D/VH-60N |
| EA-37B | EA-37B"罗盘呼叫"电子战机 | ○ | 替代EC-130H;美军电子战飞机 |
| DF-17 | 东风-17 | ◎ | 中国高超音速弹道导弹 |
| JL-2 | 巨浪-2 | ◎ | 中国潜射弹道导弹 |
| JL-3 | 巨浪-3 | ◎ | 中国新一代潜射弹道导弹,096型搭载 |
| CSS-4 | 东风-5(CSS-4) | ○ | 中国洲际弹道导弹北约代号 |
| XQ-58 | XQ-58"女武神"(Valkyrie) | ○ | 克拉托斯CCA候选机型 |
| Valkyrie | "女武神"(XQ-58 Valkyrie) | ○ | 克拉托斯CCA;见XQ-58 |
| Typhon | "堤丰"中程导弹系统 | ○ | 美陆军陆基中导,2025年部署日本;含"标准-6"/"战斧" |
| KAAN | "卡安"(KAAN) | △ | 土耳其第五代战斗机 |
| Zircon | "锆石"高超音速导弹 | ○ | 俄海军高超音速反舰导弹 |
| one-way attack UAV (OWA UAV) | 单程攻击无人机 | ○ | 与导弹搭配用于压垮防御的低成本消耗性系统;IISS 2026 威胁评估用语。依据:军事媒体通用"单程攻击无人机/自杀式无人机" |
| boosted hypersonic weapons | 助推式高超音速武器 | ○ | 美 DIA 分类用语:气动弹道导弹+HGV 统称(与通常"高超音速武器"分类不同);IISS 2026-06 辨析。暂无国内定译 |
| quasi-ballistic missile | 气动弹道导弹 | ○ | 弹道导弹与 HGV 之间的过渡类型,如俄"锆石";国内军事媒体有"类弹道导弹"译法,词库取"气动弹道" |
| Avangard | 先锋(Avangard)高超音速助推滑翔系统 | ◎ | 俄 HGV 核投送系统,RS-SS-19"匕首"改4型过渡搭载;国内媒体通用"先锋" |
| Sarmat (RS-28) | 萨尔马特(RS-28)洲际弹道导弹 | ◎ | 俄下一代重型 ICBM;国内媒体通用"萨尔马特" |
| Taepodong-2 | 大浦洞-2弹道导弹 | ◎ | 朝 ICBM;国内媒体通用 |
| Blackbeard | "黑胡子"(Blackbeard)气动弹道导弹 | △ | 美低成本气动弹道导弹计划(2026 军购 12,000 枚);本表拟译,暂无中文实例 |
| DF-27 | 东风-27(DF-27) | ◎ | 中方弹道导弹,美评估可打击夏威夷/阿拉斯加/美本土西北部;国内称"东风-27"(未官方公布) |
| DF-61 | 东风-61(DF-61) | △ | 中方新 ICBM(可能搭载 HGV),2026 IISS 评估提及;国内无公开定译 |
| H-6N | 轰-6N 轰炸机 | ◎ | 中远程导弹空射平台;国内媒体通用 |
| sensor-to-shooter timeline | "传感器到射手"时间线 | ○ | AI 压缩杀伤链时间线、收窄人类决策窗口;IISS 2026-06 军事 AI 分析用语。依据:国内军媒有"发现即摧毁"类表述,直译可用 |
| SCALP | "斯卡普"(SCALP)巡航导弹 | ○ | 英称"斯卡普",法称"风暴阴影"(Storm Shadow) |
| HARM | AGM-88"哈姆"反辐射导弹 | ○ | 高速反辐射导弹;AARGM/AARGM-ER为其后继 |
| DRPM-UxS | 无人系统直接报告组合经理(DRPM-UxS) | △ | Direct Reporting Program Manager for Uncrewed Systems;五角大楼无人系统采办主管机构 |
| J-XDS | J-XDS重型第六代隐身战斗机 | △ | 中国六代机,可偏转翼尖设计 |
| CALF | 通用廉价轻型战斗机(CALF) | △ | Common Affordable Lightweight Fighter;洛克希德·马丁JSF前身方案 |
| GPN | 全球定位网络(GPN) | △ | Global Positioning Network;美国海军陆战队前沿预置装备与补给体系 |
| TLAM | "战斧"对陆攻击导弹(TLAM) | ○ | 词库已有Tomahawk战斧,此为缩写补录 |
| MRBM | 中程弹道导弹(MRBM) | ○ | - |
| IRBM | 中远程弹道导弹(IRBM) | ○ | - |
| ICBM | 洲际弹道导弹(ICBM) | ◎ | - |
| MANPADS | 单兵便携式防空导弹(MANPADS) | ◎ | - |
| SHORAD | 近程防空(SHORAD) | ○ | - |
| GBAD | 地面防空(GBAD) | ○ | - |
| IED | 简易爆炸装置(IED) | ◎ | - |
| PFM-1 | PFM-1"蝴蝶雷" | ○ | 苏制人员杀伤地雷 |
| GAU-8 | GAU-8"复仇者"机炮 | ○ | A-10攻击机主炮,30mm |
| UH-1Y | UH-1Y"毒液"直升机 | ○ | 贝尔,陆战队通用直升机 |
| AH-1Z | AH-1Z"蝰蛇"直升机 | ○ | 贝尔,陆战队武装直升机 |
| VH-3D | VH-3D"海王"总统直升机 | ○ | 被VH-92A取代 |
| CATOBAR | 弹射起飞拦阻降落(CATOBAR) | ○ | 航母起降方式 |
| STOBAR | 短距起飞拦阻降落(STOBAR) | ○ | 航母起降方式 |
| STOVL | 短距起飞垂直降落(STOVL) | ○ | F-35B等 |
| VTOL | 垂直起降(VTOL) | ○ | - |
| BLOS | 超视距(BLOS) | ○ | - |
| ESM | 电子支援措施(ESM) | ○ | 被动电子侦察 |
| WSO | 武器系统军官(WSO) | ○ | F-15EX/F-15E后座 |
| LAD | 大面积显示器(LAD) | △ | F-15EX/台风座舱大屏 |
| ACP | 自主协同平台(ACP) | △ | 英国"征服者"(Project Vanquish)项目,与CCA等同 |
| SO-MP | 单操作员多平台(SO-MP) | △ | 蜂群作战现状描述;Single Operator, Multi-Platform |
| UMCADS | 通用海上装备空投系统(UMCADS) | △ | Capewell公司;伞降投放无人艇入海 |
| FALCO | 固定翼、空射、反无人航空系统弹药(FALCO) | △ | AGR-20F;激光制导70mm火箭弹改型 |
| FE-1 | "自由鹰-1"(FE-1) | △ | AeroVironment反无人机导弹,美陆军2025年选中 |
| AHEAD | 先进命中效率与摧毁(AHEAD)弹药 | △ | 厄利孔可编程空爆弹药,反无人机 |
| GDF-006 | GDF-006型"天卫"高炮 | ○ | 厄利孔35mm高炮,台湾空军装备约24套 |
| HELIOS | HELIOS舰载高能激光 | ○ | 洛克希德·马丁60kW激光武器 |
| MRIC | 中程拦截能力(MRIC) | △ | 陆战队陆基防空项目 |
| MRSS | 多用途支援舰(MRSS) | △ | 英海军新一代支援舰 |
| CHAOS | 联盟异构低成本进攻性打击(CHAOS) | △ | 美海军项目;Coalition Heterogeneous Affordable Offensive Strike |
| SPINE | 下一代效应结构与动力改进(SPINE) | △ | 贝尔H-1机队升级项目 |
| BYMP | 船厂现代化改造期(BYMP) | △ | Build Yard Modernization Period;朱姆沃尔特级改造 |
| VCM | 舰船建造管理(VCM) | △ | Vessel Construction Management;TOTE公司获中型登陆舰(LSM)22亿美元合同 |
| MRIV | 导弹靶场测量船(MRIV) | △ | 替代"太平洋跟踪者"/"太平洋收集者"号 |
| VPM | 弗吉尼亚级载荷模块(VPM) | ○ | 弗吉尼亚级核潜艇导弹发射管模块 |
| SSGN | 巡航导弹核潜艇(SSGN) | ○ | - |
| SSBN | 弹道导弹核潜艇(SSBN) | ○ | - |
| UGV | 无人地面车辆(UGV) | ○ | - |
| UCAV | 无人作战飞机(UCAV) | ○ | - |
| UxS | 无人系统(UxS) | △ | 美军通用缩写 |
| LRIP | 低速初始生产(LRIP) | ○ | 采办阶段 |
| LRS-B | 远程打击轰炸机(LRS-B) | △ | B-21前身项目名 |
| MEU | 海军陆战队远征部队(MEU) | ○ | - |
| MEF | 海军陆战队远征军(MEF) | ○ | - |
| MPS | 海上预置船(MPS) | ○ | - |
| OTHR | 超视距雷达(OTHR) | ○ | - |
| JORN | 金达利超视距雷达(JORN) | ○ | 澳大利亚 |
| SOSUS | 声呐监听系统(SOSUS) | ○ | 海底水听器阵列 |
| RSGS | 地球同步卫星机器人服务(RSGS) | △ | 诺格/海军研究实验室在轨服务项目 |
| MRV | 任务机器人飞行器(MRV) | △ | 诺格在轨服务航天器,双机械臂 |
| MEP | 任务扩展吊舱(MEP) | △ | 诺格卫星延寿吊舱 |
| AWOTF | 未来舰载机联队(AWOTF) | △ | 美海军RFI;Air Wing of the Future |
| UCLASS | 无人舰载发射空中监视与打击(UCLASS) | △ | 已终止的美海军舰载无人机项目 |
| HCE | 高度对抗环境(HCE) | △ | - |
| Dark Merlin | "暗夜游隼"(Dark Merlin) | △ | 通用原子YFQ-42A CCA;亦译"暗黑梅林",译名未统一 |
| YFQ-42A | YFQ-42A | △ | 通用原子CCA机型,见Dark Merlin;与安杜里尔YFQ-44A"狂怒"并列 |
| Gambit | "赌注"(Gambit)无人机 | △ | 通用原子;英皇家海军MQ-20系列 |
| Mojave | "莫哈韦"(Mojave)无人机 | △ | 通用原子短距起降无人机 |
| Marauder | "掠夺者"(Marauder)无人艇 | △ | 萨罗尼克(Saronic)公司180英尺无人艇 |
| Triton | MQ-4C"人鱼海神"(Triton) | ○ | 诺格高空长航时无人侦察机 |
| Poseidon | P-8"波塞冬"(Poseidon) | ○ | 波音反潜巡逻机 |
| HSC | 直升机海上作战中队(HSC) | ○ | 美海军中队编号 |
| CVW | 舰载机联队(CVW) | ○ | - |
| CSG | 航母打击群(CSG) | ○ | - |
| CVN | 核动力航母(CVN) | ○ | - |
| DESRON | 驱逐舰中队(DESRON) | ○ | - |
| F/A-18E/F Super Hornet | F/A-18"超级大黄蜂" | ◎ | 美海军主力舰载战斗机;词库已有F/A-18相关词条,此为E/F型全称 |

| K3 SCOUT | K3 SCOUT无人水面艇 | △ | Kraken公司;UMCADS空投试验用艇 |
| LADRS | 步枪控制无人机系统(LADRS) | △ | PYRRHUS航空公司;士兵用步枪操控无人机 |
| PYRRHUS | PYRRHUS航空公司 | △ | LADRS系统开发商 |

| Cenk | 坚克(Cenk) | △ | 土耳其洛克桑中程弹道导弹,2023-05 首公开,设计目标射程约2000km,弹道大部分在大气层外;国内无定译,本表拟译。依据:IISS《土耳其的导弹奥德赛》(2026-04);勿音译"沉"(2026-08-29 128批质检) |
| Bora–Tayfun family | 博拉-泰丰导弹家族 | △ | 土耳其洛克桑弹道导弹家族(气动弹道式,飞行大部分在大气层内);国内无定译,本表拟译。依据:IISS《土耳其的导弹奥德赛》(2026-04) |
| Tayfun | 泰丰(Tayfun) | △ | 博拉-泰丰家族成员,Block IV(2025-07 亮相)为家族最大最重型号,尺寸与1000km级相符;本表拟译。依据:同上 |
| Gezgin | 格兹金(Gezgin) | △ | 土耳其对陆攻击巡航导弹,TUBITAK SAGE 主承包,目标射程1000km+,发射重量1200kg+,长6米+,首平台为Type-214雷斯级潜艇;本表拟译。依据:同上 |
| SOM | SOM 对陆攻击巡航导弹 | △ | 洛克桑产品,土耳其 F-16 搭载;本表拟译。依据:同上 |
| Özgür (F-16C Block 30) | F-16C Block 30"厄兹居尔" | △ | 土耳其空军 F-16 现代化改型名;本表拟译。依据:同上 |
| ASN4G | ASN4G 空射核导弹 | △ | 法国第四代空射核导弹(高超音速),2030年代中装备战略空军阵风F5;国内无定译,本表拟译。依据:IISS《法国的核威慑力量向东扩张》(2026-03) |
| M51 | M51 潜射弹道导弹 | △ | 法国现役潜射弹道导弹,M51.3 射程约1万公里,后续型号 M51.4;本表拟译。依据:同上 |
| TNO-2 | TNO-2 海基核弹头 | △ | 法国第二代海基核弹头(海洋核弹头-2),由核防御"模拟"计划生产;本表拟译。依据:同上 |

### 舰船建造与维修
| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| Advanced Arresting Gear (AAG) | 先进拦阻装置(AAG) | ○ | 福特级航母电磁拦阻系统,替代蒸汽拦阻装置;国内军事媒体报道福特号时通行译法 |
| Builder's Sea Trial (BST) | 建造商海试(船厂海试) | ○ | 舰船交付前由船厂主导的试验阶段,与验收海试(Acceptance Trials)相对。依据:"的黎波里"号完成建造商海试、"福特"号航母建造商海试等 |
| Planned Incremental Availability (PIA) | 计划增量可用性(PIA) | ○ | 美海军舰艇维修保养周期术语(航母大修档期)。依据:计划增量可用性维护/维修(PIA) 多处("杜鲁门"号航母等) |
| Southern Seas 2026 | "南方海域2026" | ○ | 美海军第4舰队 2026 年拉美方向年度部署演习代号。依据:"尼米兹"号航母参加"南方海域2026"多处 |


| Constellation-class | 星座级护卫舰 | ○ | FFG-62,芬坎蒂尼马里内特船厂建造 |
| America-class | 美国级两栖攻击舰 | ○ | - |
| Columbia-class | 哥伦比亚级战略核潜艇 | ◎ | 替代俄亥俄级 |
| Seawolf-class | 海狼级攻击核潜艇 | ◎ | - |
| Virginia-class | 弗吉尼亚级攻击核潜艇 | ◎ | - |
| Severodvinsk-class | 北德文斯克级(亚森级) | ○ | 俄攻击核潜艇 |
| Arleigh Burke-class | 阿利伯克级驱逐舰 | ◎ | 美海军主力驱逐舰 |
| LST-100 | 登陆运输舰100(LST-100) | △ | 达门设计,美中型登陆舰基线方案 |
| Visby-class | 维斯比级护卫舰 | ◎ | 瑞典隐身护卫舰 |
| Lulea-class | 吕勒奥级护卫舰 | △ | 瑞典选购法国 FDI 改型 |
| F126 | F126 护卫舰 | △ | 德海军新一代护卫舰,原定取代 F125 |
| MEKO A-200 | MEKO A-200 护卫舰 | ○ | 德 MEKO 系列出口型护卫舰 |
| Tamandaré-class | 塔曼达雷级护卫舰 | ○ | 巴西基于 MEKO A-100 设计国产护卫舰,首舰 2026-04 入役,计划 8 艘;国内无定译,音译 |
| Niterói-class | 尼泰罗伊级护卫舰 | ○ | 巴西 70 年代购英护卫舰,将被塔曼达雷级取代;音译 |
| Scorpène-class | 鲉鱼级潜艇 | ◎ | 法 DCNS 常规潜艇,巴/印/智装备;国内媒体通用 |
| Riachuelo-class | 里亚舒埃卢级潜艇 | ○ | 巴西 PROSUB 计划鲉鱼改型常规潜艇;音译 |
| PROSUB | 法巴潜艇发展计划(PROSUB) | ○ | 巴西-法国潜艇合作计划,含 4 常规+1 核动力潜艇;国内无定译,用计划名+括注 |
| Águas Azuis Consortium | "蓝水"财团(Águas Azuis) | △ | 巴西塔曼达雷级建造联合体(德 TKMS 等参与);本表拟译 |
| Almirante Karam | "卡拉姆海军上将"号(S43) | △ | 巴西第四艘里亚舒埃卢级潜艇;音译 |
| Álvaro Alberto | "阿尔瓦罗·阿尔贝托"号 | △ | 巴西首艘核动力攻击潜艇(计划 2030 年代下水);音译 |
| A26 / Blekinge | A26"布莱金厄"级潜艇 | ○ | 瑞典萨博常规潜艇,波兰订购;首艇名取自瑞典省名 |
| EMALS | 电磁弹射系统(EMALS) | ◎ | 美航母电磁弹射 |
| Le Triomphant-class | 凯旋级弹道导弹核潜艇 | ○ | 法国海基核威慑主力(SSBN),国内媒体通用"凯旋级" |
| Type-214 Reis-class | Type-214"雷斯"级柴电潜艇 | △ | 土耳其潜艇(德214型许可建造),格兹金巡航导弹首个搭载平台;本表拟译。依据:IISS《土耳其的导弹奥德赛》(2026-04) |
| MILDEN | MILDEN 级国产潜艇 | △ | 土耳其国产常规潜艇设计(拟装对陆攻击巡航导弹);本表拟译。依据:同上 |
| TF-2000 | TF-2000 防空驱逐舰 | △ | 土耳其国产防空驱逐舰(拟装对陆攻击巡航导弹);本表拟译。依据:同上 |
| Global Combat Ship | 全球战斗舰 | △ | 英国BAE 26型护卫舰方案,多国/多型通用部件设计;本表拟译。依据:CMS《码头审视》(2026-02) |
| Philly Shipyard | 费城船厂 | △ | 美国费城商用船厂,2025年被韩华收购重振;本表拟译。依据:同上 |
| Valley Forge | "福吉谷"号航母 | △ | 美海军埃塞克斯级航母,朝鲜战争初期在朝鲜半岛唯一美航母;本表拟译。依据:同上 |

### 对伊战争装备与平台
> 来源:2026-08-11 线索翻译批 0312-0323(110 篇,含 TWZ/Defense News/RUSI 等对伊战争、印太、欧洲防务文章)实战积累。分级规则同上。凡国内无成熟译法标 △ 并注明"本表拟译"。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| CM-400AKG | CM-400AKG 超音速反舰/防区外导弹 | ◎ | 中国出口导弹,塞尔维亚米格-29 携载(2026-03 对伊战争背景);国内报道少见,本表拟译。依据:国防部例行记者会回应(塞尔维亚采购 CM-400AKG 属正常军贸合作)+ 搜狗微信多处 |
| KF-21 | KF-21"猎鹰"战斗机 | ○ | 韩国国产四代半/五代过渡战斗机(KAI 研制),2026-03 首架量产机下线;国内媒体通用"KF-21" |
| M1E3 | M1E3 艾布拉姆斯主战坦克 | ○ | 艾布拉姆斯最新升级型号(通用动力),2026-03 宣布明年量产;国内媒体用"M1E3"原文+中文注释 |
| XM8 | XM8 卡宾枪 | ○ | 美军 6.8mm 下一代班用武器项目命名(沿用失败的老 XM8 代号,2026-03 争议);国内军事媒体有报道 |
| MV-75 | MV-75 倾转旋翼机 | ○ | 美陆军下一代倾转旋翼机(贝尔),2026-03 纳入军官训练。依据:美陆军全力推进MV-75项目等多处 |
| EC-2 | EC-2 电子战飞机 | ○ | 日本自卫队基于 C-2 运输机的电子战改型("鸭嘴兽"昵称),2026-03 首飞。依据:日本 EC-2 电子战飞机多处(首次曝光、完成首飞等) |
| E-7A | E-7A"楔尾"预警机 | ◎ | 澳大利亚/北约新一代预警机(波音 737 改);国内媒体已用"楔尾" |
| E-2D | E-2D"鹰眼"预警机 | ◎ | 美海军舰载预警机最新型;官方媒体通用"鹰眼" |
| RQ-180 | RQ-180 隐形无人侦察机 | ○ | 美空军高空长航时隐形侦察无人机(诺格),2026-03 被曝在希腊迫降;国内媒体有报道 |
| MQ-28 | MQ-28"幽灵蝙蝠"无人机 | ○ | 波音"忠诚僚机"型无人机,2026-03 莱茵金属与波音合作入欧;国内媒体通用"幽灵蝙蝠" |
| GBU-72B | GBU-72B 钻地炸弹 | ○ | 美军 5000 磅级新型钻地炸弹(JDAM 家族),2026-03 对伊使用。依据:美军首次实战使用GBU-72钻地炸弹等多处 |
| F-35I | F-35I"阿迪尔" | ○ | 以色列版 F-35 专用型号(Adir,希伯来语"强大");国内军事媒体偶见 |
| F-14 | F-14"雄猫"战斗机 | ◎ | 经典舰载战斗机;2026-03 对伊战争中被毁报道;官方媒体通用"雄猫" |
| Yak-130 | 雅克-130 教练/攻击机 | ◎ | 俄雅克列夫设计局;伊朗购俄版,2026-03 被 F-35 击落(F-35 首次空对空击杀);国内媒体通用"雅克-130" |
| AIM-9X | AIM-9X"响尾蛇"空空导弹 | ◎ | 美海军主战近距格斗弹;2026-03 乌克兰 F-16 仅配少量;官方媒体通用"响尾蛇" |
| Hellfire | 地狱火导弹 | ◎ | 美制空对地导弹(AGM-114 系列);2026-03 洛马集装箱发射器;官方媒体通用"地狱火" |
| Iron Dome | "铁穹"防空系统 | ◎ | 以色列近程防空;2026-03 大众汽车拟产其发动机部件;官方媒体通用"铁穹"(区别于 Golden Dome"金穹") |
| Aster | "紫菀"防空导弹 | ○ | 欧洲 MBDA 系列(SAMP/T 用);2026-03 MBDA 计划产量翻番;国内军事媒体用"紫菀" |
| K2 | K2 单向攻击无人机(Bayraktar K2,亦作 Baykar K2) | ○ | 土耳其 Baykar 公司巡飞弹,2026-03 集群测试;Hudson 专文以 Bayraktar K2 为题。依据:K2 自杀式/远程自杀式无人机(Baykar K2)多处;Hudson《Bayraktar K2: A Strategic Answer to New Rules of the Battlefield》(Can Kasapoglu,2026-03-18) |
| Saab 340 AEW | 萨博 340 预警机 | ○ | 瑞典萨博基于 340 支线机的预警改型;2026-03 乌克兰使用;国内媒体有报道 |
| USV | 无人水面艇(USV) | ◎ | 通用缩略语;2026-03 美海军"黄金舰队"时代新项目;国内媒体通用"无人艇" |
| C-UAS | 反无人机系统(C-UAS) | ○ | 通用缩略语;2026-03 对伊/乌克兰反无人机作战高频出现 |
| CCAs | 协同作战飞机(复数) | ○ | CCA 复数形式,2026-03 Defense News 文章出现 |
| Epic Fury | "史诗狂怒"行动 | ○ | 2026 美对伊军事行动代号(Operation Epic Fury)。依据:《“史诗狂怒”第11天》等多篇(官方媒体用例未见) |
| Basij | 巴斯基民兵 | ○ | 伊朗准军事民兵组织,革命卫队辅助力量,负责国内镇压 |
| MoIS | 情报与安全部(MoIS) | ○ | Ministry of Intelligence and Security,伊朗情报机构 |
| Alvand-class | "阿尔万德"级护卫舰 | ○ | 伊朗英制护卫舰级(原"沃斯珀"级) |
| Jamaran-class | "贾马兰"级轻型护卫舰 | ○ | 伊朗国产驱逐舰级(排水量约1400吨) |
| Aspides | "阿斯皮德斯"行动 | ○ | 欧盟护航霍尔木兹海峡的海军任务(EUNAVFOR Aspides) |
| Twelve-Day War | "十二日战争" | ○ | 2025年6月以色列与伊朗十二天冲突;词库无前例,本表拟译 |
| J-15 | 歼-15舰载战斗机 | ◎ | 中国舰载战斗机,官方媒体通用"歼-15" |
| GJ-21 | "攻击"-21无人作战飞机 | ○ | 中国舰载无人作战飞机(GJ-21),测试中 |
| Type-004 | 004型航母 | ○ | 中国首艘核动力航母(规划中);本表拟译 |
| Wings of Gold | "金翼"徽章 | ○ | 美国海军飞行员飞行徽章昵称 |

---

### 乌克兰无人机战争与无人系统
> 来源:Hudson《Ukraine's Drone War: Rise of Machine-Speed, Adaptive Hyperwar》等无人机战争文章。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| hyperwar | 高速战争(超高速战争) | ○ | USNI 2017 提出;检索核实:中国指挥与控制学会《中美高超音速武器引领高速战争时代》用"高速战争",备选"超高速战争" |
| force-on-force | 兵力对比(正面交锋) | ○ | 军事通用 |
| force-to-space | 兵力空间比 | ○ | 军事通用 |
| Lanchester's laws | 兰彻斯特定律 | ○ | 军事科学经典(作战损耗模型);国内通用 |
| Molniya | 莫尔尼亚无人机 | ○ | 俄军廉价无人机。依据:俄军为莫尔尼亚装指南针、喀琅施塔得公司等多处 |
| Geran | 天竺葵无人机 | ○ | 俄改 Shahed(Geran-2);国内军事媒体有"天竺葵"提法。依据:"天竺葵-2"/"天竺葵-5"多处(含编译《俄罗斯报》《福布斯》) |
| Sea Baby | 海婴无人艇 | ○ | 乌克兰 SBU 无人艇。依据:乌克兰"海婴"无人艇袭击俄舰船、海婴-5 等多处 |
| Magura V7 | 马古拉V7无人艇 | ○ | 乌克兰无人艇;国内军事媒体有"马古拉"提法。依据:马古拉V5/V7,含「马古拉V7」直接用例 |
| Tu-141 Strizh | 图-141"雨燕" | ◎ | 苏联侦察无人机(2022 克罗地亚坠毁事件成名);国内通用 |
| Improved Kilo-class | 基洛级改进型 | ◎ | 俄 636.3 型常规潜艇;国内通用 |
| Neptune | 海王星(导弹) | ◎ | 乌克兰反舰/对陆巡航导弹(R-360);国内媒体通用 |
| Hedgehog 2025 | "刺猬"2025 演习 | ○ | 北约爱沙尼亚演习;国内媒体"刺猬"演习有报道。依据:2025年5月爱沙尼亚北约军演多处 |
| Rubicon | 鲁比孔无人机部队 | ○ | 俄军新无人机部队。依据:俄精锐"鲁比孔"无人机部队多处(另有"卢比孔"异译) |
| Maven Smart System | Maven 智能系统 | ○ | Palantir 战场 AI 系统(区别于美军 Project Maven"梅文计划",已收录)。依据:Palantir Maven 智能系统多处(美防部AI软件系统流程解析等) |

### 后勤保障

> 来源:Marines.mil《MCILE 2026》、Carnegie《Battery Geopolitics》、Brookings 关键矿产、Post-US International 民主支持等文章(2026-08-13 批)。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| Joint Logistics Enterprise | 联合后勤企业 | ○ | 美军通用概念;军媒通用 |

### 2026-08-22 补录(核武器系统)
> 来源:2026-06-17 马克龙核赌博一文(欧洲核威慑相关武器系统)。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| B-61 | B-61 战术核弹(重力炸弹) | ○ | 美战术核重力炸弹,北约核共享投送平台(当前唯一获北约认证的投送平台为 F-35A);国内媒体多作"B-61 核弹/B61 战术核弹",写法未统一 |
| Trident | "三叉戟"(潜射弹道导弹) | ◎ | 英核威慑系统(美制 D5);国内官方媒体通用"三叉戟" |
| ASMPA-R | ASMPA-R 空射核巡航导弹 | △ | 法国"阵风"挂载的核巡航导弹(ASMP-A 改进型);国内无定译,保留英文+说明 |

### 2026-08-23 补录(中国舰载预警机与无人直升机)
> 来源:2026-01-04 南华早报《KJ-600也可以在辽宁舰和山东舰上使用》与《中国"魔鱼剑"攻击直升机将进行高原试验》两文。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| KJ-600 | 空警-600(KJ-600) | ◎ | 中国首款固定翼舰载预警机;官方命名"空警-600",外媒作 KJ-600;可在弹射(福建舰)与滑跃(辽宁舰/山东舰)两类航母上使用 |
| Kuznetsov-class | 库兹涅佐夫级(航母) | ○ | 俄"库兹涅佐夫"级航空母舰;辽宁舰/山东舰系其改进型,外媒称两舰为该级 |
| Moyujian | "魔鱼剑"(Moyujian)无人攻击直升机 | △ | 四川腾盾研制的无人侦察打击直升机;英文名 Moyujian 疑为《水浒传》张清绰号"没羽箭"音译,"魔鱼剑"疑误,本表拟译待核 |

### 2026-08-24 补录(推进技术与两栖装备)
> 来源:质检低分清单点名的翻译文件(乌克兰流星远程空空导弹/西班牙 Indra 两栖战车等文,2026-08-24 词库审计)。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| ramjet | 冲压推进(ramjet) | ○ | 冲压发动机/冲压式喷气推进;与 turbojet(涡喷)、scramjet(超燃冲压)区分;2026-04 乌克兰"流星"空空导弹文使用 |
| ACV | 两栖战斗车(ACV) | ○ | Amphibious Combat Vehicle,美海军陆战队两栖战车(BAE 系统公司,替代 AAV);国内军事媒体用"两栖战斗车" |

## 九、机构、法案与预算制度

### 机构、法案与预算制度
| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| NDAA | 《国防授权法案》 | ◎ | 注意与拨款法案区分;FY2026 NDAA 吸纳 SPEED 法案+FoRGED 法案 |
| authorization | 授权 | ◎ | 立法程序:"授权说'你可以干这件事'",由军事委员会管 |
| appropriation | 拨款 | ◎ | 立法程序:"拨款说'给你钱干这件事'",由拨款委员会管。**授权≠拨款,两套程序**(我文中反复强调的国会分岔点) |
| supplemental appropriation | 补充拨款 | ○ | 如白宫 2026-06-24 请求的 876 亿美元(军事部分 671.5 亿,弹药 210 亿) |
| DPA | 《国防生产法》 | ◎ | Defense Production Act,如 2024-12 战斧发动机 2.537 亿美元无竞标合同 |
| DoD | 美国国防部 / 五角大楼 | ◎ | - |
| DIB | 国防工业基础 | ◎ | 见第一章 |
| GAO | 政府问责局 | ◎ | 美国审计署性质机构 |
| DOWIG | 国防部监察长办公室 | ○ | DoD Office of Inspector General 审计报告编号前缀(如 DOWIG-2026-095,梅斯基特工厂零产出审计) |
| MDA | 导弹防御局 | ◎ | THAAD 采购主管机构,累计拨款 646 枚 |
| Rumsfeld Commission | 拉姆斯菲尔德委员会 | ◎ | 1998 年国会设立两党委员会,评估弹道导弹威胁;其报告促 1999 年《国家导弹防御法》。依据:国内媒体通用"拉姆斯菲尔德委员会" |
| PAFACA | 《保护美国人免受外国对手控制应用程序侵害法》 | ○ | Protecting Americans from Foreign Adversary Controlled Applications Act,2024 年美对 TikTok 法;国内媒体有"不卖就禁"法简称 |
| DMA / DSA | 《数字市场法》/《数字服务法》 | ◎ | 欧盟数字监管双法;国内媒体通用 |
| QMV | 特定多数表决 | ◎ | Qualified Majority Voting,欧盟理事会表决机制(55% 成员国+65% 人口);国内欧洲研究学界通用"特定多数" |
| EU-Israel Association Agreement | 《欧盟—以色列联合协议》 | ○ | 欧盟-以色列贸易优惠协定;西班牙/爱尔兰 2024-02 首倡中止,欧盟委员会 2025-09 提议部分中止。依据:新华社/参考消息报道"联合协议" |
| CRS | 国会研究服务处 | ○ | Congressional Research Service |
| CBO | 国会预算办公室 | ◎ | - |
| House/Senate Armed Services Committees | 众议院/参议院军事委员会 | ◎ | 管授权 |
| Appropriations Committees | 拨款委员会 | ◎ | 管拨款 |
| MYP (multiyear procurement) | 多年采购(授权) | ○ | 如 2024 财年 6 种关键弹药多年采购:NSM、GMLRS、PAC-3 MSE、LRASM、JASSM、AMRAAM |
| FY | 财年 | ◎ | Fiscal Year,FY27=2027 财年 |
| MRO | 维护、修理与大修 | ○ | Maintenance, Repair and Overhaul |
| right to repair | 维修权 | ○ | F-35 维修权之争,航空航天工业协会+美国商会反对 |
| MCR (mission capability rate) | 任务能力率 | ○ | 空军 2024 财年 62%;F-35 约 55%(2023-03,MC 口径) |
| FMC (fully mission capable) | 完全任务能力 | ○ | GAO 口径 F-35 仅约 1/4(38%→25%);**勿与 MCR 混用** |
| in-theater stocks | 战区可用库存 | ○ | "may represent nearly the entirety of available in-theater stocks"→"这一数字可能几乎占战区可用库存的全部" |
| industrial base | (国防)工业基础 | ◎ | - |
| Project Vault | "金库计划" | ○ | 特朗普 2026-02-02 宣布 120 亿美元公私合作战略材料储备;**英文确认是 Project Vault,不是 Gold Vault**。依据:《美国120亿"金库计划"背后》《华盛顿砸下百亿"金库计划"》等 |
| Export-Import Bank | 进出口银行 | ◎ | 100 亿美元贷款为其史上最大单笔 |
| FAMM | 经济型大规模导弹系列(FAMM) | ○ | Family of Affordable Mass Munitions,空军 5 年 28000 枚低成本巡航导弹计划;FAMM-L 挂架型 / FAMM-P 托盘空投型 / FAMM-BAR 远程型。依据:3D打印军工、美空军低成本弹药报道多处 |
| C4ISR | 指挥、控制、通信、计算机、情报、监视与侦察 | ◎ | - |
| wargame | 兵棋推演 | ◎ | 如 WOTR《采购改革需要自己的兵棋推演》 |
| 357th Fighter Squadron | 第357战斗机中队 | ○ | 戴维斯-蒙森基地 A-10 正式训练部队,「桑迪」资格认证大本营;2026-04 送走最后一期学员,原定年内停用 |
| Davis-Monthan AFB | 戴维斯-蒙森空军基地 | ◎ | 亚利桑那州,A-10 训练部队驻地 |
| Sandy (mission/qualification) | 「桑迪」任务 / 「桑迪」资格认证 | ○ | 战斗搜救(CSAR)护航任务代号,源自 A-10 救援文化;TWZ 文称无继任机型与继任资格项目 |
| TOPGUN | 海军战斗机武器学校(TOPGUN) | ◎ | 美国海军空战训练学校,电影《壮志凌云》原型 |
| PACAF | 太平洋空军 | ◎ | Pacific Air Forces,美国空军一级司令部 |
| Operation Noble Eagle | 「贵族之鹰」行动 | ○ | 9·11 后美国本土防空行动,由北美防空司令部/空军国民警卫队执行;本文指夏威夷与关岛防空区 |


| IDIQ | 不确定交付/不确定数量合同(IDIQ) | ○ | 采购术语 |
| SBIR | 小企业创新研究计划(SBIR) | ○ | - |
| DIU | 防务创新单元(DIU) | ○ | Defense Innovation Unit |
| IEEPA | 《国际紧急经济权力法》(IEEPA) | ◎ | - |
| NTSB | 国家运输安全委员会(NTSB) | ◎ | B-52 坠机调查高频 |
| AIPAC | 美以公共事务委员会(AIPAC) | ○ | - |
| USAID | 美国国际开发署(USAID) | ◎ | - |
| DOGE | 政府效率部(DOGE) | ○ | 特朗普政府机构 |
| DEI | 多元、公平与包容(DEI) | ○ | 政策术语 |
| EDF (European Defence Fund) | 欧洲防务基金(EDF) | ○ | - |
| JEF | 联合远征军(JEF) | ○ | 英主导多国部队 |
| JEDI (Europe) | 欧洲联合防务倡议(JEDI) | △ | 欧洲版,勿与美军 JEDI 云项目混淆 |
| OSF | 开放社会基金会(OSF) | ○ | Open Society Foundations |
| Transparency International | 透明国际 | ○ | - |
| Helsing | Helsing 国防 AI 公司 | △ | 德国 |
| GA-ASI | 通用原子能航空系统公司(GA-ASI) | ○ | 无人机/雷达制造商 |
| DGA | 法国武器装备总署(DGA) | ○ | Direction générale de l'armement |
| DFC | 美国国际开发金融公司(DFC) | ○ | U.S. International Development Finance Corporation |
| Office of Strategic Capital | 战略资本办公室(OSC) | ○ | 美国防部机构 |
| Economic Defense Unit | 经济防务局 | △ | 美经济安全机构 |
| JATEC | 北约-乌克兰联合分析、训练与教育中心(JATEC) | △ | NATO-Ukraine Joint Analysis, Training and Education Centre |
| Air Mobility Command | 空中机动司令部(AMC) | ○ | 美军运输航空兵司令部 |
| Rosreserv | 俄联邦物资储备局(Rosreserv) | ○ | 俄国家物资储备机构 |
| PGZ | 波兰军火集团(PGZ) | ○ | Polska Grupa Zbrojeniowa |
| Baykar | 旗手公司(Baykar) | ◎ | 土耳其无人机厂商;"红苹果"开发商;媒体亦音译"拜卡"/"巴伊卡尔";"旗手"本为品牌名 Bayraktar(拜拉克塔尔)之意译,勿移用于 Akıncı 平台(2026-08-29 128批质检) |
| Aselsan | 阿塞尔桑(Aselsan) | ◎ | 土耳其防务电子企业 |
| TAI | 土耳其航空航天工业公司(TAI) | ◎ | Turkish Aerospace Industries |
| OHB | OHB 航天公司 | ○ | 德国航天企业 |
| ICEYE | ICEYE 雷达卫星公司 | ○ | 芬兰合成孔径雷达卫星运营商 |
| CICIR | 中国现代国际关系研究院(CICIR) | ◎ | China Institutes of Contemporary International Relations |
| Central Foreign Affairs Commission | 中央外事工作委员会 | ◎ | 中共中央机构 |
| Ministry of State Security | 国家安全部 | ◎ | 中国国安部官方译名 |
| CNCERT | 国家互联网应急中心(CNCERT) | ◎ | 官方中文名 |
| Rafael | 拉斐尔(Rafael) | ◎ | 以色列军工企业;Spyder/德比/怪蛇开发商 |
| Tiantao Technology | 天骄科技 | △ | 中国企业 |
| Joint Force Command Norfolk | 诺福克联合部队司令部 | ○ | 北约大西洋联合部队司令部 |
| Technology Prosperity Deal | 技术繁荣协议(TPD) | △ | 特朗普政府双边技术合作工具 |
| Department of War (DoW) | "战争部" | △ | 译文对美国防部(DoD)的旧称译法(1789-1947 官方名);DoDEA 译"战争部教育活动" |
| DoDEA | 国防部教育活动局 | ○ | 美军军属学校系统 |
| ONCD | 国家网络总监办公室(ONCD) | △ | - |
| CISA | 网络安全和基础设施安全局(CISA) | ○ | - |
| FinCEN | 金融犯罪执法网络(FinCEN) | ○ | 美财政部 |
| CFIUS | 美国外国投资委员会(CFIUS) | ◎ | - |
| FMS | 对外军售(FMS) | ◎ | - |
| DHS | 国土安全部(DHS) | ◎ | - |
| FDA | 食品药品监督管理局(FDA) | ◎ | - |
| HHS | 卫生与公众服务部(HHS) | ◎ | - |
| DOJ | 司法部(DOJ) | ◎ | - |
| FHA | 联邦住房管理局(FHA) | ○ | - |
| CENTCOM | 中央司令部(CENTCOM) | ◎ | 美国中央司令部 |
| EUCOM | 欧洲司令部(EUCOM) | ◎ | - |
| AFRICOM | 非洲司令部(AFRICOM) | ◎ | - |
| CNO | 海军作战部长(CNO) | ◎ | - |
| Space Force | 美国太空军 | ◎ | - |
| DAF | 空军部(DAF) | ○ | Department of the Air Force |
| NAVSEA | 海军海上系统司令部(NAVSEA) | ◎ | - |
| GUGI | 俄国防部深海研究总局(GUGI) | △ | 俄水下作战/海底电缆破坏力量 |
| SVR | 俄对外情报局(SVR) | ○ | - |
| HMX-1 | HMX-1直升机中队 | ○ | 美总统直升机中队 |
| NAVAIR | 海军航空系统司令部(NAVAIR) | ◎ | - |
| DAPA | 韩国国防采办项目管理局(DAPA) | ○ | - |
| JAIEC | 日本飞机产业振兴株式会社(JAIEC) | △ | - |
| AFRL | 空军研究实验室(AFRL) | ○ | - |
| AFGSC | 空军全球打击司令部(AFGSC) | ○ | - |
| CNATRA | 海军航空训练主管办公室(CNATRA) | ○ | - |
| NRL | 海军研究实验室(NRL) | ○ | - |
| DTRA | 国防威胁降低局(DTRA) | ○ | - |
| JIATF | 联合机构间特遣部队401(JIATF-401) | ○ | 五角大楼反无人机采购机构 |
| JMIC | 联合海事信息中心(JMIC) | △ | - |
| ACC-RI | 空军装备司令部-罗德岛分部(ACC-RI) | △ | - |
| CSSC | 中国船舶工业集团公司(CSSC) | ○ | - |
| COMEC | 中船海洋与防务装备股份有限公司(COMEC) | △ | 原广州广船国际(GSI) |
| RAAF | 澳大利亚皇家空军(RAAF) | ○ | - |
| VKS | 俄空天军(VKS) | ○ | - |
| PLAAF | 中国人民解放军空军(PLAAF) | ○ | - |
| PLARF | 中国人民解放军火箭军(PLARF) | ○ | - |
| CCG | 中国海警(CCG) | ◎ | - |
| OSINT | 开源情报(OSINT) | ○ | - |
| ACLED | 武装冲突地点与事件数据项目(ACLED) | ○ | - |
| DSEI | 伦敦国防与安全装备国际展览会(DSEI) | ○ | - |
| MCC | 马加什·科尔维努斯学院(MCC) | △ | 匈牙利右翼学院,欧尔班网络核心 |
| KEKVA | KEKVA公益资产管理基金会体系 | △ | 匈牙利欧尔班以公共资产注资的基金会体系 |
| Sources Sought | 供应商寻源通知(Sources Sought) | ○ | 美采办流程文件 |
| CSO | 商业解决方案征集(CSO) | ○ | 美采办流程 |
| MTA | 中层采办(MTA) | ○ | 美采办通道,介于传统与快速采办之间 |
| DOT&E | 作战测试与评估(DOT&E) | ○ | 五角大楼机构 |
| COMPTUEX | 合成训练单元演习(COMPTUEX) | ○ | 航母打击群部署前演练 |
| CBP | 海关与边境保护局(CBP) | ◎ | - |
| TRT | 睾酮替代疗法(TRT) | ○ | 军人医疗语境 |
| TBI | 创伤性脑损伤(TBI) | ○ | - |
| MKULTRA | MKULTRA计划 | ○ | 美国中情局精神控制研究计划 |
| FBIS | 外国广播信息服务处(FBIS) | ○ | 美国中情局/情报界监听机构 |
| SAVE | 系统性外籍人士福利资格核查数据库(SAVE) | △ | Systematic Alien Verification for Entitlements;国土安全部选举安全工具 |
| PFB | 假性毛囊炎(PFB) | ○ | 美军军容政策相关皮肤病症 |
| Operator Syndrome | 作战人员综合征 | △ | 美军体能机能优化语境术语 |
| Schedule I | 第一类管制药物 | ○ | 美毒品管制分类 |
| cell-site simulator | 基站模拟器 | ○ | 俗称Stingray,执法监听设备 |
| AUSA | 美国陆军协会(AUSA) | ○ | - |


| TÜBİTAK SAGE | 土耳其科技研究理事会防务工业研发院(TÜBİTAK SAGE) | △ | 土耳其国防科研机构,格兹金巡航导弹主承包商;本表拟译。依据:IISS《土耳其的导弹奥德赛》(2026-04) |
| MARAD | 美国海事管理局(MARAD) | ○ | 美国运输部下属海事管理机构 |

### 科研基金与机构
| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| Horizon Europe | 地平线欧洲 | ◎ | 欧盟科研框架计划;官方译名 |
| Mo Ibrahim Foundation | 易卜拉欣基金会 | ◎ | 非洲治理基金会;媒体通用 |
| USGS | 美国地质调查局 | ◎ | 官方译名 |

### 2026-08-18 补录(网络与金融安全机构/法案)
| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| PDP-Laban | 菲律宾民主奋斗党(PDP-Laban) | ○ | 杜特尔特所在政党;国内媒体译法 |
| ICC | 国际刑事法院(ICC) | ◎ | 官方译名;菲律宾 2019 年退出 |
| PCA | 常设仲裁法院(PCA) | ◎ | 南海仲裁案仲裁机构;新华社通用 |
| SWIFT | 环球银行金融电信协会(SWIFT) | ◎ | 国际金融报文系统;新华社通用 |
| Office of Foreign Assets Control | 外国资产控制办公室(OFAC) | ○ | 美国财政部制裁执行机构 |
| U.S. Cyber Command | 美国网络司令部 | ◎ | 美军网络作战司令部(2009 年成立);军网/新华社通用 |
| National Security Agency | 国家安全局(NSA) | ○ | 美国信号情报机构;国内媒体通用 |
| National Cyber Director | 国家网络总监 | △ | 美国白宫网络事务主管;与词库已有 ONCD"国家网络总监办公室"译法统一,国内译法不统一 |
| Freedom of Information Act | 信息自由法(FOIA) | ○ | 美国信息公开法律;国内媒体通用 |
| Cybersecurity Information Sharing Act | 网络安全信息共享法 | ○ | 美国 2015 年法律(确立公私网络威胁信息共享);网安媒体 |
| Information Sharing and Analysis Organizations | 信息共享与分析组织(ISAO) | ○ | 美国公私信息共享机制 |
| duty to share | 共享义务 | ○ | CISA 2015 确立的联邦政府-私营部门信息共享义务 |
| Executive Order 13808 | 第13808号行政令 | ○ | 2017 年对委内瑞拉金融制裁行政令 |
| Automated Clearing House Network | 自动清算所网络(ACH) | ○ | 美国支付清算系统(工资直接存入) |
| JPMorgan Chase | 摩根大通 | ◎ | 美国最大银行;新华社通用 |
| Equifax | 艾可飞(Equifax) | ○ | 美国征信机构,2017 年数据泄露;参考消息译"艾可飞" |
| First American Financial Corp | 第一美国金融公司 | ○ | 美国产权保险巨头,2019 年数据泄露 |
| Khatam al-Anbiya Construction Headquarters | 哈塔姆·安比亚建设总部 | ○ | 伊朗革命卫队关联工程集团;区别于词库已有"哈塔姆安比亚"中央司令部 |


### 2026-08-23 补录(机构与法案)
> 来源:质检低分清单点名的翻译文件(英雄法案/账簿上的战争8/委内瑞拉民主转型等)。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| ICE | 美国移民和海关执法局(ICE) | ◎ | 美国联邦移民执法机构;新华社通用"美国移民和海关执法局",不宜简称"移民执法局" |
| BENS | 国家安全商业高管组织(BENS) | △ | Business Executives for National Security,美国政商协调组织(CEO 牵头);国内无定译,本表拟译 |
| HERO Act | "英雄法案"(HERO Act) | △ | 参议员恩斯特力推的军人子女保育法案,全称《帮助确保军人家庭子女保育可靠机会法案》;国内无定译,本表拟译 |
| Foro Penal | "刑事论坛"(Foro Penal) | △ | 委内瑞拉人权非政府组织,核实统计政治犯释放;国内无定译,本表拟译 |
| Tengden | 四川腾盾(科技) | ◎ | 中国无人机企业(四川腾盾科技有限公司),魔鱼剑(没羽箭)无人直升机研发方;官方中文名"四川腾盾" |

## 十、智库与媒体译名

### 智库与媒体译名
| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| CSIS | 战略与国际研究中心 | ◎ | - |
| RAND | 兰德公司 | ◎ | - |
| RUSI | 皇家联合军种研究所 | ◎ | 英国 |
| IISS | 国际战略研究所 | ◎ | 英国,出版《军力平衡》 |
| Shangri-La Dialogue | 香格里拉对话会 | ◎ | IISS 主办的新加坡年度安全论坛;国内媒体通用"香格里拉对话" |
| Gabbard (Tulsi) | 图尔西·加巴德 | ◎ | 2026 年任美国国家情报总监;国内媒体通用 |
| Meng Xiangqing | 孟祥青 | ◎ | 中国人民解放军少将、国防大学教授,2026 香格里拉对话中方代表;国内媒体通用 |
| CFR | 美国外交关系委员会 | ◎ | 或"外交关系协会" |
| Brookings | 布鲁金斯学会 | ◎ | - |
| FPRI | 外交政策研究所 | ○ | 美国 |
| CNAS | 新美国安全中心 | ○ | - |
| War on the Rocks | 战争岩石(网媒) | ○ | 我文中直译"战争岩石",可加注原名 |
| The War Zone (TWZ) | 战区(网媒) | ○ | 我文中译"战区"或保留 TWZ;国内尚无通行译名。依据:《战争地带》(the War Zone) 与「战区」两译均有用例 |
| Defense News | 《防务新闻》 | ○ | - |
| Military Times | 《军事时报》 | ○ | - |
| Reuters | 路透社 | ◎ | - |
| Washington Post | 《华盛顿邮报》 | ◎ | - |
| RTX | 雷神技术公司(RTX) | ◎ | 战斧主承包商,2025 年仅产 100 枚新战斧 |
| Lockheed Martin | 洛克希德·马丁 | ◎ | - |
| General Dynamics | 通用动力 | ◎ | 梅斯基特炮弹厂运营方 |
| Northrop Grumman | 诺斯罗普·格鲁曼 | ◎ | - |
| Boeing | 波音 | ◎ | - |
| Anduril | 安杜里尔(防务科技公司) | ○ | 低成本无人机/自主系统 |
| HII | 亨廷顿·英格尔斯工业 | ○ | 造舰巨头 |
| Paparo | 帕帕罗(美印太司令部司令) | ◎ | "地狱景象"提出者,2024-11 曾称中东/欧洲冲突"侵蚀我们的库存" |
| Hegseth | 赫格塞斯(美国防部长) | ◎ | - |



| Rhodium Group | 荣鼎集团 | ○ | 智库 |
| POLITICO | 美国政治报(POLITICO) | ○ | 媒体 |
| Foreign Policy | 《外交政策》杂志 | ○ | 媒体 |
| Carnegie Endowment for International Peace | 卡内基国际和平基金会 | ◎ | 智库 |
| KNDS | KNDS(克劳斯-玛菲·威格曼/奈克斯特合资) | ○ | 德法装甲车辆制造商 |
| MBDA | 欧洲导弹集团(MBDA) | ◎ | 欧洲导弹制造商,风暴阴影/紫菀/MdCN 生产商 |
| Rheinmetall | 莱茵金属 | ◎ | 德国军工企业 |
| Shield AI | Shield AI 防务AI公司 | △ | 美国,蜂群自主软件 Hivemind 开发商 |
| Quincy Institute | 昆西负责任治国研究所 | ○ | 美智库 |
| SpaceX | 太空探索技术公司(SpaceX) | ◎ | - |
| Starshield | "星盾" | ○ | SpaceX政府版星链 |
| Falcon 9 | 猎鹰9号 | ◎ | - |
| Blue Origin | 蓝色起源 | ○ | - |
| L3Harris | L3哈里斯技术公司(L3Harris) | ○ | - |
| General Atomics | 通用原子公司(General Atomics) | ◎ | GA-ASI(通用原子能航空系统公司)母公司,词库已收GA-ASI |
| Fincantieri | 芬坎蒂尼 | ○ | 意大利造船集团 |
| Marinette Marine | 马里内特海事公司 | △ | 芬坎蒂尼子公司 |
| Bell Textron | 贝尔德事隆公司 | ○ | - |
| Textron | 德事隆公司 | ○ | - |
| BAE Systems | 贝宜系统(BAE Systems) | ○ | - |
| Indra | 英德拉 | △ | 西班牙 |
| Hensoldt | 亨索尔特 | △ | 德国传感器企业 |
| Naval Group | 海军集团 | ○ | 法国造舰企业 |
| Navantia | 纳凡蒂亚 | △ | 西班牙造舰企业 |
| Babcock International | 巴布科克国际 | ○ | 英国 |
| Rostec | 俄罗斯国家技术集团 | ○ | - |
| Sukhoi | 苏霍伊 | ◎ | - |
| Fire Point | 火点公司(Fire Point) | △ | 乌克兰导弹初创 |
| Leidos | 莱多斯(Leidos) | △ | 美国防承包商 |
| Kratos | 克瑞托斯(Kratos) | △ | 美无人机/靶机商,XQ-58制造商 |
| Hanwha Aerospace | 韩华航空航天 | ○ | - |
| Airbus Defense & Space | 空客防务与航天 | ○ | - |
| Hudson Institute | 哈德逊研究所 | ◎ | - |
| Stimson Center | 史汀生中心 | ○ | - |
| Institute for the Study of War | 战争研究所(ISW) | ○ | - |
| Federation of American Scientists | 美国科学家联合会(FAS) | ○ | - |
| Kiel Institute for the World Economy | 基尔世界经济研究所 | ○ | - |
| Korea Institute for Defense Analyses | 韩国国防分析研究所(KIDA) | ○ | - |
| Baker Institute | 贝克研究所 | ○ | - |
| Middle East Institute | 中东研究所(MEI) | ○ | - |
| Control Risks | 化险咨询 | ○ | - |
| CoAspire | CoAspire公司 | △ | RAACM-ER开发商 |
| Safran | 赛峰 | ○ | 法国 |
| Dassault Aviation | 达索航空公司 | ○ | 法国 |
| Saronic | 萨罗尼克(Saronic) | △ | 美无人艇初创,Marauder制造商 |
| Trinity Robotics | Trinity Robotics公司 | △ | 乌克兰UGV制造商,2026年产量翻番至约2200台 |
| Ursa Major | Ursa Major(大熊座)公司 | △ | 美火箭发动机初创;获海军含能系统与技术(NEST)合同 |
| X-Bow | X-Bow公司 | △ | 美火箭发动机初创 |
| Capewell | Capewell公司 | △ | UMCADS伞降系统商 |
| Kraken | Kraken公司 | △ | K3 SCOUT无人艇制造商 |
| GDLS | 通用动力陆地系统(GDLS) | ○ | - |
| GD-OTS | 通用动力军械与战术系统(GD-OTS) | ○ | - |
| IAI | 以色列航空航天工业公司(IAI) | ○ | - |
| TKMS | 蒂森克虏伯海事系统(TKMS) | ○ | 德国,MEKO A-200主承包商 |
| Hanwha Ocean | 韩华海洋 | ○ | 韩国造船商 |
| Hanwha Philly Shipyard | 韩华费城造船厂(HPSI) | △ | 建造导弹靶场测量船(MRIV) |
| TOTE | TOTE服务公司 | △ | 获美海军中型登陆舰(LSM)22亿美元建造管理合同 |
| EchoGuard | EchoGuard雷达 | △ | 美反无人机雷达,曾被安杜里尔Sentry采用 |
| Planet Labs | 行星实验室(Planet Labs) | ○ | 美国卫星影像公司 |
| ICIJ | 国际调查记者联盟(ICIJ) | ○ | - |
| DVIDS | 国防视觉信息服务(DVIDS) | ○ | 美军官方图片分发系统 |
| CGTN | 中国环球电视网(CGTN) | ○ | - |
| Janes | 简氏(Janes) | ○ | 防务情报机构/媒体 |
| WELT | 德国《世界报》(WELT) | ○ | - |
| RFE/RL | 自由欧洲电台/自由电台(RFE/RL) | ○ | - |
| Truth Social | "真实社交"(Truth Social) | ○ | 特朗普社交媒体平台 |
| DeepMind | 深度思维(DeepMind) | ○ | 谷歌AI公司 |
| YOLO | 你只看一次(YOLO) | ○ | 目标检测算法 |
| Getty Images | 盖蒂图片社 | ○ | 图库/图片社 |
| Wikimedia Commons | 维基共享资源 | ○ | 图片来源标注 |
| Kongsberg | 康斯伯格 | ○ | 挪威防务公司 |
| Oerlikon | 厄利孔(Oerlikon) | ○ | 瑞士防空炮制造商;GDF-006型"天卫"35mm高炮及AHEAD弹药生产商 |
| CEPA | 欧洲政策分析中心(CEPA) | ○ | Center for European Policy Analysis |
| Rodong Sinmun | 《劳动新闻》 | ◎ | 朝鲜劳动党机关报,官方媒体译名通用 |
| Kim Il Sung University | 金日成综合大学 | ◎ | 朝鲜最高学府,官方译名通用 |
| New Quality Productive Forces (NQPF) | 新质生产力 | ◎ | 中国官方术语,新华社/官方文件定译 |
| AI Plus | "人工智能+"行动 | ◎ | 中国官方政策术语(2025年起) |
| Two Sessions | 全国两会 | ◎ | 全国人大与政协年会统称,官方媒体通用"两会" |
| NPC | 全国人民代表大会(NPC) | ◎ | 中国立法机关,官方通用 |
| CPPCC | 中国人民政治协商会议(CPPCC) | ◎ | 官方通用"政协" |
| NDRC | 国家发展和改革委员会(NDRC) | ◎ | 官方通用"国家发改委" |
| Power of Siberia 2 | "西伯利亚力量2号"管道 | ◎ | 中俄天然气管道项目,官方媒体通用 |


| Center for Maritime Strategy (CMS) | 美国海事战略中心(CMS) | △ | 美国海军领域智库,2026-02 发布《码头审视》报告;国内无定译,本表拟译 |

### 2026-08-18 补录
| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| Potomac Institute for Policy Studies | 波托马克政策研究所 | ○ | 美国防务政策智库(弗吉尼亚州) |
| Steven Levitsky | 史蒂文·莱维茨基 | ○ | 哈佛大学政治学者,《民主的困境》作者;学界通用 |
| Lucan Way | 卢肯·韦 | ○ | 多伦多大学政治学者;学界通用 |
| Erica Frantz | 埃丽卡·弗兰茨 | ○ | 密歇根州立大学政治学者;学界通用 |
| Zbigniew Brzezinski | 兹比格涅夫·布热津斯基 | ◎ | 美前国家安全顾问(1977-1981);国内通用 |

### 2026-08-22 补录(欧洲高校与智库机构)
> 来源:2026-06-17 马克龙核赌博一文作者简介涉及机构。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| Sciences Po | 巴黎政治学院 | ◎ | 法国著名社科高校(巴黎政治学院政治研究中心即其下属机构);新华社/参考消息通用 |
| Friedrich Naumann Foundation | 弗里德里希·瑙曼基金会 | ○ | 德国自民党背景政治基金会(布鲁塞尔全球安全中心);国内媒体通用 |
| Young Security Conference | "青年安全会议" | △ | 跨大西洋欧洲安全智库(创始人:雅克-阿普克);国内无定译,本表拟译 |
| Chicago Council on Global Affairs | 芝加哥全球事务委员会 | ○ | 美国知名国际事务智库;国内媒体通用 |
| Hertie School | 赫蒂学院 | △ | 柏林公共政策学院(Hertie School);国内译法不一,本表拟译 |
| Stanton Nuclear Security Fellowship | 斯坦顿核安全问题博士后 | △ | 斯坦顿基金会核安全研究资助项目;国内无定译,本表拟译 |

### 2026-08-23 补录(媒体与民调机构)
> 来源:质检低分清单点名的翻译文件(独立选民/角色互换等)。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| Ukrinform | 乌克兰国家通讯社 | ○ | 乌克兰官方通讯社;新华社/参考消息通用 |
| Ukrainska Pravda | 《乌克兰真理报》 | ○ | 乌克兰主流媒体;国内媒体通用 |
| Marist University Institute for Public Opinion | 马里斯特大学公共舆论研究所 | ○ | 美国民调机构(NPR/PBS/马里斯特联合民调),国内媒体多作"马里斯特民调" |
| Perry World House | 佩里世界之家 | ○ | 宾夕法尼亚大学国际事务智库;国内高校学界有"佩里世界之家"提法 |
| NPR | 全国公共广播电台(NPR) | ◎ | 美国公共广播电台;新华社通用 |
| PBS | 公共广播公司/公共电视网(PBS) | ◎ | 美国公共电视台;国内媒体两种译法并存 |

### 2026-08-28 补录(翻译实战补充,093批质检)
> 来源:2026-08-28 093 批质检(ASPI 澳美情报颠覆/卡内基伊朗韩国半导体/TWZ 芬兰北极演习等)。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| pacing threat | 步调威胁 | △ | 093批质检;美对华军事建设速度关切术语,国内暂无定译,本表拟译 |
| Darcie Draudt-Véjares | 达西·德劳特-韦雅雷斯 | △ | 093批质检;卡内基学者人名,国内无通用译名,本表拟译 |
| GW Institute for Korean Studies | 乔治·华盛顿大学韩国学研究所 | △ | 093批质检;机构名,国内无定译,本表拟译 |
| Jääkäriprikaati | 芬兰猎兵旅 | △ | 093批质检;芬兰陆军部队(芬兰语原名),本表拟译 |

## 十一、地名与专用语(实战易错)

### 地名与专用语(实战易错)
| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| Mesquite | 梅斯基特(得州) | ○ | 5 亿美元 155mm 炮弹厂所在地,审计零产出。依据:得克萨斯州梅斯基特(Mesquite)新厂审计报道 |
| Huntsville | 亨茨维尔(亚拉巴马州) | ○ | PAC-3 导引头产线所在地 |
| Edwards AFB | 爱德华兹空军基地 | ◎ | B-52 坠机(2026-06-15,8 死)与 Wickert 12:1 讲话地 |
| Andersen AFB | 安德森空军基地(关岛) | ◎ | 2016 年 B-52 事故地(7 伤,勿与 2026 爱德华兹坠机混淆) |
| PIPIR | 印太产业韧性伙伴关系(PIPIR) | ○ | 赫格塞斯 2025-05 香会宣布,P-8 雷达 AN/APY-10 区域维修中心设澳大利亚;PIPIR sUAS 呼应"复制器"。依据:美主导PIPIR机制扩员16成员等多处 |
| "12 to 1" | 战斗机数量 12:1 | ○ | 美 412 试验联队长 Wickert 2025-01 演讲:2027 年前现代战机约 12:1(五代机 5:3) |


| Kharg Island | 哈尔克岛 | ◎ | 波斯湾北部,伊朗石油出口枢纽 |
| Edwards Air Force Base | 爱德华兹空军基地 | ◎ | B-52 坠机事故地 |
| Hormuz | 霍尔木兹(海峡) | ◎ | 波斯湾出口,石油运输咽喉 |
| Hezbollah | 真主党 | ◎ | 黎巴嫩什叶派武装组织 |
| Hamas | 哈马斯 | ◎ | 巴勒斯坦伊斯兰抵抗运动;新华社通用 |
| Houthis | 胡塞武装 | ◎ | 也门什叶派武装组织 |
| Engels Air Base | 恩格斯空军基地 | ○ | 俄战略轰炸机基地 |
| Bear Gap | 熊岛缺口(Bear Gap) | △ | 挪威熊岛与大陆间海峡,俄潜艇通道 |
| Strait of Hormuz | 霍尔木兹海峡 | ◎ | 词库已收Hormuz,此为全称补录 |
| Bab el-Mandeb | 曼德海峡 | ◎ | - |
| Strait of Malacca | 马六甲海峡 | ◎ | - |
| Somaliland | 索马里兰 | ◎ | - |
| Puntland | 邦特兰 | ○ | - |
| Kadena Air Base | 嘉手纳空军基地 | ◎ | - |
| Incirlik Air Base | 因吉尔利克空军基地 | ○ | - |
| Al Udeid Air Base | 乌代德空军基地 | ○ | - |
| Camp Humphreys | 汉弗莱斯营 | ○ | - |
| Duqm | 杜库姆 | ○ | 阿曼战略港口,2026年遭伊朗无人机袭击 |
| Ras Tanura | 拉斯塔努拉 | ○ | 沙特最大炼油/出口港,2026年遭伊朗导弹击中 |
| Konarak | 科纳拉克 | ○ | 伊朗东南部海军设施(恰巴哈尔附近) |
| Tabriz | 大不里士 | ○ | 伊朗西北部城市,防空网络节点 |
| Kermanshah | 克尔曼沙赫 | ○ | 伊朗西部城市,导弹基地集中地 |
| Chabahar | 恰巴哈尔 | ○ | 伊朗东南部港口,革命卫队海军基地 |
| Bandar Abbas | 阿巴斯港 | ○ | 伊朗南部军港,革命卫队海军驻地 |
| Manama | 麦纳麦 | ○ | 巴林首都,美军第五舰队驻地 |
| Shaybah | 谢拜油田 | ○ | 沙特东南部油田,2026年遭无人机袭击 |
| Mikkeli | 米凯利 | ○ | 芬兰城市,北约西北多军团地面组成部队司令部驻地 |
| Wiesbaden | 威斯巴登 | ○ | 德国城市,北约中央多军团地面组成部队司令部驻地 |
| Izmir | 伊兹密尔 | ○ | 土耳其城市,北约东南多军团地面组成部队司令部驻地 |
| Poznan | 波兹南 | ○ | 波兰城市,美军第五军前方指挥部驻地 |
| Krakow | 克拉科夫 | ○ | 波兰城市,波第2军团驻地 |
| Adana | 阿达纳 | ○ | 土耳其城市,土第6军团驻地 |
| Pensacola | 彭萨科拉 | ○ | 美国佛罗里达州海军航空站,飞行员训练基地 |

| Luxeuil | 吕克瑟伊 | △ | 法国东部空军基地,现代化改造为核空军基地;本表拟译。依据:IISS《法国的核威慑力量向东扩张》(2026-03) |
| le Longue | 隆格海军基地 | △ | 法国弹道导弹核潜艇母港/基地;本表拟译。依据:同上 |
| Fos-sur-Mer | 滨海福斯 | △ | 法国南部地中海沿岸液化天然气终端所在地;本表拟译。依据:Hudson《保障欧洲未来》(2026-07) |
| Bab al Mandeb | 曼德海峡 | ◎ | 也门与非洲之角间海峡,胡塞武装袭船重点海域(CMS报告用 Bab al Mandeb 拼写) |
| Brittany | 布列塔尼(大区) | ◎ | 法国西北部行政区;其海岸为法国弹道导弹核潜艇母港(隆格海军基地)所在地;国内媒体通用"布列塔尼" |

### 2026-08-24 补录(地名)
> 来源:质检低分清单点名的翻译文件(俄格陵兰危机/美伊地面战争/非洲政变等文,2026-08-24 词库审计)。

| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| Kola Peninsula | 科拉半岛 | ◎ | 俄西北部半岛,北方舰队核潜艇基地(北莫尔斯克)所在地 |
| Norwegian Sea | 挪威海 | ◎ | 挪威与冰岛之间海域,俄潜艇赴大西洋通道 |
| Abu Musa | 阿布穆萨岛 | ◎ | 波斯湾岛屿,伊朗与阿联酋争议领土;新华社通用"阿布穆萨岛" |
| Isfahan | 伊斯法罕 | ◎ | 伊朗中部城市(核设施/军工基地);国内媒体通用"伊斯法罕" |
| Sahel | 萨赫勒(地区) | ◎ | 撒哈拉以南半干旱地带;新华社通用"萨赫勒" |

**abn74ok 批核实记录(2026-08-17):** 本批补录来源为 IISS 2026-02/03/07 七篇(美以对伊战役、朝鲜AI、中国十五五、北约三线、中国航母)。北约指挥架构词(JOA/MCLCC/JSEC/1GNC/MNC系列/SACEUR)与地名按通行军事译法拟译;歼-15/新质生产力/人工智能+/两会/西伯利亚力量2号等中国词条按官方定译标注◎;Basij/阿尔万德/贾马兰/十二日战争/Aspides 为对伊战争新遇词,无官方先例标○待核。

**abn74ok 批核实记录(2026-08-22):** 本批补录来源为《赫格塞斯下令对军事法律体系进行全面审查》(2026-05-27)与《马克龙的核赌博》(2026-06-17)两篇翻译。共收录 34 条:美国军事司法体系 4 条(JAG Corps/UCMJ/ROE/Protect Our Defenders,归入第一章;Protect Our Defenders 属机构但按主题归此)、欧洲政要与政党 10 条(马克龙/默茨/国民联盟/勒庞/巴尔代拉/戴高乐/密特朗/奥朗德/萨科齐/居伊·摩勒,归入第二章)、法国核政策与欧洲核威慑 10 条(force de frappe/先进威慑/严格足够/校准披露/主权克制/反力/打击城市目标/核共享/双能力飞机/扑克演习,归入第四章)、核武器系统 3 条(B-61/三叉戟/ASMPA-R,归入第八章)、欧洲高校与智库机构 6 条(巴黎政治学院/弗里德里希·瑙曼基金会/青年安全会议/芝加哥全球事务委员会/赫蒂学院/斯坦顿核安全问题博士后,归入第十章)、地名 1 条(布列塔尼,归入第十一章)。已收录不重复:赫格塞斯/阵风/坚定正午/F-35/FCAS/延伸威慑/前沿威慑/隆格海军基地/司法部(DOJ)/太空军等。标△的 11 条为本表拟译(国内无定译):JAG Corps、Protect Our Defenders、先进威慑、严格足够、校准披露、主权克制、扑克演习、ASMPA-R、青年安全会议、赫蒂学院、斯坦顿核安全问题博士后;其中"先进威慑"与词库已有"前沿威慑"(济南日报译法)同指马克龙构想,两译并存待核。

**词库审计核实记录(2026-08-23):** 本批为词库审计补录,触发文件《质检低分清单-20260823》(001-026 批三天汇总)。以清单点名的 11 篇翻译文件为线索提取英文专名,对照词库查重后共补录 37 条:第六章"美洲政要与涉华专家"10 条(马杜罗/马查多/德尔西·罗德里格斯/卢比奥/汤姆·霍曼/乔尼·恩斯特/赵通/周波/时殷弘/迈克尔·霍洛维茨,来源委内瑞拉两篇与英雄法案、独立选民、五角大楼解放军军力报告文)、第七章"中美AI竞争:模型与芯片"12 条(DeepSeek V4/GPT-5/Gemini/Claude/Grok/OpenAI/Anthropic/Hugging Face/月之暗面/智谱/华为昇腾/英伟达Blackwell,来源 CFR 三研究员评 DeepSeek V4 文)、第八章装备 3 条(空警-600/库兹涅佐夫级/魔鱼剑,来源南华早报两文)、第九章机构法案 5 条(ICE/BENS/HERO英雄法案/Foro Penal/四川腾盾)、第十章媒体机构 6 条(乌克兰国家通讯社/乌克兰真理报/马里斯特民调/佩里世界之家/NPR/PBS)、第十一章 1 条(哈马斯);第十三章暂未划分 16 条(冷门人物与无定译词:AEP-400/DELTA/colectivos/范迪埃/麦科伊/米林戈夫/梅日维金/米罗年科/弗罗伊丁/利霍维伊/西莉亚·弗洛雷斯/麦奎尔/勃兰特/Militarnyi/RBC-Ukraine/Jeremy Chan)。已收录不重复:IRGC/Shahed/Operation Epic Fury/Operation Absolute Resolve/NDAA/B-21/F-47/J-15/E-2D/RUSI/POLITICO/REPMUS/Hedgehog 2025/Magura V7/波托马克政策研究所/战争岩石/门罗主义特朗普推论/亚伯拉罕协议/霍尔木兹/胡塞武装/真主党/赫格塞斯/内塔尼亚胡/Truth Social/CFR 等。检索说明:web_search 工具不可用,改用必应/搜狗/360 国内检索;2026 年新事件词条国内检索结果有限,标◎/○ 者按新华社/参考消息/军网既有用法判定,标△ 者为拟译待核。

**词库审计核实记录(2026-08-24):** 本批为词库审计补录,触发文件《质检低分清单-20260823》(QA 报告,2026-08-23 生成,001-078 批三天汇总;2026-08-23 已按同文件前段补录 37 条,本批覆盖其后新增的 044/051/056/067/071/072/075/076/077/078 等批次)。共补录 15 条:第三章作战军语 3 条(ASW/不可逃逸区/任务系统)、第六章能源与非洲组织 5 条(剑桥能源周/道达尔能源/克里斯·赖特/西共体/非盟)、第八章装备技术 2 条(ramjet 冲压推进/ACV 两栖战斗车)、第十一章地名 5 条(科拉半岛/挪威海/阿布穆萨岛/伊斯法罕/萨赫勒)。已收录不重复:IRGC/NDAA/RUSI/POLITICO/B-21/萨博/周波/时殷弘/赵通/乔尼·恩斯特/英雄法案/魔鱼剑/腾盾/门罗主义/霍尔木兹/哈尔克岛/DELTA/REPMUS/Hedgehog/马古拉/沙赫德/空警-600/歼-15/F-47/BENS/Indra/波托马克/战争岩石/DeepSeek 等。跳过不收录(宁缺毋滥):Steel Dome 与 Bayraktar(预筛名单内但 QA 报告全文未出现,无补录依据;Bayraktar 公司已以 Baykar K2 词条间接覆盖);人名 Sindelar/Grajewski/Costa/Grazier/Truesdale/多明格斯/赖歇/弗雷文/利沃维(Sindelar 引语与 Truesdale 图注系漏译未入译文,无稳定使用;其余人名译文已准但英文原名/身份无法在国内检索渠道确认,按规则不收,待遇原文再核)。检索说明:web_search 工具不可用,必应/搜狗/360 经 web_fetch 均返回反爬或无关结果,标◎/○ 按新华社/参考消息/军网既有用法及 QA 报告已确认译文判定,本批未新增 △ 词条。

## 十二、美国国内灾害与人口政策术语

### 美国国内灾害与人口政策术语
| 英文 | 中译 | 级 | 备注 |
|---|---|---|---|
| internally displaced persons (IDPs) | 境内流离失所者 | ○ | 亦见"国内流离失所者"用例;联合国文件通行译"境内流离失所者" |
| UN Guiding Principles on Internal Displacement | 《联合国关于境内流离失所问题的指导原则》 | ◎ | 1998 年通过,国际人道法/人权框架 |
| IDMC | 境内流离失所监测中心 | ○ | Internal Displacement Monitoring Centre |
| FEMA | 联邦紧急事务管理局 | ◎ | Federal Emergency Management Agency |
| HUD | 美国住房和城市发展部 | ◎ | U.S. Department of Housing and Urban Development |
| CDBG-DR | 社区发展整块拨款--灾害恢复 | ○ | Community Development Block Grant Disaster Recovery,HUD 管理 |
| Household Pulse Survey | 家庭脉搏调查 | ○ | 美人口普查局新冠疫情期启动的调查 |
| HTOPS | 家庭趋势与展望脉搏调查 | ○ | Household Trends and Outlook Pulse Survey,家庭脉搏调查继任者 |
| American Community Survey | 美国社区调查 | ○ | ACS |
| U.S. Census Bureau | 美国人口普查局 | ◎ | - |
| PREPA | 波多黎各电力局 | ○ | Puerto Rico Electric Power Authority |
| durable solutions | 持久解决方案 | ◎ | 人道主义术语,境内流离失所语境 |
| Urban Institute | 城市研究所 | ◎ | 美国智库 |
| Brookings Metro | 布鲁金斯都市项目 | ○ | 布鲁金斯学会下设都市研究项目 |
| Brookings Metro Monitor | 布鲁金斯都市监测 | ○ | 年度都市区经济报告 |
| Sun Belt | 阳光地带 | ◎ | 美国南部/西南部 |
| Mountain West | 山地西部地区 | ○ | - |
| net international migration | 国际净移民 | ○ | 人口统计术语 |
| natural increase | 自然增长 | ○ | 出生减死亡 |
| domestic migration | 国内迁移 | ○ | 美国国内跨区迁移 |
| county equivalents | 县级等同单位 | ○ | 人口普查术语,如巴尔的摩、圣路易斯、华盛顿特区 |
| National Conference of State Legislatures | 全国州议会会议 | ○ | - |
| National Association of Counties | 全国县协会 | ○ | - |
| U.S. Conference of Mayors | 美国市长会议 | ○ | - |
| National Low Income Housing Coalition | 全国低收入住房联盟 | ○ | - |
| DART | 灾害救援响应组(DART) | ○ | USAID Disaster Assistance Response Team |
| USR | 城市搜救队(USR) | ○ | Urban Search and Rescue |

---

## 十三、暂未划分(△ 类,2026-08-13 起规则:不收录为正式词条)

以下词汇暂未查到可靠中文定译,列入此表待核。△ = 暂未划分。

| 英文原名 | 暂拟译名(仅供参考) | 原章节 | 说明 |
|---|---|---|---|
| Eastern Flank Watch | 东翼监测(机制) | 二 | 欧盟旗舰项目之二,整合防空、电子战、监视、海上安全。归入原因:无中文实例 |
| Eastern Flank Deterrence Initiative (EFDI) | 东翼威慑倡议 | 二 | 北约新概念,美陆军欧洲-非洲司令部支持,低成本可消耗无人系统+AI赋能瞄准+分层防御。归入原因:单一来源 |
| Eastern Flank Deterrence Line (EFDL) | 东翼威慑线 | 二 | 北约陆军司令部(LANDCOM)转型作战概念,跨域跨国分布式能力体系。归入原因:单一来源 |
| Death of concealment | "隐蔽的终结" | 七 | 商业卫星+联网设备使战场透明化。归入原因:无中文实例 |
| Inversion of the cost curve | 成本曲线倒挂 | 七 | 廉价弹药消耗战概念。归入原因:无实例(检索均为金融用语) |
| No-penetration line | 不可穿透线 | 七 | 北约区域计划无人系统区对齐基准。归入原因:无中文实例 |
| Uncrewed zone | 无人系统作战区 | 七 | 危机前可向东扩展的无人平台部署带。归入原因:无中文实例 |
| Battle laboratory | "战斗实验室" | 七 | 北约官员对当下欧洲战区的定位。归入原因:无概念用例 |
| Forward production | 前沿生产 | 七 | 产能前推至靠近战场,缩短运输时间。归入原因:无中文实例 |
| AGI Rideout Strategy | 通用人工智能"平稳渡过"战略 | 七 | RAND 2026-04 新概念,主张AGI竞赛中优先威慑冲突、提升技术基础设施韧性。归入原因:无已知实例 |
| single-point constraint | 单点约束 / 单点供应 | 10.2 | 单一供应源瓶颈术语(如战斧发动机独家供应商)。归入原因:无实例(仅泛化用例) |
| SPEED Act | SPEED 法案 | 10.2 | 众议院采购改革法案(H.R.3838)。归入原因:单一来源 |
| FoRGED Act | FoRGED 法案 | 10.2 | 参议院采购改革法案(S.5618),正确拼写带 o。归入原因:单一来源 |
| Breaking Defense | 《防务快报》/《防务快讯》 | 10.3 | 美防务新闻网站。归入原因:两译并存无定译("防务快报"为远望智库栏目名) |
| DICAS | 美日防务工业合作论坛 | 10.4 | 船舶维修/飞机维修/导弹联合生产/供应链韧性四个工作组。归入原因:无中文实例(未专门检索,建议复核) |
| ADAIR (adversary air services provider) | 假想敌空中服务供应商 | 10.5 | 私营假想敌服务市场统称。归入原因:缩写类,无中文实例 |
| Advanced Aggressor Mission System (AAMS) | 先进假想敌任务系统 | 10.5 | Top Aces 开放式架构任务系统。归入原因:专有系统名,无中文实例 |
| Netz | "内茨"(Netz) | 10.5 | 以色列 F-16A/B 绰号,意为"鹰"。归入原因:无中文实例 |
| AN/ALQ-188 | AN/ALQ-188 干扰吊舱 | 10.5 | 模拟敌方电子对抗系统。归入原因:装备代号,无中文实例 |
| Constructive Wingman | 构设僚机 | 10.5 | 在态势图投放不存在飞机的合成航迹。归入原因:无中文实例 |
| CAFCAS (Combat Air Force Contracted Air Support) | 作战空军合同化空中支援 | 10.5 | 美空军采购私营假想敌服务计划。归入原因:缩写类,无中文实例 |
| Sentry South / Sentry North | "南方哨兵" / "北方哨兵" | 10.5 | 空军国民警卫队制空演习系列。归入原因:演习名,无中文实例 |
| Air Dominance Center (ADC) | 空中优势中心 | 10.5 | 萨凡纳假想敌演习枢纽。归入原因:地名机构,无中文实例 |
| OpenPod (Northrop Grumman) | 诺格 OpenPod 吊舱 | 10.5 | 模块化开放式架构 IRST 吊舱。归入原因:吊舱名保留英文,无中文实例 |
| SkyWard (Leonardo) | 莱昂纳多 SkyWard 传感器 | 10.5 | 长波红外 IRST 传感器。归入原因:传感器名保留英文,无中文实例 |
| MiG-1 (lead aggressor) | 红方领队假想敌机("米格-1") | 10.5 | 演习红方领机代号。归入原因:演习代号,无中文实例 |
| MASC | MASC 无人船计划 | 10.7 | 美海军中型无人水面艇项目(2026-03 被新计划取代)。归入原因:缩写类,无中文实例 |
| compute coalition | 算力联盟 | 10.8 | 卡内基《The Compute Coalition》倡议(美主导"自由世界AI未来")。归入原因:无定译(国内"算力联盟"指国内产业联盟) |
| AI Gigafactories | 人工智能千兆工厂 | 10.8 | 欧盟 AI 算力设施计划。归入原因:无中文实例 |
| AI Growth Zones | 人工智能增长区 | 10.8 | 英国 AI 基建区划政策。归入原因:无中文实例 |
| neocloud | 新型云服务商(Neocloud) | 10.8 | 专为 AI 训练建设的新型云厂商(CoreWeave 等)。归入原因:行业术语,无中文实例 |
| Ratepayer Protection Pledge | 缴费用户保护承诺 | 10.8 | 美国公用事业公司对客户的承诺。归入原因:无中文实例 |
| Part 53 | 第53部分 | 10.8 | 美国核管会(NRC)先进反应堆新监管框架。归入原因:法规缩写类,无中文实例 |
| proto-nuclear deterrence | 原初核威慑 | 10.9 | 处于核能力早期阶段的威慑。归入原因:无中文实例 |
| SODCIT | 关键重要敌方目标 | 10.9 | 俄语缩写(战略重要目标,原文全称待考)。归入原因:存疑待核 |
| precise mass | 精确规模 | 10.9 | 俄"精确质量"打击规模概念。归入原因:存疑待核,无实例 |
| strategic posture group | 战略态势小组 | 10.9 | 北约核磋商机制。归入原因:无中文实例 |
| ODIN'S EYE | 奥丁之眼 | 10.9 | 欧盟空基导弹预警星座计划。归入原因:无中文实例 |
| Euro Eyes | 欧洲之眼 | 10.9 | 德国 BND 提议的欧洲情报共享联盟。归入原因:无中文实例 |
| Conventional Support to Nuclear Operations | 常规支援核行动 | 10.9 | 北约概念(常规力量支援核任务)。归入原因:无中文实例 |
| zero-line | 零线 | 10.10 | 乌军无人车补给线(Z 线)。归入原因:无概念用例 |
| Drone Line | 无人机防线 | 10.10 | 乌克兰国防部计划(沿接触线建无人机防线)。归入原因:无直接用例 |
| Bober (UJ-26) | 河狸(UJ-26)无人机 | 10.10 | 乌克兰远程攻击无人机。归入原因:译法未统一(海狸/Bober 混用) |
| REPMUS/DYMS 2025 | REPMUS/DYMS 2025 海上无人系统演习 | 10.10 | 北约葡萄牙海上无人演习。归入原因:中文全称不统一(疑同一文),DYMS 无独立用例 |
| Magnificent Ten | 十国联盟("壮丽十国") | 10.11 | ECFR 2026 报告名,指推动欧盟扩盟的十个关键国家(德国主导)。归入原因:单一来源 |
| Team Enlargement | 扩张团队 | 10.11 | ECFR 提议的十国扩盟联盟名。归入原因:无中文实例 |
| principled conditionalists | 原则性条件主义者 | 10.11 | 扩盟阵营之一(丹麦/德国/瑞典)。归入原因:无中文实例 |
| conditional sceptics | 条件性怀疑者 | 10.11 | 扩盟阵营之二(奥地利/法国/意大利/荷兰)。归入原因:无中文实例 |
| security maximalists | 安全最大化主义者 | 10.11 | 扩盟阵营之三(立陶宛/波兰)。归入原因:无中文实例 |
| integrated state status | 一体化国家地位 | 10.11 | 法国提出的渐进入盟概念。归入原因:无中文实例 |
| fundamentals | 基础性条款 | 10.11 | 入盟谈判第一组条款。归入原因:国内译法未统一 |
| Europe of Sovereign Nations | 主权国家欧洲党团 | 10.11 | 欧洲议会极右党团。归入原因:无中文实例 |
| Brandmauer | 防火墙 | 10.11 | 德国政坛对极右的隔离共识。归入原因:具体译名未核实("防火墙"为通用词) |
| precious loneliness | 珍贵的孤独 | 10.11 | 土耳其外交自我定位表述。归入原因:无中文实例 |
| dual imperative | 双重要务 | 10.11 | 土耳其外交两难(北约与俄/欧平衡)。归入原因:无中文实例 |
| Heimat deal | 乡土协议 | 10.11 | 德国"本土/身份"政治交易概念。归入原因:无中文实例 |
| khaki deal | 卡其色协议 | 10.11 | 防务利益交易概念(仿"绿色协议")。归入原因:无中文实例 |
| Eurostack | 欧洲技术栈 | 10.11 | 欧洲数字主权倡议。归入原因:无倡议用例(均为技术术语泛用) |
| Turnberry trade agreement | 特恩贝里贸易协议 | 10.11 | 美英贸易协议。归入原因:协议名无用例(仅地名用例) |
| TACO | TACO("特朗普总是临阵退缩") | 10.11 | 媒体缩略戏称(Trump Always Caves)。归入原因:单一来源 |
| military-bonyad complex | 军事-博尼亚德复合体 | 10.12 | 伊朗军政-基金会网络。归入原因:整词无实例(组件"博尼亚德"有用例) |
| Fincimex | 芬奇梅克斯 | 10.12 | 古巴金融公司(制裁相关)。归入原因:检索无结果 |
| recursive power | 递归式权力 | 10.13 | 因使用而强化的权力。归入原因:无网络/结构性权力概念用例 |
| MCILE 2026 | 海军陆战队设施与后勤企业 2026 计划 | 10.14 | Marine Corps Installations and Logistics Enterprise。归入原因:单一来源 |
| Regional Sustainment Framework | 区域持续保障框架 | 10.14 | 海军陆战队后勤概念。归入原因:无中文实例 |
| Autonomous Low-Profile Vessel (ALPV) | 自主低轮廓舰艇 | 10.14 | 海军陆战队无人运输艇。归入原因:单一来源 |
| Unmanned Logistics System-Air (ULS-A) | 无人后勤系统-空中型 | 10.14 | 陆战队无人后勤空中系统(TRV-150C)。归入原因:单一来源 |
| VITAL-BMA | 可视化综合战术后勤-战场管理辅助 | 10.14 | Visual Integrated Tactical Logistics-Battle Management Aid。归入原因:缩写类,无实例 |
| Logistics Chain Management System | 后勤链管理系统 | 10.14 | 后勤链管理系统。归入原因:无中文实例 |
| Barracks 2030 | 兵营 2030 | 10.14 | 海军陆战队营房现代化计划。归入原因:无实例(区别于"部队设计2030") |
| Global Clean Investment Monitor | 全球清洁投资监测 | 10.14 | 卡内基数据库。归入原因:无中文实例 |
| Nadi Declaration | 纳迪宣言 | 10.14 | 2026 民主韧性宣言(斐济纳迪)。归入原因:单一来源 |
| Hague Group | 海牙集团 | 10.14 | 挺乌克兰多国集团(2025.3 成立)。归入原因:无中文实例(原注"国内媒体有提法"未核实到) |
| R3 Program | "修复、重建或搬迁"计划 | 10.15 | 波多黎各住房重建计划(Repair, Reconstruction, or Relocation)。归入原因:无中文实例 |
| Transitional Sheltering Assistance | 过渡性庇护援助 | 10.15 | FEMA 临时安置项目。归入原因:无中文实例 |
| gap period | 缺口期 | 10.15 | 紧急救济到期与长期恢复资源到位之间的空档期。归入原因:无中文实例 |
| urban core counties | 城市核心县 | 10.15 | 布鲁金斯类型学定义。归入原因:无中文实例 |


| AGM (火炮模块) | AGM 火炮模块 | 八 | 240-249批报告标注存疑(AGM 通常指空对地导弹),待核 |
| ElectroYuan | "电元"(ElectroYuan) | △ | 2026-06批250-259 RUSI文章涉航运/能源,拟译待核;保留英文 |
| Zhang Ying | "镔鹰"(Zhang Ying) | △ | 航运相关船名/实体,拟译待核;保留英文 |
| Sea Legend | 海联航运(Sea Legend) | △ | 航运公司名,拟译待核 |
| NewNew Shipping | 新新航运(NewNew Shipping) | △ | 航运公司名,拟译待核 |
| Board of Peace | 和平委员会(Board of Peace) | △ | 卡内基文指特朗普相关机构,拟译待核 |
| War by Other Ledgers | 账簿上的战争 | 十 | 波托马克研究所与 War on the Rocks 合办系列专题名。归入原因:无中文实例 |
| Triliance Petrochemical Company | 特里利安斯石化公司 | 六 | 涉伊朗制裁石化企业(美方制裁对象)。归入原因:检索无中文报道 |
| Shields Ready | 盾牌就绪 | 六 | CISA 新动员活动(继 Shields Up 之后)。归入原因:国内无报道实例 |
| Karyn Eliot | 卡琳·艾略特 | 十 | 波托马克政策研究所学者。归入原因:冷门人物,无定译 |
| Jennifer Buss | 詹妮弗·巴斯 | 十 | 波托马克政策研究所所长。归入原因:冷门人物,无定译 |
| William Norris | 威廉·诺里斯 | 十 | 美国学者(网络安全领域)。归入原因:冷门人物,无定译 |
| AEP-400 | AEP-400 涡桨发动机 | 八 | 空警-600(KJ-600)动力装置。归入原因:装备代号,无中文实例 |
| DELTA | DELTA 战场态势感知系统 | 八 | 乌克兰作战指挥态势感知系统(米罗年科曾任团队负责人)。归入原因:国内无定译,多保留英文 |
| colectivos | "集体"(colectivos) | 六 | 委内瑞拉亲政府武装团伙(道路检查站恐吓公民)。归入原因:无中文实例,保留西语 |
| Pierre Vandier | 皮埃尔·范迪埃(另译"范迪尔") | 二 | 北约盟军转型最高司令(法国海军上将)。归入原因:译名未统一(现译文作"范迪尔"、"范迪罗") |
| Jennifer McCoy | 珍妮弗·麦科伊 | 六 | 卡内基民主、冲突与治理项目非常驻学者。归入原因:冷门人物,无定译 |
| Celia Flores | 西莉亚·弗洛雷斯 | 六 | 马杜罗之妻(与其夫一同被捕)。归入原因:冷门人物,无定译 |
| Lee Miringoff | 李·米林戈夫 | 十 | 马里斯特大学公共舆论研究所所长。归入原因:冷门人物,无定译 |
| Yevhen Mezhivikin | 叶夫亨·梅日维金 | 二 | 乌克兰武装力量总参谋部训练总局副局长。归入原因:冷门人物,无定译 |
| Yurii Myronenko | 尤里·米罗年科 | 二 | 乌克兰国防部副部长/监察长(曾领导DELTA团队)。归入原因:冷门人物,无定译 |
| Christian Freuding | 克里斯蒂安·弗罗伊丁 | 二 | 德国陆军司令(中将)。归入原因:冷门人物,无定译 |
| Dmytro Lykhovii | 德米特罗·利霍维伊 | 二 | 乌克兰军事发言人。归入原因:冷门人物,无定译 |
| Chris McGuire | 克里斯·麦奎尔 | 七 | CFR 中国与新兴技术高级研究员。归入原因:冷门人物,无定译 |
| Jessica Brandt | 杰西卡·勃兰特 | 七 | CFR 技术与国家安全高级研究员。归入原因:冷门人物,无定译 |
| Militarnyi | 《军事情报》网站(Militarnyi) | 十 | 乌克兰军事媒体。归入原因:冷门媒体,无中文实例 |
| RBC-Ukraine | RBC-Ukraine(乌克兰 RBC) | 十 | 乌克兰新闻机构。归入原因:无中文实例,保留英文 |
| Jeremy Chan | (中文名待核,暂不收录) | 五 | 南华早报解放军军力报告文引述的分析师(质检清单提及)。归入原因:中文名无法确认 |

## 十四、易错点提醒

1. **Key terrain**:战术语境是"要点/关键地形",2026 NDS 语境新华社作"关键地域"。别混。
2. **Eastern Sentry**:以新华社/参考消息"**东部**哨兵"为准,网上"东方哨兵"是次选。
3. **East Shield**:波兰的是"**东方盾牌**"(参考消息),别和"东部哨兵"搞混--一个是波兰国家工程,一个是北约行动。
4. **EFDI ≠ EFDL**:EFDI 是美陆军欧非司令部支持的倡议,EFDL 是北约陆军司令部的作战概念,同源但不同主体,正式文本中不要互换。
5. **A2/AD**:这是美方给我军贴的标签,写作时应表述为"美方所称的'反介入/区域拒止'能力",不宜直接自称。
6. **Golden Dome**:官方用"金穹","黄金穹顶"是直译俗称,正式文本用前者。
7. **Hellscape / Replicator / Porcupine**:全部是美台话语,引用必须加引号并注明为美方构想。


---

## 附:来源清单

**外文智库与官方来源**
- CSIS《Wartime Footing: A Two-Front Strategy》(2026-06-08);《Russia Reshapes C2 for AI-Enabled Warfare》(2026-02-10)
- RAND《AI Implications for CBRN Defense Policy》(2026-04-16);《Gamification of Narrative Language and Grassroot Cognitive Warfare》(2026-03-18);AGI Rideout 战略报告(2026-04-27)
- IISS 印太 ACE 评估(2026-03-16);《AI Distillation Attacks in US-China Competition》(2026-05-13)
- IISS《A Growing Missile Threat to the US Homeland and the Emerging Arms Race》(2026-06,导弹对话倡议);IISS《Brazil's New Class of Frigates》(2026-06,军力平衡);IISS《Military AI Governance Under Strain》(2026-06)
- ECFR《America's Direct Return Doctrine》(2026-06,吉姆·奥布莱恩);ECFR《Hungarian Thaw, Slovak Freeze》(2026-06);ECFR《Europeans Don't Need Consensus to Challenge Israel》(2026-06);ECFR《Beyond Brexit and Back to Europe》(2026-06,马克·伦纳德);ECFR《Why Half-Measures Won't Solve Europe's Data Centre Energy Crisis》(2026-06);ECFR《Musk's War on European Democracy》(2026-06);ECFR《If the UK Wants to Rejoin the EU...》(2026-06)
- 西点军校利伯研究所《Warification and the Illusion of Precision》(2026-05-13);现代战争研究所 AI 参谋实验(2026-04-24)
- 查塔姆研究所《Iran War Highlights Creeping Use of AI in Warfare》(2026-03-27)
- CNAS《Taiwan's Hellscape: Rethinking Asymmetric Defense》(2026-02)
- 美陆军欧洲-非洲司令部 EFDI 官方页面;北约陆军司令部(LANDCOM)2026-01 军长会议通稿;导弹防御倡导联盟(MDAA)EFDI 简报
- 欧洲议会研究服务处《Eastern Flank Watch and European Drone Wall》(EPRS 2025-777962)
- 美国防部 2026 年《国防战略》非密版(2026-01-23)

**国内中译依据**
- 新华社:《解读美国新版国防战略四个关键词》(2026-01-26)、《美国新版国防战略"靶心"何在》(2026-01-30)、《北约求助私企应对无人机"入侵"》(2026-02-04)
- 参考消息:北约东翼系列报道、波兰"东方盾牌"、"东部哨兵"行动
- 中国外交部发言人毛宁、国防部发言人张晓刚就"金穹"的表态(2025-05)
- 军网 web.junhao.mil.cn:《从"网络中心"到"决策中心"--对美军"马赛克战"的再认识》
- 清华大学战略与安全研究中心《CISS 海外信息专报》(总第 926-939 期)
- 《指挥控制与仿真》《中国舰船研究》《德国研究》《国际关系研究》
- 中国社科院台湾研究所:CNAS"地狱景象"报告摘编(2026-03-09)
- 环球时报:帕帕罗"地狱景象"言论报道及军事专家评论
- 复旦大学孙德刚《"全球南方"中等强国的崛起》;上海国际问题研究院陈东晓关于全球南方与多元秩序竞争的论述

---

## 待核实译名（2026-08-29 质检发现）

> 触发：127/128 批质检 issues（2026-08-29 晨）。原则：把握不准不硬编主表，候大金牛定夺后迁入正式词条并删除本节条目。

| 原文 | 候选修名 | 说明 | 来源批次 |
| --- | --- | --- | --- |
| Akıncı（土耳其 Baykar 重型无人机） | ①音译"阿金奇" ②意译"游骑兵" ③保留原文 Akıncı | Akıncı 土耳其语本义"袭击者/游骑"；国内无统一译名：维基百科定名"巴伊拉克塔尔'游骑兵'重型无人机"，新浪军事用"阿金奇"，多数媒体保留原文；128 批译文曾误冠"旗手"（旗手系 Bayraktar 本义，该篇已用于 Bayraktar K2），已在上文 Baykar/Bayraktar 条加注防混淆 | 128（2026-03-18 土耳其 Bayraktar K2 篇） |


---

### rule-openclaw-only（openclaw-only）

visibility: openclaw-only

> ⚠️【全文件通用·通用核实原则（2026-08-05 大金牛设定，永久生效）】遇到无法自主判断且难以推进的情况，必须先跟主人核实，不许先砍后揍（先斩后奏）。本原则适用于本文件全部规则，各节不再重复标注。

# OpenClaw 专用规则（openclaw-only）

> 本文件为 OpenClaw（本地主 Agent）专用规则，不与其他智能体（WorkBuddy 等）通用。
> 2026-08-13 从 rule-run-all.md 抽离恢复独立：2026-08-08 规则合并时，以下原 openclaw-only 级规则被并入 all 级 rule-run-all，导致 WorkBuddy 可读；2026-08-13 按大金牛指示抽回本文件（visibility: openclaw-only）。
> 来源规则（2026-08-08 合并前均为 openclaw-only 级）：rule-token-budget.md / rule-model-switch.md / rule-version-lock.md / rule-sync-mechanism.md / md-standard.md / rule-writing-ai-detection.md。

---

# 规则：Token 预算（2026-07-10 更新）

## 标准日预算（固定）
- 每日总消耗（输入+输出）上限：1亿 tokens
- 所有日常操作均适用此限额

## 临时额度（由主人控制）
- 超出 1亿/日 的消耗为临时额度，需大金牛说"放开跑"才启用
- 不要自己判断要不要超预算

## 已授权的临时额度任务
- 翻译任务：4亿 tokens
- 抢号脚本：4亿 tokens
- 山药AI视频营销工具：4亿 tokens

## 默认模型
- 所有任务默认用 V4 Flash（1/2 每百万 tokens）
- 只有大金牛明确说用 Pro 才用 Pro

---

# 规则：模型策略（2026-08-31 更新，千问自由使用）

## 当前模型：千问（Qwen）系列
- **当前会话模型**：cherry-dashscope/qwen3.7-plus
- **策略**：千问各模型自由使用，不需要每次确认
- **优先消耗免费token**：每个千问模型都有赠送的免费token，先用完这些再说
- **灵活切换**：根据任务需要自主选择合适的千问模型，不用拘泥于让大金牛确认

## 模型切换流程（简化版）
1. 大金牛通知切换模型（或龙虾根据需要自主选择千问模型）
2. 大金牛在Cherry Studio手动切换（如需）
3. 我检查确认两边同步

## 历史规则（已废弃）
- ~~智谱模型优先级（glm-4.5-air / glm-4.7 / glm-4.6v）~~ — 2026-08-31 删除，智谱已弃用
- ~~每次模型切换需大金牛确认~~ — 2026-08-31 放宽，千问模型可自主使用

---

# 规则：DeepSeek 峰谷休息时段（2026-08-16 设定，2026-08-17 生效，2026-08-23 更新周六日豁免）

- **背景**：2026-08-16 起 DeepSeek 涨价，按峰谷走省钱；生效时间 2026-08-17 0:00 起
- **工作日（周一至周五）**：每天 9:00-12:00、14:00-18:00 不工作（不跑翻译批次、不派子代理批量任务，峰时段=贵时段）
- **可工作时段（工作日）**：00:00-09:00、12:00-14:00、18:00-24:00
- **🆕 周六日无峰谷（2026-08-23 DeepSeek 改规则，永久生效）**：DeepSeek 取消周末峰谷政策，**周六、周日不受峰谷时段限制，可全天工作**；工作日仍按峰谷执行
- ⛔ **不设固定强停 cron、不设固定截止时间**：每天停止翻译的具体时间由大金牛当天告知（2026-08-14 规则，勿自行固化）；峰谷休息时段是硬性下限，只允许更早停不允许更晚跑

---

# 规则：版本锁定 & 防崩溃（2026-07-16 设定，2026-08-01 更新锁定值）

## 核心
1. 运行版本以实际生效者为准，锁定值随 Cherry Studio 升级同步更新（当前锁定 v2026.6.11，npm 全局版 openclaw.mjs）
2. 配置文件 meta.lastTouchedVersion 必须与实际运行版本一致（当前 2026.6.11）
3. 等待 Cherry Studio 更新其打包的 openclaw.exe 后才考虑升级

## 严禁操作（绝对禁止）
1. openclaw doctor --fix 或 openclaw doctor --non-interactive
2. update.run
3. 任何调用 npm 全局版 openclaw.mjs (v2026.6.11) 写入配置的命令

## 原因
07-16 因执行 doctor --fix 导致 npm 版（v2026.6.11）写配置文件，Cherry Studio 打包的 EXE（v2026.3.14）读不了配置版本号，Gateway 连续崩溃 2 次。

---

# 云端规则同步机制（2026-08-04 设定）

## 本地权威源
- 路径：D:\龙虾记忆\工具与缓存\cloud-registry\（rules\ + registry.json + 云端规则台账.md）
- 同步脚本：D:\龙虾记忆\工具与缓存\scripts\sync_all_cloud.js

## 流程
改 rules\<key>.md → node sync_all_cloud.js --sync → 自动验证 + 台账更新

## 规则
- 任何规则修改必须走此流程
- status_* 为检测状态上报区（见 status_health）

---

# md 文件管理规范（2026-08-05 大金牛设定，永久生效）

## 核心原则：不随便新建 md，在原有 md 上修改

大金牛指出我最近反复新建 md 文件，容易造成版本混乱（例：国际军事地缘专用名词中译对照表.md / 国际军事地缘专用名词库.md 并存）。

## 规则

1. **允许一版一个 md 的例外（仅限三类）**：
   - 文章深度（军事/地缘政治深度文章，如《装填手》V1~V9）
   - 直播话语（B站直播稿件）
   - 山药脚本（山药AI视频营销脚本）
   
   这三类可以一版一个 md 文件（便于版本对比与回溯）。

2. **其余所有内容（词库、规则、素材、知识库、工具备忘等）**：一律在原有 md 上直接修改，不新建 md。

3. **遇到新话题、新规则时**：先询问大金牛是否需要"一版一个 md"，得到明确答复后再决定是否新建。

4. **示例（2026-08-05 落地）**：
   - 国际军事地缘专用名词：删除旧文件《国际军事地缘专用名词中译对照表.md》，唯一主文件为《国际军事地缘专用名词库.md》，以后所有增改都在此文件上进行。

---

# AI 检测逻辑学习库（2026-08-05 建立，大金牛定期提供参考，我学习吸收）

## 用途
大金牛会用 workbuddy 内置 AI 检测我的文章，把检测逻辑定期发给我学习。
本文件是学习成果沉淀，用于润色时自查，减少"AI 味"。更新时直接改本文件。

## 检测信号与对策（按严重度排序）

### 1. 破折号（——）滥用 —— 最高频信号 ⛔
- **检测标准**：全文约 50 处（平均每 4–5 行一处）即超标；典型：每节都有 3–6 处
- **为什么**：高密度破折号是机器特征的经典信号；多数破折号用得对（插补注、甩金句），但密度高就被识破
- **对策**：写完后数一遍，留一半，另一半换逗号、括号或拆成两句
- **实测**：V11 有 43 处、32 行涉及（平均每 8 行一处），已超标，下版必须削减
- **替换示例**：「这套机制不是坏了，是它本来就这么设计的」完全不需要破折号

### 2. 加粗滥用 —— 中频 ⚠️
- **检测标准**：加粗短语 40+ 处（对公众号是正常排版，但密集加粗带"AI 摘要体"观感）
- **对策**：每节只留 1–2 个真正要读者记住的点，其余去掉；避免连续小节全加粗（节奏重复感强）
- **实测**：V11 有 16 处，偏多；「战区可用库存、全球总库存、年产能与再生速度」这类术语加粗可去掉

### 3. 「不是 A，而是 B」转折模板 —— 低频但高频使用 ⚠️
- **检测标准**：全文用 5 次以上会被当成模板（这是好的修辞签名，但高频即模板）
- **对策**：保留 2–3 处最强的，其余换说法：「真正的瓶颈在…」「难点是…」
- **实测**：V11 高达 **16 处**（不是…而是/不是…是），远超 5 次红线，下版必须大砍
- 例：「问题不是缺钱，是钱在预期时间内变不成东西」保留；「不是讽刺，是现实」可换「这不是讽刺，就是现实」或拆句

### 4. 三段式/排比枚举 —— 风格签名，低频可保留 ✅
- **检测标准**：三受益者/三方法/三层串联等结构，属作者风格
- **对策**：低频时是好的排比，保留；同一篇文章不要出现多次三段式（3 次以上警惕）
- **实测**：V11 有 5 处"三个X"（三细节/三口径/三结论），略多，下版留意

## 润色自查流程（写完后过一遍）
1. 数破折号 —— 超过 ~25 处/全文（约每 10 行 1 处）必须削减一半
2. 数「不是 A 而是 B」—— 超过 3 处必须换说法
3. 扫加粗 —— 每节保留 ≤2 处
4. 扫三段式 —— 全文 ≤2 处
5. 数字/链接/事实不动（硬规则，优先级最高）

## 学习记录
- 2026-08-05：首次接收（基于下篇 v2 检测报告），V11 实测 43 破折号 / 16 加粗 / 16 处「不是A而是B」/ 5 处三段式，确认检测逻辑全部成立


---

### rule-run-all（all）

visibility: all

> ⚠️【全文件通用·通用核实原则（2026-08-05 大金牛设定，永久生效）】遇到无法自主判断且难以推进的情况，必须先跟主人核实，不许先砍后揍（先斩后奏）。本原则适用于本文件全部规则，各节不再重复标注。

# 运行规则汇总（Token/模型/子代理/版本/盘符/文档/状态等）

> 本文件由 rule-token-budget.md + rule-model-switch.md + rule-subagent-isolation.md + rule-version-lock.md + rule-sync-mechanism.md + rule-d-e-priority.md + md-standard.md + rule-writing-ai-detection.md + task-mcp-cloud.md + task-military-analysis.md + tencent-docs.md + plagiarism_tools_memo.md 合并而成（2026-08-08 规则合并，原 key 已废弃）。
> 2026-08-13：其中 OpenClaw 专用条款（Token 预算 / 模型切换 / 版本锁定 / 云端规则同步机制 / md 文件管理规范 / AI 检测逻辑学习库）已抽回独立文件 rule-openclaw-only（visibility: openclaw-only），本文件不再包含，仅留交叉引用。

---

> （OpenClaw 专用条款见 rule-openclaw-only：Token 预算 / 模型切换）

# 规则：子代理隔离与执行规则（2026-07-10设定，2026-07-16补充，2026-07-28补充确认事项，2026-07-28 17:45调整D/E盘规则）

## 主会话安全隔离
主会话只做：聊天、读文件、纯思考、配置编辑、memory操作
必须走子代理的操作：
1. exec运行任何命令行
2. 下载文件、安装程序
3. 运行Python/JS脚本
4. 可能引起Gateway重启的操作

## 什么时候用子代理
- 批量任务>10次循环必须用子代理
- 任何可能产生大量日志/输出的任务
- 任何exec操作

## 子代理编写要求
1. 断点续跑 - 写progress.json
2. 上下文精简 - 只输出进度摘要
3. 自动重启 - 跳过已完成文件
4. 结果汇报 - 总数/成功数/失败数/耗时/总大小

## 需要向大金牛确认的事项（2026-08-31 更新）
- ~~使用智谱通用token池前~~ — 已删除（2026-08-31，智谱弃用）
- 消耗达到token预算边界时
- ~~模型切换时~~ — 2026-08-31 放宽：千问模型可自主使用，无需每次确认

## 可自主决定的事项
- D/E盘写磁盘操作（大金牛授权可自主决定，不影响软件运行即可）

---

> （OpenClaw 专用条款见 rule-openclaw-only：版本锁定 / 云端规则同步机制）

# 规则：D/E 盘优先（永久生效，2026-07-09 设定）

## 核心
1. 所有写磁盘操作（下载、安装、创建文件/文件夹、移动/复制文件）优先在 D 盘或 E 盘进行
2. C 盘非必须情况不允许使用（OpenClaw 本体除外）
3. D/E 盘写操作可自主决定（2026-07-28 大金牛授权），不影响软件运行即可；C 盘非必须不使用
4. 例外：读文件、检查系统状态不需要确认
5. 如果发现配置/环境变量指向非 D/E/C 盘，立即报备

## 原因
保护 C 盘空间，避免系统盘被填满。

---

# 规矩：工作区读写边界（2026-08-14 修订版，2026-09-04 并入云端）

> 下达人：大金牛；有效期：永久，适用所有会话、所有任务、所有智能体。
> 本节即唯一权威原文（2026-09-04：vault 根目录旧文件《规矩.md》全文并入后已删除，不再另设人读正本）。今后改规矩＝直接改本节 → `sync_all_cloud.js --sync` → `gen-cloud-summary.js` → `gh-push-cloud-docs.js`（云端 MCP + GitHub 双落地）。

## 一、只读/保留范围（仅此一处）
- `D:\deepseek-harness` = DeepSeek Harness 实现目录（checkout），**只用于检查或扩展 DSH 本身**；不是任务工作区。
- 任务文件一律放 `D:\龙虾记忆`，不写进 harness。
- 本条是**用途范围限制**而非字面"只读"条款；能否写入最终由 DSH 文件沙箱按会话权限执行（见第四节）。

## 二、可写范围（工作区）
- `D:\龙虾记忆`（含所有子文件夹与隐藏文件，如 `.obsidian`）：智能体可**正常读取和写入**——新建、编辑、重命名、移动、覆盖、删除均允许。平台临时区域同样可写。

## 三、旧版声明作废
- 2026-08-14 旧版《规矩.md》"死规矩：本文件夹只读"已由用户本人于同日 22:01 修订**作废**；此后以本版为准。

## 四、给所有智能体的权限事实
1. 读写边界由 DSH 文件沙箱会话权限决定：`read-only` / `workspace-write` / `danger-full-access`；审批策略 `ask` 或 `never`（2026-09-04 起用户手动设为 danger-full-access + never：不弹审批、禁止请求 sandbox 升级）。
2. 子代理（subagent）权限范围创建时固定，**不能自行升级**；被拒绝的操作不要重试，在回复中说明限制，由父代理处理。
3. 任何 edit / write 之前必须先 read 目标文件（fs-observation-policy 流程要求）。
4. `workspace-write` + `ask` 会话：写工作区正常执行；写 harness 被拒时可用 `sandbox_permissions` 对同一条被拒操作做一次性升级重试并附一句理由，由用户批准后执行。

## 五、临时文件处理规矩（大金牛设定，2026-09-04 重申）
- 工作区里的临时产物/空壳文件（如误生成的 `未命名.base`、一次性脚本输出）：**能清理就清理（直接删）**。
- 不能清理的：**统一打包**后放进 `D:\龙虾记忆` 下**新建的专用文件夹**，不散落在业务根目录。
- 注：`D:\龙虾记忆\临时（非主人确认不要删除）\` 文件夹内内容除外——该文件夹本身需主人确认才能动。

---

> （OpenClaw 专用条款见 rule-openclaw-only：md 文件管理规范 / AI 检测逻辑学习库）

# 任务：MCP 云基础设施

## 描述
Cloudflare Worker + KV 数据库 + 自定义域名的 MCP 云服务。

## 配置
- Worker: mcp-db（部署中，service worker 格式）
- KV 命名空间: MCP_DATA（namespace ID: a6eb6be1f01f41a49f470af55d55260c）
- 自定义域名: mcp.zjdmyzyq.com.cn -> CNAME -> mcp-db.6n1.workers.dev
- GitHub 仓库: zjdmyyzyq-stack/mcpcherryworker
- 国内访问: 必须走自定义域名（workers.dev 被墙）

## 可用工具
- get_rule: 按 key 查询规则
- set_rule: 写入/更新规则
- list_rules: 列出所有规则名称
- delete_rule: 删除规则
- search_rules: 模糊搜索规则

## 访问权限
- OpenClaw（本地运行）: ✅ 可直接调用，无需询问
- 其他 AI Agent: ❌ 必须询问大金牛后才能调用

---

# 军事直播 + 深度文章撰写（固定任务）

> ⚠️**【智能体必读】**：本文件是**规则文件**（不是文章草稿），按板块分类——【任务定义】【素材库】【直播规则】【文章深度规则】【定稿规则】【🚨风闻规则】【通用原则】。执行任务前先定位到对应板块再动手。**规则可以更新**（大金牛授意时），更新时保持板块结构清晰，不要把不同板块的规则混在一起。

---

## 一、任务定义（固定任务，永久有效）

固定任务（与智库文档翻译同级，2026-08-01 设定，2026-08-02 扩展为直播+深度文章双轨，永久有效，除非主人明确清除）：

- **任务内容**：军事/地缘政治类深度文章撰写 + 直播（B站），两者共用素材库与线索库
- **素材来源**：外网智库 WOTR/IISS/CSIS/TWZ/Defense News/Brookings/CFR/FPRI/Seapower + 国内观察者网/网易/搜狐/凤凰
- **状态**：进行中，待大金牛主动安排

---

## 二、素材库与线索库

【📋 深度文章备选（军事线索事件清单 v2，2026-08-02 完成）】源自腾讯文档《军事线索整理（202509-202609）》3594条线索，按事件细分聚类为 53 个事件组 + 装备附录：

- 美伊冲突 545 条（14组：开战空袭/霍尔木兹能源/海湾盟友/以色列参战/国际反应/停火外交/中俄角色/伊朗国内/战争决策/战争分析/核问题/海上作战/防空反导/军事集结）
- 欧洲军事 707 条（11组：俄乌战场/军援武器/各国军备/北约东翼/战略分析/和谈外交/防务自主/北欧北极/能源工业/特朗普撤军）
- 美军军队改革 443 条（14组，不含武器装备：组织司令部/科技AI/预算审计/采购工业/军事文化/战略条令/人事将领/赫格塞斯改革/海外驻军/争议/征兵福利/太空卫星/学术教育）
- 涉中 345 条（14组：印太盟友/中美关系/台海台湾/解放军军力/中俄影响力/对华战略/AI科技/供应链矿产/经济人口/南海菲律宾/社会治理/军力评估）
- 美军武器装备 314 条（已剔除为附录，装备类另有《武器装备重建》《维修更新》专项文档）
- 未聚类 1237 条备查

---

## 三、🎙️ 直播规则（B站直播任务专用）

1. **直播标题**：8 选已给大金牛（新版辩证反差型：「美军的确出现严重问题，但没有大家想象的那么多问题」），待大金牛选标题 → 出直播提纲
2. **合规资料**：B站直播合规与违禁词参考、违禁词屏蔽清单均已备妥（`D:\龙虾记忆\B站直播合规与违禁词参考.md`、`D:\龙虾记忆\B站直播违禁词屏蔽清单.md`）
3. **直播与文章关系**：共用素材库与线索库，但直播话语（口播稿）与文章是两套产出，不混用

---

## 四、📝 文章深度规则（深度文章撰写专用）

### 4.1 写作基础规则

**规则 1｜禁止元数据头**：文档开头禁止出现「研究机构」「日期」「版本」「引用体例」等行。

**规则 2｜禁止「研究方法与数据基础」章节**：不写方法论表格、不写"46条线索/16篇原文"这类研究过程描述，直接进正题。

**规则 3｜写作体例**：智库/论文风（执行摘要→引言→分节论证→结论），论点与论据分离，论据遵循 主张→证据→来源→评估。

**规则 4｜引用格式**：
- 新文章默认：**风闻版上标编号格式**（见「六、🚨风闻规则」及规则 21）——上标数字 ¹²³ + 文末编号 URL 列表
- 超链接格式（正文标题+超链接可点击）：仅用于**海外投稿等特定场景**（如 cimsec/reddit），按需转换
- 定稿 v15/v6 保持超链接格式不覆盖

**规则 5｜中国网民反驳点（仅普通版本适用）**：单独列成独立章节，不混入正文；每条含【反驳主张】→【论据展开】→【力度评估】。【注：风闻版一律删除该章节，见「六、🚨风闻规则」】

**规则 6｜转换**：md 写好后用 pandoc 转 docx（子代理执行）。【注：除定稿或大金牛明确说明外一律只出 md，不转 word，见「五、定稿规则」】

### 4.2 素材与信源规则

**规则 7｜信源截止时间**：文章所选信源全部截止到 2026 年 7 月前，7 月之后的信源不选用（腾讯文档军事线索文档已更新到该时点）。

**规则 8｜自搜线索确认**：除腾讯文档军事线索（以后可能不止一个文档，按大金牛告知的新文档为准）中的线索外，自己搜索到的线索必须列出来给大金牛确认：线索是否正确、是否可选用，确认后才能写入文章。

**规则 9｜PDF 文件操作**：遇到有 PDF 文件需要操作的（翻译、提取内容、抓取数据等），**必须先问大金牛，由他提供 PDF 文件**，不得自行直接翻译、反爬抓取或绕路获取。

**规则 10｜定稿信源交付**：最终文章定档后，将所有信源整理成清单，用 md 文件发给大金牛，**只含信源和标题，不要文章内容**。

### 4.3 文字质量规则

**规则 11｜句法与涉中比例**（2026-08-06 大金牛反馈，永久生效）：① 主谓宾要清晰：句子主谓宾结构不能乱，写完后自查每句主干；② 用词精准：避免模糊/不准确的词汇；③ **涉中内容比例控制**：下篇 V3 反馈「涉中太多了」，以后涉中内容尽量少——可以有但不能多，控制篇幅占比，非必要不提。

**规则 12｜润色规则**（2026-08-05 大金牛设定，永久生效）：润色时**不得为了迎合/满足大金牛而把文字改得乱七八糟**，不得胡编乱造、不得凭空增减事实。忠实于原文语义与已有事实，只做通顺与衔接层面的润色。反面教材：同系列文章中 V1 版的润色最完美（大金牛原话），而 V6、V8 存在胡编乱造问题，属严重违规。

**规则 13｜武器装备专有名词引号**（2026-08-06 大金牛设定，永久生效）：武器装备的特有名称和军事专有名词**必须加引号**：如「爱国者」拦截弹、「战斧」巡航导弹、「歼-20」「F-35」「THAAD」等——写稿/改稿时自查所有武器名、装备型号、军事专有名词是否都加了引号。

**规则 14｜引号/词法全文统一**（2026-08-06 大金牛设定，永久生效）：同一词汇在整篇文章中要么**全部加引号**、要么**全部不加引号**，不得时加时不加（如「口径」一词全文统一）。这是写文章的基础逻辑，写稿/改稿后必须全文扫查一遍引号使用是否一致；其他词类同理（术语、简称、强调词等），同一词的处理方式全文统一。

**规则 15｜AI 味自查**（2026-08-06 经 workbuddy 分析 + 大金牛确认学习，永久生效）：写稿/改稿后按以下清单自查，降 AI 味：
① **整句加粗控制**：每篇整句加粗 ≤8 处（下篇曾达 25 处严重超标），只加粗真正的金句/关键数据，论点用正常句子写，不拿加粗当小标题；
② **编号枚举打散**：超过 3 条的「一是…二是…」枚举拆成自然段落，或混用「再说」「还有一点」「更隐蔽的是」等衔接；全篇显式编号清单 ≤1-2 处；
③ **删元自指**：「本文/作者想探究的命题是」「给读者留一个可以带走的方法」这类框架句直接删，改成论断本身；
④ **收尾降温**：格言式升华句每篇 1-2 处封顶，其余让事实自己收尾；
⑤ **元叙述区分**：「需要说明的是/注意」在口径澄清、术语界定时有实质功能（保留但全文 ≤3 处）；纯自证式免责声明（「本文只提出观察点不做定论」）删除；
⑥ **概念回扣控制**：核心隐喻（如「独苗」「装填手」）单篇出现 ≤6-7 次，回扣时换变体表达防机械感；
⑦ **句长节奏**：避免全是「主语+论断+证据+解读」四拍句，长短句交错，段落忽长忽短。
【例外】口径自证句（「本文前文用的也是战区口径」）不属于 AI 味，是口径严谨的实质要求，不得删。

**规则 16｜涉中内容中性化**（2026-08-06 大金牛设定，永久生效）：涉中内容尽量中性：① **去指向化**：不写「对手不在太平洋对岸」这类暗示指向中国的表述，改用中性说法（如「对手不是自己的敌人」）；② **不把中国当默认参照系**：非必要不提中国，提了也不要暗示、不点破；③ **控制篇幅占比**：可以有但不能多，非必要不提（与规则 11 涉中比例一致）。【备注】美吹尺度不写成规则，具体问题具体分析。

**规则 17｜大金牛修改风格学习笔记**（2026-08-06，对比 v12/v3→v13/v4 总结，永久生效）：
- **主谓宾补全/理顺**：「卡在了弹体锻造」→「卡在弹体锻造这道工序上」（缺宾语要补全）；「结论是系统性的」→「结论是一个系统性问题」（语义不完备要补全）；「超过美国一年能造的几倍」→「超过美国一年产量的好几倍」；「动作是…最大的一轮」→「动作力度是…最大的一轮」
- **口语→书面**：「这玩意」「是它们的」「四亿多美元出去了」→正式书面语（「该公司独有的」「花出去了」）
- **用词精准**：「核心理由」→「核心原因」（分析性归因不用"理由"）；「内部压力」→「内耗」；「瓶颈」→「卡点」（避免与后文"瓶颈约束"重复）；「利用这种模糊性」→「建立在口径的模糊之上」（去主观恶意暗示，保持理性中立）；「姿势」→「姿态」；「未被入侵」→「未被外敌入侵」
- **语序/逻辑**：时间+身份+升迁按序排列（CQ·布朗句用破折号衔接）；「不只是一…更是…」递进结构优于「远不止…」
- **去重**：下篇凡上篇讲过的细节一律压缩为「细节见上篇」，不重复展开（爱国者导引头、战斧发动机两处均如此改）
- **口径严谨**：数据必须标清口径（Wickert 例：西太平洋部署/全球现役/战斗编码三口径分开列）；主动补反例（地理禀赋补阿留申群岛 1942 被日军占领）
- **去涉中化**：「那么对中国来说，正确的姿势是什么？」→「那么，正确的姿态应该是什么？」（删除涉中指向）
- **简洁**：删冗余主语（「大家会发现」）；压缩句式（「没有外部压力的时候」→「没有外部压力时」）；删重复词（「同样还有几条观点，同样值得」→「还有几条观点，同样值得」）

### 4.4 默认写作格式

**规则 18｜默认写作格式**（2026-08-06 大金牛确认，永久生效）：文章深度的**新文章默认按风闻版格式写作**（含定稿 md/docx 生成）：标题加疑问式副题 / 引用用上标编号（Unicode 上标数字，如 ³ ⁴ ⁵）+ 文末编号 URL 列表 / 小标题短语化 / 中英对照概念标题 / 文末信源声明 / 系列品牌植入 / 第一人称观点段。超链接格式仅用于**海外投稿等特定场景**（如 cimsec/reddit），按需转换。**定稿 v15/v6 保持现有超链接格式不覆盖**。

---

## 五、📦 定稿规则（定稿交付与管理专用）

**规则 19｜定稿交付流程**（2026-08-06 大金牛设定，2026-08-06 20:20 补充，永久生效）：每篇文章**最终定稿后**：① 单独出一个 md 文件，列出本篇文章所用信源和标题（只含信源+标题，不要文章内容）；② 同时生成**定稿 md + docx**（docx 用 pandoc 子代理转换），**定稿 md 必须重命名为「定稿」命名**，与 docx 同名（如 `投稿_上篇_定稿_决定战争长短的是装填手.md`，与 `.docx` 一一对应），**不能继续挂着 v15/v6 这种版本号名**；③ 生成成功后，将之前**所有未定稿的稿件版本**（含版本号版）移动到 `D:\龙虾记忆\文章深度\临时文件夹\`；④ 临时文件夹中的文件 **45 天后自动删除**（已设 cron 自动清理，无需手动处理）。【注】文章深度任务除定稿外一律只出 md 版本，不转 word。

**规则 20｜文章命名规范**（2026-08-06 大金牛设定，永久生效）：① 论文版直接在 md 文件名上标「论文」即可（如 `论文_存量充裕与再生受阻.md`），不需要单独开目录；② 草稿命名必须能看出「属于哪篇 + 是草稿」（如 `投稿_上篇_草稿_五亿美元一发不响.md`），禁止用「文章版_xxx」这种像独立文章的命名；③ 版本号规则照旧（改动开新版本号，严禁覆盖已有版本号文件）。

**规则 21｜版本号规则**（2026-08-06 12:58 大金牛纠正，永久生效）：**文章深度系列一版一个 md，改动必须开新版本号（如 v14/v5），严禁覆盖/写入已有版本号文件**（大金牛 12:58 纠正，永久生效）。本次 v13/v4 被覆盖大金牛已谅解（"这次就算了"），下次再犯不行。

**规则 22｜定稿冻结（铁律）**：**定稿 v15/v6（md + docx）一经大金牛确认，无核心逻辑缺失不得再改动**——格式、措辞、数据、章节结构，都算「改动」，一律禁止。定稿是「母版」：采用**超链接格式**（正文标题可点击直达原文），保留用于海外投稿（cimsec/reddit）等场景。任何智能体不得以任何理由**覆盖、修改、重命名**定稿文件。定稿文件名：
- `投稿_上篇_定稿_决定战争长短的是装填手.md` / `.docx`
- `投稿_下篇_定稿_两座船厂一座国会山.md` / `.docx`
定稿如确需修改（大金牛发现核心逻辑缺失），必须**先问大金牛**，大金牛同意后才能动。

---

## 六、🚨 风闻规则（观察者网发布版专用，最高优先级，所有智能体必读）

> **为什么单列**：风闻版是要投观察者网发布的版本，此前多个智能体（尤其 workbuddy）想改动它或改动定稿。以下为**硬约束**，任何智能体（龙虾、workbuddy、其他）都必须遵守，违反即违规。

### 6.1 风闻版与定稿的关系

- 需要投观察者网时，**新建**风闻版文件（命名遵循定稿规则 20：`投稿_上篇_风闻版_xxx.md`），从定稿改写，**不覆盖定稿**。
- 风闻版只做「**格式迁移 + 发布适配**」，**不得改动定稿的核心逻辑、数据、结论**。
- 风闻版改写完成后，**必须交大金牛审阅**，大金牛确认后才算数；大金牛确认前，风闻版不得视为定稿、不得对外投递。

### 6.2 风闻版格式规范（逐项执行，不得遗漏）

1. **标题**：加疑问式副题，如「决定战争长短的，是装填手：39 天消耗之后，美国弹药补得回来吗？」
2. **引用**：正文用**上标编号**（Unicode 上标 ¹²³…），格式（机构+编号，*原文标题*，日期），如（RUSI³，*Over 11,000 Munitions...*，2026-03-24）；文末附**编号 URL 列表**，一一对应。
3. **小标题**：短语化，10 字内、有画面感（如「十年前就响过的警报」「开战十六天，一万一千发」「梅斯基特：一座造不出炮弹的工厂」），禁止学术腔长标题。
4. **中英对照概念标题**：重要概念用「中文——"English Original"」双标题（如「重新装填的指挥权——"Command of the Reload"」）。
5. **文末信源声明**：必须写明「信源以美西方防务智库与媒体为主，整体叙事倾向『扩军』立场」「不排除受战略传播影响」等批判性声明。
6. **系列品牌植入**：开头或结尾注明「本文是《美国衰退的核心》系列之…」。
7. **第一人称观点段**：关键立场用作者直白表态（「我觉得需要理智看待…」），不藏着掖着。
8. **金句适度**：可保留少量金句（「订单是支票，产能才是现金」），但每篇 ≤2 处，不堆砌。

### 6.3 风闻版涉中谨慎（比普通版本更严）

- 风闻版**删除「中国网民反驳点」独立章节**（文章深度规则 5 在风闻版不适用，2026-08-06 大金牛 21:23 确认）。
- 涉中内容：**非必要不提**；提了不指向、不暗示、不点破；篇幅占比从严控制（比规则 16 更严）。

### 6.4 风闻版红线清单（违反即违规）

- ❌ 不得修改、覆盖、重命名**定稿 v15/v6**（铁律，见定稿规则 22）。
- ❌ 不得在风闻版**恢复「中国网民反驳点」章节**。
- ❌ 不得**添加涉中指向性内容**（如把「对手」暗示成中国）。
- ❌ 不得把**上标编号引用改回「标题+超链接」格式**（那是海外投稿格式，不是风闻版格式）。
- ❌ 不得**删改定稿的核心数据、结论、逻辑**（风闻版只做格式迁移）。
- ❌ 不得**自作主张重排章节结构**（如需调整，先问大金牛）。
- ❌ 不得在**大金牛确认前**把风闻版当作定稿使用或对外投递。

---

## 七、通用原则

【通用核实原则】本原则适用于以上全部规则（完整条文见文件头全文件通用声明）。

【状态】进行中，待大金牛主动安排

---

# 腾讯文档

## 基本配置
- 日调用限额：约 20000 次/天（会员）
- 已接入，Token 已配置
- 文档位置：云盘 -> 加密文件夹
- 加密文件夹密码：979706
- 目标文档位置：云盘 -> 加密文件夹

## 使用限制
- 调用前需确认当天额度是否充足
- Token 由大金牛提供，不可外泄

---

# 查重工具备忘（发论文/期刊查重用）

> **适用场景标注：论文/期刊投稿查重。**
> 投杂志网站（知乎/公众号/B站专栏）或做视频时**意义不大**——平台自带原创检测，读者杠点靠"长句加引号搜索引擎自查"即可覆盖，无需这些工具。
> 记录时间：2026-08-04（大金牛确认逻辑后归档）；来源：大金牛提供清单 + 子代理可行性评估

## 一、国内（基本需手动操作，登录/付费/验证码）

| 工具 | 场景 | 价格 | 备注 |
|---|---|---|---|
| 知网个人查重（cx.cnki.net） | 权威比对 | ~1.5元/千字 | 最权威，偏论文库；限本人+高峰期排队 |
| 维普（VIP）查重 | 权威比对 | 付费 | 中文三大库之二 |
| 万方查重 | 权威比对 | 付费 | 中文三大库之三 |
| PaperYY | 初稿快速查重 | 每日免费1篇 | 性价比之王，手动点一下即可 |
| 秘塔写作猫 | 改写+查重一体化 | 基础免费 | 标红重复片段，日常成稿自查顺手 |
| 大雅（超星） | 图书+期刊库比对 | 有免费额度 | 个人可上传自查 |
| PaperPass / 笔杆网 | 初筛 | 付费 | 辅助 |
| 百度学术查重 | 聚合多家 | 免费+付费 | 中间商，不推荐 |

## 二、国外（A类=注册付费后我可后台自动跑；B类=需手动）

| 工具 | 类别 | 价格 | 备注 |
|---|---|---|---|
| **Copyscape Premium API** ★ | A（首选） | ~$0.03/次起，4000-6000词约$0.4-0.6 | 专查"与网上已有内容雷同"，覆盖 Reddit/军事博客；自媒体写手标配 |
| **Copyleaks API** | A | ~$9.99/月起，有免费试用 | REST API 全自动，100+语言含中文，查重+AI检测一体 |
| Quetext API | A | ~$9.99/月起 | 比对算法对长句敏感 |
| SmallSEOTools / PlagiarismDetector / PlagiarismCheck API | A | $9.8起/月 | 便宜 |
| Grammarly Plagiarism | B | 需 Premium | 写英文稿顺带查 |
| QuillBot / Duplichecker / Prepostseo / PaperRater | B | 免费+付费 | 网页操作 |
| Scribbr / iThenticate | B | 单篇$125 | 出版级，投学术期刊才用；iThenticate 是 CrossRef 全库 |
| Turnitin | C | 机构限定 | 个人接触不到 |

## 三、不适用
- Turnitin（机构限定）、Writefull（非查重工具）、格子达（域名失效渠道混乱）、百度学术（无自有库）

## 四、组合建议
- **中文论文/期刊投稿前**：PaperYY 每日免费1篇 + 定稿前知网/维普一次定心
- **英文论文投稿前**：Copyscape API（后台自动）+ 可选 Copyleaks API
- **自媒体/视频**：不投入，平台自带原创检测 + 长句引号搜索即可

## 五、Copyscape 注册要点（若启用后台自动查重）
1. copyscape.com 注册 Premium 账户 → 预充值 $10（够查约25篇短文）
2. 在账户页面获取 username + API key
3. 把 username + API key 交给龙虾 → 封装脚本全自动跑

## 六、补充发现
- Copyleaks 是原清单最大遗漏：REST API 全自动、支持中文、带 AI 检测（顺带防"AI率"嫌疑）
- 维普/万方是中文权威三库之二（手动）
- PlagiarismCheck 便宜有 API



---

### rule-translation-all（all）

visibility: all

> ⚠️【全文件通用·通用核实原则（2026-08-05 大金牛设定，永久生效）】遇到无法自主判断且难以推进的情况，必须先跟主人核实，不许先砍后揍（先斩后奏）。本原则适用于本文件全部规则，各节不再重复标注。

# 任务与规则：翻译（智库翻译 + 线索翻译 + 输出规则）

> 本文件由 task-translation.md + task-clue-translation.md + rule-translation-output.md 合并而成（2026-08-08 规则合并，原 key 已废弃）。

---

# 任务：智库翻译（原智库文档翻译）

## 描述
DOCX/PDF 智库文档翻译为中文。

## 路径
D:\龙虾记忆\translation-script\

## 工具链
- Pandoc: D:\龙虾记忆\translation-script\pandoc\pandoc.exe
- translator.js / review-translations.js / embed-images.js / pandoc-convert.js
- pdftoppm（截图嵌入）

## 翻译规则
- 翻译输出禁止附加元数据（原文文件、翻译时间、模型名等）
- 仅翻译正文内容
- 默认模型：DeepSeek V4 Flash
- 所有引用原文必须准确，不得改写或润色（保留作者语气、立场、风格）

## 适用范围
- 只处理 DOCX/PDF 智库文档翻译
- ⚠️ 网页采集/线索翻译是另一个任务（见 task-clue-translation 规则《线索翻译》），本任务不适用其边界与图片处理规则
- ⚠️ 图片处理规则（2026-08-08 设定）仅适用于线索翻译任务，**本任务（智库翻译）不适用**

## 访问权限
- OpenClaw（本地运行）: ✅ 可直接开始任务，无需询问
- 其他 AI Agent: ❌ 必须询问大金牛后才能执行

---

# 线索翻译（原智库线索翻译，2026-08-06 规则确认版）

> ⚠️**【智能体必读】**：本文件是**规则文件**。本任务 = 把腾讯文档《军事线索整理》中每条线索**链接背后的英文文章**抓取并翻译成中文 md。**这是大任务（3594 篇）**，大金牛明确要求不得偷懒——翻译必须完整、准确、可回溯。执行前通读本规则。

---

## 一、任务定义

- **翻译对象**：腾讯文档《军事线索整理（202509-202609）》中每条线索的 `link` 对应的**网站文章全文**，翻译为中文 md
- **数据源**：本地 `军事线索整理_parsed.json`（3594 条，字段：date/cat/title/link/sheet；title 已是中文线索标题，**要翻的是链接背后的文章**）
- **触发方式**：**手动触发**——大金牛说「开始跑」才跑；不需要定时任务；**不操作腾讯文档**（文档由大金牛维护，之后有新增线索他会告知，届时机动补充翻译）
- **工作时间**（2026-08-07 设定，2026-08-14 更新，永久生效）：任务确定开始后，**晚上工作，具体开始时间不固定**；每天停止时间由大金牛当天告知（如「今天到 5:30」），到点硬停止、进度落盘，禁止超时运行（8-14 澄清：停止时间不固定，勿自行固化）
- **峰谷时段**（2026-08-16 设定，2026-08-23 更新，2026-08-28 更新）：**仅适用于 DeepSeek 模型**；工作日 9:00-12:00、14:00-18:00 为 DeepSeek 峰时段，不跑批不派子代理；**周六日无峰谷政策**（2026-08-23 DeepSeek 改规则，永久生效），周六周日可全天工作
- **与 task-translation 的关系**：task-translation 翻译 DOCX/PDF 全文（即「智库翻译」）；**本任务只翻网页文章**（即「线索翻译」）。进入网页后若遇到 PDF/docx 内容（网页内嵌下载链接、正文需 PDF 才能读全、或链接跳转到 PDF 文件本身），**不点击、不下载、不翻译**，**全部略过**（2026-08-09 大金牛设定：PDF 不再索要、不再记入待提供清单，直接跳过该篇）
- **状态**：规则确认后开始跑

---

## 二、执行规则

### 2.1 抓取

1. 对每条 `link` 用 web_fetch 抓取正文
1.1 **工具读不了原文的处理**（2026-08-07 大金牛设定，永久生效）：遇到进不去的网页（除 PDF/docx 链接外），或工具渲染读不了原文的——**尝试不同工具去读**（web_fetch 不行换 exec + curl/Invoke-WebRequest，再不行换其他可行方式），必须保证：①**主对话不崩溃** ②**不占 C 盘**（一切临时下载写 D/E 盘）③**不让电脑不能工作**（不跑死机级操作）。**实在读不了原文可以放下**，记入「读不了原文清单」（含链接+原因+已尝试方式），**询问大金牛**如何解决（他可能已有文件或知晓其他渠道），等确认后再处理；不得硬闯、不得反爬、不得凭记忆硬译
2. **抓取失败的链接**（反爬/网络不通/VPN 未开）：记入失败清单（`失败清单.md`），不硬闯、不绕路反爬；国内直连不通的外网站点（Defense News/WOTR 等）等 VPN 可用时统一补抓
3. **PDF/docx 处理**（2026-08-09 大金牛设定，2026-08-13 重申，永久生效）：
   - 进入网页后若遇到 PDF/docx（网页内嵌下载、或正文需 PDF 才能读全、或链接跳转到 PDF 文件本身）——**不点击、不下载、不翻译，全部略过**（不再记入「需大金牛提供文件清单」，不再索要文件，直接跳过该篇继续下一篇）；不硬闯、不反爬
   - **线索标题带「（有PDF）」标注的条目**：同样**直接跳过**——此类 PDF 全文翻译归「智库翻译」任务，大金牛会在智库翻译里单独提供 PDF，线索翻译不等待、不索要、不标 needUserFile（2026-08-13 大金牛设定，永久生效；iiss 13 条已按此标 skip）
   - 网页正文拿不到的**非 PDF 类**（如 reuters 被 CF 拦截）：记入失败清单，不索要文件，后续重试或等环境恢复
4. 跳过项：无有效链接（当前 2 条）、重复链接（27 条去重只翻一次）
5. **反爬兜底**：确认无法从正常渠道获取时，先记录，最后统一向大金牛求助（他可能已有文件，遵守通用核实原则）

### 2.2 翻译

1. **全文翻译**：忠实原文，不删段、不改义、不缩写；段落结构、小标题保留
2. **准确性**：数据、日期、人名、机构名、武器型号必须准确，不确定的标 `[?]` 并记入待核清单，**不得编造**
3. **专有名词**：按《国际军事地缘专用名词库》（D:\龙虾记忆\国际军事地缘专用名词库.md，222 条）译法；词库没有的新词按通用译法翻译并记入待收录清单
4. **输出语言**：中文（正文）+ 保留必要英文原名（机构名/武器名首次出现可括注原文）
5. **图片处理规则**（2026-08-08 大金牛设定，永久生效）：
   - **exec 输出渲染成图片：不要输出图片，只要纯文字翻译**（本任务只要求文字）
   - **数据分析类图片**（图表/数据可视化）：可备注说明「该图为数据图请核实」
   - **除数据图外，其余图片一律不翻译、不转码、不备注说明**
   - ⚠️ 此规则仅适用于本任务（线索翻译）；智库翻译（DOCX/PDF 文档翻译，见 task-translation 规则）不适用

### 2.3 输出与落盘

1. **md 文件统一放**：`D:\龙虾记忆\文章深度\军事线索翻译\`（新建文件夹，**该文件夹只放纯 md**）
2. **子文件夹按月份**：`军事线索翻译\2026-01前\`、`军事线索翻译\2026-02\` … `2026-07\`（与 sheet 字段对应）
3. **命名**：`YYYY-MM-DD_标题（截断30字）.md`，如 `2026-03-24_特朗普称美国将向沙特出售F-35战机.md`
4. **md 内容格式**（每个文件）：
   ```
   # 原文标题（中文）
   原文链接：<url>
   原文机构：<机构名> ｜ 原文日期：<date>

   ## 翻译正文
   （分段翻译，小标题保留）
   ```
5. **脚本、进度文件、失败清单、待核清单**等非 md 产物一律放 `D:\龙虾记忆\文章深度\` 下（脚本\ 或根目录），**不进** 军事线索翻译\ 文件夹

### 2.4 增量与断点

1. **首轮全量**：以前没生成过 md，本地无记忆，首轮从 0 开始全量翻译（3594 篇）
2. **断点续跑**：进度文件 `线索翻译_progress.json` 记录每条状态（pending/done/failed/skipped），中断后重启自动跳过已完成
3. **增量机制**：大金牛告知腾讯文档有新增线索 → 新增条目追加进 parsed json（或单独新增 json）→ 只翻未翻译部分，已翻的不重复

### 2.5 执行方式（子代理）

1. 主会话**不直接跑**抓取/翻译/写文件，全部丢子代理分批执行
2. **分批策略**：按月份 sheet 分批（第一批 26年1月前 492 条 → 2月 400 → 3月 707 → 4月 592 → 5月 484 → 6月 502 → 7月 417）
3. **每批 10 篇一个子代理**（2026-08-07 大金牛设定，永久生效：140 篇/批曾上下文溢出白烧 token，改 10 篇/批），progress.json 断点续跑，崩溃自动跳过已完成
4. **每 10 篇完事后自查落盘**：progress.json 逐篇更新 + 读回验证该 key 存在
5. **20 分钟子代理无回应 → 主对话干预**：查状态/落盘进度，无产出则杀掉重派（主会话用 cron/心跳检查，不轮询）
6. **环境自检用零 token 本地脚本**（2026-08-07 建立）：`D:\龙虾记忆\工具与缓存\scripts\env-selfcheck.ps1`
   - 子代理开工前跑一次：看到 `SELFCHECK_OK=` 标记 = exec 输出可读（环境正常）；看不到标记 = 工具输出变图片占位符（环境故障）→ 立即停止汇报，不硬翻不凭记忆翻译
   - 脚本同时输出 progress.json 完整性/总key/done数、磁盘空间、词库/输出目录存在性、可选 -checkMd 去重检查；纯 ASCII 输出，只读不写，退出码 0=正常 1=损坏
7. **试跑流程**：先取 20 条（覆盖不同站点）试跑 → md 样例给大金牛确认格式 → 确认后全量分批跑

### 2.6 预算控制

1. **预算上限**：DeepSeek **110 元以内**（大金牛 2026-08-06 授权，2026-08-07 重申）
2. **预算起算点**：**从 2026-08-06 23:30 开始计算 token 消耗**（含试跑至今全部消耗），累计达 110 元即停止
3. **分批汇报**：每批跑完汇报：完成数/失败数/耗时/token 消耗/累计消耗
4. **预警线**：累计消耗达 **80 元**（~73%）时暂停，向大金牛汇报剩余预算与实际进度，确认后继续
5. 若发现单篇成本过高或预算不足以覆盖全量，先暂停汇报，由大金牛决定（全文翻译 or 调整策略），**不得擅自降低翻译质量**

### 2.7 质量红线（大金牛 2026-08-06 强调）

- ❌ **不得偷懒**：不得只翻标题不翻正文、不得跳段、不得用摘要糊弄——大金牛英语不好但**会自己查证/找人问**，糊弄必被识破
- ❌ **不得编造**：数据/事实拿不准标 `[?]` + 记入待核清单，严禁凭空补全
- ❌ **不得使用机器翻译腔糊弄**：译文要通顺中文，但**不得为了通顺改动原文事实**
- ✅ 宁可慢，不可假。每篇翻译后自查：数据是否对、专有名词是否按词库、段落是否完整

---

## 三、当前进度
- [x] 规则确认
- [x] parsed json 已迁入台账数据 (`D:\龙虾记忆\文章深度\军事线索翻译\台账数据\`，2026-08-08)
- [x] 试跑完成 (批次1-5 已交付，2026-08-08)
- [ ] 全量分批跑 (2026-02 主流程 195 篇待翻，2026-01前 48 篇待翻，2026-03 701 篇待翻，2026-04 589 篇待翻)

---

## 四、相关文件位置

- 数据源: `D:\龙虾记忆\文章深度\军事线索翻译\台账数据\军事线索整理_parsed.json` (2026-08-08 迁入)
- 进度文件: `D:\龙虾记忆\文章深度\军事线索翻译\台账数据\线索翻译_progress.json`
- 计划文件: `D:\龙虾记忆\文章深度\军事线索翻译\台账数据\线索翻译_plan_2026-*.json`
- 线索聚类版: `D:\龙虾记忆\文章深度\军事线索事件清单.md` (53 事件组，备查)
- 词库: `D:\龙虾记忆\国际军事地缘专用名词库.md`
- 输出目录: `D:\龙虾记忆\文章深度\军事线索翻译\` (按月分子目录)

---

# 规则：文档翻译输出规则（2026-07-10 设定，永久生效）

## 核心
1. 所有智库文档翻译，输出中禁止出现以下文字：
   - 「原文文件：」及其附带的 pdf 文件名、翻译时间、原文长度、字符/token 统计
   - 「由 DeepSeek V4 Flash 自动翻译」
2. 仅翻译正文内容，不要在文档开头或结尾附加任何元数据说明

## 访问权限
- OpenClaw（本地运行）: ✅ 可直接使用此规则
- 其他 AI Agent: ❌ 必须询问大金牛后才能应用此规则

---

## ~~智谱敏感拦截处置规则~~ （已废弃，2026-08-31 删除）
智谱通道已弃用，相关规则不再适用。


---

### status_health（all）

visibility: all

# 状态上报区（status_* 前缀）

## 约定
- status_* 前缀 key 用于本地检测脚本上报状态（如 status_vpn、status_translation）
- 本 key 为健康自检示例：{ok: true, agent: openclaw, time: 2026-08-04}
- 检测脚本写入约定：本地脚本用 set_rule 写 status_<模块>，内容 JSON 含 {status, lastCheck, message}
- 本机路径不得上传

## 示例
{ok: true, agent: openclaw, time: 2026-08-04}
【通用核实原则（2026-08-05 大金牛设定，永久生效）】遇到无法自主判断且难以推进的情况，必须先跟主人核实，不许先砍后揍（先斩后奏）。


---

### tool-markdown-editor（all）

visibility: all

# 工具备用：Markdown Editor（棱一 lengyi）

> 2026-08-09 记录（大金牛指示）。Obsidian 已替代日常使用，本条记录作备用找回依据。

## 基本信息
- **软件名**：Markdown Editor（作者：棱一 / woyin2024）
- **类型**：纯前端单文件 HTML Markdown 编辑器（绿色便携，免安装/免账号/免订阅，本地存储、离线可用，10 语言 i18n）
- **GitHub 仓库**：https://github.com/woyin2024/lengyi-markdown-editor.git
- **本地入口文件**：markdown-editor.html（原位于 D:\软件\lengyi-markdown-editor\）\n- **辅助文件**：web-to-md-proxy.py（本地服务代理，入口 http://localhost:8080/markdown-editor.html）

## 状态（2026-08-09）
- 主电脑已卸载（绿色版，无注册表/无 .md 文件关联；目录已回收站删除，桌面快捷方式 markdown-editor.lnk 已清除）
- **替代**：Obsidian（D:\Tools\Obsidian\Obsidian.exe，v1.13.4，知识库 D:\龙虾记忆\）\n- **如需找回**：从 GitHub 仓库 clone 或重新下载，解压后直接打开 markdown-editor.html 即可用


---

### wb-token-budget（workbuddy-only）

visibility: workbuddy-only

# WorkBuddy Token 预算

## 状态
- WorkBuddy 日 token 预算：**未定，等待最后核实**。
- WorkBuddy 的 token 计算与 OpenClaw 分开统计（WB 预算单独计算，不由 OpenClaw 的 rule-openclaw-only（原 rule-token-budget 已并入后 2026-08-13 抽离） 1亿/日 规则约束）。
- 待大金牛给出 WB 预算数值后更新本规则。

## 说明
- 此规则专用于 WorkBuddy（hy3），与云端 rule-openclaw-only（Token 预算规则，OpenClaw 专属）相互独立。
- 默认模型、超预算临时额度等以大金牛后续指示为准。
【通用核实原则（2026-08-05 大金牛设定，永久生效）】遇到无法自主判断且难以推进的情况，必须先跟主人核实，不许先砍后揍（先斩后奏）。


---

### workbuddy-rules（workbuddy-only）

visibility: workbuddy-only

# WorkBuddy 使用规则（WB 专用）

## 说明
- 本规则适用于 WorkBuddy(hy3)，其他 Agent 无需读取
- 设定于 2026-07-17，与 OpenClaw 规则库相互独立
- 2026-08-13 更新：规则引用随 2026-08-08 合并调整（旧 key 已并入 rule-run-all / rule-translation-all）
- 所有云端规则按 visibility 分级：
  - visibility: all - WB 可读写
  - visibility: openclaw-only - 仅 OpenClaw 专用，不与其他智能体通用（2026-08-13 大金牛指示）
  - visibility: workbuddy-only - 仅 WB，其他 Agent 不可读

## 规则

### 1. WB 可读写的通用规则（visibility: all）
- rule-run-all（运行类合并：含子代理隔离、D/E 盘优先、腾讯文档、MCP 云、查重备忘、军事直播与深度文章等；OpenClaw 专用条款已抽离至 rule-openclaw-only，见下）
- rule-translation-all（翻译类合并：含智库翻译、线索翻译、翻译输出规则）

### 2. 通用规则（可读）
- glossary_military_geopolitics（国际军事地缘名词词库，翻译/写作查词用）
- status_health（状态上报区约定，status_* 说明）

### 3. WB 专属规则（workbuddy-only）
- wb-token-budget: WorkBuddy 的 token 预算，未定待核实；与 OpenClaw 分开统计
- workbuddy-rules: 本文件

### 4. 引用备注（2026-08-08 合并后的映射）
- 原 rule-subagent-isolation / rule-d-e-priority / tencent-docs / task-mcp-cloud / rule-token-budget / rule-version-lock 等内容已并入 **rule-run-all**（visibility: all）
- 原 rule-translation-output / task-translation 已并入 **rule-translation-all**（visibility: all）
- 原 openclaw-only 级内容（md-standard、AI 检测学习库）2026-08-08 误并入 all 级 rule-run-all，WB 可读；**2026-08-13 已按大金牛指示抽回独立 rule-openclaw-only（visibility: openclaw-only），连同 Token 预算/模型切换/版本锁定/同步机制，WB 不读**
- rule-main-folder 从未登记过云端 key，原引用已删除

## 备注（重要）
- **仅限 WorkBuddy(hy3) 使用的规则**
- 其他 AI Agent（非 OpenClaw 或非 WorkBuddy 的 agent）**不可读取**本规则
- 若其他 AI Agent 读取，需先向大金牛申请，获得 WorkBuddy 许可
【通用核实原则（2026-08-05 大金牛设定，永久生效）】遇到无法自主判断且难以推进的情况，必须先跟主人核实，不许先砍后揍（先斩后奏）。


---
