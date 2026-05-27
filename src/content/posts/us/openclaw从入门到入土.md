---
title: OpenClaw的安装和删除
author: atpoint
pubDatetime: 2026-05-17T20:30:00+08:00
slug: OpenClaw的安装和删除
featured: true
draft: false
tags:
    - OpenClaw
description: OpenClaw的安装和基础配置流程以及删除操作
---

##

## 安装与配置

https://docs.openclaw.ai/start/getting-started

==提示：==

MacOS 直接按官方操作装即可；

Windows 如果是日常化使用（连接飞书等），建议使用 wsl2 上的 ubuntu 更加稳定、安全；如果是用于实验测试，建议直接用 PowerShell 装，保证实验环境连接畅通。

这里演示 PowerShell：（原理相同）

```cmd
irm https://openclaw.ai/install.ps1 | iex
```

时间会比较长，保证网络连接稳定就行

闪退或等待时间过长，都可以选择重进，输入指令查看是否安装成功

```cmd
openclaw --version
```

再输入配置指令进行配置操作

```cmd
openclaw onboard --install-daemon
```

一般选择

```cmd
Yes

QuickStart

Model # 这个看个人情况

API key # 自己输入对应的

Skip for now # [Select channel] 这个建议后面再配置，还有些东西没准备，而且做实验没必要
# 后面的Search provider、skills、hooks一样

# 等待Gateway（网关）启用
```

然后出现`How do you want to hatch your bot?`

有`web UI`就选没有，也可以先选`Terminal`，ctrl+c后，输入`openclaw dashboard`，就能启动web UI。

---

### 删除

检查是否使用一键安装命令，如：

```bash
iwr -useb https://openclaw.ai/install.ps1 | iex # windows
curl -fsSL https://openclaw.ai/install.sh | bash # mac / linux
```

使用下面的指令进行确认

```bash
npm list -g --depth=0

# 会显示一堆安装包列表
# +-- ……
# +-- ……
# +-- openclaw@2026.X.X
```

如果出现这个 `openclaw`，那就继续进行下面的操作

```bash
npm rm -g openclaw
# 出现 removed …… packages in …S 就说明删除成功
```

然后，需要清空配置文件和缓存数据

可以选择手动删去 `~/.openclaw/openclaw.json`；

也可以运行这个命令（注意：操作不可逆哦！所有记录都没了）

```bash
Remove-Item -Recurse -Force "$env:USERPROFILE\.openclaw"
```

最后，运行版本查询命令

```bash
openclaw --version
# 出现无法识别的提示，就说明删除成功了
npm list -g --depth=0
# 没有openclaw的安装包了
```

---

==补充：==

对于普通人来说，OpenClaw 除了用来装 13 没什么用。

手机上移动端的 AI 就够用了，实在不行自己蒸馏一个或者通过 hugging face 在手机上配置一个（如Gamma）

电脑端使用 OpenCode / Claude / Codex 等一系列的 CLI 工具，比 🦞 省钱省事省心。
