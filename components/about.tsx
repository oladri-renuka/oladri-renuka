export function About() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-8">
          About
        </h2>
        <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-3xl">
          <p>
            I'm a researcher and engineer building the infrastructure and understanding that allows AI systems to reason reliably. My work spans inference optimization, agentic systems, and mechanistic interpretability—specifically, diagnosing and preventing silent failures in LLM reasoning pipelines.
          </p>
          <p>
            I'm a Master's student in Applied Machine Learning at the University of Maryland (graduating May 2027), and an active contributor to vLLM. My recent work has been accepted to the COLM 2026 Efficient Reasoning Workshop, with a revised version targeting ICLR 2027.
          </p>
          <p>
            I combine systems thinking with deep technical execution: I'm equally comfortable diagnosing a CUDA kernel issue or designing a multi-model routing architecture. I value reproducibility, rigorous evaluation, and honest scoping of limitations.
          </p>
        </div>
      </div>
    </section>
  );
}
