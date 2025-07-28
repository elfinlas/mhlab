import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id='about'
      className='py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900'
    >
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-center text-slate-900 dark:text-white mb-12'>
          {t('about.title')}
        </h2>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          <div>
            <h3 className='text-2xl font-semibold text-slate-900 dark:text-white mb-4'>
              {t('about.whoAmI')}
            </h3>
            <p className='text-slate-600 dark:text-slate-300 mb-6 leading-relaxed'>
              {t('about.description1')}
            </p>
            <p className='text-slate-600 dark:text-slate-300 leading-relaxed'>
              {t('about.description2')}
            </p>
          </div>
          <div className='bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-2xl'>
            <h4 className='text-xl font-semibold text-slate-900 dark:text-white mb-4'>
              {t('about.experience')}
            </h4>
            <ul className='space-y-3 text-slate-600 dark:text-slate-300'>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-blue-500 rounded-full mr-3'></span>
                {t('about.experience1')}
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-purple-500 rounded-full mr-3'></span>
                {t('about.experience2')}
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-green-500 rounded-full mr-3'></span>
                {t('about.experience3')}
              </li>
              <li className='flex items-center'>
                <span className='w-2 h-2 bg-orange-500 rounded-full mr-3'></span>
                {t('about.experience4')}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
