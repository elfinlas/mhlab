export const productList = [
  {
    id: "reservelog",
    title: "ReserveLog(웹 서비스)",
    category: "Web Service",
    description:
      [
        "ReserveLog는 상품 예약 판매자를 위한 스마트 예약 관리 시스템입니다.",
        "직관적인 UI와 다양한 기능으로 상품 등록 → 예약 접수 → 고객 관리까지 전 과정을 한 곳에서 처리할 수 있습니다.",
        "편의점, 예약제로 물건을 파는 업장주들을 위한 예약 관리 서비스입니다.",
        ],
    mainFeatures: ["상품 예약 관리", "상품 관리", "구매 이력 관리", "고객 관리"],
    images: [
      "/product/reservelog/img_01.webp",
      "/product/reservelog/img_02.webp",
      "/product/reservelog/img_03.webp",
      "/product/reservelog/img_04.webp",
      "/product/reservelog/img_05.webp",
      "/product/reservelog/img_06.webp",
      "/product/reservelog/img_07.webp",
      "/product/reservelog/img_08.webp",
    ],
    color: "from-blue-500 to-purple-600",
},
  {
    id: "myc_app",
    title: "마와셀(모바일 앱)",
    category: "Mobile Application",
    description:
      ["보유한 와인의 관리, 시음노트 작성, 보유 와인 셀러의 관리를 돕는 어플리케이션입니다.", 
        "보유한 와인에 대한 정보를 관리하고 싶을 때, SNS 보다 나만의 시음노트를 만들고 싶을 때, 메번 보유한 와인 셀러에 어떤 와인이 들어있는지 확인하기 귀찮으실 때, 이런 불편함을 해결해주기 위해 마와셀이 출시되었습니다.",
         "마와셀은 보유한 와인의 관리, 시음노트 작성, 보유 셀러의 정보 관리 기능을 제공합니다."],
    mainFeatures: ["보유 와인 관리", "와인 셀러 관리", "와인 시음 노트 관리"],
    images: [
      "/product/myc/app/myc_001.webp",
      "/product/myc/app/myc_002.webp",
      "/product/myc/app/myc_003.webp",
      "/product/myc/app/myc_004.webp",
    ],
    color: "from-blue-500 to-purple-600",
},
{
  id: "myc_web",
  title: "마와셀(웹 서비스)",
  category: "Web Service",
  description:
    ["와인에 대한 상세한 정보를 제공하며, 와인 비비노 및 유명한 단체의 평가 점수 페어링 푸드와 시음 적기 정보를 제공합니다.", 
      "와이너리에 대한 상세한 설명, 해당 와이너리에서 생산된 와인 정보를 제공합니다.",
       "와인을 만드는 포도 품종에 대해 자세한 정보를 제공합니다."],
  mainFeatures: ["상세한 와인 정보", "와이너리에 자세한 정보", "와인 양조용 포도 품종에 대한 상세한 정보"],
  images: [
    "/product/myc/web/myc_01.webp",
    "/product/myc/web/myc_02.webp",
    "/product/myc/web/myc_03.webp",
    "/product/myc/web/myc_04.webp",
    "/product/myc/web/myc_05.webp",
    "/product/myc/web/myc_06.webp",
    "/product/myc/web/myc_07.webp",
    "/product/myc/web/myc_08.webp",
    "/product/myc/web/myc_09.webp",
    "/product/myc/web/myc_10.webp",
    "/product/myc/web/myc_11.webp",
  ],
  color: "from-red -500 to-green-600",
},

{
  id: "bcow",
  title: "흑우집합소(앱, 웹 서비스)",
  category: "Mobile Application, Web Service",
  description:
    [
       "ReserveLog는 상품 예약 판매자를 위한 스마트 예약 관리 시스템입니다.",
        "직관적인 UI와 다양한 기능으로 상품 등록 → 예약 접수 → 고객 관리까지 전 과정을 한 곳에서 처리할 수 있습니다.",
        "편의점, 예약제로 물건을 파는 업장주들을 위한 예약 관리 서비스입니다.",
      ],
  mainFeatures: ["동행복권 로또 정보 제공", "추천번호, 랜덤생성, 커스텀 방식 등 다양한 번호 생성", "로또 회차 상세 정보 제공"],
  images: [
    "/product/bcow/img_01.webp",
    "/product/bcow/img_02.webp",
    "/product/bcow/img_03.webp",
    "/product/bcow/img_04.webp",
    "/product/bcow/img_05.webp",
    "/product/bcow/img_06.webp",
    "/product/bcow/img_07.webp",
    "/product/bcow/img_08.webp",
    "/product/bcow/img_09.webp",
    "/product/bcow/img_10.webp",
    "/product/bcow/img_11.webp",
    "/product/bcow/img_12.webp",
    "/product/bcow/img_13.webp",
    "/product/bcow/img_14.webp",
  ],
  color: "from-red -500 to-green-600",
}

];

export interface ProductItemType {
    id: string;
    title: string;
    category: string;
    description: string[];
    keyPoints: string[];
    links: {
        website: string;
        appStore: string;
        googlePlay: string;
        type: "mobile" | "web" | "full";
    };
    images: string[];
    functions: {
        id: string;
        title: string;
        description: string[];
        features: string[];
        images: string[];
    }[];
}


export const productItemList =[
///ReserveLog

{
  id: "reservelog",
  title: "ReserveLog(웹 서비스)",
  category: "Web Service",
  description : [
    "ReserveLog는 상품 예약 판매자를 위한 스마트 예약 관리 시스템입니다.\n",
        "직관적인 UI와 다양한 기능으로 상품 등록 → 예약 접수 → 고객 관리까지 전 과정을 한 곳에서 처리할 수 있습니다.\n",
        "편의점, 예약제로 물건을 파는 업장주들을 위한 예약 관리 서비스입니다.",
    ],
  keyPoints: [
    "📜 상품 예약 관리", "🛒 상품 관리", "💰 구매 이력 관리", "💬 고객 관리",  
    ],
    links: {
      website: "https://www.reservelog.me/",
      appStore: "",
      googlePlay: "",
      type: "web",
    },
    images: [
      "/product/reservelog/img_01.webp",
      "/product/reservelog/img_02.webp",
      "/product/reservelog/img_03.webp",
      "/product/reservelog/img_04.webp",
      "/product/reservelog/img_05.webp",
      "/product/reservelog/img_06.webp",
      "/product/reservelog/img_07.webp",
      "/product/reservelog/img_08.webp",
    ],
    functions: [
      //판매자 대시보드
      {
        id: "sellr_dashboard",
        title: "판매자 대시보드",
        description: [
          "판매자 대시보드는 판매자를 위한 모든 정보를 한 눈에 확인할 수 있도록 도와줍니다.\n",
          "예약 관리, 상품 관리, 고객 관리, 사이트 설정을 할 수 있도록 도와줍니다.\n",
        ],
        features: [
          "대시보드",
        ],
        images: [
          "/product/reservelog/img_05.webp",
        ],
      },
      //상품 정보
      {
        id: "product_info",
        title: "상품 정보",
        description: [
          "판매자가 예약을 받을 상품을 관리할 수 있습니다.\n",
          "상품을 직접 등록하고, 가격, 업장 매대 특가, 고객에게 제공할 상품 정보, 예약 방법등을 설정합니다.\n",
          "전에 등록했던 상품이라면 재사용하여, 일부 정보 수정 후 다시 사용할 수 있습니다\n",
          "특정 기간 예약도 설정하여 특정 기간만 예약을 처리할 수 있습니다.\n",
          "기존에 정보가 있다면, <b>마이그레이션</b> 기능도 지원합니다.\n",
          "대시보드의 설정에서 상품 마이그레이션을 통해서 데이터를 가져올 수 있습니다.\n",
        ],
        features: ["예약 상품 등록", "마이그레이션"],
        images: [
          "/product/reservelog/product_01.webp",
          "/product/reservelog/product_02.webp",
          "/product/reservelog/product_03.webp",
          "/product/reservelog/product_04.webp",
          "/product/reservelog/product_05.webp",
          "/product/reservelog/product_06.webp",
          "/product/reservelog/product_07.webp",
          "/product/reservelog/product_08.webp",
          "/product/reservelog/product_09.webp",
        ],
      },
      //상품 관리
      {
        id: "product_mng",
        title: "상품 관리",
        description: [
          "등록된 상품들은 상품 관리에서 바로 확인이 가능합니다.\n",
          "위에서 필터를 사용 또는 검색으로 확인이 가능하며, 상태 변경도 쉽게 가능합니다..\n",
          "상품을 클릭할 경우 해당 상품의 정보로 이동하며, 수정 및 삭제, 그리고 상품 상세 정보, 예약 정보를 확인할 수 있습니다.\n",
        ],
        features: ["상품 조회", "상품 상세 정보", "상품 수정", "상품 삭제", "상품 상태 변경"],
        images: [
          "/product/reservelog/product_m_01.webp",
          "/product/reservelog/product_m_02.webp",
          "/product/reservelog/product_m_03.webp",
        ],
      },
      //소비자 예약
      {
        id: "customer_reservation_info",
        title: "소비자 예약 페이지",
        description: [
          "판매자가 예약을 직접 등록하는 방법과, 소비자 예약 사이트에서 예약을 직접 받는 방법이 있습니다.\n",
          "<b>판매자 예약 등록</b>은 소비자가 문자나 카카오톡 등 다른 경로로 온 경우 예약 데이터 통합 관리를 위해 판매자가 직접 등록하는 방법입니다.\n",
          "<b>소비자 예약 페이지</b>는 예액 페이지를 제공함으로써 소비자가 직접 상품을 선택하고 등록하는 방법입니다.\n",
          "만약 <b>가격 노출이 꺼려지는 경우</b> 해당 페이지에 암호를 등록하여, <b>암호를 가진</b> 소비자만 해당 페이지를 볼 수 있도록 할 수 있습니다.\n"
        ],
        features: ["판매자 직접 예약", "소비자 예약 페이지", "빠른 회원 등록", "암호 기능"],
        images: [
          "/product/reservelog/customer_01.webp",
          "/product/reservelog/customer_02.webp",
          "/product/reservelog/customer_03.webp",
          "/product/reservelog/customer_04.webp",
          "/product/reservelog/customer_05.webp",
          "/product/reservelog/customer_06.webp",
          "/product/reservelog/customer_07.webp",
          "/product/reservelog/customer_08.webp",
          "/product/reservelog/customer_09.webp",
        ],
      },
     //예약관리
      {
        id: "reservation_info",
        title: "예약 관리",
        description: [
          "지금까지 업장의 모든 예약 현황을 관리할 수 았습니다.\n",
          "대시보드에서 예약 관리로 들어오면 아래와 같이 예약 현황을 확인할 수 있습니다.\n",
          "각 예약의 상태를 변경하면 바로 적용되며, 상단의 필터를 통해 데이터를 조절할 수 있습니다.\n",
          "만약 고객이 취소를 할 경우 사유를 적을 수 있고, 예약 리스트에서 표기됩니다.\n",
          
        ],
        features: ["예약 관리", "예약 상태 변경", "예약 취소", "예약 상태 변경 이력"],
        images: [
          "/product/reservelog/reserve_01.webp",
          "/product/reservelog/reserve_02.webp",
          "/product/reservelog/reserve_03.webp",
          "/product/reservelog/reserve_04.webp",
        ],
      },
      //고객 관리
      {
        id: "customer_info",
        title: "고객 관리",
        description: [
          "현재 등록한 고객의 정보를 관리할 수 있습니다.\n",
          "<b>총 예약</b>, 그리고 지금까지 <b>확정된 예약</b>, 그 외 취소 횟수 등을 파악할 수 있습니다.\n",
          "또한 고객을 직접 등록할 수 있고, 기존 고객 명단이 있다면 <b>마이그레이션</b> 기능도 지원합니다.\n",
        ],
        features: ["고객 관리", "고객 예약 현황", "고객 상태 변경", "고객 마이그레이션"],
        images: [
          "/product/reservelog/client_01.webp",
          "/product/reservelog/client_02.webp",
          "/product/reservelog/client_03.webp",
          "/product/reservelog/client_04.webp",
          "/product/reservelog/client_05.webp",
        ],
      },
      //고객 문의
      {
        id: "customer_qna_info",
        title: "고객 문의",
        description: [
          "소비자의 예약 페이지에서 고객 문의를 받을 수 있습니다.\n",
          "고객이 문의 전송을 하면 고객 전용 게시판 주소와 함께 임시 비밀번호가 생성됩니다..\n",
          "판매자는 해당 문의를 확인하고 답변을 제공할 수 있습니다.\n",
        ],
        features: ["고객 문의", "고객 게시판"],
        images: [
          "/product/reservelog/client_qna_01.webp",
          "/product/reservelog/client_qna_02.webp",
          "/product/reservelog/client_qna_03.webp",
          "/product/reservelog/client_qna_04.webp",
          "/product/reservelog/client_qna_05.webp",
          "/product/reservelog/client_qna_06.webp",
          "/product/reservelog/client_qna_07.webp",
        ],
      },
    ],
  },


  ///흑우집합소
  {
    id: "bcow",
    title: "흑우집합소(앱, 웹 서비스)",
    category: "Mobile Application, Web Service",
    description : [
      "흑우집합소는 로또 서비스를 제공합니다.\n",
       "웹 서비스와 동일한 기능을 제공하며, 모바일 앱에 맞게 최적화 하여 개발되었습니다.",
       "본 서비스에서 제공하는 기능은 모두 무료이며, 상용 서비스는 없습니다.\n",
       "로또번호를 단지 재미로, 그리고 자신만의 기법을 이용하여 번호를 조합하고 만들 수 있습니다.",
       "번호를 분석하고 귀찮은 분들을 위해 추천번호를 제공하고, 원하는 조건을 가지는 번호를 생성할 수 있고, 자신이 생성한 번호를 저장할 수 있습니다.",
       "또한 복잡한 UI가 아닌 간편하고, 직관적인 UI로 사용자의 편의성을 도모하였습니다."
      ],
    keyPoints: [
        "🍀 동행복권 로또 정보 제공", "🎲 추천번호, 랜덤생성, 커스텀 방식 등 다양한 번호 생성", "📊 로또 회차 상세 정보 제공"
      ],
      links: {
        website: "https://bcow.world",
        appStore: "https://itunes.apple.com/kr/app/apple-store/6470312130",
        googlePlay: "https://play.google.com/store/apps/details?id=dev.mhlab.bcow_world",
        type: "full",
      },
      images: [
        "/product/bcow/img_01.webp",
    "/product/bcow/img_02.webp",
    "/product/bcow/img_03.webp",
    "/product/bcow/img_04.webp",
    "/product/bcow/img_05.webp",
    "/product/bcow/img_06.webp",
    "/product/bcow/img_07.webp",
    "/product/bcow/img_08.webp",
    "/product/bcow/img_09.webp",
    "/product/bcow/img_10.webp",
    "/product/bcow/img_11.webp",
    "/product/bcow/img_12.webp",
    "/product/bcow/img_13.webp",
    "/product/bcow/img_14.webp",
      ],
      functions: [
        {
          id: "make_number",
          title: "로또 생성",
          description: [
            "데일리 추천 : 매 시간마다 5개의 추천 번호를 제공합니다.\n",
            "추천번호 : ​단순 1~45 사이의 랜덤 값을 생성하는 것이 아닌 전 회차들을 비교 분석 및 확률적으로 낮은 조합을 빼서, 당첨 확률이 미약하게나마 올라간 번호를 생성합니다.\n",
            "전체 커스텀 : 총합구간, 제외총합, 제외 및 포함수, 출현 참조 주차 등을 직접 설정해서 알맞는 번호를 생성합니다.\n",
            "직접생성 : 직접 6개 번호를 선택하여 생성합니다.\n",
            "순수 랜덤 :어떠한 규칙 없이 1~45 숫자를 생성하여 보여줍니다.",
          ],
          features: [
            "데일리 추천 번호 제공",
            "추천번호 생성",
            "전체 커스텀 번호 생성",
            "직접생성 번호 생성",
            "순수 랜덤 번호 생성",
          ],
          images: [
            "/product/bcow/img_03.webp",
    "/product/bcow/img_04.webp",
    "/product/bcow/img_09.webp",
    "/product/bcow/img_10.webp",
          ],
        },
        {
          id: "drwno_info",
          title: "회차 정보",
          description: [
            "회차의 현황을 간략하게 조회할 수 있습니다.\n",
            "특정 회차의 당첨정보 판매점 정보를 상세하게 조회할 수 있습니다.\n",
            "로또 용지의 QR을 조회하여 당첨 여부를 확인할 수 있습니다.",
          ],
          features: ["회차 현황 조회", "특정 회차 당첨정보 판매점 정보 조회", "로또 용지의 QR 조회"],
          images: [
            "/product/bcow/img_05.webp",
    "/product/bcow/img_06.webp",
    "/product/bcow/img_11.webp",
    "/product/bcow/img_12.webp",
          ],
        },
        {
          id: "person_info",
          title: "개인 로또",
          description: [
            "저장한 번호의 당첨 내역을 조회할 수 있습니다.\n",
            "저장한 회차의 <b>총 구매금액</b, <b>총 당첨금액</b, <b>구매타입정보</b>를 확인할 수 있습니다.\n",
            "저장한 번호들의 요약 정보를 확인할 수 있습니다.",
          ],
          features: ["저장한 번호의 당첨 내역 조회", "저장한 회차의 정보 확인", "저장한 번호들의 요약 정보 확인"],
          images: [
            "/product/bcow/img_07.webp",
    "/product/bcow/img_13.webp",
          ],
        },
        
      ],
    },

  ///마와셀 웹
  {
    id: "myc_web",
    title: "마와셀(모바일 앱)",
    category: "Web Service",
    description : ["와인에 대한 상세한 정보를 제공하며, 와인 비비노 및 유명한 단체의 평가 점수 페어링 푸드와 시음 적기 정보를 제공합니다.\n", 
      "와이너리에 대한 상세한 설명, 해당 와이너리에서 생산된 와인 정보를 제공합니다.\n",
       "와인을 만드는 포도 품종에 대해 자세한 정보를 제공합니다."],
    keyPoints: [
        "🍷 상세한 와인 정보",
        "🏞️ 와이너리 정보",
        "🍇 포도 품종 정보",
      ],
      links: {
        website: "https://mywinecellar.info/ko",
        appStore: "",
        googlePlay: "",
        type: "web",
      },
      images: [
        "/product/myc/web/myc_01.webp",
    "/product/myc/web/myc_02.webp",
    "/product/myc/web/myc_03.webp",
    "/product/myc/web/myc_04.webp",
    "/product/myc/web/myc_05.webp",
    "/product/myc/web/myc_06.webp",
    "/product/myc/web/myc_07.webp",
    "/product/myc/web/myc_08.webp",
    "/product/myc/web/myc_09.webp",
    "/product/myc/web/myc_10.webp",
    "/product/myc/web/myc_11.webp",
      ],
      functions: [
        {
          id: "wine_info",
          title: "와인 정보",
          description: [
            "다양한 와인 정보를 검색할 수 있습니다.\n",
            "와인의 유명한 평론가 및 비비노 점수, 와인에 대한 자세한 설명, 와인 스타일, 페어링에 추천되는 음식 정보 등을 확인할 수 있습니다.\n",
            "조회한 와인의 빈티지 별시음 적기 정보를 확인할 수 있습니다."
          ],
          features: [
            "다양한 와인 검색",
            "조회한 와인의 상세한 정보 제공",
            "와인의 평론가 및 비비노 점수 확인",            
            "빈티지별 시음 적기 정보 제공",
          ],
          images: [
            "/product/myc/web/myc_02.webp",
    "/product/myc/web/myc_03.webp",
    "/product/myc/web/myc_04.webp",
    "/product/myc/web/myc_05.webp",
          ],
        },
        {
          id: "winery_info",
          title: "와이너리 정보",
          description: [
            "국가별 와인 생산자의 자세한 정보를 제공합니다.\n",
            "와이너리에 대한 상세한 정보를 제공합니다.\n",
            "조회한 와이너리가 생산한 와인 정보를 제공합니다."
          ],
          features: ["와이너리 정보 제공", "와이너리에서 생산한 와인 정보 제공"],
          images: [
            "/product/myc/web/myc_06.webp",
    "/product/myc/web/myc_07.webp",
          ],
        },
        {
          id: "grape_info",
          title: "포도 품종 정보",
          description: [
            "레드/화이트 용 포도 품종별로 검색하고 품종별 특징을 확인할 수 있습니다.\n",
            "품종에 대한 상세 정보, 맛과 특징, 주요 스타일과 양조 방식, 추천 음식 정보를 제공합니다.",
          ],
          features: [
            "양조용 포도 품종 정보 제공",
            "품종이 내는 노즈, 맛, 향 정보 제공",
            "괜찮은 페어링 음식 추천",
          ],
          images: [
            "/product/myc/web/myc_08.webp",
    "/product/myc/web/myc_09.webp",
    "/product/myc/web/myc_10.webp",
    "/product/myc/web/myc_11.webp",
          ],
        },
        
      ],
    },

    ///마와셀 앱
    {
    id: "myc_app",
    title: "마와셀(모바일 앱)",
    category: "Mobile Application",
    description : [
        "마와셀은 보유한 <b>와인의 관리</b>, <b>시음노트 작성</b>, <b>보유 와인 셀러의 관리</b>를 돕는 어플리케이션입니다.\n",
        "보유한 와인에 대한 정보를 관리하고 싶을 때, SNS 보다 나만의 시음노트를 만들고 싶을 때, 메번 보유한 와인 셀러에 어떤 와인이 들어있는지 확인하기 귀찮으실 때, 이런 불편함을 해결해주기 위해 마와셀이 출시되었습니다.",
    ],
    keyPoints: [
        "📋 보유 와인의 리스트 관리",
        "🔍 셀러 정보 관리",
        "🗄️ 셀러 층 마다 보유 와인의 파악 가능",
        "📝 와인 시음 기록 및 보관",
      ],
      links: {
        website: "",
        appStore: "https://itunes.apple.com/kr/app/apple-store/6474965246",
        googlePlay: "https://play.google.com/store/apps/details?id=dev.mhlab.myc",
        type: "mobile",
      },
      images: [
        "/product/myc/app/myc_001.webp",
        "/product/myc/app/myc_002.webp",
        "/product/myc/app/myc_003.webp",
        "/product/myc/app/myc_004.webp",
        "/product/myc/app/myc_005.webp",
        "/product/myc/app/myc_006.webp",
        "/product/myc/app/myc_007.webp",
        "/product/myc/app/myc_008.webp",
      ],
      functions: [
        {
          id: "wine_info",
          title: "보유 와인 관리",
          description: [
            "나의 와인 보유한 와인을 등록하고, 정보를 확인할 수 있습니다.\n",
            "내가 현재 보유한 와인들의 다양한 정보를 등록하고, 보유 셀러 등록 시, 와인 셀러에서 보관 중인 와인 정보 확인도 가능합니다.\n",
            "빈티지, 생산국가 및 지역, 구입 가격 및 셀러 보관일 등 다양한 옵션 정보를 넣어서 관리할 수 있습니다."
          ],
          features: [
            "와인 등록 및 관리",
            "보유 와인 검색 기능",
            "보유 와인의 보관일 확인 셀러 위치 확인 기능",
            "보유 장소, 와인 종류, 타입에 따른 필터 기능 제공",
          ],
          images: [
            "/product/myc/app/myc_006.webp",
        "/product/myc/app/myc_003.webp",
        "/product/myc/app/myc_004.webp",
          ],
        },
        {
          id: "taste_note",
          title: "와인 시음노트",
          description: [
            "시음 노트 보유한 와인 또는 시음회 및 모임에서 마신 와인 또는 기타 주류의 시음 노트를 작성할 수 있습니다.\n",
            "간단한 시음노트부터 복잡한 시음노트까지 다양한 기능을 제공합니다.\n",
            "SNS 같은 외부 공간 보다는 프라이빗한 개인 시음노트를 작성하고 관리할 수 있습니다."
          ],
          features: ["보유 와인 또는 별도 와인에 대한 시음 노트 작성", "경험한 와인에 대한 기록"],
          //"향과 맛 평가", "음식 페어링 기록", "시음 히스토리", "평가 통계"
          images: [
            "/product/myc/app/myc_008.webp",
          ],
        },
        {
          id: "cellar_info",
          title: "와인 셀러 관리",
          description: [
            "보유한 와인들을 <b>셀러별로 분류</b>하여 관리할 수 있습니다.\n",
            "각 셀러의 <b>위치, 온도, 습도</b> 정보를 기록하고, <b>보관 조건</b>을 모니터링할 수 있습니다.\n",
            "셀러별 와인 목록과 <b>보관 기간</b>을 한눈에 확인할 수 있어 효율적인 와인 관리가 가능합니다."
          ],
          features: [
            "셀러 등록 및 관리",
            "셀러 내 선반 기능 제공",
            "셀러마다 보유한 와인을 확인하는 기능",
          ],
          images: [
            "/product/myc/app/myc_002.webp",
            "/product/myc/app/myc_005.webp",
          ],
        },
      ],
    }
];

