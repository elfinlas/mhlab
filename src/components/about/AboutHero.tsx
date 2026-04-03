import Image from 'next/image';

export default function AboutHero() {
  return (
    <div className='about-hero-in mb-16 flex flex-col items-center px-2'>
      <div className='relative mb-6'>
        {/* 다크: 프로필 뒤 소프트 펄스 글로우 */}
        <div
          aria-hidden
          className='about-profile-glow absolute inset-0 hidden scale-125 rounded-full dark:block'
        />
        <div className='relative mx-auto h-28 w-28 sm:h-32 sm:w-32'>
          <Image
            src='/about/profile.webp'
            alt='MHLab 프로필'
            width={256}
            height={256}
            priority
            sizes='(max-width: 640px) 112px, 128px'
            className='h-full w-full rounded-full border-4 border-white object-cover shadow-lg ring-2 ring-violet-200/80 dark:border-slate-800 dark:ring-violet-500/40'
          />
        </div>
      </div>
      <h1 className='mb-2 text-center text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl dark:text-white'>
        MHLab
      </h1>
      <p className='mb-3 text-center text-base text-slate-600 sm:text-lg dark:text-slate-300'>
        Who am I?
      </p>
      <p className='max-w-xl text-center text-lg font-medium italic leading-relaxed text-violet-700 dark:text-violet-300 sm:text-xl'>
        &quot;형태를 파괴하면 진정한 본질을 볼 수 있을까?&quot;
      </p>
    </div>
  );
}
