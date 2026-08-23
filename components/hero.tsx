export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 pb-20 px-6 bg-white dark:bg-slate-950 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100 dark:bg-sky-900/20 rounded-full blur-3xl opacity-50 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-50 -z-10"></div>

      <div className="max-w-5xl mx-auto">
        <div className="mb-8 animate-fadeInUp">
          <span className="inline-block px-4 py-2 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full text-sm font-semibold mb-6">
            🚀 AI/ML Systems Engineer & Researcher
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Renuka <span className="gradient-text">Oladri</span>
            </h1>

            <p className="text-xl text-slate-600 dark:text-slate-300 mb-6 leading-relaxed max-w-xl">
              I build <span className="font-semibold text-slate-900 dark:text-white">LLM inference systems</span> and <span className="font-semibold text-slate-900 dark:text-white">agentic architectures</span> that reason reliably at scale.
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-xl">
              Recent work on quantization failures and mechanistic interpretability. MS Applied ML at University of Maryland.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="mailto:renukaoladriw@gmail.com"
                className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-sky-500/30"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/oladri-renuka"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-lg hover:border-sky-500 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-50 dark:hover:bg-sky-900/10"
              >
                View on GitHub
              </a>
            </div>

            <div className="flex gap-6 text-sm">
              <a
                href="https://www.linkedin.com/in/renuka-oladri-8002b525b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 dark:text-sky-400 hover:underline font-medium"
              >
                LinkedIn
              </a>
              <a
                href="https://arxiv.org/abs/2607.09999"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 dark:text-sky-400 hover:underline font-medium"
              >
                arXiv
              </a>
            </div>
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-cyan-400 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800 rounded-3xl border border-sky-200 dark:border-sky-800 p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🧠</div>
                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                    Building intelligent systems that reason at scale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mt-20 pt-20 border-t border-slate-200 dark:border-slate-800">
          <div>
            <div className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">6+</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Featured Projects</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">2</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Published Papers</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-sky-600 dark:text-sky-400 mb-2">50+</div>
            <p className="text-sm text-slate-600 dark:text-slate-400">Enterprise Modules</p>
          </div>
        </div>
      </div>
    </section>
  );
}
