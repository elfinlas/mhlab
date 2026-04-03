'use client';

import AuroraBackground from '@/components/home/shell/AuroraBackground';
import Toolbar from '@/components/home/shell/Toolbar';
import Hero from '@/components/home/hero/Hero';
import AboutSection from '@/components/home/about/AboutSection';
import LinksSection from '@/components/home/links/LinksSection';
import ProductsSection from '@/components/home/products/ProductsSection';

export default function HomeContent() {
  return (
    <div className='relative isolate min-h-screen overflow-x-hidden text-gray-800 dark:text-slate-100'>
      <AuroraBackground />
      <Toolbar />

      <main className='relative z-10 mx-auto w-full max-w-screen-2xl px-5 py-12 sm:px-8 lg:px-10'>
        <Hero />

        <div className='grid grid-cols-1 gap-10 lg:grid-cols-12'>
          <div className='space-y-10 lg:col-span-4'>
            <AboutSection />
            <LinksSection />
          </div>
          <div className='lg:col-span-8'>
            <ProductsSection />
          </div>
        </div>
      </main>
    </div>
  );
}
