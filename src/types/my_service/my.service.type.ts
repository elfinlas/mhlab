import { MultiTyper } from "../system.type";

//서비스 타입 정보
export interface MyServiceDataType {
  serviceType: MyServiceType;
  name: string;
  link: string;
}

export const MY_SERVICE_TYPE = {
  ANDROID: "android",
  IOS: "ios",
  WEB: "web",
} as const;

export type MyServiceType = MultiTyper<typeof MY_SERVICE_TYPE>;
