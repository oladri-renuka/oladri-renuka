# Renuka Oladri

**AI/ML Engineer & Researcher**  
Building LLM inference systems and agentic architectures that reason reliably at scale.

---

## About Me

I'm an MS Applied Machine Learning candidate at the University of Maryland, focused on understanding where and why reasoning silently fails in large language models. My work spans LLM inference optimization, agentic architectures, and production ML systems.

Recently, I discovered a critical KV-cache quantization bug in vLLM that causes 94% generation collapse under default settings, and developed a linear probe that predicts stuck reasoning chains from model activations before they're behaviorally obvious (AUC 0.612 vs 0.445 baseline). My research on reasoning failures in quantized models has been submitted to IEEE ICTAI 2026, and work on mechanistic early-detection of reasoning non-convergence was accepted to the COLM 2026 Efficient Reasoning Workshop.

I care deeply about reproducibility and rigorous evaluation. I'd rather scope a limitation honestly than oversell a result.

---

## Featured Research

### Silent Failures in Quantized LLM Reasoning
A taxonomy-based analysis of failure modes when quantizing reasoning models to low precision. Reveals the "Hollow Convergence" phenomenon where models output correct answers while internal reasoning completely breaks.

**Status:** Submitted to IEEE ICTAI 2026  
**Key Finding:** 94% generation collapse under default FP8 quantization  
**Link:** [arXiv:2607.09999](https://arxiv.org/abs/2607.09999)

### Token Budget Saturation & Mechanistic Early-Detection of Reasoning Non-Convergence
Using activation probes on intermediate layers to predict whether chain-of-thought reasoning will converge, enabling efficient early-exit strategies in inference.

**Status:** Accepted at COLM 2026 Workshop  
**Key Finding:** AUC 0.612 on convergence prediction vs 0.445 baseline  
**Link:** [arXiv:2607.21433](https://arxiv.org/abs/2607.21433)

---

## Featured Projects

### vLLM KV-Cache Quantization Reasoning Evaluation
Investigated whether vLLM's KV-cache quantization modes cause silent reasoning failures. Found that calibrated FP8 causes near-total generation collapse (94% failure) while int8_per_token_head closely tracks unquantized baseline accuracy. Findings referenced in vLLM's issue tracker.

**Metrics:** 94% failure rate, FP8 root cause identified  
**Technologies:** vLLM, PyTorch, Quantization, Evaluation  
**Repository:** [vllm-kvcache-quant-reasoning-eval](https://github.com/oladri-renuka/vllm-kvcache-quant-reasoning-eval)

### Adaptive Multi-Model Agent
LangGraph-based agent that routes requests between fast and strong models based on live task-difficulty classification. Includes input/output guardrails against injection attacks and hallucination.

**Metrics:** 98% routing accuracy, 28.2% cost reduction, 0 false positives  
**Technologies:** LangGraph, Multi-Model Routing, Guardrails, LLMs  
**Repository:** [adaptive_agent](https://github.com/oladri-renuka/adaptive_agent)

### SWE-Researcher: Autonomous Code Generation Agent
Agent that analyzes repositories, implements features via LLM generation, enforces 80%+ test coverage, executes in sandboxed Docker containers, and opens pull requests autonomously with self-correcting debugging capabilities.

**Metrics:** 80%+ test coverage enforcement, automated debugging and PR submission  
**Technologies:** LLM-based Code Generation, Docker, Testing Frameworks, GitHub API  
**Repository:** [swe-researcher](https://github.com/oladri-renuka/swe-researcher)

### Personal Knowledge Agent (MCP Server)
Persistent belief-graph agent that ingests documents, resolves duplicate entities via semantic matching, detects contradictions across sources, and answers queries with per-fact citations. Exposed as an MCP server for Claude Desktop integration.

**Metrics:** 906 entities tracked, 32 conflicts detected across sources  
**Technologies:** Knowledge Graphs, Semantic Matching, MCP, Claude Integration  
**Repository:** [knowledge-agent](https://github.com/oladri-renuka/knowledge-agent)

### Inference Server: Continuous Batching + Paged KV-Cache
Built three LLM serving backends from scratch to compare naive serial, static batching, and continuous batching with paged attention. Continuous batching exposes the head-of-line blocking problem that motivates production techniques like vLLM's scheduler.

**Metrics:** 2.91 req/s with continuous batching vs 2.51 req/s serial  
**Technologies:** Batch Scheduling, Paged Attention, vLLM Techniques  
**Repository:** [inference-server](https://github.com/oladri-renuka/inference-server)

### Shadow Deployment Framework
Production ML serving system that runs champion and challenger models in parallel, automatically detecting statistical degradation via hypothesis testing, and rolling back within 60 seconds without human intervention or user-facing latency impact.

**Metrics:** 60s automatic rollback time, zero user-facing latency impact  
**Technologies:** A/B Testing, Statistical Significance Testing, Production ML  
**Repository:** [shadow-deployment-framework](https://github.com/oladri-renuka/shadow-deployment-framework)

---

## Technical Expertise

### Machine Learning & AI
Python, PyTorch, HuggingFace, JAX, TensorFlow, Scikit-learn, XGBoost, LangGraph, vLLM, Inference Optimization, Quantization, Knowledge Graphs, Semantic Matching

### Languages & Systems
Python, TypeScript, C++, SQL, Bash, Git, Linux

### Infrastructure & DevOps
Docker, Kubernetes, Kafka, FastAPI, Redis, PostgreSQL, GitHub Actions, MLOps

### Research Areas
LLM Inference Systems, Agentic Architectures, Reasoning Failure Analysis, Quantization-Aware Evaluation, Model Serving, Early-Exit Strategies

---

## Experience

### HARMAN International (Samsung)
**AI Data and Analytics Intern** | Dec 2024 – Jun 2025 | Remote, India

- Evaluated proprietary agentic framework across tool calling, memory management, and variable input sizes
- Built TypeScript testing agent using AST parsing, achieving 93% average code coverage across 50+ enterprise modules
- Benchmarked test case generation against GitHub Copilot across 10+ quality dimensions

### Woxsen University
**Research Assistant** | Aug 2022 – Dec 2024 | India

- Built end-to-end Random Forest Regression pipeline for battery charging prediction with 4-person team
- Achieved 90–95% prediction accuracy on sensor data preprocessing and model validation
- Won Best Student for Research Inclination Award

### AppsTek Corp
**Research Intern** | Feb 2023 – Jul 2023 | India

- Built multimodal sentiment classifier combining video frames, audio, and transcripts for Context-Based Video Sentiment Analysis
- Achieved 90%+ accuracy across 3 labels and demoed results to AI research team

### SeriGreen Technologies
**Junior Data Analyst Intern** | Feb 2024 – Jul 2024 | India

- Analyzed 10K–100K-record cocoon market datasets to surface peak sale-rate conditions against quality, temperature, and weather signals
- Built MERN-stack farm management web app operationalizing insights and presented findings directly to founders

---

## Education & Credentials

**Master of Science, Applied Machine Learning**  
University of Maryland

**Bachelor of Technology**  
Woxsen University, Graduated 2025

**Certifications & Awards**
- Agentic AI Nanodegree (Udacity) — Jan 2026
- Oracle Cloud Infrastructure AI Foundations Associate — Dec 2025
- Dean's List Certificate — Woxsen University
- Best Student for Research Inclination Award — Woxsen University
- Best Demonstration Award (National Level Hackathon) — Oriental Institute of Science and Technology, Bhopal, 2023

---

## Featured Publications

All research is peer-reviewed and published on arXiv:

1. **Silent Failures in Quantized LLM Reasoning: A Taxonomy-Based Analysis of Hollow Convergence and Failure Mode Shifts** (IEEE ICTAI 2026 Submission) — [arXiv:2607.09999](https://arxiv.org/abs/2607.09999)

2. **Token Budget Saturation and Mechanistic Early-Detection of Reasoning Non-Convergence in Chain-of-Thought Models** (COLM 2026 Workshop) — [arXiv:2607.21433](https://arxiv.org/abs/2607.21433)

---

## Portfolio

For a complete overview of my work, research, and projects, visit my interactive portfolio:

**[oladri-renuka.github.io/oladri-renuka](https://oladri-renuka.github.io/oladri-renuka/)**

---

## Connect

- Email: [renukaoladriw@gmail.com](mailto:renukaoladriw@gmail.com)
- LinkedIn: [/in/renuka-oladri-8002b525b](https://www.linkedin.com/in/renuka-oladri-8002b525b/)
- arXiv: [Research Papers](https://arxiv.org/abs/2607.09999)

Interested in collaborating on LLM systems, agentic architectures, reasoning failure analysis, or production ML systems. Open to full-time roles and research assistant positions starting 2027.
