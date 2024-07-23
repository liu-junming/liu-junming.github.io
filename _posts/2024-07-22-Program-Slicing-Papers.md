---
layout: post
title: "Program Slicing Papers"
date: 2024-07-22
author: Junming Liu
tags: [slicing, paper]
summary: "awesome program slicing papers"
---

# Slicing Technique

## DL-based Slicing
A Learning-Based Approach to Static Program Slicing. ``OOPSLA 2024`` [[paper]](https://dl.acm.org/doi/10.1145/3649814)
*use a pre-trained language model to understand the variable-statement relationship, and predict the forward/backword propability of each statement, then construct the slicing.*

# Applications

## Vulnerability Detection

### Machine Learning

🌟 Learning Program Semantics for Vulnerability Detection via Vulnerability-Specific Inter-procedural Slicing. ``ESEC/FSE 2023`` [[paper]](https://dl.acm.org/doi/10.1145/3611643.3616351) 
*inter-procedural, slicing method (criterion, direction, graph) decided by vulnerability types.*

### Recurring Bug

🌟 MVP: Detecting Vulnerabilities using Patch-Enhanced Vulnerability Signatures. ``USENIX Security 2020`` [[paper]](https://www.usenix.org/conference/usenixsecurity20/presentation/xiao)
*function-level backward+customized forward slicing on PDG based on changed statements, forward slicing graph decided by the changed statement.*

## Security Patch Identification

🌟 GraphSPD: Graph-Based Security Patch Detection with Enriched Code Semantics. ``Oakland 2023`` [[paper]](https://ieeexplore.ieee.org/document/10179479) [[website]](https://sunlab-gmu.github.io/GraphSPD/) [[code]](https://github.com/SunLab-GMU/GraphSPD)
*function-level bidirectional slicing on PDG based on deleted/added statements.*

## Verification

Slicing Assisted Program Verification: An Empirical Study. ``TASE 2024`` [[paper]](https://link.springer.com/chapter/10.1007/978-3-031-64626-3_3) 

## Localization

## Type Inference
