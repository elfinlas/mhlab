import {
  MY_SERVICE_TYPE,
  MyServiceDataType,
  MyServiceType,
} from "@/types/my_service/my.service.type";

import Image from "next/image";

export interface ServiceStoreInfoProps {
  myServiceData: MyServiceDataType[];
}

export default function ServiceStoreInfo(props: ServiceStoreInfoProps) {
  return (
    <>
      <div className="grid grid-cols-3 mt-3 c_mobile:grid-cols-2 c_mobile:gap-5 ">
        {props.myServiceData.map((item: MyServiceDataType, index: number) => {
          return (
            <div key={index} className="text-center ">
              <a href={item.link} target="_blank">
                <Image
                  src={getServiceTypeImg(item.serviceType, item.name)}
                  alt="Album"
                  width={50}
                  height={50}
                  className="mx-auto "
                />
                <p className="mt-3 ">{item.name}</p>
              </a>
            </div>
          );
        })}
      </div>
    </>
  );
}

function getServiceTypeImg(
  serviceType: MyServiceType,
  serviceName: string,
): string {
  if (serviceType === MY_SERVICE_TYPE.ANDROID) {
    return "/icon/aos_store_logo.png";
  } else if (serviceType === MY_SERVICE_TYPE.IOS) {
    return "/icon/apple_store_logo.png";
  }

  if (serviceType === MY_SERVICE_TYPE.WEB && serviceName === "흑우집합소") {
    return "/icon/web_logo.png";
  }
  return "/icon/web_logo.png";
}
