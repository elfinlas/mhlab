import { Metadata } from "next";

export interface MetaDataProps {
  title?: string;
  description?: string;
}

export default function getmetaData(props: MetaDataProps): Metadata {
  return {
    //Default
    title: props.title != undefined ? (props.title as string) : "MHLab",
    description:
      props.description != undefined
        ? (props.description as string)
        : "Description mhlab service",

    //OG
    openGraph: {
      title: props.title != undefined ? (props.title as string) : "MHLab",
      description:
        props.description != undefined
          ? (props.description as string)
          : "Description mhlab service",
      images: "/cover.png",
    },

    //App Link
    appLinks: {
      web: { url: "https://bcow.world/" },
      ios: [
        {
          url: "https://itunes.apple.com/kr/app/apple-store/6470312130",
          app_name: "흑우집합소",
          app_store_id: "6470312130",
        },
        {
          url: "https://itunes.apple.com/kr/app/apple-store/6474965246",
          app_name: "마와셀",
          app_store_id: "6474965246",
        },
      ],
      android: [
        {
          url: "https://play.google.com/store/apps/details?id=",
          app_name: "흑우집합소",
          package: "dev.mhlab.bcow_world",
        },
        {
          url: "https://play.google.com/store/apps/details?id=",
          app_name: "마와셀",
          package: "dev.mhlab.myc",
        },
      ],
    },
  };
}
