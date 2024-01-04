"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export interface ServiceImgCarouselProps {
  imgList: string[];
}

export default function ServiceImgCarousel(props: ServiceImgCarouselProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    // 컴포넌트가 마운트되었을 때 이벤트 리스너를 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 해제
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const groupList = chunkArray(props.imgList, calcSize(windowWidth));

  const makeCarouselItemComponent = (itemList: string[]) => {
    return (
      <>
        {itemList.map((item: string, index: number) => {
          return (
            <Image
              src={item}
              width={400}
              height={100}
              alt=""
              key={index}
              className="ml-5 mr-5 rounded-box"
            />
          );
        })}
      </>
    );
  };

  return (
    <>
      {/* PC용 */}
      <div className="c_mobile:hidden">
        <div className="carousel rounded-box">
          {groupList.map((group: string[], index: number) => {
            return (
              <div
                id={"slide" + index}
                className="carousel-item relative w-full "
                key={index}
              >
                {makeCarouselItemComponent(group)}
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    href={"#slide" + (index - 1)}
                    className={
                      "btn btn-circle " + (index <= 0 ? "btn-disabled" : "")
                    }
                  >
                    ❮
                  </a>
                  <a
                    href={"#slide" + (index + 1)}
                    className={
                      "btn btn-circle " +
                      (index >= groupList.length - 1 ? "btn-disabled" : "")
                    }
                  >
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 모바일 용 */}
      <div className="mx-auto c_pc:hidden">
        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
          {props.imgList.map((item: string, index: number) => {
            return (
              <div className="carousel-item" key={index}>
                <Image
                  src={item}
                  width={250}
                  height={250}
                  alt=""
                  key={index}
                  className="rounded-box"
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

// 배열을 주어진 크기로 나누는 함수
const chunkArray = (arr: string[], size: number) => {
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size),
  );
};

//PC사이즈를 계산할 때 사용
const calcSize = (widthSize: number) => {
  if (widthSize >= 901 && widthSize <= 1200) {
    return 1;
  } else if (widthSize >= 1201 && widthSize <= 1800) {
    return 2;
  } else if (widthSize >= 1801 && widthSize <= 2100) {
    return 3;
  }
  return 4;
};
