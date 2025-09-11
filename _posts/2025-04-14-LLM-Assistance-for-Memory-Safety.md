---
layout: post
title: 'LLM Assistance for Memory Safety'
date: '2025-04-11'
author: 'Junming Liu'
tags:
    - '2024'
    - vulnerability_detection
    - LLM4SE
    - pub-ICSE
    - paper
summary: "使用LLM结合symbolic来实现C->内存安全的C dialect（Checked C）的转换"
link: 'https://www.computer.org/csdl/proceedings-article/icse/2025/056900a280/215aWGsmiuA'
code: ""

---
LLM Assistance for Memory Safety

\[summary] 使用LLM结合symbolic来实现C->内存安全的C dialect（Checked C）的转换

为了保证内存安全，一个重要的手段就是将已有C代码转换为内存安全的C dialect（方言）。这样的dialects依赖大量程序员提供的注释来保证总体minimal runtime（最小运行时间），从而保证安全性。

而要将C转换为C dialect，需要两个步骤：1）推断注释，2）重构/重写代码以符合注释。虽然现在有利用symbolic analyse来自动进行转换的方式，但效果并不理想。

所以文章提出使用LLM结合symbolic来实现C->Checked C的转换。为了使转换适用于LLM，作者构建了一个whole-program transformations的框架MSA（也就是文章提出的转换流程），分步进行转换。并使用CheckedC dialect评估这个框架，与symbolic以及LLM baseline比较，发现MSA的表现大大的好。

## Approach

![](../images/posts/LLM-Assistance-for-Memory-Safety/LLM-Assistance-for-Memory-Safety.png)

1.  使用3C tool生成partially converted CheckedC code
2.  使用静态分析生成dependency graph：节点为top-level declarations，包括**procedures** (both its signature and its body), **type** declarations (struct, union, enum), **global** variable declarations and **macro** definitions.
3.  使用LLM进行Replace Nested Arrays, Infer Bounds, Introduce new bounds variables，完成转换。

![](../images/posts/LLM-Assistance-for-Memory-Safety/LLM-Assistance-for-Memory-Safety-1.png)