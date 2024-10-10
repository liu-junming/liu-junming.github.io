---
layout: post
title: "Some Papers"
date: 2024-10-05
author: Junming Liu
tags: [paper]
summary: "awesome papers"
---

# AI for Static Analysis

- **Striking a Balance: Pruning False-Positives from Static Call Graphs**. ``ICSE 2022`` [[paper]](http://compilers.cs.ucla.edu/papers/balancing-callgraphs.pdf)

    1) use dynamic call graph to label the static call graph and train the **call graph pruner**. 2) Then use the pruner **pruning the static call graph** to reduce the FP edges. 3) Apply the pruner to null-pointer analysis helps to reduce the FP from 73% to 23%.

# LLM4SE

- **FAIL: Analyzing Software Failures from the News Using LLMs**. ``ASE 2024`` [[paper]](http://arxiv.org/abs/2406.08221) [[code]](https://anonymous.4open.science/r/FAIL)

    [Summary] Existing failure analysis studies focus on analyzing private logs but often overlook public media like news, which is more accessible. 
    This paper propose using LLM to collect, summarize, and categorize news related to software failures. 
    Key findings: 1) LLMs can analyze and classify failure-related news. 2) Many failures are similar across organizations. 3) The severity of failures increases over time.
    
    [Approach]
    1) Search software failure news by keywords.
    2) Filter irrelevant news by LLM.
    3) Filter insufficient news by LLM. <u>Can other resources enhance incomplete news?</u>
    4) Merging similar incidents:
        a. LLM summaries -> embeddings.
        b. Calculate cosine similarity.
        c. > threshold -> LLM identify the identical.
    5) Extract the most relevant passage from each article by RAG.
    6) Postmortem analysis by LLM:
        a. Taxonomy of sofeware faults (multi-choice by LLM).
        b. Additional details about incident (open-ended): LLM extracts relevant fields and definitions from incidents.

- **Uncovering the Limits of Machine Learning for Automatic Vulnerability Detection**. ``USENIX Security 2024`` [[paper]](https://arxiv.org/pdf/2306.17193)

    Investigating the overfitting problem and the lack of out-of-distribution generalization in current machine learning models for vulnerability detection.
    - Overfitting to Unrelated Features
      - Method: Semantic Preserving Transformations. Datasets enhanced through semantic-preserving transformations are applied to the train, validation, and test datasets to analyze overfitting.
        - Conclusion 1: Current models tend to overfit on unrelated features, relying on superficial patterns rather than meaningful ones.
        - Conclusion 2: Enhanced datasets result in poor generalization, as the models perform well on training data but fail to generalize effectively to new data.

    - Out-of-Distribution Generalization (distinguish vulnerability & patch)
      - Method: Vulnerability & Patch Dataset. Testing on VulnPatchPairs dataset containing both vulnerable and patched functions.
      - Conclusion 3: Current models struggle to distinguish between vulnerable and patched functions, indicating poor out-of-distribution generalization.