import Image from "next/image";

export default function Main() {
  return (
    <>
      <div className="grid c_pc:grid-cols-4 c_mobile:grid-cols-1 c_mobile:gap-3">
        <div className="">
          <Image
            src={"/favicon.ico"}
            alt="Album"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
        <div className="col-span-3 ml-5">
          <span className="font-dongle-header">MHLab</span>
          <p className="font-dongle-normal">
            네트워크 엔지니어로 시작해서 잡스의 아이폰 발표를 보고 개발의 길을
            선택.
          </p>
          <p className="font-dongle-normal">
            Objective-C로 시작해서 Java 스프링 백엔드를 열정적으로 했지만…
          </p>
          <p className="font-dongle-normal">
            잠시 휴식기를 거치며 JS, TS, Nest.JS Nest.JS 등으로 환승
          </p>
          <p className="font-dongle-normal">
            지금은 그냥 개발은 취미로 프로젝트 만들며 편하게 살아가는 중
          </p>
          <p className="font-dongle-normal">
            현재 다른 사람들과 함께 일해보고 싶은 기회를 찾는 중🚀
          </p>
        </div>
      </div>
    </>
  );
}
