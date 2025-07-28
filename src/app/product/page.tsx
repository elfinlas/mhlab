'use client';


import ProductHeader from '@/components/product/Header';
import ProductHero from '@/components/product/Hero';
import { ProjectCard } from '@/components/product/ProductCard';
import { productList } from '@/data/Product';


export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
    {/* Header */}
    <ProductHeader />

    {/* Hero Section */}
    <ProductHero />

    {/* Projects Grid */}
    <section className="dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="grid gap-8 md:gap-12">
          {productList.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>

          {/* 새로운 서비스 안내 카드 */}
          <div className='max-w-xl mx-auto mt-16 mb-8'>
            <div className='flex items-center gap-4 p-6 rounded-2xl bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 shadow text-center'>
              <span className='text-3xl md:text-4xl text-blue-500'>👀</span>
              <div className='flex-1'>
                <div className='text-lg md:text-xl font-semibold text-slate-900 dark:text-white mb-1'>
                  곧 새로운 서비스가 추가될 예정입니다.
                </div>
                <div className='text-slate-500 dark:text-slate-400 text-sm'>
                  더 다양한 프로젝트와 활동을 기대해 주세요!
                </div>
              </div>
            </div>
          </div>


    <footer className="bg-slate-900 dark:bg-slate-900 text-white dark:text-white py-12 px-4">
            Ⓒ 2025 MHLab
          </footer>
  </div>
  ) 
}
