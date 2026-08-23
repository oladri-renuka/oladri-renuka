export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 uppercase tracking-wide mb-4">
            AI/ML Engineer • Researcher
          </p>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-50 leading-tight mb-6">
            Renuka Oladri
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
            <span className="font-semibold text-slate-900 dark:text-slate-50">AI/ML Engineer — LLM inference systems, agentic architectures, and reasoning failure analysis.</span>
          </p>
        </div>

        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl leading-relaxed">
          MS Applied Machine Learning candidate at University of Maryland (May 2027). Recent work accepted to COLM 2026 Efficient Reasoning Workshop.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <a
            href="mailto:renukaoladriw@gmail.com"
            className="px-4 py-2 text-sm font-medium text-sky-600 dark:text-sky-400 border border-sky-600 dark:border-sky-400 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950 transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/oladri-renuka"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium text-sky-600 dark:text-sky-400 border border-sky-600 dark:border-sky-400 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/renuka-oladri-8002b525b/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium text-sky-600 dark:text-sky-400 border border-sky-600 dark:border-sky-400 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://arxiv.org/abs/2607.09999"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm font-medium text-sky-600 dark:text-sky-400 border border-sky-600 dark:border-sky-400 rounded-lg hover:bg-sky-50 dark:hover:bg-sky-950 transition-colors"
          >
            arXiv
          </a>
        </div>
      </div>
    </section>
  );
}
