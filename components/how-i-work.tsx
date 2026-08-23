export function HowIWork() {
  const steps = [
    {
      number: '01',
      title: 'Start from a Real Problem',
      description: 'Not theory—concrete gaps. When I found the vLLM quantization bug, it was because a simple config choice caused 94% generation collapse.',
    },
    {
      number: '02',
      title: 'Build Rigorous Experiments',
      description: 'Layer probes across 28 model layers. Compute activation statistics. Run statistical tests (AUC with p-values) to isolate exactly where reasoning fails.',
    },
    {
      number: '03',
      title: 'Correct Mistakes Transparently',
      description: 'My TRL PPO looked perfect for 8 runs—then gradients were wrong. I traced a LoRA/KV-cache format incompatibility. Pivoted to DPO.',
    },
    {
      number: '04',
      title: 'Scope Limitations Honestly',
      description: 'My DPO degraded format compliance? Traced to dataset bias, not algorithm failure. Report what actually happened, not what I hoped.',
    },
  ];

  return (
    <section id="how-i-work" className="py-32 px-6 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center">
          <span className="inline-block px-4 py-2 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full text-sm font-semibold mb-4">
            ⚙️ My Process
          </span>
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
            How I <span className="gradient-text">approach problems</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Rigorous, transparent, and grounded in real-world constraints
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-500 transition-all"
            >
              <div className="text-5xl font-bold text-sky-200 dark:text-sky-900/30 mb-4">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
