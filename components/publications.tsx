export function Publications() {
  const publications = [
    {
      id: 1,
      title: 'Silent Failures in Quantized LLM Reasoning',
      arxiv: '2607.09999',
      status: 'Submitted to IEEE ICTAI 2026',
      description: 'A taxonomy-based analysis revealing "Hollow Convergence"—models output correct answers while internal reasoning breaks under quantization.',
      highlight: '94% generation collapse under default FP8',
      authors: 'Oladri R., Varadaraju Priya M.V., Wu J.',
    },
    {
      id: 2,
      title: 'Token Budget Saturation and Mechanistic Early-Detection',
      subtitle: 'of Reasoning Non-Convergence in Chain-of-Thought Models',
      arxiv: '2607.21433',
      status: 'Accepted at COLM 2026',
      description: 'Activation probes on intermediate layers predict reasoning convergence, enabling efficient early-exit strategies in inference.',
      highlight: 'AUC 0.612 on convergence prediction',
      authors: 'Oladri R., Niveda, Mohamed A.A.',
    },
  ];

  return (
    <section id="publications" className="py-32 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <div className="mb-20 text-center">
          <span className="inline-block px-4 py-2 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full text-sm font-semibold mb-4">
            📄 Publications
          </span>
          <h2 className="text-5xl font-bold text-slate-900 dark:text-white">
            Research on <span className="gradient-text">reasoning failures</span>
          </h2>
        </div>

        <div className="space-y-8">
          {publications.map((pub) => (
            <a
              key={pub.id}
              href={`https://arxiv.org/abs/${pub.arxiv}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 hover:border-sky-500 dark:hover:border-sky-500 hover:shadow-xl transition-all"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex gap-3 mb-4">
                    <span className="inline-block px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 text-xs font-semibold rounded-full">
                      {pub.status}
                    </span>
                    <span className="inline-block px-3 py-1 bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-mono">
                      arXiv:{pub.arxiv}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                    {pub.title}
                  </h3>
                  {pub.subtitle && (
                    <p className="text-slate-600 dark:text-slate-400">
                      {pub.subtitle}
                    </p>
                  )}
                </div>
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                {pub.description}
              </p>

              <div className="mb-6 p-4 bg-sky-50 dark:bg-sky-900/20 border border-sky-200 dark:border-sky-800 rounded-lg">
                <p className="text-sm font-semibold text-sky-900 dark:text-sky-200">
                  Key Finding: {pub.highlight}
                </p>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-400">
                <strong>Authors:</strong> {pub.authors}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
