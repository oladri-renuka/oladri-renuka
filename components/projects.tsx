export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Two-Stage Retrieve-Then-Rank Recommendation',
      category: 'Production ML',
      description: 'Built two-tower retrieval model with logQ-corrected negatives and FAISS ANN search. End-to-end p95 latency 91ms at 30 concurrent requests.',
      metrics: [
        { label: 'Recall@200', value: '+12.8%' },
        { label: 'Latency', value: '91ms' },
        { label: 'Throughput', value: '30 req/s' },
      ],
      tags: ['FAISS', 'SASRec', 'Kafka', 'Redis'],
      link: 'https://github.com/oladri-renuka',
    },
    {
      id: 2,
      title: 'Probe-Guided LLM Inference Scheduler',
      category: 'LLM Systems',
      description: 'Linear probe predicting reasoning convergence from layer-16 activations. Reduces p50 latency by 44.8% with zero accuracy loss.',
      metrics: [
        { label: 'AUC', value: '0.612' },
        { label: 'Latency Reduction', value: '44.8%' },
        { label: 'False Termination', value: '47.5%' },
      ],
      tags: ['PyTorch', 'Mechanistic Interpretability', 'Inference'],
      link: 'https://github.com/oladri-renuka',
    },
    {
      id: 3,
      title: 'LLM Post-Training Pipeline',
      category: 'ML Training',
      description: 'Complete SFT → Reward Model → DPO pipeline. Diagnosed TRL PPO bug, achieved 76.09% validation accuracy on reward model.',
      metrics: [
        { label: 'Validation Accuracy', value: '76.09%' },
        { label: 'Factual Improvement', value: '+9pp' },
        { label: 'Format Regression', value: '-16.7pp' },
      ],
      tags: ['DPO', 'RLHF', 'LoRA', 'TRL'],
      link: 'https://github.com/oladri-renuka',
    },
    {
      id: 4,
      title: 'Real-Time ML Feature Store',
      category: 'Infrastructure',
      description: 'Kafka-backed Redis Cluster with three-way consistency validation. 0 mismatches across 800 checks, 9,300 req/s throughput.',
      metrics: [
        { label: 'Consistency', value: '0 mismatches' },
        { label: 'Latency', value: '4.8ms p95' },
        { label: 'Throughput', value: '9,300 req/s' },
      ],
      tags: ['Kafka', 'Redis', 'FastAPI', 'Docker'],
      link: 'https://github.com/oladri-renuka',
    },
    {
      id: 5,
      title: 'MindMirror: Multimodal Interview Coach',
      category: 'Agentic AI',
      description: 'Real-time agent analyzing eye contact, vocal patterns, and filler words. Personal baseline calibration for relative thresholds.',
      metrics: [
        { label: 'Behavioral States', value: '6' },
        { label: 'Update Frequency', value: '2s' },
        { label: 'Calibration Window', value: '15s' },
      ],
      tags: ['MediaPipe', 'Whisper', 'LangGraph', 'Gradio'],
      link: 'https://github.com/oladri-renuka',
    },
    {
      id: 6,
      title: 'Multimodal Content Safety Reviewer',
      category: 'Computer Vision',
      description: 'Fine-tuned YOLOv8n for weapon/NSFW detection. mAP50 improved from 0.32 to 0.78 (+144%), processes 30fps.',
      metrics: [
        { label: 'mAP50 Improvement', value: '+144%' },
        { label: 'Processing Speed', value: '30fps' },
        { label: 'Precision', value: '0.80' },
      ],
      tags: ['YOLOv8n', 'EasyOCR', 'Whisper', 'FastAPI'],
      link: 'https://github.com/oladri-renuka',
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20 text-center">
          <span className="inline-block px-4 py-2 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full text-sm font-semibold mb-4">
            🔨 Featured Projects
          </span>
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Systems that scale and <span className="gradient-text">reason reliably</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            LLM inference, agentic systems, and production ML infrastructure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-500 hover:shadow-xl dark:hover:shadow-sky-900/20 transition-all"
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-xs font-semibold rounded-full">
                  {project.category}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="grid grid-cols-3 gap-4 mb-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                {project.metrics.map((metric, idx) => (
                  <div key={idx}>
                    <div className="text-lg font-bold text-sky-600 dark:text-sky-400">
                      {metric.value}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
