
const career = [
    {
      period: '2018.12.10 - 2019.11.01',
      company: '모빌',
      team: '개발팀',
      desc: '모빌 서비스 개발',
      icon: '💼',
    },
    {
      period: '2018.06.18 - 2018.11.09',
      company: '헥슬란트',
      team: '개발팀',
      desc: '토큰뱅크 서비스 개발',
      icon: '💼',
    },
    {
      period: '2017.07.03 - 2018.06.08',
      company: '타키온테크',
      team: '부속 연구소',
      desc: '스마트 팩토리 솔루션 개발',
      icon: '💼',
    },
    {
      period: '2014.03.04 - 2016.12.31',
      company: '삼성전자',
      team: '무선사업부',
      desc: '시스템 분석 및 보안 분석',
      icon: '💼',
    },
  ];
  

export default function Career() {
  return (
    <section className='mb-12'>
            <h2 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
              Career
            </h2>
            <div className='grid gap-4'>
              {career.map((item, idx) => (
                <div
                  key={idx}
                  className='flex items-center bg-white dark:bg-slate-800 rounded-xl shadow p-4'
                >
                  <span className='text-2xl mr-4'>{item.icon}</span>
                  <div>
                    <div className='font-semibold text-slate-900 dark:text-white'>
                      {item.company}{' '}
                      <span className='text-xs text-slate-500 dark:text-slate-400'>
                        {item.team}
                      </span>
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
  );
}