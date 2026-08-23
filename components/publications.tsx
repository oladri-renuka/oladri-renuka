export function Publications() {
  const publications = [
    {
      title: 'Silent Failures in Quantized LLM Reasoning',
      venue: 'IEEE ICTAI 2026 (Submitted)',
      arxiv: '2607.09999',
      description: 'A taxonomy-based analysis revealing "Hollow Convergence"—the phenomenon where quantized models output correct final answers while their internal reasoning mechanisms completely break. Comprehensive evaluation across multiple datasets and quantization methods.',
      status: 'Submitted',
    },
    {
      title: 'Token Efficiency and Early Detection in Reasoning Models',
      venue: 'COLM 2026 Efficient Reasoning Workshop (Accepted)',
      arxiv: '2607.21433',
      description: 'Mechanistic probing on intermediate layer activations to predict reasoning convergence, enabling efficient early-exit strategies. Revision targeting ICLR 2027 submission.',
      status: 'Accepted',
    },
    {
      title: 'VLM Hallucination Across Domain Shift',
      venue: 'ARR August 2026 cycle (Under Review)',
      arxiv: null,
      description: 'Analysis of multimodal hallucination patterns when vision-language models encounter out-of-distribution visual content. Targeting EACL 2027.',
      status: 'Under Review',
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
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-50 flex-1">
                  {pub.title}
                </h3>
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
