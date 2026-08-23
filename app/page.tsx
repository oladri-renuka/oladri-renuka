import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Projects } from '@/components/projects';
import { Publications } from '@/components/publications';
import { OpenSource } from '@/components/open-source';
import { HowIWork } from '@/components/how-i-work';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-sky-500 focus:text-white focus:px-4 focus:py-2 focus:rounded">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="space-y-0">
        <Hero />
        <About />
        <Projects />
        <Publications />
        <OpenSource />
        <HowIWork />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
