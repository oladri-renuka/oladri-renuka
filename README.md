# Renuka Oladri

**AI/ML Engineer & Researcher**

Building LLM inference systems and agentic architectures that reason reliably at scale.

[![Portfolio](https://img.shields.io/badge/Portfolio-oladri--renuka.github.io-0284c7?style=flat-square)](https://oladri-renuka.github.io/oladri-renuka/)
[![arXiv](https://img.shields.io/badge/arXiv-2607.09999-b31b1b?style=flat-square)](https://arxiv.org/abs/2607.09999)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Renuka%20Oladri-0a66c2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/renuka-oladri-8002b525b/)
[![Email](https://img.shields.io/badge/Email-renukaoladriw%40gmail.com-d14836?style=flat-square&logo=gmail)](mailto:renukaoladriw@gmail.com)

---

## About Me

I'm an MS Applied Machine Learning candidate at the University of Maryland, focused on understanding where and why reasoning silently fails in large language models. My work spans LLM inference optimization, agentic architectures, and production ML systems.

Recently, I discovered a critical KV-cache quantization bug in vLLM that causes 94% generation collapse under default settings, and developed a linear probe that predicts stuck reasoning chains from model activations before they're behaviorally obvious (AUC 0.612 vs 0.445 baseline). My research on reasoning failures in quantized models has been submitted to IEEE ICTAI 2026, and work on mechanistic early-detection of reasoning non-convergence was accepted to the COLM 2026 Efficient Reasoning Workshop.

I care deeply about reproducibility and rigorous evaluation. I'd rather scope a limitation honestly than oversell a result.

---

## Featured Research

### Silent Failures in Quantized LLM Reasoning

A taxonomy-based analysis of failure modes when quantizing reasoning models to low precision. Reveals the "Hollow Convergence" phenomenon where models output correct answers while internal reasoning completely breaks.

**Status:** ![IEEE ICTAI 2026](https://img.shields.io/badge/IEEE%20ICTAI%202026-Submitted-orange?style=flat-square)  
**Key Finding:** 94% generation collapse under default FP8 quantization  
**arXiv:** [![arXiv:2607.09999](https://img.shields.io/badge/arXiv-2607.09999-b31b1b?style=flat-square)](https://arxiv.org/abs/2607.09999)

### Token Budget Saturation & Mechanistic Early-Detection of Reasoning Non-Convergence

Using activation probes on intermediate layers to predict whether chain-of-thought reasoning will converge, enabling efficient early-exit strategies in inference.

**Status:** ![COLM 2026 Workshop](https://img.shields.io/badge/COLM%202026-Accepted-brightgreen?style=flat-square)  
**Key Finding:** AUC 0.612 on convergence prediction vs 0.445 baseline  
**arXiv:** [![arXiv:2607.21433](https://img.shields.io/badge/arXiv-2607.21433-b31b1b?style=flat-square)](https://arxiv.org/abs/2607.21433)

---

## Featured Projects

### vLLM KV-Cache Quantization Reasoning Evaluation

Investigated whether vLLM's KV-cache quantization modes cause silent reasoning failures. Found that calibrated FP8 causes near-total generation collapse (94% failure) while int8_per_token_head closely tracks unquantized baseline accuracy. Findings referenced in vLLM's issue tracker.

**Metrics:** 94% failure rate identified | FP8 root cause analysis  
**Tech Stack:**  
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![vLLM](https://img.shields.io/badge/vLLM-009DB7?style=flat-square)
![Quantization](https://img.shields.io/badge/Quantization-1f77b4?style=flat-square)

**Repository:** [vllm-kvcache-quant-reasoning-eval](https://github.com/oladri-renuka/vllm-kvcache-quant-reasoning-eval)

---

### Adaptive Multi-Model Agent

LangGraph-based agent that routes requests between fast and strong models based on live task-difficulty classification. Includes input/output guardrails against injection attacks and hallucination.

**Metrics:** 98% routing accuracy | 28.2% cost reduction | 0 false positives  
**Tech Stack:**  
![LangGraph](https://img.shields.io/badge/LangGraph-0ea5e9?style=flat-square)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![LLMs](https://img.shields.io/badge/LLMs-FF6B6B?style=flat-square)

**Repository:** [adaptive_agent](https://github.com/oladri-renuka/adaptive_agent)

---

### SWE-Researcher: Autonomous Code Generation Agent

Agent that analyzes repositories, implements features via LLM generation, enforces 80%+ test coverage, executes in sandboxed Docker containers, and opens pull requests autonomously with self-correcting debugging capabilities.

**Metrics:** 80%+ test coverage enforcement | Automated PR submission  
**Tech Stack:**  
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![GitHub API](https://img.shields.io/badge/GitHub%20API-181717?style=flat-square&logo=github&logoColor=white)

**Repository:** [swe-researcher](https://github.com/oladri-renuka/swe-researcher)

---

### Personal Knowledge Agent (MCP Server)

Persistent belief-graph agent that ingests documents, resolves duplicate entities via semantic matching, detects contradictions across sources, and answers queries with per-fact citations. Exposed as an MCP server for Claude Desktop integration.

**Metrics:** 906 entities tracked | 32 conflicts detected  
**Tech Stack:**  
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![Knowledge Graphs](https://img.shields.io/badge/Knowledge%20Graphs-4285F4?style=flat-square)

**Repository:** [knowledge-agent](https://github.com/oladri-renuka/knowledge-agent)

---

### Inference Server: Continuous Batching + Paged KV-Cache

Built three LLM serving backends from scratch to compare naive serial, static batching, and continuous batching with paged attention. Demonstrates head-of-line blocking problem that motivates production techniques.

**Metrics:** 2.91 req/s continuous batching vs 2.51 req/s serial  
**Tech Stack:**  
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![Optimization](https://img.shields.io/badge/Optimization-FFB81C?style=flat-square)

**Repository:** [inference-server](https://github.com/oladri-renuka/inference-server)

---

### Shadow Deployment Framework

Production ML serving system that runs champion and challenger models in parallel, automatically detecting statistical degradation via hypothesis testing, and rolling back within 60 seconds without human intervention or user-facing latency impact.

**Metrics:** 60s automatic rollback | Zero latency impact  
**Tech Stack:**  
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)

**Repository:** [shadow-deployment-framework](https://github.com/oladri-renuka/shadow-deployment-framework)

---

## Technical Skills

### Core ML/AI
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=flat-square&logo=pytorch&logoColor=white)
![HuggingFace](https://img.shields.io/badge/HuggingFace-FFD21E?style=flat-square)
![JAX](https://img.shields.io/badge/JAX-0072B2?style=flat-square)
![vLLM](https://img.shields.io/badge/vLLM-009DB7?style=flat-square)
![LangGraph](https://img.shields.io/badge/LangGraph-0ea5e9?style=flat-square)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-F7931E?style=flat-square&logo=scikit-learn&logoColor=white)

### Languages & Development
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![C++](https://img.shields.io/badge/C++-00599C?style=flat-square&logo=cplusplus&logoColor=white)
![SQL](https://img.shields.io/badge/SQL-336791?style=flat-square)
![Bash](https://img.shields.io/badge/Bash-4EAA25?style=flat-square&logo=gnubash&logoColor=white)

### Infrastructure & DevOps
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![Kafka](https://img.shields.io/badge/Apache%20Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square)

### Research & Analysis
![Quantization](https://img.shields.io/badge/Quantization-1f77b4?style=flat-square)
![Inference Optimization](https://img.shields.io/badge/Inference%20Optimization-FFB81C?style=flat-square)
![Statistical Testing](https://img.shields.io/badge/Statistical%20Testing-4285F4?style=flat-square)
![Knowledge Graphs](https://img.shields.io/badge/Knowledge%20Graphs-4285F4?style=flat-square)

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

### arXiv Publications

[![arXiv:2607.09999](https://img.shields.io/badge/arXiv-2607.09999-b31b1b?style=flat-square)](https://arxiv.org/abs/2607.09999)  
**Silent Failures in Quantized LLM Reasoning: A Taxonomy-Based Analysis of Hollow Convergence and Failure Mode Shifts**  
*Submitted to IEEE ICTAI 2026*

[![arXiv:2607.21433](https://img.shields.io/badge/arXiv-2607.21433-b31b1b?style=flat-square)](https://arxiv.org/abs/2607.21433)  
**Token Budget Saturation and Mechanistic Early-Detection of Reasoning Non-Convergence in Chain-of-Thought Models**  
*Accepted at COLM 2026 Workshop*

---

## Portfolio & Connect

[![Portfolio](https://img.shields.io/badge/Portfolio-oladri--renuka.github.io-0284c7?style=flat-square)](https://oladri-renuka.github.io/oladri-renuka/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Renuka%20Oladri-0a66c2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/renuka-oladri-8002b525b/)
[![arXiv](https://img.shields.io/badge/arXiv-Research-b31b1b?style=flat-square)](https://arxiv.org/abs/2607.09999)
[![Email](https://img.shields.io/badge/Email-Contact-d14836?style=flat-square&logo=gmail)](mailto:renukaoladriw@gmail.com)

---

Interested in collaborating on LLM systems, agentic architectures, reasoning failure analysis, or production ML systems. Open to full-time roles and research assistant positions starting 2027.
