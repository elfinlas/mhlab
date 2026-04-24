/** 배경 이미지 + 어두운 오버레이 위에 제목·부제목 (패치노트 MDX용) */
export function PatchNoteHeroBanner({
  title,
  subtitle,
  bgImage,
  overlayOpacity = 0.52,
}: {
  title: string;
  subtitle?: string;
  bgImage: string;
  /** 0~1, 배경을 얼마나 어둡게 덮을지 */
  overlayOpacity?: number;
}) {
  const dim = Math.min(1, Math.max(0, overlayOpacity));

  return (
    <section
      className='relative mb-6 min-h-[11rem] overflow-hidden rounded-2xl md:min-h-[13.75rem]'
      aria-label={title}
    >
      <div
        className='absolute inset-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${bgImage})` }}
        aria-hidden
      />
      <div
        className='absolute inset-0 bg-black'
        style={{ opacity: dim }}
        aria-hidden
      />
      <div className='relative flex min-h-[11rem] flex-col justify-end px-6 pb-4 pt-8 md:min-h-[13.75rem] md:px-10 md:pb-4 md:pt-10'>
        <h2 className='text-2xl font-bold tracking-tight text-white md:text-3xl'>
          {title}
        </h2>
        {subtitle ? (
          <p className='mt-2 max-w-xl text-base font-normal leading-relaxed text-white/90 md:text-lg'>
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
