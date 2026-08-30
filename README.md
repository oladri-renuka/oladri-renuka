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

See my **pinned repositories** on GitHub for detailed implementations of:

- **vLLM KV-Cache Quantization Reasoning Evaluation** — Found FP8 quantization causes 94% generation collapse; findings referenced in vLLM's issue tracker
- **Adaptive Multi-Model Agent** — LangGraph-based routing with 98% accuracy and 28.2% cost reduction
- **SWE-Researcher** — Autonomous code generation agent with 80%+ test coverage and self-correcting debugging
- **Personal Knowledge Agent (MCP Server)** — Persistent belief-graph with 906 entities and semantic contradiction detection
- **Inference Server** — Continuous batching + paged KV-cache from scratch; 2.91 req/s throughput
- **Shadow Deployment Framework** — Production ML serving with 60s automatic rollback detection

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

- Architected 6 multi-agent production use cases to evaluate an internal agentic framework, benchmarking tool-use success and memory retention across 100k+ token contexts: 94% and 98% respectively.
- Using that framework, designed and built an autonomous multi-agent test-generation system with AST-based analysis, first in TypeScript and then generalized to C++ via language-specific parsers, reaching 93% and 85% coverage respectively.
- Benchmarked the system against GitHub Copilot on proprietary system dependencies, measuring a 35-point increase in branch coverage and a 3x reduction in dependency-hallucination errors. The results drove the framework's adoption for enterprise use, and the system was deployed into the client's CI/CD pipeline to automate legacy regression testing.

### SeriGreen Technologies
**Junior Data Analyst Intern** | Feb 2024 – Jul 2024 | India

- Engineered a Python ETL pipeline to parse and structure 1,450+ unformatted market logs from a state agricultural database into relational schemas, cutting downstream data-cleansing latency 42%.
- Streamed processed data through a 3-broker Apache Kafka cluster to handle high-throughput routing between ingestion and analytics services without data loss.
- Trained multivariable regression models in Scikit-learn on environmental features (temperature, weather, humidity) to forecast optimal crop yield conditions, reaching 88.4% validation accuracy.
- Built a full-stack MERN application to serve the models in production and added a WebSocket layer for real-time control, triggering physical hardware state changes on a Raspberry Pi in under 180ms.

### Woxsen University
**Research Assistant** | Aug 2022 – Dec 2024 | India

- Engineered an automated telemetry pipeline ingesting 4.5M+ time-series data points (wind velocity, torque, battery state-of-charge, thermal readings) from campus sensors.
- Built a signal processing pipeline in NumPy and SciPy to denoise, normalize, and downsample raw sensor streams, improving feature-engineering throughput 38%.
- Trained LSTM and GRU networks in PyTorch to forecast wind energy generation spikes and battery degradation, running hyperparameter sweeps across 50+ configurations to reach an R-squared of 0.912 on battery discharge cycle forecasts.
- Packaged the pipeline and models into a reproducible benchmarking repository, accelerating the lab's energy-load simulation throughput 2.8x.

### AppsTek Corp
**Research Intern** | Feb 2023 – Jul 2023 | India

- Built an ETL pipeline using Hugging Face tokenizers and OpenCV to ingest and temporally align 12,000+ conversational video segments, extracting RoBERTa text embeddings, Wav2Vec 2.0 acoustic vectors, and ResNet-50 facial feature maps.
- Implemented and integrated the published Multimodal Adaptation Gate (MAG) architecture into a PyTorch transformer pipeline, modifying cross-modal attention to inject acoustic and visual vectors into the language model's inner layers.
- Optimized inference by exporting the fused model to ONNX with graph optimization and post-training quantization, reducing inference latency 34%.
- Achieved a macro F1-score of 0.84 on the conversational test set, outperforming single-modality baselines.

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

Interested in collaborating on LLM systems, agentic architectures, reasoning failure analysis, or production ML systems. Open to full-time roles New Grad roles - 2027.
