export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wide mb-4">
            ML/AI Engineer • Researcher
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 leading-tight mb-6">
            Renuka Oladri
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            Building <span className="font-semibold text-slate-900 dark:text-slate-50">LLM inference systems and agentic architectures</span> that reason reliably at scale. Research on where and why reasoning silently fails.
          </p>
        </div>

        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
          MS Applied Machine Learning candidate at the University of Maryland (May 2027). Paper accepted at COLM 2026 Efficient Reasoning Workshop. Contributor to vLLM.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="https://github.com/oladri-renuka"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium text-sky-600 dark:text-sky-400 border border-sky-600 dark:border-sky-400 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950 transition-colors"
            aria-label="GitHub profile"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/renuka-oladri"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium text-sky-600 dark:text-sky-400 border border-sky-600 dark:border-sky-400 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950 transition-colors"
            aria-label="LinkedIn profile"
          >
            LinkedIn
          </a>
          <a
            href="https://arxiv.org/abs/2607.09999"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium text-sky-600 dark:text-sky-400 border border-sky-600 dark:border-sky-400 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950 transition-colors"
            aria-label="arXiv publications"
          >
            arXiv
          </a>
          <a
            href="mailto:roladri@umd.edu"
            className="px-4 py-2 text-sm font-medium text-sky-600 dark:text-sky-400 border border-sky-600 dark:border-sky-400 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950 transition-colors"
            aria-label="Send email"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
