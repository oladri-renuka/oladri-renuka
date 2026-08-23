export function HowIWork() {
  return (
    <section id="how-i-work" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
          How I Work
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl">
          My approach to research and systems work.
        </p>

        <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">
              Starting from a Real Problem
            </h3>
            <p>
              My work typically begins not in the abstract, but from a concrete gap: a community question, a system bug, or an evaluation that reveals something unexpected. When I found the vLLM KV-cache quantization issue, it wasn't from theorizing—it was from trying to understand why a simple configuration choice was causing 94% generation collapse under default settings.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">
              Building Rigorous Experiments
            </h3>
            <p>
              Once I identify a problem, I design controlled experiments. I don't just measure end metrics; I dig into intermediate states. With the vLLM bug, I layered probes across 28 model layers, computed activation statistics, and ran statistical tests (AUC with p-values) to isolate exactly where the reasoning was failing.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">
              Catching and Correcting My Own Mistakes
            </h3>
            <p>
              My TRL PPO pipeline taught me this lesson hard. For 8 runs, I watched training curves that looked perfect—loss dropping smoothly, convergence curves tracking as expected. But the gradients were wrong. I'd missed a format incompatibility between merged LoRA weights and KV-cache tensors. Only when I manually traced the tensor shapes did I realize what was happening. I pivoted to DPO.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">
              Honest Scoping of Limitations
            </h3>
            <p>
              When my DPO model degraded on format compliance (-16.7pp, p=0.0003), I could have blamed the algorithm. Instead, I traced it back to UltraFeedback's preference annotation bias toward helpfulness over structure. That's not a DPO failure—it's a dataset composition finding. My job is to report what actually happened, not what I wanted to happen.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-50 mb-3">
              Statistical Rigor + Practical Reality
            </h3>
            <p>
              I pair rigorous evaluation with practical constraints. My probe-guided inference scheduler achieves AUC 0.612 in convergence prediction, which sounds good until you realize: "good enough to reorder requests" (44.8% latency improvement), but "not good enough to terminate early" (47.5% false termination rate). Those aren't failures—they're boundaries that tell you exactly where the technique is safe to deploy.
            </p>
          </div>

          <p className="text-sm text-slate-500 dark:text-slate-500 italic pt-4 border-t border-slate-200 dark:border-slate-800">
            This is how I approach every project: start from a real need, measure rigorously, correct mistakes transparently, and report the actual scope of what works.
          </p>
        </div>
      </div>
    </section>
  );
}
