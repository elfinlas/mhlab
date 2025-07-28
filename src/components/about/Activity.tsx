const activity = [
    {
      period: '2012.07.14 - 2014.01.31',
      org: '삼성전자 소프트웨어 멤버십',
      desc: '일반과제 및 삼성과제 진행',
      icon: '🌟',
    },
    {
      period: '2010.04.02 - 2011.05.09',
      org: '중기청 예비기술창업 육성사업',
      desc: 'iOS 어플리케이션 기획 및 개발',
      icon: '🌟',
    },
    {
      period: '2007.12.03 - 2009.08.31',
      org: 'SK 브로드밴드 IDC Network 관리',
      desc: '전산 및 망 관리',
      icon: '🌟',
    },
  ];

export default function Activity() {
    return (
        <section className='mb-12'>
            <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
              Activity
            </h2>
            <div className='grid gap-4'>
              {activity.map((item, idx) => (
                <div
                  key={idx}
                  className='flex items-center bg-white dark:bg-slate-800 rounded-xl shadow p-4'
                >
                  <span className='text-2xl mr-4'>{item.icon}</span>
                  <div>
                    <div className='font-semibold text-slate-900 dark:text-white'>
                      {item.org}
                    </div>
                    <div className='text-sm text-slate-600 dark:text-slate-300'>
                      {item.desc}
                    </div>
                    <div className='text-xs text-slate-400'>{item.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>
    )
}