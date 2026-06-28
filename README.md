# Renuka Oladri

MS Applied Machine Learning, University of Maryland College Park (CMNS Science Academy, graduating May 2027). Building LLM inference systems, mechanistic interpretability tools, and production ML infrastructure.

Previously AI Data & Analytics Intern at HARMAN International (Samsung), where a multi-agent TypeScript testing system hit 93% code coverage vs GitHub Copilot's 70-80% and caught 5 Redis reliability gaps before production. Before that, Research Assistant at Woxsen University leading a 4-person team on battery management ML (90-95% accuracy).

5 peer-reviewed publications across Springer Nature, Wiley-Scrivener, IGI Global, and IEEE-indexed journals.

---

## Selected Work

The numbers tell the story better than descriptions. Each project links to its repo with full documentation.

### Systems and Infrastructure

| Project | What it proved | Key numbers |
|---------|---------------|-------------|
| [inference-server](https://github.com/oladri-renuka/inference-server) | Built continuous batching + paged KV-cache for GPT-2 from scratch (no vLLM). Static batching underperforms naive serial under mixed-length traffic. | 2.91 req/s, 0 failures, SSE streaming with TTFT |
| [feature-store](https://github.com/oladri-renuka/feature-store) | Real-time feature store with Kafka chaos (15% reorder, 5% dupes, 10% late). Three-way consistency proof: online vs offline vs ground truth. | 0 mismatches / 800 checks, p95 4.8ms, 9,300 req/s |
| [adaptive_agent](https://github.com/oladri-renuka/adaptive_agent) | LangGraph router dispatching to Haiku or Sonnet based on LLM-classified complexity. Input/output guardrails catch injection and hallucination. | 98% routing accuracy, 28.2% cost reduction |
| [recsys](https://github.com/oladri-renuka/recsys) | SASRec on MovieLens-1M deployed on AWS EC2. Full-ranking evaluation exposes sampled metric inflation (6.23% vs 70.68% Hit@10). | HR@10 78.49%, 8,366 req/s |

### Research and Evaluation

| Project | What it found | Key numbers |
|---------|--------------|-------------|
| [early_detection](https://github.com/oladri-renuka/early_detection) | Linear probe on DeepSeek-R1 hidden states predicts reasoning failure before surface features carry any signal. | AUC 0.612 vs 0.445 at 150 tokens (p=0.001) |
| [vlm-hallucination](https://github.com/oladri-renuka/vlm-hallucination) | LLaVA and InternVL2 fail in qualitatively different ways across image domains. LLaVA has 88% yes-bias on adversarial probes. | 945 probes, chi-square p<0.0001, chart OCR: 0% vs 71% |
| [llm-post-training-pipeline](https://github.com/oladri-renuka/llm-post-training-pipeline) | Full SFT, reward model, DPO pipeline on LLaMA-3.2-1B. Diagnosed TRL bug causing negative KL divergence across 8 failed PPO runs. | +9pp factual accuracy (p=0.030), -16.7pp format (p=0.0003) |
| [knowledge-agent](https://github.com/oladri-renuka/knowledge-agent) | Belief graph with cross-entity contradiction detection. MCP server with 5 tools. 2 embedding calls per document regardless of size. | 906 entities, 32 conflicts, 0 false positives on 173 pages |

### Low-Level Performance

| Project | What it demonstrated | Key numbers |
|---------|---------------------|-------------|
| [cuda-attention-kernel](https://github.com/oladri-renuka/cuda-attention-kernel) | Naive vs tiled attention on A100. Diagnosed why tiling underperforms theory: 40MB L2 cache masks benefit below seq_len=2048. | 515 GFLOPS/s tiled, ~145x over CPU |
| [sparse-factor-modeling](https://github.com/oladri-renuka/sparse-factor-modeling) | 9 LASSO solvers from scratch with walk-forward backtesting. Novel finding: FISTA degrades at high sparsity. | Sharpe 5.061, KKT ranking rho=0.906 |

---

## Skills

| Category | |
|----------|---|
| **Languages** | Python, C++, CUDA, TypeScript, SQL |
| **ML/DL** | PyTorch, JAX, HuggingFace Transformers, LangGraph, scikit-learn, LoRA, DPO, RLHF |
| **Systems** | AWS (EC2, S3), Kafka, Redis, Docker, FastAPI, RunPod |
| **Research** | Mechanistic interpretability, activation probing, benchmark evaluation, causal inference |

---

## Publications

| Venue | Year |
|-------|------|
| Stem Cell Reviews and Reports, **Springer Nature** | 2025 |
| Digital Forensics and Cybersecurity: Emerging Threats, **Wiley-Scrivener** | 2024 |
| **IGI Global** | 2024 |
| IJSRA (YOLOv8 traffic sign detection, 80.64% accuracy) | 2024 |
| J. Trends in CS & Smart Technology (BERT sentiment, F1 0.88) | 2024 |

---

<p align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=oladri-renuka&show_icons=true&theme=github_dark&hide_border=true&count_private=true&hide_title=true" height="165" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=oladri-renuka&layout=compact&theme=github_dark&hide_border=true&langs_count=8" height="165" />
</p>

<p align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=oladri-renuka&theme=github-dark-blue&hide_border=true" height="165" />
</p>
