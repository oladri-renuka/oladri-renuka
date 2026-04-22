# Hi there, I'm Renuka Oladri 👋

<div align="center">

![Typing SVG](https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=36BCF7&center=true&vCenter=true&width=600&lines=MS+Machine+Learning+%40+University+of+Maryland;LLM+Factuality+%26+RAG+Systems+Researcher;Multi-Agent+%26+Agentic+AI+Developer;Deep+Learning+%26+Computer+Vision+Engineer)

</div>

---

## 🚀 About Me

I'm a first-year MS student in Machine Learning at the University of Maryland (AIM Institute), with research interests in LLM factuality evaluation, RAG benchmarking, and agentic AI systems. I build production-grade ML pipelines — from multi-strategy retrieval benchmarks to real-time multimodal coaching agents.

- 🔭 Current focus: **LLM evaluation, RAG systems, and agentic AI pipelines**
- 🧪 Recent work: **Atomic factuality verification (14,525 facts, NLI calibration), SEC 10-K RAG benchmark (116 MLflow runs), MindMirror real-time interview coach**
- 📄 Published in **Springer Nature** (Stem Cell Reviews and Reports) and **Wiley-Scrivener**
- 🏅 **5 peer-reviewed publications** · National Hackathon Best Demo Award 2023 (Team Leader)
- 💬 Ask me about **LLM evaluation, RAG pipelines, LangGraph, multi-agent systems**
- 📫 **renukaoladriw@gmail.com** · roladri@umd.edu

---

## 🛠️ Tech Stack

### Languages
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![SQL](https://img.shields.io/badge/SQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![R](https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white)

### ML / Deep Learning
![PyTorch](https://img.shields.io/badge/PyTorch-EE4C2C?style=for-the-badge&logo=pytorch&logoColor=white)
![TensorFlow](https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)
![Scikit Learn](https://img.shields.io/badge/scikit_learn-F7931E?style=for-the-badge&logo=scikit-learn&logoColor=white)
![Hugging Face](https://img.shields.io/badge/🤗_Hugging_Face-FFD21E?style=for-the-badge)
![XGBoost](https://img.shields.io/badge/XGBoost-189F50?style=for-the-badge&logo=xgboost&logoColor=white)

### LLM / Agentic AI
![LangChain](https://img.shields.io/badge/🦜_LangChain-1C3C3C?style=for-the-badge)
![LangGraph](https://img.shields.io/badge/🕸️_LangGraph-FF6B6B?style=for-the-badge)
![Ollama](https://img.shields.io/badge/Ollama-000000?style=for-the-badge&logo=ollama&logoColor=white)

### MLOps & Infrastructure
![MLflow](https://img.shields.io/badge/MLflow-0194E2?style=for-the-badge&logo=mlflow&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

---

## 🏆 Featured Projects

### 🔬 Atomic Factuality Verification — NLI vs. Retrieval+LLM vs. Direct LLM
> `RoBERTa-MNLI` · `BM25` · `Qwen2.5-3B` · `Gradio` · `HuggingFace Spaces`

Inspired by FActScore (Min, Krishna, Iyyer et al., EMNLP 2023), this project evaluates 3 fact-verification strategies across **14,525 atomic facts from 183 entities**. NLI threshold calibration (0.50→0.10) improved F1 by **+0.076** — a larger gain than switching verifier entirely. Discovered a statistically significant **rarity reversal** (ANOVA F=7.36, p<0.001): frequent entities are harder to verify than rare ones.

---

### 📊 SEC 10-K RAG System — Multi-Strategy Retrieval Benchmark
> `ChromaDB` · `BM25` · `Hybrid RRF` · `Llama 3.3` · `MLflow` · `HuggingFace Spaces`

Benchmarked **4 retrieval strategies across 116 RAG runs** on a hand-labeled 29-question golden dataset (19,316 chunks, 188 filings, 1993–2021). Hybrid RRF achieved faithfulness of **0.898 (+17% over BM25)**. All experiments tracked in MLflow; live demo deployed on HuggingFace Spaces.

---

### 🪞 MindMirror — Real-Time AI Interview Coach
> `MediaPipe` · `faster-whisper` · `LangGraph` · `Gemini 2.0 Flash` · `Gradio` · `HuggingFace Spaces`

Fused **478-point face mesh + YIN pitch + WPM + filler word detection** into a 6-state behavioral classifier calibrated against personal baseline. LangGraph agent generates live coaching nudges every ~1.2s. Scoring is multiplicative — confident delivery can't compensate for off-topic answers.

🔗 [Live Demo](https://huggingface.co/spaces/oladri-Renuka/mindmirror)

---

### 🧠 Brain Tumor Classification — ConvNeXt Transfer Learning
> `PyTorch` · `ConvNeXt-Tiny` · `ImageNet`

Fine-tuned ConvNeXt-Tiny on a **42-class brain MRI dataset** (15 tumor types × 3 scan types + normals) — achieved **99.64% accuracy** vs. EfficientNetB5 baseline of 92.86%.

---

### 🎮 Autonomous Game-Playing Agent — Deep Reinforcement Learning
> `PPO` · `PyTorch` · `Self-Play`

Trained PPO agent via pure self-play over **5,000 episodes** with no pre-programmed game knowledge — achieved **78% win rate** vs. random opponents and **100% valid-move rate** in final 3,000+ episodes.

---

## 📄 Publications

- 📘 **Springer Nature** — *"Model Organoids: Integrated Frameworks for the Next Frontier of Healthcare Advancements."* Stem Cell Reviews and Reports, Feb 2025
- 📗 **Wiley-Scrivener** — *"Data Privacy and Protection: Legal and Ethical Challenges."* Digital Forensics and Cybersecurity: Emerging Threats
- 📄 **IJSRA** — *"A YOLOv8-based Approach for Multi-Class Traffic Sign Detection."* Mar 2024 [80.64% accuracy]
- 📄 **Journal of Trends in CS & Smart Technology** — *"BERT for Twitter Sentiment Analysis."* Mar 2024 [87% accuracy, F1: 0.88]
- 📙 **IGI Global** — *"Economic Perspectives: Opportunity and Challenges in E-Waste Management."*

[![ORCID](https://img.shields.io/badge/ORCID-A6CE39?style=for-the-badge&logo=orcid&logoColor=white)](https://orcid.org/0009-0008-2897-2131)

---

## 🏅 Achievements

- 🥇 **National Hackathon Best Demonstration Award** — OIST Bhopal 2023 (Team Leader)
- 🏆 **Top 14%** — Steel Defect Prediction (Kaggle)
- 📈 **Rank 29/764** — Store Sales Forecasting (Kaggle)
- 🎯 **Top 7%** — Abalone Regression (Kaggle)
- 📝 **Elsevier Journal Reviewer** — Peer Review Experience
- ☁️ **Oracle Cloud AI Foundations** (2025) · **Udacity Agentic AI Nanodegree** (2026) · **AWS Architecting Solutions**

---

## 📊 GitHub Analytics

<div align="center">
  <img height="180em" src="https://github-readme-stats.vercel.app/api?username=oladri-renuka&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true"/>
  <img height="180em" src="https://github-readme-stats.vercel.app/api/top-langs/?username=oladri-renuka&layout=compact&langs_count=8&theme=tokyonight"/>
</div>

<div align="center">
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=oladri-renuka&theme=tokyonight" alt="GitHub Streak"/>
</div>

<div align="center">
  <img src="https://github-readme-activity-graph.vercel.app/graph?username=oladri-renuka&theme=tokyo-night&bg_color=1a1b27&color=70a5fd&line=70a5fd&point=bf91f3&area=true&hide_border=true" alt="Contribution Graph"/>
</div>

---

## 🤝 Let's Connect

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/renuka-oladri/)
[![HuggingFace](https://img.shields.io/badge/🤗_HuggingFace-FFD21E?style=for-the-badge)](https://huggingface.co/oladri-renuka)
[![Email](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:renukaoladriw@gmail.com)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/oladri-renuka)

</div>

---

<div align="center">

![Profile Views](https://komarev.com/ghpvc/?username=oladri-renuka&color=blueviolet&style=for-the-badge)

**Thanks for visiting! Let's build something meaningful with AI. 🚀**

</div>
