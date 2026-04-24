import type { Locale } from '@/lib/i18n';

export const ABOUT_CHAPTER_SECTION_IDS = [
  'about-chapter-01',
  'about-chapter-02',
  'about-chapter-03',
  'about-chapter-04',
  'about-chapter-05',
  'about-chapter-06',
  'about-chapter-07',
  'about-chapter-08',
] as const;

export const ABOUT_CHAPTER_BLOCKS = [
  {
    sectionId: 'about-chapter-01',
    imageSrc: '/about/img_01.webp',
    imageSide: 'right' as const,
    revealDelay: 0,
  },
  {
    sectionId: 'about-chapter-02',
    imageSrc: '/about/img_02.webp',
    imageSide: 'left' as const,
    revealDelay: 80,
  },
  {
    sectionId: 'about-chapter-03',
    imageSrc: '/about/img_03.webp',
    imageSide: 'right' as const,
    revealDelay: 160,
  },
  {
    sectionId: 'about-chapter-04',
    imageSrc: '/about/img_04.webp',
    imageSide: 'left' as const,
    revealDelay: 240,
  },
  {
    sectionId: 'about-chapter-05',
    imageSrc: '/about/img_05.webp',
    imageSide: 'right' as const,
    revealDelay: 320,
  },
  {
    sectionId: 'about-chapter-06',
    imageSrc: '/about/img_06.webp',
    imageSide: 'left' as const,
    revealDelay: 400,
  },
  {
    sectionId: 'about-chapter-07',
    imageSrc: '/about/img_07.webp',
    imageSide: 'right' as const,
    revealDelay: 480,
  },
  {
    sectionId: 'about-chapter-08',
    imageSrc: '/about/img_08.webp',
    imageSide: 'left' as const,
    revealDelay: 480,
  },
] as const;

export type AboutChapterText = {
  chapter: string;
  title: string;
  subtitle: string;
  imageAlt: string;
  paragraphs: string[];
};

export type AboutPageCopy = {
  railNavAria: string;
  chapterButtonAria: (index: number) => string;
  heroEyebrow: string;
  heroTitle: string;
  heroParagraphs: string[];
  profileAlt: string;
  homeSectionAria: string;
  footerCta: string;
  chapters: AboutChapterText[];
};

const KO: AboutPageCopy = {
  railNavAria: '챕터 이동',
  chapterButtonAria: i => `${i + 1}번 챕터로 이동`,
  heroEyebrow: 'MHLab',
  heroTitle: 'Who am I?',
  heroParagraphs: [
    '<b>"형태를 부수어야 비로소 진정한 본질을 볼 수 있다."</b>',
    '형태를 해체하는 과정에서 새로운 의미가 만들어지며,',
    '형상에 머무르는 순간, 우리는 이미 본질에서 멀어진다.',
  ],
  profileAlt: 'MHLab 프로필',
  homeSectionAria: '홈으로 이동',
  footerCta: '메인 화면으로 돌아가기',
  chapters: [
    {
      chapter: 'Chapter 01',
      title: '과거에는',
      subtitle: '대학교에서 삼성전자 맴버십 그리고 입사',
      imageAlt: '과거 경력',
      paragraphs: [
        '대학생 때 <b>네트워크 엔지니어</b>를 꿈꿨지만, 잡스의 맥북 프리젠테이션을 본 뒤, 개발자의 길로 환승.',
        '재학 중 <b>창업</b>의 길도 꿈을 꾸었지만, 방향성 잡기 실패와 철 없는 시절 시간의 낭비로 꿈을 접음.',
        'iOS 프리랜서를 하면서 학업과 병행하다가, 소프트웨어 맴버쉽에 도전하였고, 삼성전자에 입사',
      ],
    },
    {
      chapter: 'Chapter 02',
      title: '대기업에서 스타트업으로',
      subtitle: '돈보다는 개발의 즐거움을 찾아서...',
      imageAlt: '스타트업 사무실',
      paragraphs: [
        '당시에 남들은 삼성전자 <b>무선</b>에 다닌다 하면 부러워하였지만, 현실은 글쎄...',
        '사람마다 다르겠지만, 내가 생각한 대기업 삼성전자와는 정말 많이 <b>다름</b>을 느낌.',
        '시스템만 갖춰있지, 정말 까라면 까라는 문화가 많았고, 정말 멱살 잡을 뻔한 책임급 직원도 있었음.',
        '강직되고, <b>수직 문화가 두터운 곳</b>에 적응하지 못한 나는 다른 부서로 전배.',
        '다행히 옮겨온 곳에는 좋은 사람도 있었고, 개발자로써 역량을 조금이나마 키울 수 있었음.',
        '하지만 당시 부서 임원이 개발을 불필요한 존재라 생각했고, 이후 빅스비 지원 부서로 강제 전배.',
        '엑셀 노가다나 잡무 등을 하면서 도저히 아닌것 같아서 결국 퇴사를 결정.',
        '이후 스마트팩토리 솔루션 스타트업과 블록체인 스타트업을 전전.',
        '그리고 판교에 한 스타트업에 입사.',
      ],
    },
    {
      chapter: 'Chapter 03',
      title: '너무 낮은 급여',
      subtitle: '노동 강도에 비해 낮은 급여',
      imageAlt: '와인 셀러',
      paragraphs: [
        '처음에는 백엔드 개발자로 재미있게 근무를 하였지만,',
        '대표의 이중성과 사람을 갈아넣는 일정 제공,',
        '업무 강도에 비해 턱 없이 낮은 임금, 계속되는 야근으로 인해 점점 지쳐감.',
        '<b>남의 회사에 죽어라 몸 갈리는 짓</b>하다가 현실을 깨닫고, 방향성을 잃고 살게 됨.',
      ],
    },
    {
      chapter: 'Chapter 04',
      title: '개발업(業)에 대한 강한 회의감',
      subtitle: '이직을 준비해 보지만?',
      imageAlt: '와인 셀러',
      paragraphs: [
        '스타트업부터 대기업까지 다양한 곳을 찾고 준비해봤지만, 내가 가진 실력이 그렇게 높지 않다는 것을 다시한번 깨닫게 됨.',
        '이후 이직에 실패한 뒤 퇴사하고 곰곰히 생각하는 자아성찰 시간을 가짐.',
        '특히 개발에 죽어라 시간을 보낸 것에 많은 회의감이 많이 들었음.',
        '당시 대기업 연봉에서 스타트업 연봉으로 내려오니 많은 현타가 옴.',
        '결국 직장에 다니는게 개발 잘하려는게 아니라 <b>시간을 돈으로 치환하는게 주 목적</b>인데, 어짜피 개발 열심히 해도, 위로 갈 수 있는 직업군이 아니란 것을 깨닫게 됨.<b>(네카라쿠배당토 포함)</b>',
        '게다가 <b>개발자는 무한에 가까운 학습</b>이 필요한데, 세상은 자본주의가 깊어지고, 개발 지식은 일할 때 빼곤 쓸모가 없다고 느낌.',
        '즉 <b>시간 투자 대비 급여가 낮거나 중간</b>에 취업 잘 되는 거 빼곤 전부 디 메리트.',
        '부모 버프나 쩔 안 받으면 안정적인 수도권(광교,수지,분당,위례,대치,흑석,강남3구 등)에 안착도 불가능하며, 추후 노후에 불안정한 삶, 돈 없는 서러움등이 반기는게 현실.',
        '결국 노후 보장 또는 사람답게 살려면 인컴이 높거나, 보유 자산가치와 생활 물가의 연동성이 매우 중요.',
        '현 대한민국에서 급여 노동자 탑티어는 사자 직업군밖에 없고, 부의 영역에 오는 사람들은 1티어 자영업군, 또는 창업해서 엑싯한 스타텁 대표 등.',
        '대한민국에서 부를 축적한 사람들 중엔 <b>개발자라는 직업군</b>은 없었음.',
      ],
    },
    {
      chapter: 'Chapter 05',
      title: '마지막 사다리',
      subtitle: '현재 삶의 불만족',
      imageAlt: '와인 셀러',
      paragraphs: [
        '그러다가 1차 코인장에 몇 지인이 50억, 100억 자산가가 되는거 보고 현타가 강하게 옴.',
        '당시 지인 따라 트리마제랑 강남3구 아파트 임장을 같이 가봤는데, 내가 사는 곳과 급 차이를 강하게 느낌.',
        '당시 부동산 지식이 없었더라도, 경기도 하급지에 살던 내가 경험한 것은 너무 충격적이었음.',
        '대한민국에서는 개발자로는 절대 노후대비 및 자아실현이 불가능함을 깨닫고, 모은 돈으로 부동산과 주식 투자, 다시없을 유동성 파도에서 겨우 기회를 구함.',
      ],
    },
    {
      chapter: 'Chapter 06',
      title: '부동산(不動産)',
      subtitle: '부동산 시장에 몸 담그기',
      imageAlt: '와인 셀러',
      paragraphs: [
        '지인 덕분에 부동산이라는 시장에 눈을 뜨고, 이것저것 공부해봄.',
        '지방부터 해서 이곳저곳 다녀보고, 임장을 정말 많이 다님.',
        '당시 부동산 규제는 이렇게 심한 편은 아니었고, 갭을 놓고, 매수와 매도, 직접 등기소에 등기를 치면서 시장을 배워나감.',
        '이렇게 하면서 단순 개발 노동자로 살면서 정해진 급여를 받는 것이 아닌, 자본을 굴려서 키워나가는 재미를 찾게됨.',
        '지방부터 해서 수도권 지역의 하급지부터 중, 상급지까지 올라오면서 정말 많은 것을 배움.',
        '당시 호갱노노와 네이버 부동산을 정말 잘 사용하였는데, 진심 저거 개발한 회사로, 다시 취업해보고 싶어지기고 했음.',
        '전에 비해 삶이 여유가 생기고, 다양한 취미생활을 하며, 삶을 돌아봄.',
        '시간이 지나고, 나만의 서비스를 만들어 보고 싶어서 다시 개발에 손을 대기 시작.',
      ],
    },
    {
      chapter: 'Chapter 07',
      title: '개발자의 삶으로 복귀',
      subtitle: '생업용이 아닌 취미로',
      imageAlt: '와인 셀러',
      paragraphs: [
        '초창기 MML(MyMeLink)와 흑우집합소(로또서비스)를 개발하며, 다시 개발자의 길을 걷게 됨.',
        '전에는 백엔드 포지션에 자바&스프링 원툴.',
        '혼자서 모든 것을 커버하기 위해 프론트(React, Next.Js 등)와 백엔드(Nest.Js), 그리고 플러터를 통해 앱, 웹 모두 커버하는 풀스택 개발자로 전향.',
        '그러던 중 와인에 빠지기 시작하면서 조금씩 와인이라는 영역에 발을 담금.',
        '외인을 마시면서 시음 노트, 보유 와인 관리, 셀러 관리 등 몇 가지 기능을 필요하여 찾아보았으나, 내가 원하는 기능을 만족하는 서비스는 없었음.',
        '그래서 직접 서비스를 만들기 시작했고, 안드로이드 앱과 아이폰 앱을 출시함.',
        '이후 와인 가격 조회 서비스인 마와셀 웹 서비스를 오픈.',
      ],
    },
    {
      chapter: 'Chapter 08',
      title: '대 AI의 시대',
      subtitle: 'AI로 인해 새로운 패러다임 형성',
      imageAlt: '와인 셀러',
      paragraphs: [
        '부동산의 시대가 끝나고, 주식,채권,금 같은 자산으로 리벨런싱 이후 약간의 시간이 남으면서 AI에 대해 조금씩 파봄.',
        '커서나 몇몇 AI 툴을 접하면서 대 생산성의 시대, 아이디어를 바로 구현화 할 수 있는 시대를 체감함.',
        '괜찮은 아이디어를 적은 비용으로 빠르게 구현보면서 새로운 재미를 찾게됨.',
        '마와셀도 조금씩 업데이트 하며, 노트에 정리했던 아이디어를 구현하며 새로운 세상에 적응하는 중',
        '<b>고생 하셨잖아. 한잔해!</b>',
      ],
    },
  ],
};

const EN: AboutPageCopy = {
  railNavAria: 'Chapter navigation',
  chapterButtonAria: i => `Go to chapter ${i + 1}`,
  heroEyebrow: 'MHLab',
  heroTitle: 'Who am I?',
  heroParagraphs: [
    '<b>"Only by deconstructing form can we reveal the true essence."</b>',
    'New meaning is forged in the process of dismantling structures,',
    'for the moment we settle for the surface, we drift away from the core.',
  ],
  profileAlt: 'MHLab profile photo',
  homeSectionAria: 'Go to home',
  footerCta: 'Back to the home page',
  chapters: [
    {
      chapter: 'Chapter 01',
      title: 'The Genesis',
      subtitle: 'From University to Samsung Software Membership',
      imageAlt: 'Early career',
      paragraphs: [
        'I once dreamed of becoming a <b>network engineer</b>, but Steve Jobs’ MacBook keynote changed everything—I pivoted to software development on the spot.',
        'While in school, I flirted with the idea of <b>starting a business</b>, but it ended in failure due to a lack of direction and the distractions of youth.',
        'Balancing life as an iOS freelancer with my studies, I eventually challenged myself to join the Samsung Software Membership, which led to my career at Samsung Electronics.',
      ],
    },
    {
      chapter: 'Chapter 02',
      title: 'Corporate Giant to Startup Hustle',
      subtitle: 'Trading Stability for the Joy of Building',
      imageAlt: 'Startup Office',
      paragraphs: [
        'At the time, everyone envied my position at <b>Samsung Mobile</b>, but the reality behind the brand was a different story.',
        'Experience varies for everyone, but for me, the gap between my expectations and the reality of a massive conglomerate was <b>stark</b>.',
        'The systems were there, but so was a rigid "just do as you\'re told" culture; I even had a few near-confrontations with senior managers over it.',
        'Unable to fit into a <b>stifling, top-down hierarchy</b>, I requested a transfer to another department.',
        'Fortunately, I met great people in my new team and was able to grow my technical skills to some extent.',
        'However, the executives there saw development as a secondary cost rather than a core value. I was eventually forced into a Bixby support role.',
        'Facing endless Excel grunt work and menial tasks, I realized I couldn’t stay any longer and chose to resign.',
        'After that, I navigated through various smart factory and blockchain startups before landing at a startup in Pangyo.',
      ],
    },
    {
      chapter: 'Chapter 03',
      title: 'The Burnout',
      subtitle: 'When Intensity Outweighs the Reward',
      imageAlt: 'Wine Cellar',
      paragraphs: [
        'I initially enjoyed working as a backend developer, but the joy was short-lived.',
        'The CEO’s duplicity, unrealistic deadlines that ground people down, and a <b>salary that didn’t reflect the intensity</b> of the work took their toll.',
        'I realized I was <b>burning my life away for someone else’s company</b>. I lost my sense of direction.',
      ],
    },
    {
      chapter: 'Chapter 04',
      title: 'The Great Disillusionment',
      subtitle: 'Searching for a Way Out',
      imageAlt: 'Wine Cellar',
      paragraphs: [
        'I tried interviewing at everything from startups to big tech, only to realize that my skills weren’t as high as I had thought.',
        'After failing to pivot, I quit and entered a period of deep self-reflection.',
        'I felt a profound sense of skepticism about the time I had "sacrificed" for code.',
        'The reality hit hard when I saw the pay gap between a corporate salary and a startup wage.',
        'I realized that for most, a job is just <b>trading time for money</b>, and even in top-tier tech firms, development isn’t always a path to the upper echelons of wealth.',
        'Furthermore, while <b>developers are expected to learn infinitely</b>, I felt that much of that knowledge was useless outside of the office in our capitalist reality.',
        'Low-to-mid ROI on time, high entry barriers for prime real estate, and an uncertain future—the "dream" felt more like a trap.',
        'Without family support, settling in prime areas like Gangnam or Bundang seemed impossible, leaving only a future of financial anxiety.',
        'I realized that true security comes from high-income assets that keep pace with inflation.',
        'In Korea, the top tier of earners are either licensed professionals (doctors/lawyers), elite business owners, or startup founders who successfully exited.',
        'I didn’t see "employee developers" on the list of those who achieved true wealth.',
      ],
    },
    {
      chapter: 'Chapter 05',
      title: 'The Last Ladder',
      subtitle: 'Breaking the Cycle',
      imageAlt: 'Wine Cellar',
      paragraphs: [
        'The real turning point was seeing acquaintances become multi-millionaires ($5M–$10M) during the first crypto boom.',
        'Visiting luxury apartments in Seoul with them made me realize the massive gulf between our lifestyles.',
        'Even without deep real estate knowledge, the shock of comparing my life in the outskirts to the heart of the city was transformative.',
        'I concluded that being "just a developer" would never lead to true self-actualization or security. I took what I had and dove into real estate and stocks, catching a wave of liquidity.',
      ],
    },
    {
      chapter: 'Chapter 06',
      title: 'The Real Estate Awakening',
      subtitle: 'Learning the Language of Capital',
      imageAlt: 'Wine Cellar',
      paragraphs: [
        'Thanks to a mentor, I opened my eyes to the real estate market and began studying relentlessly.',
        'I traveled all over the country for field research (Imjang), from the provinces to the most sought-after districts.',
        'It was a time of fewer regulations; I learned the market by doing—managing gap investments and even handling my own legal registrations.',
        'I found a new kind of thrill—not in labor income, but in watching capital grow through strategic movement.',
        'Moving from the outskirts to mid-tier and eventually prime districts taught me more than any textbook could.',
        'I used apps like Hogangnono and Naver Real Estate so much that I actually considered working for the companies that built them.',
        'As my life became more comfortable, I began to rediscover my passion for building things on my own terms.',
      ],
    },
    {
      chapter: 'Chapter 07',
      title: 'Return to Code',
      subtitle: 'Development as a Passion, Not a Livelihood',
      imageAlt: 'Wine Cellar',
      paragraphs: [
        'I returned to development by creating "MML" (MyMeLink) and a lottery service called "Heuk-woo Center."',
        'I shifted from being a Java/Spring-only backend developer to a Full-stack developer (React, Next.js, Nest.js, Flutter) to build whatever I wanted, solo.',
        'Around this time, I fell in love with the world of wine.',
        'I needed a tool to manage my tasting notes and cellar inventory, but I couldn’t find an app that met my standards.',
        'So, I built it myself. I launched the app for both Android and iOS, followed by "Mawacell," a web service for wine price tracking.',
      ],
    },
    {
      chapter: 'Chapter 08',
      title: 'The Era of AI',
      subtitle: 'A New Paradigm of Productivity',
      imageAlt: 'Wine Cellar',
      paragraphs: [
        'After rebalancing my portfolio into stocks, bonds, and gold as the real estate peak passed, I began exploring AI.',
        'Tools like Cursor made me realize we are in a golden age of productivity—an era where ideas can be manifested into reality almost instantly.',
        'Finding joy in rapidly prototyping ideas at a low cost, I’m constantly updating Mawacell and exploring new horizons.',
        '<b>"You\'ve worked hard. Let’s have a drink!"</b>',
      ],
    },
  ],
};

export function getAboutPageCopy(locale: Locale): AboutPageCopy {
  return locale === 'en' ? EN : KO;
}
