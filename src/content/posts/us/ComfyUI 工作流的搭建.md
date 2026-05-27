---
title: ComfyUI 工作流的搭建
author: 徐浚恒
pubDatetime: 2026-05-15T20:30:00+08:00
slug: ComfyUI工作流的搭建
featured: false
draft: false
tags:
    - ComfyUI
    - 文生图
    - 教程
description: ComfyUI-aki的使用教程
---

## ComfyUI 介绍

ComfyUI 是面向视觉专业创作者的 AI 创作引擎，可让用户精准掌控每一个模型、每一项参数与每一份输出成果。其功能强大、模块化的节点图界面，助力创作者生成图像、视频、3D 模型、音频等各类内容……

- ComfyUI 原生支持当下最新的开源顶尖模型。
- 通过 API 节点，可调用 Nano Banana、Seedance、混元 3D（Hunyuan3D）等优质闭源模型。
- 软件支持 Windows、Linux、macOS 系统，可通过桌面客户端本地部署，也可使用云端版本。
- 借助应用模式（App Mode），再复杂的工作流都能通过简洁界面呈现。
- 依托 API 接口，它可无缝接入各类生产工作流。

ComfyUI 官方 GitHub 仓库：<https://github.com/Comfy-Org/ComfyUI>

---

## 前言

ComfyUI 部署比较复杂，本文将使用国人制作的第三方启动器进行部署，并在本地显卡中跑文生图。

---

## 关于 ComfyUI-aki 和 绘世启动器

### 作者

- 秋葉aaaki的B站空间：<https://space.bilibili.com/12566101>

### 教程

- [ComfyUI 2026.1月整合包更新](https://www.bilibili.com/opus/1159516886456598528)
- [【AI绘画】ComfyUI整合包发布！解压即用 一键启动 工作流版界面 超多节点 ☆更新 ☆汉化 秋叶整合包](https://www.bilibili.com/video/BV1Ew411776J/)

### 资源下载

- [夸克网盘](https://pan.quark.cn/s/64b808baa960)
- 解压密码：bilibili-秋葉aaaki

---

## 部署

解压`ComfyUI-aki-v3.7z`

启动`绘世启动器.exe`

在`版本管理`页面的右上角点击`一键更新`将软件更新至最新版本

![绘世启动器更新版本](/images/blog/ComfyUI工作流的搭建-绘世启动器更新版本.png)

在`一键启动`页面的右下角点击`一键启动`启动 ComfyUI

![绘世启动器一键启动](/images/blog/ComfyUI工作流的搭建-绘世启动器一键启动.png)

等待程序启动后在弹出的浏览器中点击左下角的`Settings`

![ComfyUI设置](/images/blog/ComfyUI工作流的搭建-ComfyUI设置.png)

在弹出的设置界面的如下位置将语言设置为中文

![ComfyUI设置中文](/images/blog/ComfyUI工作流的搭建-ComfyUI设置中文.png)
