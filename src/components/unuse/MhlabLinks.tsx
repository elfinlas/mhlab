import { Boxes } from 'lucide-react';

export default function MhlabLinks() {
  return (
    <section
      id='social'
      className='py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800'
    >
      <div className='max-w-6xl mx-auto'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            Links
          </h2>
          <p className='text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            저의 SNS 및 운영 중인 서비스들을 한눈에 만나보세요
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* GitHub */}
          <a
            href='https://github.com/elfinlas'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10'>
              <div className='w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-700 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors duration-300'>
                <svg
                  className='w-8 h-8 text-slate-700 dark:text-slate-200'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z' />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>
                GitHub
              </h3>
              <p className='text-slate-600 dark:text-slate-400 text-sm'>
                @elfinlas
              </p>
            </div>
          </a>

          {/* 개발 블로그 */}
          <a
            href='https://elfinlas.github.io/'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10'>
              <div className='w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-700 group-hover:bg-green-100 dark:group-hover:bg-green-900/50 transition-colors duration-300'>
                <Boxes className='w-8 h-8 text-slate-700 dark:text-slate-200' />
              </div>
              <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>
                개발 블로그
              </h3>
              <p className='text-slate-600 dark:text-slate-400 text-sm'>
                elfinlas.github.io
              </p>
            </div>
          </a>

          {/* 취미 블로그 */}
          <a
            href='https://blog.naver.com/wisseraph'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10'>
              <div className='w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-700 group-hover:bg-emerald-100 dark:group-hover:bg-emerald-900/50 transition-colors duration-300'>
                <span className='text-2xl font-bold text-slate-700 dark:text-slate-200'>
                  N
                </span>
              </div>
              <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>
                취미 블로그
              </h3>
              <p className='text-slate-600 dark:text-slate-400 text-sm'>
                blog.naver.com/wisseraph
              </p>
            </div>
          </a>

          {/* Threads */}
          <a
            href='https://www.threads.com/@vvoid_life'
            target='_blank'
            rel='noopener noreferrer'
            className='group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200 dark:border-slate-700'
          >
            <div className='absolute inset-0 bg-gradient-to-br from-pink-50 to-pink-100 dark:from-pink-900/20 dark:to-pink-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10'>
              <div className='w-16 h-16 mb-6 flex items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-700 group-hover:bg-pink-100 dark:group-hover:bg-pink-900/50 transition-colors duration-300'>
                <svg
                  className='w-8 h-8 text-slate-700 dark:text-slate-200'
                  viewBox='0 0 40 40'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M20 4C11.163 4 4 11.163 4 20c0 8.837 7.163 16 16 16s16-7.163 16-16c0-8.837-7.163-16-16-16zm0 29c-7.18 0-13-5.82-13-13S12.82 7 20 7s13 5.82 13 13-5.82 13-13 13zm2.7-8.1c1.2-.6 2-1.8 2-3.1 0-2.1-1.7-3.8-3.8-3.8-2.1 0-3.8 1.7-3.8 3.8 0 1.3.8 2.5 2 3.1-.2.3-.3.7-.3 1.1 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-.4-.1-.8-.3-1.1zm-2.7-4.1c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z'
                    fill='currentColor'
                  />
                  <path
                    d='M20 11c-5 0-9 4-9 9h2c0-3.9 3.1-7 7-7s7 3.1 7 7c0 2.2-1.1 4.2-2.9 5.5l1.2 1.6C28.1 24.1 29 22.1 29 20c0-5-4-9-9-9z'
                    fill='currentColor'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>
                Thread
              </h3>
              <p className='text-slate-600 dark:text-slate-400 text-sm'>
                @elfinlas
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
