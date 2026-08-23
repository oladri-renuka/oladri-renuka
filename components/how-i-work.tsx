export function HowIWork() {
  return (
    <section id="how-i-work" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
          How I Work
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl">
          A case study: investigating a quantization bug in vLLM.
        </p>

        <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">
              Starting from an unanswered question
            </h3>
            <p>
              Someone in the vLLM community asked: "Does KV-cache quantization hurt reasoning quality?" The question went unanswered for weeks. This wasn't a gap in code—it was a gap in understanding.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">
              Building a controlled experiment
            </h3>
            <p>
              I set up a clean benchmark comparing three scenarios: (1) no quantization, (2) FP8 quantization, (3) int8_per_token_head. Each scenario was run on the same reasoning task (GSM8K math problems) with identical seeds. I tracked accuracy and generation stability.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">
              Hitting a wrong conclusion
            </h3>
            <p>
              The raw metrics showed FP8 had terrible accuracy, and I initially labeled it a "catastrophic reasoning failure." But when I manually inspected the outputs, I noticed something odd: the model was generating garbage tokens, not reasoning mistakes. The failure was earlier in the pipeline than I thought.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">
              Correcting through transparency
            </h3>
            <p>
              I reviewed transcripts of failing generations by hand. The pattern was clear: FP8 was systematically producing degenerate outputs because the KV-cache scales weren't calibrated—not because the reasoning module broke. This was a different failure mode entirely. I revised my findings.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">
              Landing on an honestly-scoped result
            </h3>
            <p>
              The final publication clearly states: "FP8 causes generation collapse due to uncalibrated scales. int8_per_token_head with calibration closely tracks baseline performance." I also documented the limitation: my evaluation was on math reasoning tasks; this may not generalize to other domains.
            </p>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-500 italic pt-4 border-t border-slate-200 dark:border-slate-800">
            This is how I think: start from a real question, run the experiment carefully, correct mistakes quickly when you find them, and report what actually happened—not what you hoped to find.
          </p>
        </div>
      </div>
    </section>
  );
}
