import { isProductListed, type ProductListItemType } from './productModel';

//메인 리스트
export const productList: ProductListItemType[] = [
  {
    id: 'myc_app',
    title: { ko: '마와셀', en: 'MaWaCel (My Wine Cellar)' },
    category: 'Mobile Application',
    description: {
      ko: [
        '와인 수집·시음 기록·셀러 관리를 한곳에서 다루는 스마트 디지털 셀러입니다.',
        '라벨 OCR로 빠른 등록, 디지털 셀러 맵, 통계 대시보드, ZIP 백업·CSV 가져오기까지 와인 애호가의 라이프를 함께합니다.',
      ],
      en: [
        'An all-in-one app to manage your wine collection, tasting notes, and cellar.',
        'Quick registration with label OCR, digital cellar map, statistics dashboard, ZIP backup·CSV import, and more to support the life of wine enthusiasts.',
      ],
    },
    mainFeatures: {
      ko: [
        'OCR 스마트 와인 등록',
        '디지털 셀러 맵·선반·용량',
        '간단/디테일 시음 노트·통계',
        '검색·필터·태그·백업',
      ],
      en: [
        'Smart Wine Registration via OCR',
        'Digital Cellar Map: Shelves & Capacity',
        'Simple & Detailed Tasting Notes with Analytics',
        'Advanced Search, Filters, Tags, & Data Backup',
      ],
    },
    images: {
      ko: [
        '/product/myc/app/main_kr_01.webp',
        '/product/myc/app/main_kr_02.webp',
        '/product/myc/app/main_kr_03.webp',
        '/product/myc/app/main_kr_04.webp',
        '/product/myc/app/main_kr_05.webp',
        '/product/myc/app/main_kr_06.webp',
        '/product/myc/app/main_kr_07.webp',
        '/product/myc/app/main_kr_08.webp',
      ],
      en: [
        '/product/myc/app/main_en_01.webp',
        '/product/myc/app/main_en_02.webp',
        '/product/myc/app/main_en_03.webp',
        '/product/myc/app/main_en_04.webp',
        '/product/myc/app/main_en_05.webp',
        '/product/myc/app/main_en_06.webp',
        '/product/myc/app/main_en_07.webp',
        '/product/myc/app/main_en_08.webp',
      ],
    },
    supportedLocales: ['ko', 'en'],
    color: 'from-blue-500 to-purple-600',
  },

  //////
  {
    id: 'travellog',
    title: { ko: '트래블로그', en: 'TravelLog' },
    category: 'Mobile Application',
    description: {
      ko: [
        '자신의 여행 기록을 관리하는 어플리케이션입니다.',
        '간편하게 여행 시작과 종료로 여행을 기록하거나, 여행 날짜만으로도 여행을 기록할 수 있습니다.',
        '다른 곳에 공유되지 않는 개인 정보 중시를 중시합니다.',
      ],
      en: [
        'An application that manages your travel records.',
        'You can easily record your travel by starting and ending your travel.',
        'You can also record your travel by entering your travel date.',
      ],
    },
    mainFeatures: {
      ko: ['간편한 여행 기록', '여행 기록 열람', '여행 경로 확인'],
      en: [
        'Easy travel recording',
        'Travel record viewing',
        'Travel route viewing',
      ],
    },
    images: [
      '/product/travellog/img_01.webp',
      '/product/travellog/img_02.webp',
      '/product/travellog/img_03.webp',
      '/product/travellog/img_04.webp',
      '/product/travellog/img_05.webp',
      '/product/travellog/img_06.webp',
      '/product/travellog/img_07.webp',
    ],
    supportedLocales: ['ko', 'en'],
    color: 'from-blue-500 to-purple-600',
  },

  //////
  {
    id: 'bcow',
    title: { ko: '흑우집합소', en: 'Bcow World' },
    category: 'Mobile Application, Web Service',
    description: {
      ko: [
        '대한민국 로또 정보를 제공하는 서비스입니다.',
        '웹 서비스와 동일한 기능을 제공하며, 모두 무료이며, 상용 서비스는 없습니다.',
        '로또번호를 단지 재미로, 그리고 자신만의 기법을 이용하여 번호를 조합하고 만들 수 있습니다.',
        '번호를 분석하고 귀찮은 분들을 위해 추천번호를 제공하고, 원하는 조건을 가지는 번호를 생성할 수 있고, 자신이 생성한 번호를 저장할 수 있습니다.',
        '또한 복잡한 UI가 아닌 간편하고, 직관적인 UI로 사용자의 편의성을 도모하였습니다.',
      ],
      en: [
        'A service that provides information about the lotto in South Korea.',
        'It provides the same functions as the web service, and is free of charge, and there is no paid service.',
        'You can combine numbers with your own technique to make numbers just for fun.',
        "You can analyze numbers and provide recommended numbers for those who don't want to analyze, and you can create numbers with your own conditions, and you can save the numbers you created.",
        'In addition, we have developed a simple and intuitive UI to improve the convenience of users.',
      ],
    },
    mainFeatures: {
      ko: [
        '동행복권 로또 정보 제공',
        '추천번호, 랜덤생성, 커스텀 방식 등 다양한 번호 생성',
        '로또 회차 상세 정보 제공',
      ],
      en: [
        'Official Lotto Results & Real-time Data',
        'Versatile Number Generation (AI-Recommended, Random, & Custom)',
        'In-depth Analysis & Detailed Draw History',
      ],
    },
    images: [
      '/product/bcow/img_01.webp',
      '/product/bcow/img_02.webp',
      '/product/bcow/img_03.webp',
      '/product/bcow/img_04.webp',
      '/product/bcow/img_05.webp',
      '/product/bcow/img_06.webp',
      '/product/bcow/img_07.webp',
      '/product/bcow/img_08.webp',
      '/product/bcow/img_09.webp',
      '/product/bcow/img_10.webp',
      '/product/bcow/img_11.webp',
      '/product/bcow/img_12.webp',
      '/product/bcow/img_13.webp',
      '/product/bcow/img_14.webp',
    ],
    supportedLocales: ['ko'],
    color: 'from-red -500 to-green-600',
  },

  //reservelog
  {
    id: 'reservelog',
    title: { ko: 'ReserveLog', en: 'ReserveLog' },
    category: 'Web Service',
    description: {
      ko: [
        '상품 예약 판매자를 위한 스마트 예약 관리 시스템입니다.',
        '직관적인 UI와 다양한 기능으로 상품 등록 → 예약 접수 → 고객 관리까지 전 과정을 한 곳에서 처리할 수 있습니다.',
        '편의점, 예약제로 물건을 파는 업장주들을 위한 예약 관리 서비스입니다.',
      ],
      en: [
        'A smart reservation management system for product sellers.',
        'With intuitive UI and various functions, you can register products → receive reservations → manage customers in one place.',
        'For convenience stores and stores that sell items on a reservation system, this is a reservation management service.',
      ],
    },
    mainFeatures: {
      ko: ['상품 예약 관리', '상품 관리', '구매 이력 관리', '고객 관리'],
      en: [
        'Reservation Management',
        'Product Management',
        'Purchase History Tracking',
        'Customer Management (CRM)',
      ],
    },
    images: [
      '/product/reservelog/img_01.webp',
      '/product/reservelog/img_02.webp',
      '/product/reservelog/img_03.webp',
      '/product/reservelog/img_04.webp',
      '/product/reservelog/img_05.webp',
      '/product/reservelog/img_06.webp',
      '/product/reservelog/img_07.webp',
      '/product/reservelog/img_08.webp',
    ],
    supportedLocales: ['ko'],
    color: 'from-blue-500 to-purple-600',
  },

  ///////
  {
    id: 'myc_web',
    title: '마와셀(웹 서비스)',
    category: 'Web Service',
    published: false,
    description: [
      '와인에 대한 상세한 정보를 제공하며, 와인 비비노 및 유명한 단체의 평가 점수 페어링 푸드와 시음 적기 정보를 제공합니다.',
      '와이너리에 대한 상세한 설명, 해당 와이너리에서 생산된 와인 정보를 제공합니다.',
      '와인을 만드는 포도 품종에 대해 자세한 정보를 제공합니다.',
    ],
    mainFeatures: [
      '상세한 와인 정보',
      '와이너리에 자세한 정보',
      '와인 양조용 포도 품종에 대한 상세한 정보',
    ],
    images: [
      '/product/myc/web/myc_01.webp',
      '/product/myc/web/myc_02.webp',
      '/product/myc/web/myc_03.webp',
      '/product/myc/web/myc_04.webp',
      '/product/myc/web/myc_05.webp',
      '/product/myc/web/myc_06.webp',
      '/product/myc/web/myc_07.webp',
      '/product/myc/web/myc_08.webp',
      '/product/myc/web/myc_09.webp',
      '/product/myc/web/myc_10.webp',
      '/product/myc/web/myc_11.webp',
    ],
    supportedLocales: ['ko', 'en'],
    color: 'from-red -500 to-green-600',
  },
];

export const publishedProductList = productList.filter(isProductListed);
