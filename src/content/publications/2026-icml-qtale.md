---
title: "QTALE: Quantization-Robust Token-Adaptive Layer Execution for LLMs"
authors: "Kanghyun Noh, Jinheon Choi, Yulhwa Kim⁺"
venue: "International Conference on Machine Learning (ICML)"
venueShort: "ICML"
venueType: conference
year: 2026
area: efficient-ai
order: 1
# SAMPLE abstract/figure — placeholder text to demo the pop-up. Replace with the real abstract/figure.
abstract: "Layer-skipping and early-exit methods reduce LLM inference cost but degrade sharply once weights are quantized, since skip decisions are learned on full-precision activations. We introduce QTALE, a token-adaptive layer execution scheme that conditions its skip policy on quantization-aware activation statistics, remaining robust from FP16 down to 4-bit weight-only quantization. Across several open LLMs, QTALE preserves accuracy within 0.5 points of the full-precision baseline while cutting average per-token layer execution by up to 35%."
image: "/images/publications/placeholder.svg"
---
