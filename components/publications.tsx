export function Publications() {
  const publications = [
    {
      title: 'Silent Failures in Quantized LLM Reasoning',
      subtitle: 'A Taxonomy-Based Analysis of Hollow Convergence and Failure Mode Shifts',
      venue: 'IEEE ICTAI 2026 (Submitted)',
      arxiv: '2607.09999',
      description: 'Comprehensive taxonomy analyzing failure modes when quantizing reasoning models to NF4 precision, revealing the "Hollow Convergence" phenomenon where models output correct final answers while internal reasoning completely breaks.',
      status: 'Submitted',
      authors: 'Oladri R., Varadaraju Priya M.V., Wu J.',
    },
    {
      title: 'Token Budget Saturation and Mechanistic Early-Detection of Reasoning Non-Convergence',
      subtitle: 'in Chain-of-Thought Models',
      venue: 'COLM 2026 Efficient Reasoning Workshop',
      arxiv: '2607.21433',
      description: 'Using activation probes on intermediate layers to predict whether chain-of-thought reasoning will converge, enabling efficient early-exit strategies in inference.',
      status: 'Accepted',
      authors: 'Oladri R., Niveda, Mohamed A.A.',
    },
  ];

  return (
    <section id="publications" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Publications
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Peer-reviewed work on reasoning failure analysis and efficient inference.
          </p>
        </div>

        <div className="space-y-8">
          {publications.map((pub, idx) => (
            <article key={idx} className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50">
                    {pub.title}
                  </h3>
                  {pub.subtitle && (
                    <p className="text-slate-600 dark:text-slate-400 text-sm mt-1">
                      {pub.subtitle}
                    </p>
                  )}
                </div>
                <span className="ml-4 inline-block px-3 py-1 text-xs font-medium bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full whitespace-nowrap">
                  {pub.status}
                </span>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">
                {pub.venue}
              </p>

              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {pub.description}
              </p>

              <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                <strong>Authors:</strong> {pub.authors}
              </p>

              <div className="flex gap-4">
                {pub.arxiv && (
                  <a
                    href={`https://arxiv.org/abs/${pub.arxiv}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 dark:text-sky-400 font-medium hover:underline text-sm"
                  >
                    View on arXiv →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
