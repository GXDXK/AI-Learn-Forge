---
title: AI 概念学习
author: atpoint
pubDatetime: 2026-05-18T20:30:00+08:00
slug: AI 概念学习
featured: false
draft: false
tags:
    - AI
description: AI 概念学习
---

## AI 概念学习

---

## 一、LLM / 大语言模型

- **定义**：原生大语言模型

- 核心概念
    - `prompt / 提示词`：给 LLM 的自然语言输入
    - `context / 上下文`：prompt 中的背景信息
    - `memory / 记忆`：历史对话压缩后纳入 context 作为输入

---

## 二、复杂任务实现框架

### 1. Langchain

- **定义**：用于开发由 LLM 驱动的应用程序的编程框架，硬编码

- **使用场景**：
  对于相对稳定的流程，特定任务可固化为脚本，用户可以与大模型直接沟通，无需中间智能体，通过固化的脚本实现任务

---

### 2. Workflow

- **特点**：低代码拖拽方式进行 LLM 程序开发

---

### 3. Agent / 智能体

- **定义**：原生大语言模型之外，内部集成其他功能程序（如上网搜索资料的功能等），用户只需面向智能体

- **最常见内部集成功能程序**
    - `Search / 搜索`
        - `web search / 联网搜索`：外挂网络信息搜索功能
        - `RAG / 检索增强生成`：外挂本地向量数据库

    - `Function calling`：约定大模型按指定格式回复，使其可作为 agent 其他功能程序的输入

- **LLM 与 Agent 内部其他功能程序对话**
    - 依赖 `Function calling` 约定：如接口文档，约定如何返回工具列表、调用具体工具等

- **Agent 与外部打包服务对话**
    - `MCP（模型上下文协议）`：约定接口文档，规范工具调用格式

- **skill / 技能**
    - **定义**：加载 skill 语句写在智能体内，`skill.md` 单独存储
    - `skill.md`：流程中涉及多类脚本选择时（如处理多模态信息），在同一说明文件中，列出全部可能的转换脚本目录，并描述脚本选择的规则，单独存储
    - 加载 skill 语句：要求 agent 先按要求读取 skill 的要求

- **Subagent**：将子任务进行上下文隔离

- **当前主流 Agent 分类（按交互形式）**
    - `CLI / 命令行窗口`：iflow / codex / claude code
    - `IDE`：cursor / trae / antigravity
    - `桌面助手`：Openclaw / clawbox / moltbot
