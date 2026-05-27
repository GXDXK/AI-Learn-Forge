---
title: 如何用 Markdown 写文章
author: 徐浚恒
pubDatetime: 2026-05-15T20:30:00+08:00
slug: 如何用Markdown写文章
featured: true
draft: false
tags:
    - Markdown
    - 示例
description: AstroPaper中用Markdown写文章的教程
---

## Markdown 学习途径

Markdown 基本语法：<https://markdown.com.cn/basic-syntax/>

或者让AI转成 Markdown (.md)

## Markdown 文件前面必要信息部分的解释

### 示例

```
---
title: 文章标题
author: 作者
pubDatetime: 2026-05-14T20:30:00+08:00
slug: 路径名
featured: true
draft: false
tags:
    - 标签1
    - 标签2
description: 文章的描述
---
```

### 重要

- Markdown 文件名理论上不会出现在网站的任何地方，为了成功解析，请不要取过于随意的文件名且不要重复
- 所有":"后均需添加一个空格，否则会解析失败
- 所有 Markdown 文件前必须添加该部分，否则会解析失败

### 解释

- title: 文章标题
- author: 作者 (不能为纯数字，应为合法字符串，不会展示在网页中，建议写自己姓名)
- pubDatetime: 2026-05-14T20:30:00+08:00 (只修改2026-05-14的部分为日期)
- slug: 路径名 (网址中"posts/"后面的部分，所有文章必须保证唯一，例如本文为`https://域名/posts/路径名`)
- featured: false (true 为置顶，不用动)
- draft: false (false 对公众开放，不用动)
- tags: - 标签1 (后面写标签，"-"后需要有一个空格，每个"- 标签1"需要换行，参照示例写)
- description: 文章的描述，15字以下，不要太长。

## Markdown 文件中插入图片的路径

以文件`forrest-gump-quote.png`为例

![forrest-gump-quote](/images/blog/forrest-gump-quote.png)

```
![forrest-gump-quote](/images/blog/forrest-gump-quote.png)
```

把图片文件发给我，我会给你放到指定路径的

## $\LaTeX$ 格式

### 文章可以使用 $\LaTeX$

The Gaussian integral:

$$ \int\_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi} $$

```
$$ \int\_{-\infty}^{\infty} e^{-x^2} dx = \sqrt{\pi} $$
```

The definition of the Riemann zeta function:

$$ \zeta(s) = \sum\_{n=1}^{\infty} \frac{1}{n^s} $$

```
$$ \zeta(s) = \sum\_{n=1}^{\infty} \frac{1}{n^s} $$
```

Maxwell’s equations in differential form:

$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\left(\mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}\right)
\end{aligned}
$$

```
$$
\begin{aligned}
\nabla \cdot \mathbf{E} &= \frac{\rho}{\varepsilon_0} \\
\nabla \cdot \mathbf{B} &= 0 \\
\nabla \times \mathbf{E} &= -\frac{\partial \mathbf{B}}{\partial t} \\
\nabla \times \mathbf{B} &= \mu_0\left(\mathbf{J} + \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}\right)
\end{aligned}
$$
```

LaTeX provides a wide range of mathematical symbols:

Greek letters: $\alpha$, $\beta$, $\gamma$, $\delta$, $\epsilon$, $\pi$  
Operators: $\sum$, $\prod$, $\int$, $\partial$, $\nabla$  
Relations: $\leq$, $\geq$, $\approx$, $\sim$, $\propto$  
Logical symbols: $\forall$, $\exists$, $\neg$, $\wedge$, $\vee$

```
Greek letters: $\alpha$, $\beta$, $\gamma$, $\delta$, $\epsilon$, $\pi$
Operators: $\sum$, $\prod$, $\int$, $\partial$, $\nabla$
Relations: $\leq$, $\geq$, $\approx$, $\sim$, $\propto$
Logical symbols: $\forall$, $\exists$, $\neg$, $\wedge$, $\vee$
```
