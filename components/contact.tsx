export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          Interested in collaborating on LLM systems, inference optimization, or research? Let's talk.
        </p>

        <div className="flex gap-6 justify-center flex-wrap">
          <a
            href="mailto:roladri@umd.edu"
            className="px-6 py-3 bg-sky-600 dark:bg-sky-600 text-white font-medium rounded-lg hover:bg-sky-700 dark:hover:bg-sky-700 transition-colors"
          >
            Send Email
          </a>
          <a
            href="https://linkedin.com/in/renuka-oladri"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-50 font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/oladri-renuka"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-50 font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
