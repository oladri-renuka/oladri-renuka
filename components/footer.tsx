export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center text-sm text-slate-500 dark:text-slate-400">
        <p>
          © {new Date().getFullYear()} Renuka Oladri. Built with Next.js. Deployed to{' '}
          <a href="https://vercel.com" className="text-sky-600 dark:text-sky-400 hover:underline">
            Vercel
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
