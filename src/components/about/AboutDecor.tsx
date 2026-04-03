/**
 * 라이트: 플로팅 장식 블롭 / 다크: 은은한 그리드·그라데이션 (고해상도·애니메이션용)
 */
export default function AboutDecor() {
  return (
    <>
      {/* 라이트 전용 — 부드러운 플로팅 도형 */}
      <div
        aria-hidden
        className='pointer-events-none fixed inset-0 -z-10 overflow-hidden dark:hidden'
      >
        <div className='about-float-blob absolute -left-24 top-24 h-72 w-72 rounded-full bg-violet-200/35 blur-3xl' />
        <div className='about-float-blob-delayed absolute -right-16 top-1/3 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl' />
        <div className='about-float-blob absolute bottom-[15%] left-1/4 h-64 w-64 rounded-full bg-indigo-100/50 blur-3xl' />
      </div>
      {/* 다크 전용 — 퍼플 악센트 메시 */}
      <div
        aria-hidden
        className='pointer-events-none fixed inset-0 -z-10 hidden overflow-hidden dark:block'
      >
        <div className='absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(124,58,237,0.18),transparent_55%)]' />
        <div className='absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(10,6,18,0.92))]' />
        <div
          className='absolute inset-0 opacity-[0.07]'
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>
    </>
  );
}
