import ServiceItemCard from "@/components/my_service/item.card";
import { MyServiceDataType } from "@/types/my_service/my.service.type";

import {
  MY_SERVICE_BCOW_STORE_INFO,
  MY_SERVICE_MYC_STORE_INFO,
} from "../constants/my.service.constants";

interface MyServiceItemProps {
  title: string;
  des: string;
  imgName: string;
  myServiceData: MyServiceDataType[];
  linkUrl: string;
}

export default function MyServicePage() {
  const serviceList: MyServiceItemProps[] = [
    {
      title: "흑우집합소",
      des: "로또 번호 생성 및 관련 정보를 제공하는 앱입니다.",
      imgName: "/app/bcow/app_icon.png",
      myServiceData: MY_SERVICE_BCOW_STORE_INFO,
      linkUrl: "/my_service/bcow",
    },
    {
      title: "마와셀",
      des: "보유한 와인의 관리, 시음노트 작성, 보유 와인 셀러의 관리를 돕는 어플리케이션입니다.",
      imgName: "/app/myc/app_icon.png",
      myServiceData: MY_SERVICE_MYC_STORE_INFO,
      linkUrl: "/my_service/myc",
    },
  ];

  return (
    <>
      <div className="grid c_m_pc:grid-cols-2 grid-cols-4 c_pc:p-10 c_mobile:grid-cols-1 c_mobile:gap-5">
        {serviceList.map((item: MyServiceItemProps, index: number) => {
          return (
            <ServiceItemCard
              key={index}
              title={item.title}
              description={item.des}
              imgName={item.imgName}
              myServiceData={item.myServiceData}
              linkUrl={item.linkUrl}
            />
          );
        })}
      </div>
    </>
  );
}
