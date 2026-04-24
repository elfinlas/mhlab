import type { ProductItemType } from './productModel';

//서비스 상세 설명

export const productItemList: ProductItemType[] = [
  {
    id: 'travellog',
    title: { ko: '트래블로그', en: 'TravelLog' },
    category: 'Mobile Application',
    description: {
      ko: [
        '잊고 싶지 않은 여행의 추억, Travel Log가 가장 쉽고 완벽하게 기록해 드립니다.\n',
        '여행의 시작과 끝을 버튼 하나로 알려주세요.\n',
        'Travel Log는 그 기간 동안의 모든 사진과 영상을 자동으로 불러와 당신만의 타임라인을 만듭니다.\n',
        '날짜를 놓쳤어도 괜찮습니다. 날짜만 입력하면 해당 기간의 추억을 즉시 찾아 기록해 드립니다.',
      ],
      en: [
        'Capture every moment of your journey effortlessly with TravelLog, the ultimate companion for your travel memories.\n',
        'Simply tap a button to start and end your trip.\n',
        'TravelLog automatically fetches all photos and videos taken during that period to craft a personalized, immersive timeline for you.\n',
        'Forgot to start the log? No problem. Just enter your travel dates, and the app will instantly retrieve and organize your memories from that period.',
      ],
    },
    keyPoints: {
      ko: [
        '📍 간편한 여행 기록',
        '🗺️ 여행 기록 열람',
        '🔍 여행 경로 확인',
        '🌙 편의 기능',
        '🌐 다국어 지원',
      ],
      en: [
        '📍 Effortless Trip Logging',
        '🗺️ Interactive Memory Browsing',
        '🔍 Visual Route Tracking',
        '🌙 User-Centric Utilities',
        '🌐 Multi-Language Support',
      ],
    },
    links: {
      website: '',
      appStore: '',
      googlePlay:
        'https://play.google.com/store/apps/details?id=dev.mhlab.travel_logger',
      type: 'mobile',
    },
    supportedLocales: ['ko', 'en'],
    images: [
      '/product/travellog/img_01.webp',
      '/product/travellog/img_02.webp',
      '/product/travellog/img_03.webp',
      '/product/travellog/img_04.webp',
      '/product/travellog/img_05.webp',
      '/product/travellog/img_06.webp',
      '/product/travellog/img_07.webp',
    ],
    functions: [
      {
        id: 'create_trip',
        title: { ko: '여행 기록 생성', en: 'One-Tap Trip Creation' },
        description: {
          ko: [
            '여행 기록을 쉽게 생성할 수 있습니다.',
            '여행을 갈 때 시작버튼을 클릭하고 즐겁게 여행을 즐기세요.',
            '여행을 마치면 종료버튼을 클릭하고 추억을 기록할 수 있습니다.',
            '날짜를 놓쳤어도 괜찮습니다.',
            '여행 날짜만 입력하면 해당 기간의 추억을 즉시 찾아 기록해 드립니다.',
          ],
          en: [
            'Starting a travel log has never been easier.',
            'Simply hit the "Start" button at the beginning of your journey and enjoy your trip to the fullest.',
            'Once you return, tap "End" to instantly generate a curated record of your memories.',
            'Even if you missed the timing, you can retroactively create a log.',
            'Just input the dates, and the app will automatically find and organize the media from your trip.',
          ],
        },
        features: {
          ko: ['여행 시작과 종료 기록', '과거에 있는 날짜 기록'],
          en: ['Real-time Start/End Logging', 'Retroactive Manual Date Entry'],
        },
        images: [
          '/product/travellog/img_01.webp',
          '/product/travellog/img_05.webp',
        ],
      },

      {
        id: 'view_trip',
        title: { ko: '여행 기록 열람', en: 'Immersive Memory Browsing' },
        description: {
          ko: [
            '여행 기록을 클릭하면 해당 여행 기록의 상세 정보를 확인할 수 있습니다.',
            '날짜별, 지역과 시간대 별로 기록을 확인할 수 있습니다.',
            '각 클러스터별 상세하게 이동한 위치의 사진과 영상을 확인할 수 있고, 그에 대한 제목과 설명을 기록할 수 있습니다.',
          ],
          en: [
            'Dive back into your travels with a detailed view of every trip.',
            'Browse your journey organized by date, region, and specific timeframes.',
            'View clustered photos and videos from each location you visited, and add personal titles and descriptions to tell your story.',
          ],
        },
        features: {
          ko: [
            '여행 기록 열람',
            '날짜별 기록 확인',
            '지역과 시간대 별 기록 확인',
          ],
          en: [
            'Detailed Trip Overviews',
            'Date-Specific Timelines',
            'Location & Time-Based Clustering',
          ],
        },
        images: [
          '/product/travellog/img_02.webp',
          '/product/travellog/img_03.webp',
          '/product/travellog/img_07.webp',
        ],
      },

      {
        id: 'route_view_trip',
        title: { ko: '여행 경로 열람', en: 'Visual Journey Mapping' },
        description: {
          ko: [
            '여행 시작부터 끝까지 지나온 경로를 확인할 수 있습니다.',
            '일자별로 이동한 경로를 확인할 수 있습니다.',
          ],
          en: [
            'Visualize the entire path you took from the start to the end of your trip.',
            'Review your daily movement routes on an interactive map.',
          ],
        },
        features: {
          ko: ['여행 경로 열람'],
          en: ['Full Trip Route Visualization', 'Daily Path Tracking'],
        },
        images: ['/product/travellog/img_04.webp'],
      },

      {
        id: 'trip_list',
        title: { ko: '여행 기록 리스트', en: 'Trip Record List' },
        description: {
          ko: [
            '지금까지 기록된 여행 기록을 모두 확인할 수 있습니다.',
            '총 여행의 횟수와 여행 일자를 확인할 수 있습니다.',
          ],
          en: [
            'Access your entire history of recorded travels in one place.',
            'Keep track of your total number of trips and cumulative travel days at a glance.',
          ],
        },
        features: {
          ko: ['여행 요약'],
          en: ['Comprehensive Trip Summaries', 'Total Travel Statistics'],
        },
        images: ['/product/travellog/img_06.webp'],
      },
    ],
  },

  //ReserveLog
  {
    id: 'reservelog',
    title: {
      ko: 'ReserveLog',
      en: 'ReserveLog',
    },
    category: 'Web Service',
    description: {
      ko: [
        'ReserveLog는 상품 예약 판매자를 위한 스마트 예약 관리 시스템입니다.\n',
        '직관적인 UI와 다양한 기능으로 상품 등록 → 예약 접수 → 고객 관리까지 전 과정을 한 곳에서 처리할 수 있습니다.\n',
        '편의점, 예약제로 물건을 파는 업장주들을 위한 맞춤형 예약 관리 서비스입니다.',
      ],
      en: [
        'ReserveLog is a smart reservation management system tailored for product sellers.\n',
        'Handle everything from product registration to reservation intake and customer management in one place with an intuitive UI.\n',
        'A specialized service designed for convenience stores and boutique owners operating on a reservation-only basis.',
      ],
    },
    keyPoints: {
      ko: [
        '📜 상품 예약 관리',
        '🛒 상품 관리',
        '💰 구매 이력 관리',
        '💬 고객 관리',
      ],
      en: [
        '📜 Reservation Lifecycle Management',
        '🛒 Inventory & Product Controls',
        '💰 Purchase History Tracking',
        '💬 Integrated CRM Solutions',
      ],
    },
    links: {
      website: 'https://www.reservelog.me/',
      appStore: '',
      googlePlay: '',
      type: 'web',
    },
    supportedLocales: ['ko'],
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
    functions: [
      //판매자 대시보드
      {
        id: 'sellr_dashboard',
        title: {
          ko: '판매자 대시보드',
          en: 'Seller Dashboard',
        },
        description: {
          ko: [
            '판매자 대시보드는 비즈니스 운영에 필요한 모든 정보를 한눈에 확인할 수 있는 통합 관리 센터입니다.\n',
            '예약 현황부터 상품 관리, 고객 응대 및 사이트 전반의 설정을 직관적으로 제어할 수 있습니다.\n',
          ],
          en: [
            'The Seller Dashboard is a centralized hub providing an at-a-glance overview of your business operations.\n',
            'Monitor real-time reservations, manage products, handle customer inquiries, and configure site settings seamlessly.\n',
          ],
        },
        features: {
          ko: ['통합 대시보드', '실시간 운영 현황 확인'],
          en: ['Unified Dashboard', 'Real-time Operational Overview'],
        },
        images: ['/product/reservelog/img_05.webp'],
      },
      //상품 정보
      {
        id: 'product_info',
        title: {
          ko: '상품 정보 및 등록',
          en: 'Product Info & Registration',
        },
        description: {
          ko: [
            '예약을 받을 상품을 직접 등록하고 관리할 수 있습니다.\n',
            '가격, 매대 특가, 상세 정보, 예약 방식 등을 세밀하게 설정 가능하며, 특정 기간에만 예약을 받는 기능도 지원합니다.\n',
            '기존에 등록한 상품 정보가 있다면 마이그레이션 기능을 통해 대량의 데이터를 손쉽게 가져올 수 있습니다.\n',
          ],
          en: [
            'Easily list and manage the products you wish to offer for reservation.\n',
            'Set custom pricing, in-store specials, detailed descriptions, and specific booking windows.\n',
            'Utilize the migration tool to quickly import existing product data and save time on setup.\n',
          ],
        },
        features: {
          ko: ['예약 상품 등록', '데이터 마이그레이션', '기간 한정 예약 설정'],
          en: [
            'Product Registration',
            'Data Migration',
            'Time-Limited Bookings',
          ],
        },
        images: [
          '/product/reservelog/product_01.webp',
          '/product/reservelog/product_02.webp',
          '/product/reservelog/product_03.webp',
          '/product/reservelog/product_04.webp',
          '/product/reservelog/product_05.webp',
          '/product/reservelog/product_06.webp',
          '/product/reservelog/product_07.webp',
          '/product/reservelog/product_08.webp',
          '/product/reservelog/product_09.webp',
        ],
      },
      //상품 관리
      {
        id: 'product_mng',
        title: {
          ko: '상품 관리 시스템',
          en: 'Product Management System',
        },
        description: {
          ko: [
            '등록된 모든 상품의 상태를 실시간으로 모니터링하고 제어합니다.\n',
            '강력한 필터와 검색 기능을 통해 원하는 상품을 즉시 찾아내고, 품절이나 노출 여부 등 상태를 빠르게 변경할 수 있습니다.\n',
            '상품별 예약 데이터를 심층 분석하여 재고 및 마케팅 전략에 활용하세요.\n',
          ],
          en: [
            'Monitor and control the status of all listed products in real-time.\n',
            'Find specific items instantly using advanced filters and search, and toggle availability or stock status with ease.\n',
            'Analyze product-specific reservation data to optimize inventory and marketing strategies.\n',
          ],
        },
        features: {
          ko: ['상품 검색 및 필터링', '일괄 상태 변경', '상세 예약 통계'],
          en: [
            'Search & Filtering',
            'Bulk Status Updates',
            'Detailed Booking Stats',
          ],
        },
        images: [
          '/product/reservelog/product_m_01.webp',
          '/product/reservelog/product_m_02.webp',
          '/product/reservelog/product_m_03.webp',
        ],
      },
      //소비자 예약
      {
        id: 'customer_reservation_info',
        title: {
          ko: '소비자 예약 채널',
          en: 'Customer Booking Channel',
        },
        description: {
          ko: [
            '판매자가 직접 예약을 입력하거나, 전용 예약 페이지를 통해 소비자의 직접 예약을 받을 수 있습니다.\n',
            'SNS나 문자 등으로 받은 오프라인 예약을 통합 관리할 수 있는 판매자 직접 등록 기능을 제공합니다.\n',
            '가격 정보의 무분별한 노출이 걱정될 경우, 비밀번호 기능을 통해 특정 고객에게만 페이지를 공개할 수 있습니다.\n',
          ],
          en: [
            'Accept direct bookings through a dedicated customer page or enter manual reservations yourself.\n',
            'Consolidate offline bookings from social media or SMS with the manual entry tool for unified management.\n',
            'Protect sensitive pricing with password-restricted access, ensuring only verified customers can view specific pages.\n',
          ],
        },
        features: {
          ko: [
            '소비자 전용 예약 사이트',
            '판매자 수동 예약 등록',
            '비밀번호 접근 제한',
          ],
          en: [
            'Direct Booking Page',
            'Manual Entry Tool',
            'Password Protection',
          ],
        },
        images: [
          '/product/reservelog/customer_01.webp',
          '/product/reservelog/customer_02.webp',
          '/product/reservelog/customer_03.webp',
          '/product/reservelog/customer_04.webp',
          '/product/reservelog/customer_05.webp',
          '/product/reservelog/customer_06.webp',
          '/product/reservelog/customer_07.webp',
          '/product/reservelog/customer_08.webp',
          '/product/reservelog/customer_09.webp',
        ],
      },
      //예약관리
      {
        id: 'reservation_info',
        title: {
          ko: '예약 관리 및 트래킹',
          en: 'Reservation Tracking & Management',
        },
        description: {
          ko: [
            '업장의 모든 예약 흐름을 한눈에 파악하고 실시간으로 응대합니다.\n',
            '예약 승인부터 대기, 취소까지 각 단계를 직관적으로 변경할 수 있으며, 변경 이력이 투명하게 기록됩니다.\n',
            '예약 취소 시 구체적인 사유를 기록하여 향후 서비스 개선 데이터로 활용할 수 있습니다.\n',
          ],
          en: [
            'Track every booking through your shop and respond in real-time.\n',
            'Manage every stage—from pending to confirmed or canceled—with a clear history of all status changes.\n',
            'Log specific cancellation reasons to analyze patterns and improve your service quality over time.\n',
          ],
        },
        features: {
          ko: ['실시간 상태 업데이트', '예약 변경 히스토리', '취소 사유 관리'],
          en: [
            'Real-time Status Sync',
            'Change Logs',
            'Cancellation Analytics',
          ],
        },
        images: [
          '/product/reservelog/reserve_01.webp',
          '/product/reservelog/reserve_02.webp',
          '/product/reservelog/reserve_03.webp',
          '/product/reservelog/reserve_04.webp',
        ],
      },
      //고객 관리
      {
        id: 'customer_info',
        title: {
          ko: '고객 관리(CRM)',
          en: 'Customer Management (CRM)',
        },
        description: {
          ko: [
            '단순 예약 관리를 넘어 고객과의 관계를 구축합니다.\n',
            '개별 고객의 총 예약 횟수, 노쇼/취소 이력 등을 파악하여 우수 고객을 선별하고 관리할 수 있습니다.\n',
            '기존 고객 DB가 있는 경우 엑셀 마이그레이션을 통해 즉시 고객 명단을 구축할 수 있습니다.\n',
          ],
          en: [
            'Build stronger relationships with your clientele beyond simple bookings.\n',
            'Identify VIP customers by tracking total reservations, confirmed orders, and cancellation history.\n',
            'Instantly build your client list by importing existing databases through the CRM migration tool.\n',
          ],
        },
        features: {
          ko: [
            '고객별 예약 지표 분석',
            '대량 고객 마이그레이션',
            '개별 회원 관리',
          ],
          en: [
            'Customer Metrics Analysis',
            'Bulk CRM Migration',
            'Individual Profile Controls',
          ],
        },
        images: [
          '/product/reservelog/client_01.webp',
          '/product/reservelog/client_02.webp',
          '/product/reservelog/client_03.webp',
          '/product/reservelog/client_04.webp',
          '/product/reservelog/client_05.webp',
        ],
      },
      //고객 문의
      {
        id: 'customer_qna_info',
        title: {
          ko: '고객 문의 및 소통',
          en: 'Inquiry & Communication',
        },
        description: {
          ko: [
            '예약 페이지 내에 전용 문의 게시판을 제공하여 고객의 궁금증을 빠르게 해결합니다.\n',
            '문의 시 자동 생성되는 임시 비밀번호를 통해 보안성이 확보된 전용 게시판에서 안전하게 소통할 수 있습니다.\n',
            '판매자는 대시보드에서 모든 문의를 확인하고 즉각적인 답변을 등록할 수 있습니다.\n',
          ],
          en: [
            'Resolve customer questions quickly with a dedicated inquiry board on the booking page.\n',
            'Ensure privacy with auto-generated temporary passwords, allowing secure communication on a per-customer basis.\n',
            'Sellers can view all pending inquiries on the dashboard and provide immediate feedback.\n',
          ],
        },
        features: {
          ko: [
            '프라이빗 문의 게시판',
            '자동 임시 비밀번호 발급',
            '통합 답변 관리',
          ],
          en: [
            'Private Q&A Board',
            'Secure Access Control',
            'Centralized Feedback System',
          ],
        },
        images: [
          '/product/reservelog/client_qna_01.webp',
          '/product/reservelog/client_qna_02.webp',
          '/product/reservelog/client_qna_03.webp',
          '/product/reservelog/client_qna_04.webp',
          '/product/reservelog/client_qna_05.webp',
          '/product/reservelog/client_qna_06.webp',
          '/product/reservelog/client_qna_07.webp',
        ],
      },
    ],
  },

  //흑우집합소
  {
    id: 'bcow',
    title: {
      ko: '흑우집합소',
      en: 'Bcow World',
    },
    category: 'Mobile Application, Web Service',
    description: {
      ko: [
        '흑우집합소는 사용자 중심의 스마트한 로또 번호 생성 및 관리 서비스를 제공합니다.\n',
        '웹과 모바일 앱에서 동일한 강력한 기능을 제공하며, 각 플랫폼에 최적화된 직관적인 UI로 개발되었습니다.\n',
        '본 서비스의 모든 기능은 100% 무료이며, 상용화 목적이 없는 순수 취미 및 편의 서비스입니다.\n',
        '단순한 랜덤 생성을 넘어 자신만의 분석 기법을 적용하여 번호를 조합하는 재미를 느껴보세요.\n',
        '복잡한 분석이 귀찮은 분들을 위한 추천 번호부터, 세밀한 조건 설정이 가능한 커스텀 생성까지 모든 사용자층을 고려했습니다.',
      ],
      en: [
        'Bcow World offers a smart, user-centric lottery number generation and management service.\n',
        'Delivering powerful features across both web and mobile, it is optimized with an intuitive UI for a seamless experience on any device.\n',
        'All features are 100% free with no commercial strings attached—a pure utility for the community.\n',
        'Move beyond simple randomness. Experience the fun of crafting your own winning strategies with custom combination techniques.\n',
        'From AI-curated daily picks for the casual user to deep-filter customization for the strategic player, we cover all your lotto needs.',
      ],
    },
    keyPoints: {
      ko: [
        '🍀 동행복권 로또 실시간 정보 제공',
        '🎲 추천·랜덤·커스텀 등 5가지 번호 생성 모드',
        '📊 회차별 당첨 통계 및 판매점 상세 정보',
      ],
      en: [
        '🍀 Real-time Lotto Results & Data',
        '🎲 5 Versatile Generation Modes (AI, Custom, Random, etc.)',
        '📊 Detailed Draw Stats & Store Locators',
      ],
    },
    links: {
      website: 'https://bcow.world',
      appStore: 'https://itunes.apple.com/kr/app/apple-store/6470312130',
      googlePlay:
        'https://play.google.com/store/apps/details?id=dev.mhlab.bcow_world',
      type: 'full',
    },
    supportedLocales: ['ko'],
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
    functions: [
      {
        id: 'make_number',
        title: {
          ko: '스마트 로또 생성기',
          en: 'Smart Number Generator',
        },
        description: {
          ko: [
            '<b>데일리 추천:</b> 매 시간마다 알고리즘 기반의 추천 번호 5조합을 제공합니다.\n',
            '<b>추천 번호:</b> 과거 당첨 데이터를 분석하여 확률적으로 낮은 조합을 필터링한 최적화 번호를 생성합니다.\n',
            '<b>풀 커스텀:</b> 총합 구간, 제외수/포함수, 최근 출현 데이터 등 세밀한 필터를 직접 설정할 수 있습니다.\n',
            '<b>수동 & 랜덤:</b> 직접 번호를 선택하거나 아무런 규칙 없는 순수 랜덤 번호를 즉시 추출합니다.',
          ],
          en: [
            '<b>Daily Picks:</b> Provides 5 algorithm-based recommended combinations every hour.\n',
            '<b>AI Recommendation:</b> Generates optimized numbers by analyzing historical data and filtering out statistically improbable combinations.\n',
            '<b>Full Customization:</b> Set specific parameters including sum ranges, fixed/excluded numbers, and appearance intervals.\n',
            '<b>Manual & Pure Random:</b> Pick your own lucky numbers or instantly generate results with zero-rule randomness.',
          ],
        },
        features: {
          ko: [
            '데일리 알고리즘 추천',
            '데이터 기반 필터링 생성',
            '사용자 커스텀 필터링',
            'QR 코드 인식 생성',
          ],
          en: [
            'Daily Algorithmic Picks',
            'Data-Driven Probability Filtering',
            'User-Defined Custom Filters',
            'Pure Random Generation',
          ],
        },
        images: [
          '/product/bcow/img_03.webp',
          '/product/bcow/img_04.webp',
          '/product/bcow/img_09.webp',
          '/product/bcow/img_10.webp',
        ],
      },
      {
        id: 'drwno_info',
        title: {
          ko: '회차 및 당첨 정보',
          en: 'Draw Results & Analytics',
        },
        description: {
          ko: [
            '최신 회차부터 과거 데이터까지 당첨 현황을 간편하게 조회할 수 있습니다.\n',
            '단순 당첨 번호뿐만 아니라 1등 배출 판매점 정보와 지역별 현황을 상세히 제공합니다.\n',
            '카메라를 이용한 <b>QR 코드 스캔</b>으로 실물 복권의 당첨 여부를 1초 만에 확인하세요.',
          ],
          en: [
            'Easily browse winning results from the latest draws to historical archives.\n',
            'Get more than just numbers—access detailed info on winning store locations and regional distribution.\n',
            'Check your physical tickets in an instant with the integrated <b>QR Code Scanner</b>.',
          ],
        },
        features: {
          ko: ['회차별 상세 통계', '1등 배출 판매점 지도', '빠른 QR 당첨 확인'],
          en: [
            'Detailed Draw Statistics',
            'Winning Store Locator',
            'Rapid QR Winning Check',
          ],
        },
        images: [
          '/product/bcow/img_05.webp',
          '/product/bcow/img_06.webp',
          '/product/bcow/img_11.webp',
          '/product/bcow/img_12.webp',
        ],
      },
      {
        id: 'person_info',
        title: {
          ko: '마이 로또 히스토리',
          en: 'Personal Lotto Wallet',
        },
        description: {
          ko: [
            '자신이 생성하고 저장한 번호들의 당첨 내역을 한눈에 관리할 수 있습니다.\n',
            '총 구매 금액 대비 총 당첨 금액을 계산하여 자신의 <b>수익률과 투자 리포트</b>를 확인하세요.\n',
            '저장된 번호의 요약 정보와 패턴을 분석하여 나만의 로또 전략을 세울 수 있습니다.',
          ],
          en: [
            'Manage all your generated and saved numbers in one personal archive.\n',
            'Track your <b>investment report</b>, comparing total spending vs. total winnings to monitor your return rate.\n',
            'Analyze the patterns of your saved numbers to refine your personal winning strategy.',
          ],
        },
        features: {
          ko: [
            '개인 당첨 히스토리',
            '구매/당첨 자산 리포트',
            '저장 번호 패턴 분석',
          ],
          en: [
            'Personal Winning History',
            'Investment & Reward Reports',
            'Saved Number Pattern Analysis',
          ],
        },
        images: ['/product/bcow/img_07.webp', '/product/bcow/img_13.webp'],
      },
    ],
  },

  ///마와셀 웹
  {
    id: 'myc_web',
    title: { ko: '마와셀 (My Wine Cellar)', en: 'MaWaCel (My Wine Cellar)' },
    category: 'Web Service',
    published: false,
    description: [
      '와인에 대한 상세한 정보를 제공하며, 와인 비비노 및 유명한 단체의 평가 점수 페어링 푸드와 시음 적기 정보를 제공합니다.\n',
      '와이너리에 대한 상세한 설명, 해당 와이너리에서 생산된 와인 정보를 제공합니다.\n',
      '와인을 만드는 포도 품종에 대해 자세한 정보를 제공합니다.',
    ],
    keyPoints: ['🍷 상세한 와인 정보', '🏞️ 와이너리 정보', '🍇 포도 품종 정보'],
    links: {
      website: 'https://mywinecellar.info/ko',
      appStore: '',
      googlePlay: '',
      type: 'web',
    },
    supportedLocales: ['ko', 'en'],
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
    functions: [
      {
        id: 'wine_info',
        title: '와인 정보',
        description: [
          '다양한 와인 정보를 검색할 수 있습니다.\n',
          '와인의 유명한 평론가 및 비비노 점수, 와인에 대한 자세한 설명, 와인 스타일, 페어링에 추천되는 음식 정보 등을 확인할 수 있습니다.\n',
          '조회한 와인의 빈티지 별시음 적기 정보를 확인할 수 있습니다.',
        ],
        features: [
          '다양한 와인 검색',
          '조회한 와인의 상세한 정보 제공',
          '와인의 평론가 및 비비노 점수 확인',
          '빈티지별 시음 적기 정보 제공',
        ],
        images: [
          '/product/myc/web/myc_02.webp',
          '/product/myc/web/myc_03.webp',
          '/product/myc/web/myc_04.webp',
          '/product/myc/web/myc_05.webp',
        ],
      },
      {
        id: 'winery_info',
        title: '와이너리 정보',
        description: [
          '국가별 와인 생산자의 자세한 정보를 제공합니다.\n',
          '와이너리에 대한 상세한 정보를 제공합니다.\n',
          '조회한 와이너리가 생산한 와인 정보를 제공합니다.',
        ],
        features: ['와이너리 정보 제공', '와이너리에서 생산한 와인 정보 제공'],
        images: [
          '/product/myc/web/myc_06.webp',
          '/product/myc/web/myc_07.webp',
        ],
      },
      {
        id: 'grape_info',
        title: '포도 품종 정보',
        description: [
          '레드/화이트 용 포도 품종별로 검색하고 품종별 특징을 확인할 수 있습니다.\n',
          '품종에 대한 상세 정보, 맛과 특징, 주요 스타일과 양조 방식, 추천 음식 정보를 제공합니다.',
        ],
        features: [
          '양조용 포도 품종 정보 제공',
          '품종이 내는 노즈, 맛, 향 정보 제공',
          '괜찮은 페어링 음식 추천',
        ],
        images: [
          '/product/myc/web/myc_08.webp',
          '/product/myc/web/myc_09.webp',
          '/product/myc/web/myc_10.webp',
          '/product/myc/web/myc_11.webp',
        ],
      },
    ],
  },

  ///마와셀 앱 (test_res/USER.GUIDE.md 기준)
  {
    id: 'myc_app',
    title: { ko: '마와셀 (My Wine Cellar)', en: 'MaWaCel (My Wine Cellar)' },
    category: 'Mobile Application',
    description: {
      ko: [
        '<b>"내 셀러 어디에 어떤 와인이 있더라?", "그때 그 와인 향이 어땠지?"</b> 더 이상 고민하지 마세요. 복잡한 와인 관리를 스마트폰 하나로 완벽하게 정리할 때입니다.\n',
        '<b>마와셀(MaWaCell)</b>은 단순히 와인을 기록하는 도구를 넘어, <b>구매부터 보관, 정교한 시음 분석</b>까지 와인 애호가의 모든 여정을 함께하는 <b>프리미엄 디지털 파트너</b>입니다.\n',
        '방치되어 있던 컬렉션을 <b>체계적인 데이터베이스</b>로 변환하고, 전문가 수준의 <b>딥(Deep) 시음 노트</b>와 실제 셀러의 동선을 고려한 <b>멀티 관리 솔루션</b>으로 당신의 와인 라이프에 깊이를 더해드립니다.',
      ],
      en: [
        '<b>"Where did I put that bottle? When did I drink it? What were the notes?"</b> Stop wondering. It is time to organize your wine life perfectly with a single app.\n',
        '<b>MaWaCell</b> is more than just a tracking tool; it is a <b>premium digital partner</b> that accompanies wine enthusiasts through every stage of their journey—from <b>purchase and storage to sophisticated tasting analysis</b>.\n',
        'Transform your scattered collection into a <b>structured database</b>, and enrich your wine lifestyle with <b>expert-level deep tasting notes</b> and a <b>multi-cellar solution</b> tailored to your real-world workflow.',
      ],
    },
    keyPoints: {
      ko: [
        '📷 라벨 촬영 OCR — 와인명·빈티지·도수·국가 자동 인식, 빈티지 복제로 빠른 추가',
        '🏠 디지털 셀러 맵 — 층·슬롯 시각화, 선반 설정, 일괄 이동, 용량 진행 바',
        '🧪 시음 기록 — 간단/디테일 모드, 구조감·아로마, 아로마 가이드, 노트 캡처 공유',
        '📊 통계 대시보드 — 자산 가치(KRW·USD 등), 타입·국가 차트, 시음 활동 히트맵',
        '🔍 검색·필터·태그 — 다중 조건 조합, 태그·자동완성',
        '🛡️ ZIP 백업·복원, CSV 가져오기, 다크 모드·한/영·감각적인 UI',
      ],
      en: [
        '📷 Smart Digitization — AI Label OCR, optimized image views, and detailed DB tracking including price and vendor.',
        '🧪 Professional Deep Tasting — 150+ Aroma Guide, 5-point palate scaling, mouthfeel/texture checklists, and fault tracking.',
        '🏠 Multi-Cellar Management — Custom registration for multiple units, manufacturer/capacity tracking, and real-time inventory.',
        '🔍 Lightning-Fast Search — Locate any bottle in 1 second by name, region, variety, or even a single word in your past notes.',
        '📊 Data Insights — Smart dashboards (upcoming) to analyze preferred regions, price ranges, and tasting frequency at a glance.',
        '🛡️ Privacy & Security — A secure space focused on your personal palate, featuring ZIP backups and CSV imports.',
      ],
    },
    links: {
      website: '',
      appStore: 'https://itunes.apple.com/kr/app/apple-store/6474965246',
      googlePlay: 'https://play.google.com/store/apps/details?id=dev.mhlab.myc',
      type: 'mobile',
      patchNotes: true,
    },
    supportedLocales: ['ko', 'en'],
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
    functions: [
      {
        id: 'smart_digitization',
        title: {
          ko: '스마트 와인 컬렉션 디지털화',
          en: 'Smart Wine Collection Digitization',
        },
        description: {
          ko: [
            '방치되어 있던 당신의 컬렉션을 <b>체계적인 데이터베이스</b>로 변환하세요.\n',
            '와인 라벨이 구겨지거나 잘리지 않도록 <b>이미지 최적화 시스템</b>을 제공하여 당신의 컬렉션을 갤러리처럼 감상할 수 있습니다.\n',
            '구매 가격, 구매처, 빈티지 등 <b>상세 정보를 기록</b>하고 홈 화면에서 <b>실시간 재고</b>를 즉시 확인하세요.',
          ],
          en: [
            'Turn your neglected collection into a <b>structured database</b>.\n',
            'Enjoy a <b>gallery-like experience</b> with our image optimization system that ensures labels are displayed perfectly without being cropped or distorted.\n',
            'Record <b>granular details</b> such as purchase price, vendor, and vintage, and track your <b>real-time inventory</b> directly from the home screen.',
          ],
        },
        features: {
          ko: [
            '라벨 OCR 자동 인식 및 빈티지 복제',
            '최적화된 라벨 이미지 갤러리 뷰',
            '구매처·가격 포함 상세 DB 관리',
            '보관 위치별 실시간 재고 트래킹',
          ],
          en: [
            'AI Label OCR & Vintage Cloning',
            'Optimized Gallery View for Labels',
            'Detailed DB (Price, Vendor, Region)',
            'Location-based Real-time Inventory',
          ],
        },
        images: {
          ko: [
            '/product/myc/app/kr_feature01_01.webp',
            '/product/myc/app/kr_feature01_02.webp',
          ],
          en: [
            '/product/myc/app/en_feature01_01.webp',
            '/product/myc/app/enr_feature01_02.webp',
          ],
        },
      },
      {
        id: 'deep_tasting',
        title: {
          ko: '전문가 수준의 딥(Deep) 시음 노트',
          en: 'Expert-Level "Deep" Tasting Notes',
        },
        description: {
          ko: [
            '단순한 메모를 넘어 와인의 본질을 파고듭니다. <b>150여 가지 아로마 가이드</b>를 통해 1차부터 3차 향까지 생생하게 기록하세요.\n',
            '산도, 타닌, 바디감 등을 <b>5단계 슬라이더</b>로 정밀하게 측정하고, 오일리함이나 분말감 같은 <b>복합적인 질감</b>까지 체크리스트로 남길 수 있습니다.\n',
            '<b>와인 결함(Faults) 체크</b> 기능을 통해 코르크 오염(TCA)이나 산화 상태를 기록하여 미래의 구매 결정을 돕습니다.',
          ],
          en: [
            'Go beyond simple memos to capture the true essence of wine. Use our <b>150+ Aroma Guide</b> to record everything from primary fruits to tertiary aging notes.\n',
            'Precisely measure acidity, tannins, and body using <b>5-point sliders</b>, and document complex <b>mouthfeel/textures</b> like "oily" or "powdery" with our checklist.\n',
            'Include <b>Fault Monitoring</b> for issues like TCA (cork taint) or oxidation to help inform your future purchasing decisions.',
          ],
        },
        features: {
          ko: [
            '150+ 세분화된 아로마 아이콘 가이드',
            '5단계 정밀 팔랫(Palate) 분석 슬라이더',
            '입안의 촉감(Texture) 디테일 체크리스트',
            '와인 결함(Faults) 및 상태 기록 시스템',
          ],
          en: [
            '150+ Categorized Aroma Icons',
            '5-Point Precise Palate Sliders',
            'Detailed Texture & Mouthfeel Checklist',
            'Wine Faults & Condition Tracking',
          ],
        },
        images: {
          ko: [
            '/product/myc/app/kr_feature02_01.webp',
            '/product/myc/app/kr_feature02_02.webp',
            '/product/myc/app/kr_feature02_03.webp',
            '/product/myc/app/kr_feature02_04.webp',
          ],
          en: [
            '/product/myc/app/en_feature02_01.webp',
            '/product/myc/app/en_feature02_02.webp',
            '/product/myc/app/en_feature02_03.webp',
            '/product/myc/app/en_feature02_04.webp',
          ],
        },
      },
      {
        id: 'multi_cellar_solution',
        title: {
          ko: '멀티 셀러 및 위치 관리 솔루션',
          en: 'Multi-Cellar & Location Solutions',
        },
        description: {
          ko: [
            '여러 대의 와인 냉장고를 사용하시나요? 마와셀은 <b>사용자의 동선을 획기적으로 줄여주는</b> 장소별 커스텀 등록 기능을 제공합니다.\n',
            '각 셀러의 제조사와 용량을 별도로 관리하고, <b>직관적인 동선 설계</b>를 통해 셀러 정보에서 보관 리스트로 바로 연결됩니다.\n',
            '와인을 마신 후 시음 노트를 작성하면 <b>보관 중인 와인이 자동으로 기록으로 전환</b>되어 관리가 매우 편리합니다.',
          ],
          en: [
            'Managing multiple wine fridges? MaWaCell <b>drastically reduces your workflow</b> with custom registration for various storage locations.\n',
            'Manage manufacturer and capacity details for each unit, and use our <b>intuitive workflow design</b> to jump straight from cellar info to your bottle list.\n',
            'When you finish a bottle and write a note, the status <b>automatically converts from "In Stock" to "History,"</b> making inventory management effortless.',
          ],
        },
        features: {
          ko: [
            '셀러별 제조사/용량 커스텀 등록',
            '보관 장소별 직관적인 필터링',
            '시음 노트 작성 시 재고 자동 차감',
            '실제 위치 기반 디지털 맵 시각화',
          ],
          en: [
            'Custom Unit & Capacity Management',
            'Location-based Visual Filtering',
            'Automatic Inventory Deduction',
            'Visual Slot Mapping & Movement',
          ],
        },
        images: {
          ko: [
            '/product/myc/app/kr_feature03_01.webp',
            '/product/myc/app/kr_feature03_02.webp',
            '/product/myc/app/kr_feature03_03.webp',
          ],
          en: [
            '/product/myc/app/en_feature03_01.webp',
            '/product/myc/app/en_feature03_02.webp',
            '/product/myc/app/en_feature03_03.webp',
          ],
        },
      },
      {
        id: 'search_and_insight',
        title: {
          ko: '강력한 통합 검색 및 통계',
          en: 'Powerful Integrated Search & Stats',
        },
        description: {
          ko: [
            '수백 병의 와인 속에서도 <b>키워드 하나로 1초 만에</b> 원하는 정보를 찾아냅니다. 이름뿐만 아니라 시음 노트에 적은 메모로도 검색이 가능합니다.\n',
            '내가 선호하는 국가, 가격대, 시음 빈도를 분석해주는 <b>스마트 대시보드</b>를 통해 나만의 와인 취향을 발견하세요.\n',
            '전체 보유 자산의 가치를 화폐 단위별로 합산하여 관리할 수 있습니다.',
          ],
          en: [
            'Find what you need in <b>under a second</b> among hundreds of bottles. Search by name, region, or even a specific keyword hidden in your tasting notes.\n',
            'Discover your unique palate through a <b>Smart Dashboard</b> that analyzes your favorite countries, price points, and tasting habits.\n',
            'Track the <b>total value of your assets</b> with support for multiple currencies like KRW and USD.',
          ],
        },
        features: {
          ko: [
            '전체 키워드 기반 초고속 통합 검색',
            '와인 자산 가치(KRW/USD) 합산 통계',
            '국가·타입별 선호도 분석 차트',
            '캘린더 기반 시음 활동 히트맵',
          ],
          en: [
            'Keyword-based Global Search',
            'Asset Valuation (KRW/USD/etc.)',
            'Regional & Type Preference Charts',
            'Calendar-based Activity Heatmap',
          ],
        },
        images: {
          ko: [
            '/product/myc/app/kr_feature04_01.webp',
            '/product/myc/app/kr_feature04_02.webp',
            '/product/myc/app/kr_feature04_03.webp',
          ],
          en: [
            '/product/myc/app/en_feature04_01.webp',
            '/product/myc/app/en_feature04_02.webp',
            '/product/myc/app/en_feature04_03.webp',
          ],
        },
      },
      {
        id: 'privacy_and_data',
        title: {
          ko: '글로벌 스탠다드 및 프라이빗 데이터',
          en: 'Global Standards & Private Data',
        },

        description: {
          ko: [
            '보여주기식 SNS에서 벗어나 오직 <b>당신의 취향에 집중할 수 있는 프라이빗한 공간</b>을 제공합니다. 데이터 보안과 개인정보 보호에 충실합니다.\n',
            '한국어와 영어를 완벽 지원하여 글로벌 와인 정보를 기록하기에 최적화되어 있으며, 기기 변경 시에도 <b>ZIP 백업</b>으로 데이터를 안전하게 보호합니다.\n',
            'CSV 가져오기 기능을 통해 기존에 엑셀로 관리하던 목록을 한 번에 불러올 수 있습니다.',
          ],
          en: [
            'Move away from performative social media and enjoy a <b>private space focused solely on your taste</b>. We prioritize data security and privacy.\n',
            'With <b>full bilingual support (KR/EN)</b>, it’s optimized for global wine data. Protect your precious records with <b>ZIP backups</b> when switching devices.\n',
            'Our <b>CSV Import</b> feature allows you to seamlessly migrate your existing Excel lists into MaWaCell.',
          ],
        },
        features: {
          ko: [
            '완벽한 한/영 다국어 로컬라이징',
            '프라이빗 보안 및 개인정보 보호 강화',
            'ZIP 백업·복원 및 CSV 일괄 가져오기',
            '자동 마이그레이션 및 다크 모드 지원',
          ],
          en: [
            'Full English/Korean Localization',
            'Enhanced Privacy & Security',
            'ZIP Backup/Restore & CSV Import',
            'Auto-Migration & Dark Mode Support',
          ],
        },
        images: {
          ko: [
            '/product/myc/app/kr_feature05_01.webp',
            '/product/myc/app/kr_feature05_02.webp',
          ],
          en: [
            '/product/myc/app/en_feature05_01.webp',
            '/product/myc/app/en_feature05_02.webp',
          ],
        },
      },
    ],
  },
];
