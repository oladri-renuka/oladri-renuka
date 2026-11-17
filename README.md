# Renuka Oladri
 
**AI/ML Engineer**
 
Building agentic architectures and LLM inference systems that reason reliably at scale.
 
[![Portfolio](https://img.shields.io/badge/Portfolio-oladri--renuka.github.io-0284c7?style=flat-square)](https://oladri-renuka.github.io/oladri-renuka/)
[![arXiv](https://img.shields.io/badge/arXiv-2607.09999-b31b1b?style=flat-square)](https://arxiv.org/abs/2607.09999)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Renuka%20Oladri-0a66c2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/renuka-oladri-8002b525b/)
[![Email](https://img.shields.io/badge/Email-renukaoladriw%40gmail.com-d14836?style=flat-square&logo=gmail)](mailto:renukaoladriw@gmail.com)
 
---
 
## About Me
 
I'm an MS Applied Machine Learning student at the University of Maryland (graduating May 2027), focused on where and why reasoning silently fails in large language models. My work spans agentic architectures, LLM inference, and deep learning systems.
 
Recently, I found that vLLM's calibrated FP8 KV-cache mode collapses reasoning on AIME and GSM8K (3% vs 73% correct), while int8_per_token_head matches the unquantized baseline, and built a linear probe that predicts stuck reasoning chains from model activations before they're behaviorally obvious (AUC 0.612 vs 0.445 baseline). My research on reasoning failures in quantized models is on arXiv, and my work on mechanistic early detection of reasoning non-convergence was accepted to the COLM 2026 Efficient Reasoning Workshop.
 
I care deeply about reproducibility and rigorous evaluation, and I back every claim with significance testing and controlled baselines.
 
---
 
## Featured Research
 
### Silent Failures in Quantized LLM Reasoning
 
A taxonomy-based analysis of failure modes when quantizing reasoning models to low precision. Reveals "Hollow Convergence": accuracy stays flat under quantization while the way models fail changes significantly.
 
**Key Finding:** Failure-mode distribution shifts significantly under NF4 quantization (χ² = 234.5, p < 0.0001)  
**arXiv:** [![arXiv:2607.09999](https://img.shields.io/badge/arXiv-2607.09999-b31b1b?style=flat-square)](https://arxiv.org/abs/2607.09999)
 
### Token Budget Saturation & Mechanistic Early-Detection of Reasoning Non-Convergence
 
Using activation probes on intermediate layers to predict whether chain-of-thought reasoning will converge, enabling efficient early-exit strategies in inference.
 
**Status:** ![COLM 2026 Workshop](https://img.shields.io/badge/COLM%202026%20Efficient%20Reasoning%20Workshop-Accepted-brightgreen?style=flat-square)  
**Key Finding:** AUC 0.612 on convergence prediction vs 0.445 baseline  
**arXiv:** [![arXiv:2607.21433](https://img.shields.io/badge/arXiv-2607.21433-b31b1b?style=flat-square)](https://arxiv.org/abs/2607.21433)
 
---
 
## Featured Projects
 
See my **pinned repositories** for full implementations:
 
- **[sql-agent-eval](https://github.com/oladri-renuka/sql-agent-eval)** — LangGraph NL-to-SQL agent with schema retrieval, self-correction and Haiku→Sonnet routing; 63.6% → 66.6% execution accuracy on all 1,534 BIRD dev questions (p = 0.0001) at 0.18¢ per question
- **[lab-to-field](https://github.com/oladri-renuka/lab-to-field)** — Lab-trained crop-disease classifiers (99%) drop to 24–38% on field photos because they learn the background; ten real field photos per class recover 45–78% of the gap. Live demo
- **[ecg-refuse-or-classify](https://github.com/oladri-renuka/ecg-refuse-or-classify)** — 12-lead ECG classifier at 0.932 macro AUROC and 8.9 ms on CPU, with an autoencoder gate that refuses noisy signals instead of guessing
- **[multi-agent-factcheck](https://github.com/oladri-renuka/multi-agent-factcheck)** — Confirmer, Refuter and Contextualizer agents debate claims; 71.2% accuracy on 160 FEVER claims vs 49.4% for single-model GPT-4, with 2.4× lower calibration error
- **[inference-server](https://github.com/oladri-renuka/inference-server)** — Continuous batching + paged KV-cache built from scratch; +16% throughput and p99 latency cut from 34.8 s to 10.9 s under mixed load
- **[vllm-kvcache-quant-reasoning-eval](https://github.com/oladri-renuka/vllm-kvcache-quant-reasoning-eval)** — Calibrated FP8 KV-cache drops accuracy from 73% to 3% through generation collapse; int8_per_token_head matches baseline
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
![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=redis&logoColor=white)
![Kafka](https://img.shields.io/badge/Apache%20Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=flat-square)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white)
![MLflow](https://img.shields.io/badge/MLflow-0194E2?style=flat-square)
 
### Research & Analysis
![Quantization](https://img.shields.io/badge/Quantization-1f77b4?style=flat-square)
![Inference Optimization](https://img.shields.io/badge/Inference%20Optimization-FFB81C?style=flat-square)
![Statistical Testing](https://img.shields.io/badge/Statistical%20Testing-4285F4?style=flat-square)
![Knowledge Graphs](https://img.shields.io/badge/Knowledge%20Graphs-4285F4?style=flat-square)
 
---
 
## Experience
 
### University of Maryland
**Graduate Teaching Assistant, MSAI 633 Agentic AI** | Aug 2026 – Present | College Park, MD
 
- Support 47 graduate students on agentic AI architectures, multi-step planning, memory and agent evaluation: grade assignments and quizzes, run office hours, and help students debug their agent projects.
### HARMAN International (Samsung)
**AI Data and Analytics Intern** | Dec 2024 – Jun 2025 | Remote, India
 
- Evaluated an internal agentic framework across 6 multi-agent production use cases, benchmarking tool-use success and memory retention across 100k+ token contexts: 94% and 98% respectively.
- Using that framework, designed and built an autonomous multi-agent test-generation system with AST-based analysis, first in TypeScript and then generalized to C++ via language-specific parsers, reaching 93% and 85% coverage respectively.
- Benchmarked the system against GitHub Copilot on proprietary system dependencies, measuring a 35-point increase in branch coverage and a 3x reduction in dependency-hallucination errors. The results drove the framework's adoption for enterprise use, and the system was deployed into the client's CI/CD pipeline to automate legacy regression testing.
### SeriGreen Technologies
**Junior Data Analyst Intern** | Feb 2024 – Jul 2024 | India
 
- Engineered a Python ETL pipeline to parse and structure 1,450+ unformatted market logs from a state agricultural database into relational schemas, cutting downstream data-cleansing latency 42%.
- Streamed processed data through a 3-broker Apache Kafka cluster to handle high-throughput routing between ingestion and analytics services without data loss.
- Trained multivariable regression models in Scikit-learn on environmental features (temperature, weather, humidity) to forecast optimal crop yield conditions, reaching an R² of 0.884.
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
University of Maryland, College Park | Aug 2025 – May 2027
 
**Bachelor of Technology, Data Science and Artificial Intelligence**  
Woxsen University | Graduated 2025
 
**Certifications & Awards**
- Agentic AI Nanodegree (Udacity) — Jan 2026
- Oracle Cloud Infrastructure AI Foundations Associate — Dec 2025
- Dean's List Certificate — Woxsen University
- Best Student for Research Inclination Award — Woxsen University
- Best Demonstration Award (National Level Hackathon) — Oriental Institute of Science and Technology, Bhopal, 2023
---
 
## Publications
 
[![arXiv:2607.09999](https://img.shields.io/badge/arXiv-2607.09999-b31b1b?style=flat-square)](https://arxiv.org/abs/2607.09999)  
**Silent Failures in Quantized LLM Reasoning: A Taxonomy-Based Analysis of Hollow Convergence and Failure Mode Shifts**  
*arXiv preprint, 2026*
 
[![arXiv:2607.21433](https://img.shields.io/badge/arXiv-2607.21433-b31b1b?style=flat-square)](https://arxiv.org/abs/2607.21433)  
**Token Budget Saturation and Mechanistic Early-Detection of Reasoning Non-Convergence in Chain-of-Thought Models**  
*Accepted at the COLM 2026 Efficient Reasoning Workshop*
 
---
 
## Portfolio & Connect
 
[![Portfolio](https://img.shields.io/badge/Portfolio-oladri--renuka.github.io-0284c7?style=flat-square)](https://oladri-renuka.github.io/oladri-renuka/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Renuka%20Oladri-0a66c2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/renuka-oladri-8002b525b/)
[![arXiv](https://img.shields.io/badge/arXiv-Research-b31b1b?style=flat-square)](https://arxiv.org/abs/2607.09999)
[![Email](https://img.shields.io/badge/Email-Contact-d14836?style=flat-square&logo=gmail)](mailto:renukaoladriw@gmail.com)
 
---
 
Interested in LLM systems, agentic architectures, reasoning failure analysis, and production ML. Open to new-grad 2027 roles.
 
