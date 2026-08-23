# Renuka Oladri — Portfolio Website

A professional, accessible, and SEO-optimized portfolio website built with Next.js. Inspired by academic researcher portfolios (e.g., furong-huang.com) but with an original design emphasizing content density and technical credibility.

## Features

✅ **Professional Design**
- Clean, minimalist aesthetic with generous whitespace
- Original layout (not a template clone)
- Technical, no-nonsense tone
- Dark and light theme support

✅ **Accessibility (WCAG 2.1 Level AA+)**
- Semantic HTML with proper heading hierarchy
- Full keyboard navigation with visible focus states
- High contrast ratios (4.5:1 for text, 3:1 for UI)
- Screen reader optimized (`aria-label`, `aria-describedby`)
- Respects `prefers-reduced-motion`
- Skip-to-content link for keyboard users
- No color-only signaling (colorblind-friendly)

✅ **SEO & AI Discoverability**
- Semantic HTML structure
- Meta tags (Open Graph, Twitter Cards, canonical)
- JSON-LD structured data (Person + ScholarlyArticle)
- Proper heading hierarchy
- `robots.txt` and `sitemap.xml`
- `llms.txt` for LLM visibility
- Fast load times (static generation)

✅ **Content Sections**
- Hero with tagline and social links
- About section
- 6 featured projects with links
- Publications with status badges
- Open source contributions
- "How I Work" narrative
- Contact & CTA

## Tech Stack

- **Framework**: Next.js 14+ (App Router, SSG)
- **Styling**: Tailwind CSS + custom CSS
- **Theme**: next-themes (dark/light mode with localStorage)
- **Deployment**: Vercel or GitHub Pages
- **Accessibility**: WCAG 2.1 Level AA+

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio-next

# Install dependencies
npm install

# Set up environment (optional)
# Create .env.local if needed (currently not required)
```

### Development

```bash
npm run dev
```

Visit `http://localhost:3000` to see the site locally. The dev server supports hot reloading.

### Building

```bash
npm run build
```

This generates a static site in the `out/` directory, optimized for production.

### Running Locally (Production Build)

```bash
npm run build
npm start
```

## Deployment

### Option 1: Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure build settings
6. Click "Deploy"

Vercel will automatically redeploy on every `main` branch push.

**Custom Domain:**
1. In Vercel dashboard, go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records (instructions provided)

### Option 2: GitHub Pages

1. Update `next.config.js` if needed:
   ```js
   basePath: '/repo-name' // Only if hosting in subdirectory
   ```

2. Add deployment script to `package.json`:
   ```json
   "deploy": "npm run build && gh-pages -d out"
   ```

3. Install `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Option 3: Self-Hosted (Static Files)

The `out/` directory contains static HTML files that can be served by any web server (Nginx, Apache, etc.).

```bash
# Build static site
npm run build

# Copy `out/` directory to your server
scp -r out/* user@server:/var/www/html/
```

## Customization

### Updating Content

All content is in the `components/` directory. Edit individual component files to update:

- **Hero**: `components/hero.tsx`
- **Projects**: `components/projects.tsx` (update the `projects` array)
- **Publications**: `components/publications.tsx` (update the `publications` array)
- **Other sections**: Corresponding component files

### Changing Colors

Update the Tailwind color classes in component files. Key colors:
- Primary accent: `sky-600` / `sky-500`
- Background: `white` / `slate-950`
- Text: `slate-900` / `slate-50`

For a complete theme change, update `tailwind.config.js`.

### Updating Social Links

Edit `components/hero.tsx` and `components/contact.tsx` to update GitHub, LinkedIn, email links.

### Adding New Sections

1. Create a new file in `components/`, e.g., `components/blog.tsx`
2. Import and add to `app/page.tsx`

## Accessibility Checklist

- [x] Semantic HTML (`<nav>`, `<main>`, `<article>`, `<section>`)
- [x] Proper heading hierarchy (H1 → H2 → H3)
- [x] Focus indicators on all interactive elements
- [x] Keyboard navigation (Tab, Shift+Tab, Enter)
- [x] ARIA labels on icon-only buttons
- [x] Color contrast ≥ 4.5:1 (AA), ≥ 7:1 (AAA)
- [x] Alt text on images
- [x] Respects `prefers-reduced-motion`
- [x] Skip-to-content link
- [x] No keyboard traps
- [x] Form validation/error messages (if applicable)

## SEO Checklist

- [x] `<title>` and `<meta description>`
- [x] Open Graph & Twitter Card meta tags
- [x] Canonical URL
- [x] Semantic heading hierarchy
- [x] JSON-LD structured data (`Person`, `ScholarlyArticle`)
- [x] `robots.txt` and `sitemap.xml`
- [x] `llms.txt` for LLM discoverability
- [x] Fast load times (static generation)
- [x] Mobile-friendly (responsive design)

## Performance

**Lighthouse Scores (typical):**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 1s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

The site uses Next.js static generation (SSG) for fast, cacheable HTML. CSS is minimal and inlined. JavaScript is minimal (only theme toggle requires JS).

## File Structure

```
portfolio-next/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
├── components/
│   ├── header.tsx
│   ├── hero.tsx
│   ├── about.tsx
│   ├── projects.tsx        # 6 featured projects
│   ├── publications.tsx    # 3 publications
│   ├── open-source.tsx
│   ├── how-i-work.tsx
│   ├── contact.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── public/
│   ├── robots.txt
│   ├── sitemap.xml
│   └── llms.txt
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md               # This file
```

## Environment Variables

Currently, no environment variables are required. If you add analytics (e.g., Vercel Analytics, Plausible), add them here.

## Browser Support

- Chrome/Edge: ✓ Latest 2 versions
- Firefox: ✓ Latest 2 versions
- Safari: ✓ Latest 2 versions
- Mobile browsers: ✓ All modern

## License

This portfolio design and code are personal and not publicly licensed. Use as a reference for your own portfolio, but do not directly copy content or design.

## Contact

For questions about the site setup or design:
- Email: roladri@umd.edu
- GitHub: github.com/oladri-renuka

## Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Schema.org](https://schema.org)

---

Built with focus on substance, accessibility, and design integrity.
