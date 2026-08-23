export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-sky-50 to-cyan-50 dark:from-sky-900/20 dark:to-cyan-900/20 rounded-3xl p-12 border border-sky-200 dark:border-sky-800 text-center">
          <span className="inline-block px-4 py-2 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full text-sm font-semibold mb-6">
            Let's Build Together
          </span>

          <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Have a project in mind?
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            I'm interested in collaborating on LLM systems, inference optimization, and reasoning reliability. Let's talk.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:renukaoladriw@gmail.com"
              className="px-8 py-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg transition-all hover:shadow-lg hover:shadow-sky-500/30"
            >
              Send me an Email
            </a>
            <a
              href="https://www.linkedin.com/in/renuka-oladri-8002b525b/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-sky-600 text-sky-600 dark:text-sky-400 dark:border-sky-400 font-semibold rounded-lg hover:bg-sky-50 dark:hover:bg-sky-900/10"
            >
              Connect on LinkedIn
            </a>
          </div>

          <div className="mt-12 pt-12 border-t border-slate-200 dark:border-slate-800 flex justify-center gap-8">
            <a
              href="https://github.com/oladri-renuka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 font-semibold transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://arxiv.org/abs/2607.09999"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 font-semibold transition-colors"
            >
              arXiv
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
