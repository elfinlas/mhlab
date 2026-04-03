export default function AuroraBackground() {
  return (
    <div
      aria-hidden
      className='pointer-events-none absolute inset-0 z-0 overflow-hidden'
    >
      {/* 라이트 베이스 / 다크: 딥 네추럴 슬레이트·인디고 (채도 점프 최소화) */}
      <div className='absolute inset-0 bg-[linear-gradient(135deg,#f8f9ff_0%,#f1f4ff_50%,#faf8ff_100%)] dark:bg-[linear-gradient(165deg,#08090f_0%,#0f1119_38%,#0a0c14_72%,#08090f_100%)]' />
      <div
        className='home-aurora-mesh-breathe absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_100%,rgba(226,232,255,0.38),transparent_54%)] dark:bg-[radial-gradient(ellipse_130%_90%_at_50%_0%,rgba(79,70,229,0.09),transparent_52%),radial-gradient(ellipse_100%_70%_at_70%_100%,rgba(30,27,75,0.45),transparent_55%)]'
      />

      {/* 라이트 블롭: 300대 톤 / 다크: 단일 톤·낮은 알파·큰 블러로 오로라 느낌 */}
      <div className='home-aurora-drift-a absolute -left-[20%] -top-[15%] h-[min(36rem,95vw)] w-[min(36rem,95vw)] will-change-transform'>
        <div className='h-full w-full rounded-full bg-sky-300/38 blur-[100px] mix-blend-normal dark:bg-slate-600/[0.14] dark:blur-[120px] dark:mix-blend-screen' />
      </div>
      <div className='home-aurora-drift-f absolute left-[15%] top-[5%] h-[min(28rem,80vw)] w-[min(28rem,80vw)] will-change-transform'>
        <div className='h-full w-full rounded-full bg-rose-300/30 blur-[90px] mix-blend-normal dark:bg-indigo-500/[0.09] dark:blur-[115px] dark:mix-blend-screen' />
      </div>
      <div className='home-aurora-drift-b absolute -right-[12%] -top-[8%] h-[min(32rem,90vw)] w-[min(32rem,90vw)] will-change-transform'>
        <div className='relative h-full w-full'>
          <div className='absolute inset-[-15%] rounded-full bg-violet-400/38 blur-[100px] mix-blend-normal dark:bg-violet-600/[0.11] dark:blur-[125px] dark:mix-blend-screen' />
          <div className='absolute inset-0 rounded-full bg-purple-400/34 blur-[95px] mix-blend-normal dark:bg-slate-900/[0.22] dark:blur-[110px] dark:mix-blend-normal' />
        </div>
      </div>
      <div className='home-aurora-drift-c absolute right-[-5%] top-[32%] h-[min(24rem,70vw)] w-[min(24rem,70vw)] will-change-transform'>
        <div className='h-full w-full rounded-full bg-fuchsia-300/36 blur-[95px] mix-blend-normal dark:bg-violet-800/[0.08] dark:blur-[118px] dark:mix-blend-screen' />
      </div>
      <div className='home-aurora-drift-d absolute bottom-[-12%] right-[-8%] h-[min(30rem,85vw)] w-[min(30rem,85vw)] will-change-transform'>
        <div className='h-full w-full rounded-full bg-indigo-300/40 blur-[105px] mix-blend-normal dark:bg-indigo-950/[0.32] dark:blur-[130px] dark:mix-blend-normal' />
      </div>
      <div className='home-aurora-drift-e absolute -left-[18%] bottom-[-10%] h-[min(28rem,80vw)] w-[min(28rem,80vw)] will-change-transform'>
        <div className='h-full w-full rounded-full bg-blue-300/36 blur-[100px] mix-blend-normal dark:bg-slate-700/[0.12] dark:blur-[120px] dark:mix-blend-screen' />
      </div>
    </div>
  );
}
