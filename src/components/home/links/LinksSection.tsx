'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { homeSocialLinks } from '@/components/home/lib/content';
import { GithubIcon } from '@/components/home/links/LinkCardIcons';
import { tHomeSocialLinkTitle } from '@/components/home/lib/i18n';

function linkIcon(kind: (typeof homeSocialLinks)[number]['icon']) {
  switch (kind) {
    case 'github':
      return <GithubIcon className='h-6 w-6' />;
    case 'globe':
      return (
        <span className='text-base font-bold text-indigo-600' aria-hidden>
          B
        </span>
      );
    case 'naver':
      return (
        <span className='text-base font-bold text-indigo-600' aria-hidden>
          N
        </span>
      );
    case 'threads':
      return (
        <span className='text-base font-bold text-indigo-600' aria-hidden>
          @
        </span>
      );
    default:
      return null;
  }
}

export default function LinksSection() {
  const { t } = useLanguage();

  return (
    <section>
      <div className='mb-4 flex items-center gap-2'>
        <span className='text-xl' aria-hidden>
          🔗
        </span>
        <h2 className='flex items-center gap-2 text-2xl font-bold text-gray-800 dark:text-slate-100'>
          {t('home.linksHeading')} <span className='text-indigo-300'>»</span>
        </h2>
      </div>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {homeSocialLinks.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center gap-3 rounded-xl border border-gray-800 bg-white p-4 outline-none transition-all duration-300 ease-out will-change-transform hover:-translate-y-1 hover:bg-gray-50 hover:shadow-lg focus-visible:-translate-y-1 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 dark:border-slate-500 dark:bg-slate-800 dark:focus-visible:ring-offset-slate-950 dark:hover:bg-slate-700'
          >
            <div className='flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-950/50 dark:text-indigo-300'>
              {linkIcon(item.icon)}
            </div>
            <div className='min-w-0 overflow-hidden'>
              <h3 className='text-sm font-semibold text-gray-800 dark:text-slate-100'>
                {tHomeSocialLinkTitle(t, item.icon)}
              </h3>
              <p className='truncate text-xs text-gray-500 dark:text-slate-400'>
                {item.handle}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
