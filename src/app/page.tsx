'use client';

import Hero from '@/components/landing/Hero';
import Links from '@/components/landing/Links';
import Product from '@/components/landing/Product';
import Link from 'next/link';

export default function Home() {
  

  return (
    <main className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800'>
      {/* 좌우 배치 레이아웃 */}
      <div className='container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-12 max-w-7xl'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start'>
          {/* 왼쪽: Hero 섹션 */}
          <div className='space-y-8'>
            <Hero />

            {/* About 섹션 */}
            <section className='bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700'>
              <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
                🧑‍💻 About
              </h2>
              <p className='text-slate-600 dark:text-slate-300 mb-6 leading-relaxed'>
                과거에는 훌륭한 개발자를 꿈꾸며 최선을 다하였지만, 개발자로는
                성공하기 힘들다는 것을 깨닫고, 새로운 기회의 장에서 사다리를
                타고, 지금은 편안하게 와인 생활을 하며 취미로 개발을 하며
                유유자적하게 지내는...
              </p>
              <Link
                href='/about'
                className='inline-flex items-center px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-300 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-200'
              >
                더 알아보기
                <svg
                  className='ml-2 w-4 h-4'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </section>
          </div>

          {/* 오른쪽: 카드 섹션 */}
          <div className='space-y-8'>
            {/* Links 카드 */}
            <Links />

            {/* Projects 카드 */}
            <Product />
          </div>
        </div>
      </div>
    </main>
  );
}
