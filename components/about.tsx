export function About() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-8">
          About
        </h2>
        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          <p>
            I build agent architectures and LLM inference systems, along with the evaluation methods that expose where reasoning silently fails. Recently, I found a KV-cache quantization bug in vLLM that causes 94% generation collapse under default settings, and built a linear probe that predicts stuck reasoning chains from a model's internal activations before they're behaviorally obvious (AUC 0.612 vs. 0.445 for a behavioral baseline).
          </p>
          <p>
            I'm an MS Applied Machine Learning candidate at the University of Maryland, graduating May 2027. The vLLM findings are referenced in the project's issue tracker, and my recent work was accepted to the COLM 2026 Efficient Reasoning Workshop.
          </p>
          <p>
            I care about reproducibility and rigorous evaluation, and I'd rather scope a limitation honestly than oversell a result.
          </p>
        </div>
      </div>
    </section>
  );
}
