<h1 align="center">Renuka Oladri</h1>

<p align="center">
  <strong>2027 New Grad</strong> · MS Applied Machine Learning, University of Maryland College Park (CMNS Science Academy)<br/>
  LLM inference systems · Mechanistic interpretability · Production ML infrastructure · Agentic AI
</p>

<p align="center">
  <a href="https://www.linkedin.com/in/renuka-oladri-8002b525b/"><img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>
  <a href="mailto:renukaoladriw@gmail.com"><img src="https://img.shields.io/badge/Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" /></a>
  <a href="https://github.com/oladri-renuka?tab=repositories"><img src="https://img.shields.io/badge/36_Repos-181717?style=for-the-badge&logo=github&logoColor=white" /></a>
  <a href="https://scholar.google.com"><img src="https://img.shields.io/badge/5_Publications-4285F4?style=for-the-badge&logo=googlescholar&logoColor=white" /></a>
</p>

---

### Experience

**AI Data & Analytics Intern, HARMAN International (Samsung)** · Dec 2024 - Jun 2025
Multi-agent TypeScript testing system: 93% code coverage vs GitHub Copilot's 70-80%. Found 5 Redis reliability gaps before production.

**Research Assistant, Woxsen University** · Aug 2022 - Dec 2024
Battery management system ML pipeline. 90-95% accuracy. Led 4-person research team.

---

### Research Highlights

> **Can you predict a reasoning model will fail before it visibly fails?**
> A linear probe on DeepSeek-R1 hidden states detects failure at 150 tokens with AUC 0.612 vs 0.445 behavioral baseline (p=0.001). The signal emerges at 100 tokens when surface features are anti-informative.
> [early_detection](https://github.com/oladri-renuka/early_detection)

> **Do vision-language models fail differently across image domains?**
> Yes, and the pattern is stark. LLaVA scores 0% on chart OCR while InternVL2 hits 71.1% on identical probes. 945 probes, chi-square p<0.0001. LLaVA has 88% yes-bias on adversarial existence questions.
> [vlm-hallucination](https://github.com/oladri-renuka/vlm-hallucination)

> **Does more thinking tokens help reasoning models?**
> Mostly no. On GSM8K and MATH-500, accuracy plateaus at 256 tokens. On AIME, bimodal split: 57% of problems converge at ~4,100 tokens (96.5% acc), 43% never converge even at 10,000 tokens (11.5% acc).
> [token-efficiency-math-reasoning](https://github.com/oladri-renuka/token-efficiency-math-reasoning)

---

### Systems and Infrastructure

| Project | What it does | Numbers |
|---------|-------------|---------|
| [**inference-server**](https://github.com/oladri-renuka/inference-server) | Continuous batching + paged KV-cache for GPT-2 from scratch (no vLLM). 3 backends benchmarked. Static batching underperforms naive serial under mixed-length traffic. | 2.91 req/s, 0 failures, SSE streaming |
| [**feature-store**](https://github.com/oladri-renuka/feature-store) | Kafka ingestion with 15% reordering, 5% dupes, 10% late arrivals. 3-node Redis Cluster, hash-tag sharding, schema registry. Three-way consistency validation. | 0 mismatches / 800 checks, p95 4.8ms, 9,300 req/s |
| [**adaptive_agent**](https://github.com/oladri-renuka/adaptive_agent) | LangGraph 6-node state graph routing to Haiku 4.5 or Sonnet 4 via OpenRouter. Input guard (regex + LLM injection detection). Output guard (hallucination, completeness, format). | 98% routing accuracy, 28.2% cost reduction |
| [**recsys**](https://github.com/oladri-renuka/recsys) | SASRec on MovieLens-1M deployed on AWS EC2. Full-ranking eval exposes sampled metric inflation (6.23% vs 70.68% Hit@10). 93% popularity bias documented. | HR@10 78.49%, NDCG@10 58.11%, 8,366 req/s |

### Research and Evaluation

| Project | What it found | Numbers |
|---------|--------------|---------|
| [**early_detection**](https://github.com/oladri-renuka/early_detection) | Activation probing on DeepSeek-R1-Distill-Qwen-7B predicts reasoning failure before behavioral signals exist. 200 AIME problems. | AUC 0.612 vs 0.445 at 150 tokens (p=0.001) |
| [**vlm-hallucination**](https://github.com/oladri-renuka/vlm-hallucination) | LLaVA-1.5-7B vs InternVL2-8B across 4 domains. 6-category failure taxonomy. Complete capability absence, not gradual degradation. | 945 probes, chi-square p<0.0001 |
| [**llm-post-training-pipeline**](https://github.com/oladri-renuka/llm-post-training-pipeline) | SFT, reward model, DPO on LLaMA-3.2-1B. Diagnosed TRL bug causing negative KL divergence across 8 failed PPO runs. | +9pp factual (p=0.030), -16.7pp format (p=0.0003) |
| [**knowledge-agent**](https://github.com/oladri-renuka/knowledge-agent) | Belief graph from documents with cross-entity contradiction detection. MCP server exposing 5 tools. 2 embedding calls per document regardless of size. | 936 entities, 32 conflicts, 0 false positives |
| [**factuality-verification**](https://github.com/oladri-renuka/factuality-verification-analysis) | Compared 3 fact-checking methods on 14,525 atomic facts. Calibration matters more than model choice. NLI threshold 0.50 to 0.10 improves F1 by +0.076. | F1 0.727, Precision 0.919 |

### Low-Level Performance

| Project | What it demonstrated | Numbers |
|---------|---------------------|---------|
| [**cuda-attention-kernel**](https://github.com/oladri-renuka/cuda-attention-kernel) | Naive vs tiled attention kernels on A100. Diagnosed why tiling underperforms theory: 40MB L2 cache masks benefit below seq_len=2048. Connects to Flash Attention design rationale. | 515 GFLOPS/s tiled, ~145x over CPU |
| [**cpp-simd-quant**](https://github.com/oladri-renuka/cpp-simd-quant) | ARM NEON SIMD on Apple Silicon. Proves SIMD helps attention (11.1x) but not Black-Scholes (1.03x) because 89% of runtime is transcendental functions. Roofline analysis. | 31.88 GFLOPS/s attention, 103.8M options/sec |
| [**sparse-factor-modeling**](https://github.com/oladri-renuka/sparse-factor-modeling) | 9 LASSO solvers from scratch. Walk-forward backtest, no look-ahead bias. Novel finding: FISTA degrades at high sparsity. KKT-based factor ranking. | Sharpe 5.061, Spearman rho=0.906 |

### Agent Systems

| Project | What it does | Numbers |
|---------|-------------|---------|
| [**code-memory-agent**](https://github.com/oladri-renuka/code-memory-agent) | Coding agent with persistent SQLite memory. SHA-256 staleness detection as non-bypassable gate. Indexes file purposes, symbols, cross-file dependencies. | 42.9% fewer file reads, 19 decision-reuse events |
| [**mindmirror**](https://github.com/oladri-renuka/mindmirror) | Real-time interview coach analyzing eye contact, facial expressions, speech, vocal patterns every 2 seconds. MediaPipe + faster-whisper + LangGraph. | ~1.2s full pipeline cycle, 6 behavioral states |

---

### Skills

<p>
  <img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white" />
  <img src="https://img.shields.io/badge/CUDA-76B900?style=flat-square&logo=nvidia&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/SQL-4479A1?style=flat-square&logo=postgresql&logoColor=white" />
</p>
<p>
  <img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white" />
  <img src="https://img.shields.io/badge/JAX-A8B9CC?style=flat-square&logoColor=white" />
  <img src="https://img.shields.io/badge/HuggingFace-FFD21E?style=flat-square&logo=huggingface&logoColor=black" />
  <img src="https://img.shields.io/badge/LangGraph-1C3C3C?style=flat-square&logoColor=white" />
  <img src="https://img.shields.io/badge/scikit--learn-F7931E?style=flat-square&logo=scikitlearn&logoColor=white" />
  <img src="https://img.shields.io/badge/LoRA-FF6F00?style=flat-square&logoColor=white" />
  <img src="https://img.shields.io/badge/DPO / RLHF-8B5CF6?style=flat-square&logoColor=white" />
</p>
<p>
  <img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazonaws&logoColor=white" />
  <img src="https://img.shields.io/badge/Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white" />
  <img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white" />
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" />
  <img src="https://img.shields.io/badge/FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white" />
  <img src="https://img.shields.io/badge/RunPod-6C3FD1?style=flat-square&logoColor=white" />
</p>

---

### Publications

| Paper | Venue | Year |
|-------|-------|------|
| [Stem Cell Reviews and Reports](https://link.springer.com/article/10.1007/s12015-024-10814-3) | **Springer Nature** | 2025 |
| [Digital Forensics and Cybersecurity](https://onlinelibrary.wiley.com/doi/abs/10.1002/9781394230600.ch19) | **Wiley-Scrivener** | 2024 |
| [Economic Perspectives](https://www.igi-global.com/chapter/economic-perspectives/338698) | **IGI Global** | 2024 |
| [YOLOv8 Traffic Sign Detection](https://www.researchgate.net/publication/379484233_A_YOLOv8-based_Approach_for_Multi-class_Traffic_Sign_Detection) (80.64% acc) | IJSRA | 2024 |
| [BERT Sentiment Analysis](https://www.researchgate.net/publication/379158895_BERT_for_Twitter_Sentiment_Analysis_Achieving_High_Accuracy_and_Balanced_Performance) (F1 0.88) | J. Trends in CS | 2024 |

---

<p align="center"><sub>36 repositories · 5 publications · Python, C++, CUDA, TypeScript</sub></p>
