---
layout: post
title: "Program Slicing Papers"
date: 2025-03-31
author: Junming Liu
tags: [slicing, paper]
summary: "awesome program slicing papers"

---
- [Slicing Technique](#slicing-technique)
  - [Survey](#survey)
  - [DL-based Slicing](#dl-based-slicing)
  - [LLM Assisted Slicing](#llm-assisted-slicing)
    - [program slicing](#program-slicing)
    - [static analysis](#static-analysis)
    - [program reduction](#program-reduction)
- [Applications](#applications)
  - [Vulnerability Detection](#vulnerability-detection)
    - [Machine Learning](#machine-learning)
    - [Static Analysis](#static-analysis-1)
    - [Fuzzing](#fuzzing)
  - [Security Patch Identification](#security-patch-identification)
  - [Verification](#verification)
  - [Type Inference](#type-inference)
  - [Regression Analysis](#regression-analysis)
  - [Criterion (Points of Interest, PoI)](#criterion-points-of-interest-poi)

## Slicing Technique

### Survey

1. On the Effects of Program Slicing for Vulnerability Detection during Code Inspection: Extended Abstract. ICSE-Companion 2024. \[[paper](https://dl.acm.org/doi/10.1145/3639478.3643117)\]
  - 1) slicing helps in finding some lines related to the vulnerability, 2) once 'some' correct lines have been identified, slicing makes no significant difference in the number of correctly identified fragments.

### DL-based Slicing

1. A Learning-Based Approach to Static Program Slicing. OOPSLA 2024. \[[paper](https://dl.acm.org/doi/10.1145/3649814)\]
  - use a pre-trained language model to understand the variable-statement relationship, and predict the forward/backword propability of each statement, then construct the slicing.

### LLM Assisted Slicing

#### program slicing

1. Revealing the Unseen: AI Chain on LLMs for Predicting Implicit Data Flows to Generate Data Flow Graphs in Dynamically-Typed Code. TOSEM 2024. \[[paper](https://dl.acm.org/doi/10.1145/3672458)\] \[[code](https://drive.google.com/file/d/1a1pwDEPK1yod6E9recAuIkntCL0oUXOV/view?usp=drive_link)\]
  - use LLM directly slice python program to aid implicit data flow prediction.
2. Program Slicing in the Era of Large Language Models. arXiv 2024. \[[paper](http://arxiv.org/abs/2409.12369)\]
  - following the work of DL-based Slicing (i.e., A Learning-Based Approach to Static Program Slicing), compare LLMs' slicing capability on Java with static and dynamic slicing tools, and find the main challenge is complex control flow.

#### static analysis

1. LLM-Powered Static Binary Taint Analysis. TOSEM 2025. \[[paper](https://dl.acm.org/doi/10.1145/3711816)\]  \[[note](/_posts/2025-03-29-LATTE)\]
  - extract call chain with LLM **idenfited sinks & sources**, use LLM to **extract tainted data** in call chains's function recursively (add one function each time), and use LLM to **identify vulnerability**.
2. IRIS: LLM-Assisted Static Analysis for Detecting Security Vulnerabilities. ICLR 2025. \[[note](/_posts/2025-03-25-IRIS)\]
  - transfer LLM **extracted sources & sinks** to CodeQL query, and use LLM to **filter vulnerable paths** detected by CodeQL.

#### program reduction

1. LPR: Large Language Models-Aided Program Reduction. ISSTA 2024. \[[paper](https://arxiv.org/pdf/2312.13064)\]
  - evaluation: reduction size, time consumed, ablation.

## Applications

### Vulnerability Detection

#### Machine Learning

1. Learning Program Semantics for Vulnerability Detection via Vulnerability-Specific Inter-procedural Slicing. ESEC/FSE 2023. \[[paper](https://dl.acm.org/doi/10.1145/3611643.3616351)\]
  - inter-procedural, slicing strategy (criterion, direction, graph) decided by vulnerability types.
2. VulChecker: Graph-based Vulnerability Localization in Source Code. USENIX Security 2023. \[[paper](https://www.usenix.org/conference/usenixsecurity23/presentation/mirsky)\]
  - backward slicing on PDG until pre-defined depth, criterion decided by vulnerability types.
3. LLM-Enhanced Static Analysis for Precise Identification of Vulnerable OSS Versions. arxiv 2024. \[[paper](https://arxiv.org/pdf/2408.07321)\]

<!-- 1. 漏洞代码提取
    1. program slicing提取dangerous flow：根据patch deleted/added statements，对不同种类statement定义切片策略（类似MVP）
    2. 使用LLM提取dangerous flow中vulnerable statements：few-shot, CoT
    3. 根据预定义规则分配vulnerable statements权重
1. 函数级别code clone detection -> 找到vulnerability introducing commit
2. 确定vulnerable version -->

#### Static Analysis

1. TRACER: Signature-based Static Analysis for Detecting Recurring Vulnerabilities. CCS 2022. \[[paper](https://doi.org/10.1145/3548606.3560664)\]
  - capture signature by inter-procedural taint analysis.
2. MVP: Detecting Vulnerabilities using Patch-Enhanced Vulnerability Signatures. USENIX Security 2020. \[[paper](https://www.usenix.org/conference/usenixsecurity20/presentation/xiao)\]
  - function-level backward+customized forward slicing on PDG based on changed statements, forward slicing graph decided by the changed statement.
3. Detecting API Post-Handling Bugs Using Code and Description in Patches. USENIX Security 2023. \[[paper](https://www.usenix.org/conference/usenixsecurity23/presentation/lin)\]
  - function-level backward slicing on PDG based on post-operation statement.
4. Sys: A Static/Symbolic Tool for Finding Good Bugs in Good (Browser) Code. USENIX Security 2020. \[[paper](https://www.usenix.org/conference/usenixsecurity20/presentation/brown)\] \[[note](/_posts/2024-10-13-Sys.md)\]

#### Fuzzing

1. SFuzz: Slice-based Fuzzing for Real-Time Operating Systems. CCS 2022. \[[paper](https://doi.org/10.1145/3548606.3559367)\]
  - binary, forward slicing from source points on call graph (based on data flow) to sink points.
2. BEACON: Directed Grey-Box Fuzzing with Provable Path Pruning. Oakland 2022. \[[paper](https://ieeexplore.ieee.org/document/9833751/)\]
  - “perform a reachability analysis on the inter-procedural control flow graph and slice away paths that apparently cannot reach any target.”

### Security Patch Identification

1. GraphSPD: Graph-Based Security Patch Detection with Enriched Code Semantics. Oakland 2023. \[[paper](https://ieeexplore.ieee.org/document/10179479)\] \[[website](https://sunlab-gmu.github.io/GraphSPD/)\] \[[code](https://github.com/SunLab-GMU/GraphSPD)\]
  - function-level bidirectional slicing on PDG based on deleted/added statements.
  slicing to reduce the size of patch context to assist the GNN-model in learning and identifying security patch characteristics.
  <!-- 
   1) 提出一种基于GNN用于security patch identification的模型 (PatchGNN)
   2) 提出一种graph representation (PatchCPG)，用于更好地表示patch内容
   3) 使用slicing减少PatchCPG的size
    -->
2. CoLeFunDa: Explainable Silent Vulnerability Fix Identification. ICSE 2023. \[[paper](https://ieeexplore.ieee.org/abstract/document/10172826)\]
  - data augmentation for silent fix detection (security patch identification), CWE classification and exploitability rating classification.
  - function-level bidirectional slicing on CFG & DFG based on changed statements.

### Verification

1. Slicing Assisted Program Verification: An Empirical Study. TASE 2024. \[[paper](https://link.springer.com/chapter/10.1007/978-3-031-64626-3_3)\]

### Type Inference

1. DLInfer: Deep Learning with Static Slicing for Python Type Inference. ICSE 2023. \[[paper](https://ieeexplore.ieee.org/abstract/document/10172544)\] \[[code](https://doi.org/10.5281/zenodo.7575544)\]
  - python, slicing on DFG (def-use) based on given variable.

### Regression Analysis

1. Responsibility in Context: On Applicability of Slicing in Semantic Regression Analysis. ICSE 2023. \[[paper](https://ieeexplore.ieee.org/abstract/document/10172711)\]

### Criterion (Points of Interest, PoI)

- Integer Overflow: "call to a function that passes integer arguments"
- Stack & Heap Overflow: "store instructions to local or dynamically allocated memory"
- UAF: "memory accesses to dynamically allocated memory"
- DF: "calls to the memory manager's free function"
