import {
  MY_SERVICE_TYPE,
  MyServiceDataType,
} from "@/types/my_service/my.service.type";
import { APP_STORE_BASE_URL, PLAYSTORE_BASE_URL } from "./url.constants";

//마와셀 (MYC)

export const MY_SERVICE_MYC_STORE_INFO: MyServiceDataType[] = [
  {
    serviceType: MY_SERVICE_TYPE.IOS,
    name: "App Store",
    link: APP_STORE_BASE_URL + "6474965246",
  },
  {
    serviceType: MY_SERVICE_TYPE.ANDROID,
    name: "PlayStore",
    link: PLAYSTORE_BASE_URL + "dev.mhlab.myc",
  },
] as const;

//흑우집합소 (BCow)

export const MY_SERVICE_BCOW_STORE_INFO: MyServiceDataType[] = [
  {
    serviceType: MY_SERVICE_TYPE.WEB,
    name: "웹서비스",
    link: "https://bcow.world",
  },
  {
    serviceType: MY_SERVICE_TYPE.IOS,
    name: "App Store",
    link: APP_STORE_BASE_URL + "6470312130",
  },
  {
    serviceType: MY_SERVICE_TYPE.ANDROID,
    name: "PlayStore",
    link: PLAYSTORE_BASE_URL + "dev.mhlab.bcow_world",
  },
] as const;
