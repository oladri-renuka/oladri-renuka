export function Projects() {
  const projects = [
    {
      title: 'FP8 vs int8_per_token_head: KV-Cache Quantization Reasoning Eval',
      description: 'Investigated whether vLLM\'s KV-cache quantization modes cause silent reasoning failures, extending published failure taxonomy to production serving infrastructure. Found that calibrated FP8 causes near-total generation collapse (94% failure) while int8_per_token_head closely tracks unquantized baseline accuracy. Findings referenced directly in vLLM\'s issue tracker.',
      tags: ['LLM Inference', 'Quantization', 'vLLM', 'Python'],
      link: 'https://github.com/oladri-renuka/kvache-quant-eval',
      issueLink: 'vllm-project/vllm#33480',
    },
    {
      title: 'Adaptive Multi-Model Agent',
      description: 'A LangGraph-based agent that routes requests between fast and strong models based on live task-difficulty classification, with input/output guardrails against injection and hallucination. Achieves 98% routing accuracy, 28.2% cost reduction versus always-use-strongest baseline, zero false-positive blocks on clean input.',
      tags: ['LangGraph', 'Multi-Model Routing', 'Guardrails', 'Python'],
      link: 'https://github.com/oladri-renuka/adaptive-agent',
    },
    {
      title: 'SWE-Researcher: Autonomous Code Generation Agent',
      description: 'An agent that analyzes a repository, implements features via LLM generation, enforces 80%+ test coverage, executes in sandboxed Docker containers, and opens pull requests autonomously—with self-correcting debugging when tests fail.',
      tags: ['Autonomous Agents', 'Code Generation', 'Docker', 'CI/CD'],
      link: 'https://github.com/oladri-renuka/swe-researcher',
    },
    {
      title: 'Personal Knowledge Agent (MCP Server)',
      description: 'A persistent belief-graph agent that ingests documents, resolves duplicate entities via semantic matching, detects contradictions across sources, and answers queries with per-fact citations. Exposed as an MCP server for use with Claude Desktop and other MCP clients—906 entities and 32 conflicts extracted from 173 pages using just 9 embedding calls.',
      tags: ['MCP', 'Knowledge Graphs', 'Embeddings', 'Python'],
      link: 'https://github.com/oladri-renuka/knowledge-agent',
    },
    {
      title: 'Inference Server: Continuous Batching + Paged KV-Cache',
      description: 'Built three LLM serving backends from scratch to compare naive serial, static batching, and continuous batching with paged attention. Continuous batching achieves 2.91 req/s under mixed-length load versus 2.51 for naive serial, exposing the head-of-line blocking problem that motivates production techniques like vLLM\'s.',
      tags: ['LLM Serving', 'CUDA', 'Performance', 'PyTorch'],
      link: 'https://github.com/oladri-renuka/inference-server',
    },
    {
      title: 'Shadow Deployment Framework',
      description: 'A production ML serving system that runs champion and challenger models in parallel, automatically detecting statistical degradation (Welch\'s t-test, KS test, chi-square) and rolling back within 60 seconds without human intervention—zero user-facing latency impact via async logging.',
      tags: ['MLOps', 'Production ML', 'Statistics', 'FastAPI'],
      link: 'https://github.com/oladri-renuka/shadow-deployment',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-slate-50 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Systems work spanning LLM inference, agentic architectures, and production ML.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, idx) => (
            <article
              key={idx}
              className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl p-8 hover:border-sky-500 dark:hover:border-sky-500 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50 leading-tight flex-1">
                  {project.title}
                </h3>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-3 py-1 text-xs font-medium bg-sky-100 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 dark:text-sky-400 font-medium hover:underline"
                >
                  View on GitHub →
                </a>
                {project.issueLink && (
                  <a
                    href={`https://github.com/${project.issueLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 dark:text-slate-400 font-medium hover:underline text-sm"
                  >
                    Issue discussion →
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
