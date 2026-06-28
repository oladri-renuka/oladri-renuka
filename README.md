# Renuka Oladri

**2027 New Grad** | MS Applied Machine Learning, University of Maryland College Park (CMNS Science Academy)

Building LLM inference systems, mechanistic interpretability tools, and production ML infrastructure.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/renuka-oladri-8002b525b/)
[![Email](https://img.shields.io/badge/Email-EA4335?style=flat&logo=gmail&logoColor=white)](mailto:renukaoladriw@gmail.com)

---

Previously AI Data & Analytics Intern at **HARMAN International (Samsung)**, where a multi-agent TypeScript testing system hit 93% code coverage vs GitHub Copilot's 70-80% and caught 5 Redis reliability gaps before production. Before that, Research Assistant at Woxsen University leading a 4-person team on battery management ML (90-95% accuracy).

---

## Highlights

These are the findings, not just the project names.

**A linear probe on DeepSeek-R1 hidden states predicts reasoning failure at 150 tokens, before any surface-level signal exists.** AUC 0.612 vs 0.445 behavioral baseline (p=0.001). The activation signal emerges at 100 tokens when text and logit features are anti-informative. [early_detection](https://github.com/oladri-renuka/early_detection)

**Static batching underperforms naive serial under mixed-length traffic.** Head-of-line blocking makes it worse than processing one request at a time. Continuous batching with paged KV-cache (built from scratch, no vLLM) achieves 2.91 req/s with 0 failures. [inference-server](https://github.com/oladri-renuka/inference-server)

**LLaVA scores 0% on chart OCR while InternVL2 hits 71.1% on identical probes.** Domain-dependent failure confirmed across 945 probes, chi-square p<0.0001. LLaVA has 88% yes-bias on adversarial existence questions. [vlm-hallucination](https://github.com/oladri-renuka/vlm-hallucination)

---

## Systems and Infrastructure

[**inference-server**](https://github.com/oladri-renuka/inference-server) -- Continuous batching + paged KV-cache for GPT-2 from scratch. 3 backends benchmarked. 2.91 req/s continuous+paged, SSE streaming with TTFT, 17 unit tests.

[**feature-store**](https://github.com/oladri-renuka/feature-store) -- Kafka ingestion with 15% reordering, 5% dupes, 10% late arrivals. 3-node Redis Cluster, hash-tag sharding, schema registry. 0 mismatches across 800 feature checks. p95 4.8ms at 9,300 req/s.

[**adaptive_agent**](https://github.com/oladri-renuka/adaptive_agent) -- LangGraph 6-node state graph routing to Haiku or Sonnet via OpenRouter. LLM classifier at $0.00005/call. Input/output guardrails. 98% routing accuracy, 28.2% cost reduction.

[**recsys**](https://github.com/oladri-renuka/recsys) -- SASRec on MovieLens-1M, deployed on AWS EC2. HR@10 78.49%, NDCG@10 58.11%, 8,366 req/s. Full-ranking eval exposes sampled metric inflation (6.23% vs 70.68% Hit@10).

## Research and Evaluation

[**early_detection**](https://github.com/oladri-renuka/early_detection) -- Activation probing on DeepSeek-R1-Distill-Qwen-7B, 200 AIME problems. AUC 0.612 vs 0.445 at 150 tokens (p=0.001). 5-fold stratified CV.

[**vlm-hallucination**](https://github.com/oladri-renuka/vlm-hallucination) -- LLaVA-1.5-7B vs InternVL2-8B across 4 domains, 945 probes, 6-category failure taxonomy. Chi-square p<0.0001.

[**llm-post-training-pipeline**](https://github.com/oladri-renuka/llm-post-training-pipeline) -- SFT, reward model (76.09% val acc), DPO on LLaMA-3.2-1B. Diagnosed TRL bug causing negative KL across 8 PPO runs. +9pp factual accuracy (p=0.030), -16.7pp format compliance (p=0.0003).

[**knowledge-agent**](https://github.com/oladri-renuka/knowledge-agent) -- Belief graph with contradiction detection. MCP server, 5 tools, ChromaDB HNSW. 936 entities, 32 conflicts, 0 false positives on 173 pages.

## Low-Level Performance

[**cuda-attention-kernel**](https://github.com/oladri-renuka/cuda-attention-kernel) -- Naive vs tiled attention on A100. 515 GFLOPS/s tiled, ~145x over CPU. Diagnosed why tiling underperforms theory: L2 cache masks benefit below seq_len=2048.

[**sparse-factor-modeling**](https://github.com/oladri-renuka/sparse-factor-modeling) -- 9 LASSO solvers from scratch, walk-forward backtest, no look-ahead bias. Sharpe 5.061. KKT factor ranking (Spearman rho=0.906). Novel finding: FISTA degrades at high sparsity.

---

## Skills

| | |
|---|---|
| **Languages** | Python, C++, CUDA, TypeScript, SQL |
| **ML/DL** | PyTorch, JAX, HuggingFace Transformers, LangGraph, scikit-learn, LoRA, DPO, RLHF |
| **Systems** | AWS (EC2, S3), Kafka, Redis, Docker, FastAPI, RunPod |
| **Research** | Mechanistic interpretability, activation probing, benchmark evaluation, causal inference |

---

## Publications

[Stem Cell Reviews and Reports](https://link.springer.com/article/10.1007/s12015-024-10814-3) -- **Springer Nature**, 2025

[Digital Forensics and Cybersecurity: Emerging Threats](https://onlinelibrary.wiley.com/doi/abs/10.1002/9781394230600.ch19) -- **Wiley-Scrivener**, 2024

[Economic Perspectives](https://www.igi-global.com/chapter/economic-perspectives/338698) -- **IGI Global**, 2024

[YOLOv8 Multi-class Traffic Sign Detection](https://www.researchgate.net/publication/379484233_A_YOLOv8-based_Approach_for_Multi-class_Traffic_Sign_Detection) -- IJSRA, 2024 (80.64% accuracy)

[BERT for Twitter Sentiment Analysis](https://www.researchgate.net/publication/379158895_BERT_for_Twitter_Sentiment_Analysis_Achieving_High_Accuracy_and_Balanced_Performance) -- J. Trends in CS & Smart Technology, 2024 (F1 0.88)
