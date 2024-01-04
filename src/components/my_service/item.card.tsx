import { MyServiceDataType } from "@/types/my_service/my.service.type";
import Image from "next/image";
import Link from "next/link";
import ServiceStoreInfo from "./store.info";

export interface ServiceItemCardProps {
  imgName: string;
  title: string;
  description: string;
  linkUrl: string;
  myServiceData: MyServiceDataType[];
}

export default function ServiceItemCard(props: ServiceItemCardProps) {
  return (
    <>
      <div className="card c_phone:w-full c_pc:w-96 bg-base-100 shadow-xl">
        <div className="p-3">
          <figure>
            <Image src={props.imgName} alt="Album" width={150} height={150} />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title font-dongle-header mb-2 ">{props.title}</h2>
          <p className="">{props.description}</p>

          {/* Item Service Link */}
          <ServiceStoreInfo myServiceData={props.myServiceData} />

          <div className="card-actions justify-end mt-5">
            <Link href={props.linkUrl}>
              <button className="btn btn-warning">자세히</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
