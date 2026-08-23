import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'Renuka Oladri — ML/AI Engineer & Researcher',
  description: 'ML/AI Engineer specializing in LLM inference systems, agentic architectures, and reasoning failure analysis. MS Applied ML at University of Maryland.',
  keywords: [
    'ML engineer',
    'AI researcher',
    'LLM inference',
    'agentic systems',
    'machine learning',
    'deep learning',
  ],
  authors: [{ name: 'Renuka Oladri', url: 'https://renuka-oladri.com' }],
  creator: 'Renuka Oladri',
  metadataBase: new URL('https://renuka-oladri.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://renuka-oladri.com',
    siteName: 'Renuka Oladri',
    title: 'Renuka Oladri — ML/AI Engineer & Researcher',
    description: 'Building LLM inference systems and agentic architectures. Research on reasoning failure analysis.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Renuka Oladri - ML/AI Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Renuka Oladri — ML/AI Engineer & Researcher',
    description: 'Building LLM inference systems and agentic architectures.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://renuka-oladri.com" />
      </head>
      <body className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
