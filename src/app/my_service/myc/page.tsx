import { MY_SERVICE_MYC_STORE_INFO } from "@/constants/my.service.constants";
import ServiceImgCarousel from "@/components/my_service/service.img.carousel";
import ServiceStoreInfo from "@/components/my_service/store.info";
import Image from "next/image";

export interface MycMainProps {}

export default function MycMain(props: MycMainProps) {
  return (
    <>
      <div className="grid grid-cols-4 c_mobile:grid-cols-1 c_mobile:gap-3">
        <div className="c_mobile:mx-auto">
          <Image
            src="/app/myc/app_icon.png"
            width={200}
            height={100}
            alt=""
            className="ml-5 mr-5 rounded-box"
          />
        </div>
        <div className="c_pc:col-span-2">
          <div className="font-Dongle text-left text-8xl c_mobile:text-6xl ">
            마와셀
          </div>
          <div className="font-NanumGothic text-left text-4xl c_mobile:text-2xl mt-3 ">
            와인 관리, 시음노트, 와인셀러 관리 앱
          </div>
        </div>
      </div>

      <ServiceImgCarousel
        imgList={[
          "/app/myc/refer_001.png",
          "/app/myc/refer_002.png",
          "/app/myc/refer_003.png",
          "/app/myc/refer_004.png",
          "/app/myc/refer_005.png",
          "/app/myc/refer_006.png",
          "/app/myc/refer_007.png",
          "/app/myc/refer_008.png",
        ]}
      />
      <div className="mt-10 c_mobile:mt-5 mb-10">
        <span className="font-Dongle text-5xl">설명</span>
        <div className="font-NanumGothic mt-3 subpixel-antialiased">
          <p>
            보유한 와인의 관리, 시음노트 작성, 보유 와인 셀러의 관리를 돕는
            어플리케이션입니다.
          </p>
          <br />
          <p>
            보유한 와인에 대한 정보를 관리하고 싶을 때 SNS 보다 나만의
            시음노트를 만들고 싶을 때 메번 보유한 와인 셀러에 어떤 와인이
            들어있는지 확인하기 귀찮으실 때 이런 불편함을 해결해주기 위해
            마와셀이 출시되었습니다.
          </p>
          <p>
            마와셀은 보유한 와인의 관리, 시음노트 작성, 보유 셀러의 정보 관리
            기능을 제공합니다.
          </p>
          <br />
          <p className="font-NanumGothic text-xl font-semibold">보유 와인</p>
          <ul className="list-disc list-inside mt-2">
            <li>
              나의 와인 보유한 와인을 등록하고, 정보를 확인할 수 있습니다.
            </li>
            <li>
              내가 현재 보유한 와인들의 다양한 정보를 등록하고, 보유 셀러 등록
              시, 와인 셀러에서 보관 중인 와인 정보 확인도 가능합니다.
            </li>
            <li>
              포도 품종, 빈티지, 생산국가 및 지역, 구입 가격 및 셀러 보관일 등
              다양한 옵션 정보를 넣어서 관리할 수 있습니다.
            </li>
          </ul>
          <p className="font-NanumGothic text-xl font-semibold mt-5">
            시음 노트
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>
              시음 노트 보유한 와인 또는 시음회 및 모임에서 마신 와인 또는 기타
              주류의 시음 노트를 작성할 수 있습니다.
            </li>
            <li>
              간단한 시음노트부터 복잡한 시음노트까지 다양한 기능을 제공합니다.
            </li>
            <li>
              SNS 같은 외부 공간 보다는 프라이빗한 개인 시음노트를 작성하고
              관리할 수 있습니다.
            </li>
          </ul>
          <p className="font-NanumGothic text-xl font-semibold mt-5">
            와인 셀러
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>와인 셀러 보유한 와인 셀러를 등록합니다.</li>
            <li>
              제조사, 수납 용량(병), 용량(L), 구입일, 사진 등 셀러의 다양한
              정보를 등록할 수 있습니다.
            </li>
            <li>
              또한 나의 와인에서 등록한 셀러 지정 시, 해당 셀러에 보관 중인 와인
              정보도 확인이 가능합니다.
            </li>
            <li>
              그리고 셀러를 1개 이상 사용하시는 분들은 다수의 셀러 등록을 하여,
              보유 와인 정보를 한눈에 쉽게 파악할 수 있습니다.
            </li>
          </ul>
          <br />

          <p>
            마와셀은 위 기능 외에대 다양한 기능을 제공할 예정이며, 단순 와인
            관리를 넘어서서 다양한 정보를 제공하는 와인 어플리케이션으로 발전할
            것입니다.
          </p>
        </div>

        <div className="card c_phone:w-full c_pc:w-96 bg-base-100 shadow-xl">
          <div className="card-body text-black">
            <h2 className="card-title font-dongle-header mb-2 ">스토어 정보</h2>

            {/* Item Service Link */}
            <ServiceStoreInfo myServiceData={MY_SERVICE_MYC_STORE_INFO} />
          </div>
        </div>
      </div>
    </>
  );
}
