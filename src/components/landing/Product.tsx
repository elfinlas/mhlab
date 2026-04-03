import ProjectCard from '@/components/landing/ProductCard';
import Link from 'next/link';
import { landingProducts } from '@/data/Product';

export default function Product() {
  return (
    <div className='bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700'>
      <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>
        🍭 Products ( {landingProducts.length} )
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {landingProducts.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>

<div className='flex justify-center mt-6 w-full'>
      <Link
                href='/product'
                className='inline-flex items-center px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors duration-200'
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
                </div>
    </div>
  );
}
