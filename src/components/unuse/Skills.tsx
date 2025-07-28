import { useLanguage } from '@/contexts/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id='skills' className='py-16 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-center text-slate-900 dark:text-white mb-12'>
          {t('skills.title')}
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
          {[
            { name: 'React', icon: '⚛️', color: 'from-blue-500 to-cyan-500' },
            { name: 'Next.js', icon: '▲', color: 'from-black to-gray-800' },
            {
              name: 'TypeScript',
              icon: '📘',
              color: 'from-blue-600 to-blue-800',
            },
            {
              name: 'Tailwind CSS',
              icon: '🎨',
              color: 'from-cyan-500 to-blue-500',
            },
            {
              name: 'Node.js',
              icon: '🟢',
              color: 'from-green-500 to-green-700',
            },
            {
              name: 'PostgreSQL',
              icon: '🐘',
              color: 'from-blue-400 to-blue-600',
            },
            { name: 'Git', icon: '📝', color: 'from-orange-500 to-red-500' },
            { name: 'Docker', icon: '🐳', color: 'from-blue-500 to-blue-700' },
          ].map((skill, index) => (
            <div
              key={index}
              className='bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow'
            >
              <div
                className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-r ${skill.color} flex items-center justify-center text-white text-xl font-bold`}
              >
                {skill.icon}
              </div>
              <h3 className='text-center font-semibold text-slate-900 dark:text-white'>
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
