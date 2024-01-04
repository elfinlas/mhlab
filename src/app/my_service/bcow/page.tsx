import { MY_SERVICE_BCOW_STORE_INFO } from "@/app/constants/my.service.constants";
import ServiceImgCarousel from "@/components/my_service/service.img.carousel";
import ServiceStoreInfo from "@/components/my_service/store.info";
import Image from "next/image";

export interface BcowMainProps {}

export default function BcowMain(props: BcowMainProps) {
  return (
    <>
      <div className="grid grid-cols-4 c_mobile:grid-cols-1 c_mobile:gap-3">
        <div className="c_mobile:mx-auto">
          <Image
            src="/app/bcow/app_icon.png"
            width={200}
            height={100}
            alt=""
            className="ml-5 mr-5 rounded-box"
          />
        </div>
        <div className="c_pc:col-span-2">
          <div className="font-Dongle text-left text-8xl c_mobile:text-6xl ">
            흑우집합소
          </div>
          <div className="font-NanumGothic text-left text-4xl c_mobile:text-2xl mt-3 ">
            로또 추천 번호 서비스
          </div>
        </div>
      </div>
      <ServiceImgCarousel
        imgList={[
          "/app/bcow/refer_001.png",
          "/app/bcow/refer_002.png",
          "/app/bcow/refer_003.png",
          "/app/bcow/refer_004.png",
          "/app/bcow/refer_005.png",
          "/app/bcow/refer_006.png",
          "/app/bcow/refer_007.png",
        ]}
      />
      <div className="mt-10 c_mobile:mt-5 mb-10">
        <span className="font-Dongle text-5xl">설명</span>
        <div className="mt-3 subpixel-antialiased">
          <p>흑우집합소는 로또 서비스를 제공합니다.</p>
          <p>
            웹 서비스와 동일한 기능을 제공하며, 모바일 앱에 맞게 최적화 하여
            개발되었습니다.
          </p>
          <p>
            본 서비스에서 제공하는 기능은 모두 무료이며, 상용 서비스는 없습니다.
          </p>

          <br />

          <p>
            로또번호를 단지 재미로, 그리고 자신만의 기법을 이용하여 번호를
            조합하고 만들 수 있습니다.
          </p>
          <p>
            번호를 분석하고 귀찮은 분들을 위해 추천번호를 제공하고, 원하는
            조건을 가지는 번호를 생성할 수 있고, 자신이 생성한 번호를 저장할 수
            있습니다.
          </p>
          <p>
            또한 복잡한 UI가 아닌 간편하고, 직관적인 UI로 사용자의 편의성을
            도모하였습니다.
          </p>
          <br />

          <p className="font-NanumGothic text-xl font-semibold">기능</p>
          <p className="mt-2">
            흑우집합소는 로또와 관련된 다양한 기능을 제공합니다.
          </p>

          <p className="font-NanumGothic text-lg font-semibold mt-5">
            1. 로또 생성
          </p>

          <ul className="list-disc list-inside mt-2">
            <li>데일리 추천 : 매 시간마다 5개의 추천 번호를 제공합니다.</li>
            <li>
              추천번호 : ​단순 1~45 사이의 랜덤 값을 생성하는 것이 아닌 전
              회차들을 비교 분석 및 확률적으로 낮은 조합을 빼서, 당첨 확률이
              미약하게나마 올라간 번호를 생성합니다.
            </li>
            <li>
              전체 커스텀 : 총합구간, 제외총합, 제외 및 포함수, 출현 참조 주차
              등을 직접 설정해서 알맞는 번호를 생성합니다.
            </li>
            <li>직접생성 : 직접 6개 번호를 선택하여 생성합니다.</li>
            <li>
              순수 랜덤 :어떠한 규칙 없이 1~45 숫자를 생성하여 보여줍니다.
            </li>
          </ul>

          <p className="font-NanumGothic text-lg font-semibold mt-5">
            2. 회차 정보
          </p>

          <ul className="list-disc list-inside mt-2">
            <li>회차의 현황을 간략하게 조회할 수 있습니다.</li>
            <li>
              특정 회차의 당첨정보 판매점 정보를 상세하게 조회할 수 있습니다.
            </li>
            <li>로또 용지의 QR을 조회하여 당첨 여부를 확인할 수 있습니다.</li>
          </ul>

          <p className="font-NanumGothic text-lg font-semibold mt-5">
            3. 개인 로또
          </p>

          <ul className="list-disc list-inside mt-2">
            <li>저장한 번호의 당첨 내역을 조회할 수 있습니다.</li>
            <li>
              저장한 회차의 <b>총 구매금액</b>, <b>총 당첨금액</b>,{" "}
              <b>구매타입</b>
              정보를 확인할 수 있습니다.
            </li>
            <li>저장한 번호들의 요약 정보를 확인할 수 있습니다.</li>
          </ul>

          <p className="font-NanumGothic text-lg  mt-5">
            <b>4. 흑우집합소</b>
          </p>
          <p className="mt-2">흑우집합소 고유의 기능을 제공합니다.</p>

          <ul className="list-disc list-inside mt-2">
            <li>
              흑우집합소 내 생성된 번호 중 당첨 내역 정보를 열람할 수 있습니다.
            </li>
            <li>
              지금까지 판매된 로또정보의 상세한 히스토리 정보를 제공합니다.
            </li>
          </ul>

          <br />

          <p>흑우집합소는 여러분들의 로또 1등을 응원합니다 ^^</p>
        </div>

        <div className="card c_phone:w-full c_pc:w-96 bg-base-100 shadow-xl">
          <div className="card-body ">
            <h2 className="card-title font-dongle-header mb-2 ">스토어 정보</h2>

            {/* Item Service Link */}
            <ServiceStoreInfo myServiceData={MY_SERVICE_BCOW_STORE_INFO} />
          </div>
        </div>
      </div>
    </>
  );
}
