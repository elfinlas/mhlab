'use client';

import Link from "next/link";

export default function FooterLegalPrivacy() {
    return (
        <div className="mt-10 rounded-lg  p-6  shadow-lg ">
            <h1 className="text-3xl font-extrabold dark:text-violet-50">
                Travel Log개인정보처리방침
            </h1>

            <h2 className="mb-5 text-3xl font-semibold mt-5">목적</h2>
            <div className="leading-loose">
                <p>
                    Travel Log(이하 트레블로그)는 개인정보보호법에 따라 이용자의
                    개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의
                    문제를 원활하게 처리할 수 있도록 아래와 같은 처리방침을 두고
                    있습니다.
                </p>
                <p>
                    트레블로그는 개인정보 처리방침이 변경된 경우 서비스 내
                    공지사항(또는 전자우편 등의 개별공지)을 통해 공지합니다.
                </p>
                <p>본 처리방침은 2025년 10월 14일부터 시행됩니다.</p>
            </div>
            <hr className="my-6 border-gray-300" />
            <h2 className="mb-5 text-3xl font-semibold">처리 및 이용 목적</h2>
            <div className="leading-loose">
                <p>
                    트레블로그는 개인정보를 다음의 목적을 위해 처리하고 이용합니다.
                </p>
                <p>
                    처리한 개인 정보는 아래의 목적 이외의 용도로는 사용되지
                    않으며, 이용 목적이 변경될 시 사전 동의를 구한 이후
                    진행됩니다.
                </p>

                <h2 className="mt-5 mb-2 text-xl font-bold">
                    어플리케이션 이용자 정보
                </h2>
                <p>
                    회원에 대한 가입의사, 개인 식별, 불량 회원의 부정 이용 방지
                    및 비인가 사용 방지, 자격 유지 및 관리, 부정 이용 방지, 각종
                    고지 및 통지, 분쟁 조정을 위한 기록 목적으로 처리됩니다.
                </p>
                <h2 className="mt-5 mb-2 text-xl font-bold">
                    민원 및 사무 처리
                </h2>
                <p>
                    회원의 신원 확인 및 민원 확인, 사실 조사를 위한 연락, 처리
                    결과 통보 등을 목적으로 처리합니다.
                </p>
                <h2 className="mt-5 mb-2 text-xl font-bold">
                    서비스 제공에 관한 계약 이행 및 서비스 제공
                </h2>
                <p>
                    서비스 제공에 관한 계약 이행 및 서비스 제공에 대해
                    사용합니다.
                </p>
                <h2 className="mt-5 mb-2 text-xl font-bold">
                    재화 또는 서비스 제공
                </h2>
                <p>
                    서비스 제공, 콘텐츠 제공 등을 목적으로 개인정보를
                    처리합니다.
                </p>
                <h2 className="mt-5 mb-2 text-xl font-bold">
                    마케팅 및 광고에 활용
                </h2>
                <p>
                    신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보
                    제공 및 참여 제공, 통계 특성에 따른 서비스 제공 및 광고
                    게재, 서비스 유효형 및 접속 빈도 파악, 이용에 대한 통계
                    목적으로 처리합니다.
                </p>
            </div>
            <hr className="my-6 border-gray-300" />
            <h2 className="mb-5 text-3xl font-semibold">
                개인정보의 처리 및 보유 기간
            </h2>
            <div className="leading-loose">
                <p>
                    트레블로그는 관계 법령에 따른 개인정보 보유 및 이용기간 또는
                    정보 주체로부터 개인정보 수집시 동의 받은 개인정보 보유 및
                    이용기간 내에서 개인정보를 처리 및 보유합니다.
                </p>
                <p>각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.</p>
                <ul className="mt-4 mb-4 ml-4 list-inside list-decimal">
                    <li>
                        홈페이지 회원 가입 및 관리 : 서비스 탈퇴일로부터 3개월이
                        경과하는 날까지
                    </li>
                    <li>민원사무 처리 : 민원 처리 완료 시까지</li>
                    <li>서비스 제공 : 서비스 제공 완료 시까지</li>
                    <li>마케팅 및 광고에 활용 : 서비스 탈퇴 시</li>
                </ul>
            </div>
            <hr className="my-6 border-gray-300" />
            <h2 className="mb-5 text-3xl font-semibold">개인정보의 파기</h2>
            <div className="leading-loose">
                <p>
                    트레블로그는 원칙적으로 개인정보 처리 목적이 달성된 경우 해당
                    개인정보를 파기하며, 절차 및 기한 방법은 아래와 같습니다.
                </p>
                <h2 className="mt-5 mb-2 text-xl font-bold">파기절차</h2>
                <p>
                    이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨지고,
                    내부 방침 및 기타 관련 법령에 따라 일정기간 저장되거나 바로
                    즉시 파기됩니다.
                </p>
                <h2 className="mt-5 mb-2 text-xl font-bold">파기기한</h2>
                <p>
                    이용자의 개인정보는 보유기간이 경과된 경우 보유기간의
                    종료일로부터 5일 이내.
                </p>
                <p>
                    개인정보의 처리 목적 달성 및 해당 서비스 폐지, 사업의 종료
                    등 개인정보가 불필요해질 경우 해당일로부터 5일 이내.
                </p>
                <p>
                    단 개인정보 보유 기간의 정책에 의해 예외적으로 파기가 되지
                    않거나 별도 DB에 옮겨 해당 보유기간까지 보유할 수 있습니다.
                </p>
                <h2 className="mt-5 mb-2 text-xl font-bold">파기기한</h2>
                <p>
                    전자적 파일 형태 및 DB의 경우 열람 불가 및 기록을 확인할 수
                    없도록 파기합니다.
                </p>
            </div>
            <hr className="my-6 border-gray-300" />
            
            <h2 className="mb-5 text-3xl font-semibold">
                개인정보의 안전성 확보
            </h2>
            <div className="leading-loose">
                <p>
                    트레블로그는 이용자의 개인 정보를 보호하기 위해 다양한 노력을
                    진행합니다.
                </p>
                <p>
                    또한 추가적인 보안문제가 발견될 경우 보안성 확보를 위해
                    기술적인 장치를 갖추려고 노력하고 있습니다.
                </p>
            </div>
            <hr className="my-6 border-gray-300" />
        </div>
    );
}
