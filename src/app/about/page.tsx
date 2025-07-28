'use client';

import Timeline from '@/components/about/Timeline';
import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';
import Image from 'next/image';


export default function AboutPage() {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800'>
      <header className='fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-200 dark:border-slate-700'>
        <nav className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <Link
              href='/'
              className='text-xl font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
            >
              ← MHLab
            </Link>
            <div className='flex items-center gap-2'>
              <span className='text-slate-500 dark:text-slate-400 text-sm mr-4'>
                🧑‍💻 About
              </span>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>
      <main className='pt-28 pb-16 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-full mx-auto'>
          {/* 프로필/명언 */}
          <div className='flex flex-col items-center mb-12'>
            <div className='w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-5xl mb-4 shadow-lg'>
              <Image
                src='/about/profile.webp'
                alt='프로필 이미지'
                width={96} // w-24 = 96px
                height={96} // h-24 = 96px
                className='w-full h-full object-cover rounded-full border-4 border-white shadow-lg'
              />
            </div>
            <h1 className='text-4xl font-bold text-slate-900 dark:text-white mb-2 text-center'>
              MHLab
            </h1>
            <p className='text-slate-600 dark:text-slate-300 text-center mb-2'>
              Who am I?
            </p>
            <p className='italic text-blue-600 dark:text-blue-300 text-center'>
            &quot;형태를 파괴하면 진정한 본질을 볼 수 있을까?&quot;
            </p>
          </div>

          {/* 타임라인 */}
          <Timeline />



          <footer className='text-center text-slate-400 mt-12'>
            Ⓒ 2025 MHLab
          </footer>
        </div>
      </main>
    </div>
  );
}
