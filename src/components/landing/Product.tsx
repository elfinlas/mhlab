import {  LucideIcon } from 'lucide-react';
import ProjectCard from '@/components/landing/ProductCard';
import Link from 'next/link';

const projects: {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | string;
  platform: { title: 'iOS' | 'android' | 'web' }[];
  link: string;
}[] = [
  {
    id: 'myc_web',
    title: '마와셀 (웹 서비스)',
    description: '와인과 와이너리, 포도 품종 등 다양한 와인 정보를 제공',
    icon: '/product/myc/myc_icon.png',
    platform: [{ title: 'web' }],
    link: '/product/myc/app',
  },
  {
    id: 'myc_app',
    title: '마와셀 (모바일 앱)',
    description: '와인 관리, 셀러 관리, 와인 시음 기록을 관리하는 앱',
    icon: '/product/myc/myc_icon.png',
    platform: [{ title: 'iOS' }, { title: 'android' }],
    link: '/product/myc/web',
  },
  {
    id: 'bcow',
    title: '흑우집합소',
    description: '동행복권 로또 서비스, 당첨 정보, 다양한 번호 생성을 제공',
    icon: '/product/bcow/bcow_icon.webp',
    platform: [{ title: 'iOS' }, { title: 'android' }, { title: 'web' }],
    link: 'https://bcow.co.kr',
  },
  {
    id: 'reservelog',
    title: 'ReserveLog',
    description: '판매자들을 위한 상품 예약 관리 및 고객 관리 서비스',
    icon: '/product/reservelog/reservelog_icon.webp',
    platform: [{ title: 'web' }],
    link: 'https://reservelog.com',
  },
];

export default function Product() {
  return (
    <div className='bg-white dark:bg-slate-800 rounded-3xl p-8 shadow-lg border border-slate-200 dark:border-slate-700'>
      <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-6'>
        🍭 Products ( {projects.length} )
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
        {projects.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
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
