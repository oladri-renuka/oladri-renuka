export function OpenSource() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
          Open Source
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
          Contributing to foundational infrastructure for efficient LLM inference.
        </p>

        <article className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            vLLM
          </h3>
          <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            Investigated a KV-cache quantization bug affecting reasoning quality on production inference infrastructure. Published a reproducible evaluation with findings referenced in the project's issue tracker (#33480), including root-cause analysis of a generation-collapse failure mode under uncalibrated FP8 scales.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://github.com/vllm-project/vllm/issues/33480"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-400 font-medium hover:underline"
            >
              View discussion →
            </a>
            <a
              href="https://github.com/oladri-renuka/kvache-quant-eval"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-600 dark:text-sky-400 font-medium hover:underline"
            >
              View evaluation repo →
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
