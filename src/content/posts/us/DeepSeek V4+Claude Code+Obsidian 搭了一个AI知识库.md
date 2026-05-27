---
title: 手把手教你搭建私有化AI知识库：DeepSeek V4 + Obsidian + Claude Code
author: yzj
pubDatetime: 2026-05-17T20:30:00+08:00
slug: deepseek-obsidian-claude-ai-knowledge-base
featured: false
draft: false
tags:
  - AI
  - Obsidian
  - DeepSeek
  - 知识库
  - 教程
description: 全程本地、数据私有、检索智能的AI知识库搭建教程
---

## 背景

作为常年和知识、文档打交道的程序员，我一直想搭建一套数据完全私有、检索足够智能、成本还极低的个人知识库。试过不少方案，要么数据存云端没安全感，要么 AI 能力弱、关联检索差，要么价格贵到用不起。

直到最近 **DeepSeek V4** 正式发布，我立刻盯上了它 —— 文字理解与生成能力对标顶级大模型 Claude Opus 4.6，百万级上下文 token 的成本不到 Claude 的十分之一，性价比直接拉满！抱着试试看的心态，我把 DeepSeek V4 + Claude Code + Obsidian 组合在一起，亲手搭建了一套个人 AI 知识库。

实测下来效果远超预期：AI 能直接读取我的本地笔记、跨文件检索关联信息、精准回答问题、自动整理内容，全程数据不出本地、隐私绝对安全、操作 0 门槛。

今天就把这套亲测可行、细节拉满的搭建教程分享给大家，从 0 到 1 四步走，新手跟着做也能一次成功！

![整体架构](/images/blog/zhihu1.png)

## 为什么选这套组合？先把优势说透

在开始动手前，先跟大家说清楚这套方案的核心优势，帮你快速判断是否适合自己：

- **Obsidian**：本地优先的 Markdown 笔记神器，文件全存在自己电脑，数据隐私 100% 可控，插件生态成熟，是知识库的绝佳载体；
- **Claude Code**：Anthropic 推出的 AI 命令行工具，擅长文件读写、内容检索、多文件关联分析，能完美接管 Obsidian 的笔记仓库；
- **DeepSeek V4**：国产顶级大模型，超强长文本理解 + 极低使用成本，百万 token 成本极低，完全替代高价海外模型，性价比碾压同级产品。

三者强强联合，既能解决传统笔记检索慢、难关联的痛点，又能规避云端 AI 隐私泄露、费用高昂的问题，不管是整理学习笔记、管理项目文档、做内容创作还是日常知识沉淀，都非常趁手！

今天就教大家怎么接入，0 基础四步走，跟着做就行。

## 第一步：装 Obsidian

官网下载安装包，Mac 和 Windows 都有，免费的，双击装上。它是本地 Markdown 笔记软件，所有文件存你自己电脑上，不用担心数据安全。插件生态非常强大，今天用到的 Claudian 就是其中一个。

![Obsidian 官网下载](/images/blog/zhihu2.jpg)

## 第二步：装 Claudian 插件

Claudian 把 Claude Code 嵌进 Obsidian，笔记仓库直接变成 AI 工作目录，能读能写能搜索。

1. 先打开 Obsidian 设置（左下角齿轮图标），找到「第三方插件」，**把安全模式关掉**。

![关闭安全模式](/images/blog/zhihu3.jpg)
![关闭安全模型](/images/blog/zhihu4.jpg)

2. 点开「社区插件市场」。

![社区插件市场](/images/blog/zhihu5.jpg)

3. Claudian 还没上官方插件市场，需要通过 **BRAT** 装。在社区插件里搜 BRAT，安装启用。

![搜索 BRAT 插件](/images/blog/zhihu6.jpg)

4. 然后回到设置找到 BRAT，点「Add beta plugin」，输入 Claudian 的仓库地址就能装上。

![BRAT 添加 beta 插件](/images/blog/zhihu7.jpg)
![输入 Claudian 仓库地址](/images/blog/zhihu8.jpg)

5. 最后回到第三方插件列表，把 Claudian 开关打开就好了。

![已安装插件列表](/images/blog/zhihu9.jpg)

## 第三步：装 Claude Code + 配置 DeepSeek V4

1. **装 Node.js**：Mac 终端跑 `brew install node`，Windows 去官网下安装包。
2. **装 Claude Code**：一行命令安装，国内用 npm 镜像源也能装。

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

![行命令](/images/blog/zhihu11.jpg)

用 CC Switch 配置 DeepSeek V4 做后端：

先去 GitHub 下载桌面工具 CC Switch（专门管理 Claude Code 的供应商配置，不用记环境变量，新手友好）。macOS 选 dmg，Windows 选 msi 安装包。

![CC Switch 下载页面](/images/blog/zhihu11.jpg)

安装运行后，点 “+” 新建配置，供应商选 DeepSeek。

![选择供应商](/images/blog/zhihu12.jpg)

粘贴 deepseek 开放平台拿到的 API Key，填写请求地址。

![填写 API Key 和请求地址](/images/blog/zhihu13.jpg)

添加两个模型：

- `deepseek-v4-pro[1m]` 做主模型
- `deepseek-v4-flash` 做轻量任务和子代理

![添加模型配置](/images/blog/zhihu14.jpg)

名称严格按图里来，点添加保存。

点「启动」，配置就生效了 🎉

## 第四步：配置路径，开始用

终端输入 `where claude` 拿到路径，粘贴到 Claudian 设置里就行。

找到 Claudian 图标，点开就能跟 AI 对话了。

## 实际体验

让它整理知识库内容、回答问题，它是真的在你本地文件里搜索关联的，不是瞎编。跨文件检索、知识关联、内容总结全能搞定，比单纯搜索强太多了。

例如让它查找知识库中关于“harness”的内容，它会主动读取索引、执行 grep 搜索，并给出包含“渐进式披露”“P vs NP 不对称性”“控制论本质”等核心洞察的回答，还会指出具体是哪篇笔记。
