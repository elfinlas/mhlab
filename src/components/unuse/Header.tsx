'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Header() {
  const { t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='fixed top-0 w-full bg-white dark:bg-slate-900 backdrop-blur-sm z-50 border-b border-slate-200 dark:border-slate-700'>
      <nav className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='text-xl font-bold text-slate-900 dark:text-white'>
            MHLab
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-8'>
            <a
              href='#about'
              className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors'
            >
              {t('navigation.about')}
            </a>
            <a
              href='#skills'
              className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors'
            >
              {t('navigation.skills')}
            </a>
            <a
              href='#projects'
              className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors'
            >
              {t('navigation.projects')}
            </a>
            <a
              href='#contact'
              className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors'
            >
              {t('navigation.contact')}
            </a>
          </div>

          {/* Language Switcher, Theme Toggle and Mobile Menu Button */}
          <div className='flex items-center space-x-4'>
            {/* <LanguageSwitcher />
            <ThemeToggle /> */}
            <div className='md:hidden'>
              <button
                onClick={toggleMenu}
                className='text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white focus:outline-none'
              >
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  ) : (
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700'>
              <a
                href='#about'
                className='block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.about')}
              </a>
              <a
                href='#skills'
                className='block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.skills')}
              </a>
              <a
                href='#projects'
                className='block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.projects')}
              </a>
              <a
                href='#contact'
                className='block px-3 py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                {t('navigation.contact')}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
