import { Metadata } from "next";

export interface MetaDataProps {
  title?: string;
  description?: string;
}

export default function getmetaData(props: MetaDataProps): Metadata {
  return {
    title: props.title != undefined ? (props.title as string) : null,
    description:
      props.description != undefined ? (props.description as string) : null,
    openGraph: { title: "elfinlas" },
  };
}
