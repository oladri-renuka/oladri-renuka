export function Projects() {
  const projects = [
    {
      title: 'Two-Stage Retrieve-Then-Rank Recommendation Pipeline',
      description: 'Built two-tower retrieval model with logQ-corrected in-batch negatives and FAISS ANN search narrowing 3,416 items to top-200 candidates in 0.046ms mean latency. Wired Kafka event stream into Redis Cluster for real-time user embedding updates within 50ms; ablation confirms +12.8% Recall@200 lift from online features and +27.5% from logQ correction. SASRec ranker achieves end-to-end p95 latency 91ms at 30 concurrent requests; A/B test documented.',
      tags: ['Two-Tower', 'FAISS', 'SASRec', 'Kafka', 'Redis', 'FastAPI', 'AWS'],
      link: 'https://github.com/oladri-renuka',
    },
    {
      title: 'Real-Time ML Feature Store with Statistical Drift Detection',
      description: 'Kafka-backed Redis Cluster feature store with three-way consistency validation across online serving, offline training, ground-truth computation: 0 mismatches in 800 checks. Achieved p95 4.8ms serving latency and 9,300 req/s throughput under delivery chaos injection (15% reordering, 5% duplicates, 10% late arrivals) with zero message loss. Extended with PSI and Jensen-Shannon divergence drift monitoring using quantile binning and Bonferroni correction.',
      tags: ['Kafka', 'Redis Cluster', 'FastAPI', 'Docker', 'PSI', 'Statistical Testing'],
      link: 'https://github.com/oladri-renuka',
    },
    {
      title: 'Probe-Guided LLM Inference Scheduler',
      description: 'Layer sweep across 28 layers identified layer 16 as strongest convergence predictor (AUC 0.608); linear probe on layer-16 hidden states at token 150 outperforms behavioral baseline (AUC 0.567 vs 0.445, p=0.001). Probe-deprioritize strategy wired into continuous-batching scheduler reduced p50 latency by 44.8% across 200 AIME problems with zero accuracy loss. Probe-terminate not viable at this AUC (47.5% false termination rate).',
      tags: ['DeepSeek-R1', 'PyTorch', 'Mechanistic Interpretability', 'Inference', 'Probing'],
      link: 'https://github.com/oladri-renuka',
    },
    {
      title: 'LLM Post-Training Pipeline: SFT, Reward Model, DPO',
      description: 'Built complete SFT to DPO post-training pipeline; diagnosed TRL PPO bug producing plausible training curves while silently computing incorrect gradients across 8 failed runs (merged LoRA and KV-cache format incompatibility). Reward model trained on UltraFeedback reached 76.09% validation accuracy; stratified A/B test confirmed DPO improves factual accuracy (+9pp, p=0.030). DPO degrades format compliance (-16.7pp, p=0.0003), traced to UltraFeedback dataset composition bias.',
      tags: ['PyTorch', 'TRL', 'LoRA', 'DPO', 'RLHF', 'LLaMA', 'WandB'],
      link: 'https://github.com/oladri-renuka',
    },
    {
      title: 'MindMirror: Real-Time Multimodal Interview Coach',
      description: 'Deployed live multimodal agent analyzing eye contact (MediaPipe 478-point face mesh), vocal patterns (YIN pitch, faster-whisper transcription), and filler word frequency every 2 seconds across 6 behavioral states. Personal baseline calibrated from first 15 seconds so thresholds relative to each user\'s resting state. Multiplicative delivery×content scoring ensures confident delivery cannot compensate for off-topic answers; LLM content evaluator uses fallback chain.',
      tags: ['MediaPipe', 'Whisper', 'LangGraph', 'Multimodal AI', 'Gradio', 'HuggingFace Spaces'],
      link: 'https://github.com/oladri-renuka',
    },
    {
      title: 'Multimodal Content Safety Reviewer',
      description: 'Fine-tuned YOLOv8n on 6,000+ annotated images for weapon, NSFW, and counterfeit detection; mAP50 improved from 0.32 to 0.78 (+144%), precision 0.62 to 0.80, recall 0.48 to 0.75 at 30ms per frame. Fused YOLOv8n detections with EasyOCR text extraction and Whisper ASR; rule-based reasoning layer combines all modalities. Context-aware flagging: OCR text can downgrade weapon detection; async job queue with Redis caching returns results within 1 hour.',
      tags: ['YOLOv8n', 'EasyOCR', 'Whisper', 'FastAPI', 'Computer Vision', 'PyTorch'],
      link: 'https://github.com/oladri-renuka',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Systems work spanning LLM inference, agentic architectures, and production ML.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 hover:border-sky-500 dark:hover:border-sky-500 transition-colors"
            >
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 leading-tight mb-4">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 text-xs font-medium bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 dark:text-sky-400 font-medium hover:underline"
              >
                View on GitHub →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
