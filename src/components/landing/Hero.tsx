import { useLanguage } from '@/contexts/LanguageContext';

import { Badge } from '@/components/ui/badge';
import ThemeToggle from '@/components/ThemeToggle';
import Image from 'next/image';

const badges = [
  { icon: '🍷', label: '와인러버' },
  { icon: '🏘️', label: '부동산 투자' },
  { icon: '🏦', label: '주식 투자' },
  { icon: '👨‍💻', label: '취미개발' },
];

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className='pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900 relative'>
      <div className='absolute top-6 right-4 sm:right-6 lg:right-8'>
        <ThemeToggle />
      </div>

      <div className='max-w-6xl mx-auto text-center'>
        <div className='mb-8'>
          <span className='w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-500 dark:to-purple-600 flex items-center justify-center overflow-hidden hover:scale-110 transition-transform duration-200'>
            <Image
              src='/about/profile.webp'
              alt='프로필 이미지'
              width={128}
              height={128}
              className='w-full h-full object-cover rounded-full border-4 border-white shadow-lg'
            />
          </span>
          
          <h1 className='text-4xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-4'>
            {t('hero.title')} <br />
            <span className='bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'>
              {t('hero.subtitle')}
            </span>
            {t('hero.suffix')}
          </h1>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mt-7'>
            {t('hero.description')}
          </p>
        </div>

        {/* 뱃지 영역 */}
        <div className='flex flex-wrap justify-center gap-2  mt-4'>
            {badges.map((badge, idx) => (
            <Badge
              key={idx}
              variant='outline'
              className='bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:scale-110 transition-transform duration-200 cursor-pointer'
            >
                {badge.icon} {badge.label}
              </Badge>
            ))}
          </div>

        {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8 py-3 text-base bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
            {t('hero.viewProjects')}
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 text-base border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all duration-200">
            {t('hero.downloadResume')}
          </Button>
        </div> */}
      </div>
    </section>
  );
} 
