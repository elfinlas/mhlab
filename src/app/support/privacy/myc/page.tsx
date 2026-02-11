"use client";

import { useState } from "react";
import Link from "next/link";

type Language = "ko" | "en";

export default function FooterLegalPrivacy() {
    const [lang, setLang] = useState<Language>("ko");

    const content = {
        ko: {
            title: "개인정보처리방침",
            purpose: {
                heading: "목적",
                p1: "개인정보 처리방침 마와셀은 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 문제를 원활하게 처리할 수 있도록 아래와 같은 처리방침을 두고 있습니다.",
                p2: "마와셀은 개인정보 처리방침이 변경된 경우 서비스 내 공지사항(또는 전자우편 등의 개별공지)을 통해 공지합니다.",
                p3: "본 처리방침은 2024년 3월 21일부터 시행됩니다.",
            },
            processPurpose: {
                heading: "처리 및 이용 목적",
                p1: "마와셀은 개인정보를 다음의 목적을 위해 처리하고 이용합니다.",
                p2: "처리한 개인 정보는 아래의 목적 이외의 용도로는 사용되지 않으며, 이용 목적이 변경될 시 사전 동의를 구한 이후 진행됩니다.",
                sections: [
                    {
                        title: "서비스 회원가입 및 관리",
                        text: "회원에 대한 가입의사, 개인 식별, 불량 회원의 부정 이용 방지 및 비인가 사용 방지, 자격 유지 및 관리, 부정 이용 방지, 각종 고지 및 통지, 분쟁 조정을 위한 기록 목적으로 처리됩니다.",
                    },
                    {
                        title: "민원 및 사무 처리",
                        text: "회원의 신원 확인 및 민원 확인, 사실 조사를 위한 연락, 처리 결과 통보 등을 목적으로 처리합니다.",
                    },
                    {
                        title: "서비스 제공에 관한 계약 이행 및 서비스 제공",
                        text: "서비스 제공에 관한 계약 이행 및 서비스 제공에 대해 사용합니다.",
                    },
                    {
                        title: "재화 또는 서비스 제공",
                        text: "서비스 제공, 콘텐츠 제공 등을 목적으로 개인정보를 처리합니다.",
                    },
                    {
                        title: "마케팅 및 광고에 활용",
                        text: "신규 서비스 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여 제공, 통계 특성에 따른 서비스 제공 및 광고 게재, 서비스 유효형 및 접속 빈도 파악, 이용에 대한 통계 목적으로 처리합니다.",
                    },
                ],
            },
            retentionPeriod: {
                heading: "개인정보의 처리 및 보유 기간",
                p1: "마와셀은 관계 법령에 따른 개인정보 보유 및 이용기간 또는 정보 주체로부터 개인정보 수집시 동의 받은 개인정보 보유 및 이용기간 내에서 개인정보를 처리 및 보유합니다.",
                p2: "각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.",
                items: [
                    "홈페이지 회원 가입 및 관리 : 서비스 탈퇴일로부터 3개월이 경과하는 날까지",
                    "민원사무 처리 : 민원 처리 완료 시까지",
                    "서비스 제공 : 서비스 제공 완료 시까지",
                    "마케팅 및 광고에 활용 : 서비스 탈퇴 시",
                ],
            },
            destruction: {
                heading: "개인정보의 파기",
                p1: "마와셀은 원칙적으로 개인정보 처리 목적이 달성된 경우 해당 개인정보를 파기하며, 절차 및 기한 방법은 아래와 같습니다.",
                procedure: {
                    title: "파기절차",
                    text: "이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨지고, 내부 방침 및 기타 관련 법령에 따라 일정기간 저장되거나 바로 즉시 파기됩니다.",
                },
                deadline: {
                    title: "파기기한",
                    text: "이용자의 개인정보는 보유기간이 경과된 경우 보유기간의 종료일로부터 5일 이내.",
                    text2: "개인정보의 처리 목적 달성 및 해당 서비스 폐지, 사업의 종료 등 개인정보가 불필요해질 경우 해당일로부터 5일 이내.",
                    text3: "단 개인정보 보유 기간의 정책에 의해 예외적으로 파기가 되지 않거나 별도 DB에 옮겨 해당 보유기간까지 보유할 수 있습니다.",
                },
                method: {
                    title: "파기방법",
                    text: "전자적 파일 형태 및 DB의 경우 열람 불가 및 기록을 확인할 수 없도록 파기합니다.",
                },
            },
            cookies: {
                heading: "개인정보 자동수집 장치의 설치 및 운영, 거부",
                cookieLabel: "쿠키",
                cookieUrl: "https://ko.wikipedia.org/wiki/HTTP_%EC%BF%A0%ED%82%A4",
                p1: "는 서비스를 운영하는데 이용되는 서버가 이용자의 브라우저에 보내는 아주 작은 텍스트 파일로서 이용자의 컴퓨터에 저장됩니다.",
                p2: "이를 통해 편리한 서비스 사용을 지원하고 맞춤형 서비스를 제공하기 위해 사용됩니다.",
                p3: "쿠키의 사용 목적은 아래와 같습니다",
                items: [
                    "이용자가 선호하는 설정 등을 저장하여, 보다 빠르고 편리한 이용에 사용됩니다.",
                    "로또 서비스 이용 시 임시 저장 등에 활용됩니다.",
                    "회원과 비회원의 접속 빈도나 방문 시간, 방문 회수 파악등의 분석에 활용됩니다.",
                    "구글 애널리틱스를 이용한 웹로그 분석",
                    "기타 시스템 사용 및 광고 분석",
                ],
                p4: "이용자는 쿠키 사용을 거부할 수 있습니다.",
                p5: "쿠키 이용을 거부할 경우 일부 서비스 이용에 어려움이 있을 수 있으며, 이 문제에 대해서는 마와셀에 대한 책임은 면제됩니다.",
            },
            security: {
                heading: "개인정보의 안전성 확보",
                p1: "마와셀은 이용자의 개인 정보를 보호하기 위해 다양한 노력을 진행합니다.",
                p2: "또한 추가적인 보안문제가 발견될 경우 보안성 확보를 위해 기술적인 장치를 갖추려고 노력하고 있습니다.",
                password: {
                    title: "비밀번호 암호화",
                    text: "비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알수 있고, 운영자는 사용자 암호를 알 수 없습니다.",
                },
                encryption: {
                    title: "개인정보 암호화",
                    text: "중요한 개인정보는 데이터 전송 시 암호화를 하며 전송합니다.",
                },
            },
        },
        en: {
            title: "Privacy Policy",
            purpose: {
                heading: "Purpose",
                p1: "In accordance with the Personal Information Protection Act, Mawasel's Privacy Policy establishes the following handling procedures to protect users' personal information and rights, and to smoothly handle matters related to personal information.",
                p2: "Mawasel will announce any changes to the Privacy Policy through the service notice (or individual notice such as email).",
                p3: "This policy takes effect from March 21, 2024.",
            },
            processPurpose: {
                heading: "Purpose of Processing and Use",
                p1: "Mawasel processes and uses personal information for the following purposes.",
                p2: "Processed personal information will not be used for purposes other than those listed below, and prior consent will be obtained if the purpose of use changes.",
                sections: [
                    {
                        title: "Service Membership Registration and Management",
                        text: "Personal information is processed for purposes including verification of membership intent, personal identification, prevention of fraudulent use by bad members, prevention of unauthorized use, maintenance and management of qualifications, prevention of fraudulent use, various notices and notifications, and record retention for dispute resolution.",
                    },
                    {
                        title: "Handling of Complaints and Affairs",
                        text: "Personal information is processed for purposes including verification of member identity and complaints, contact for fact-finding, and notification of processing results.",
                    },
                    {
                        title: "Contract Performance and Service Provision",
                        text: "Used for the performance of contracts related to service provision and the provision of services.",
                    },
                    {
                        title: "Provision of Goods or Services",
                        text: "Personal information is processed for purposes including service provision and content provision.",
                    },
                    {
                        title: "Utilization for Marketing and Advertising",
                        text: "Personal information is processed for purposes including development of new services and provision of customized services, provision of events and promotional information, service provision and advertising based on statistical characteristics, determination of service effectiveness and access frequency, and statistics on usage.",
                    },
                ],
            },
            retentionPeriod: {
                heading: "Retention and Use Period of Personal Information",
                p1: "Mawasel processes and retains personal information within the retention and use period of personal information under relevant laws and regulations, or within the retention and use period of personal information consented to at the time of collection from the data subject.",
                p2: "The retention and use period for each type of personal information is as follows.",
                items: [
                    "Website membership registration and management: Until 3 months after withdrawal from the service",
                    "Handling of complaints: Until the complaint is processed",
                    "Service provision: Until the service is fully provided",
                    "Utilization for marketing and advertising: Upon withdrawal from the service",
                ],
            },
            destruction: {
                heading: "Destruction of Personal Information",
                p1: "Mawasel destroys personal information when the purpose of processing has been achieved. The procedures and methods are as follows.",
                procedure: {
                    title: "Destruction Procedure",
                    text: "Information entered by users is transferred to a separate DB after the purpose is achieved, and is stored for a certain period or destroyed immediately in accordance with internal policies and other relevant laws and regulations.",
                },
                deadline: {
                    title: "Destruction Deadline",
                    text: "User's personal information: Within 5 days of the end of the retention period if the retention period has elapsed.",
                    text2: "Within 5 days of the date when personal information becomes unnecessary due to achievement of the purpose of processing, discontinuation of the relevant service, or termination of business.",
                    text3: "However, destruction may be exceptionally deferred or the information may be transferred to a separate DB and retained until the retention period in accordance with the personal information retention policy.",
                },
                method: {
                    title: "Destruction Method",
                    text: "For electronic files and databases, destruction is carried out in a manner that makes viewing impossible and records cannot be verified.",
                },
            },
            cookies: {
                heading: "Installation, Operation, and Rejection of Automatic Collection of Personal Information",
                cookieLabel: "Cookies",
                cookieUrl: "https://en.wikipedia.org/wiki/HTTP_cookie",
                p1: " are very small text files sent by the server that operates the service to the user's browser and stored on the user's computer.",
                p2: "They are used to support convenient service use and provide customized services.",
                p3: "The purposes of cookie use are as follows:",
                items: [
                    "Storing user preferences for faster and more convenient use.",
                    "Used for temporary storage when using the lotto service.",
                    "Used for analysis of access frequency, visit time, and visit count of members and non-members.",
                    "Web log analysis using Google Analytics",
                    "Other system usage and advertising analysis",
                ],
                p4: "Users may refuse to allow the use of cookies.",
                p5: "If you refuse to allow cookies, you may experience difficulties using some services. Mawasel is not responsible for such issues.",
            },
            security: {
                heading: "Security of Personal Information",
                p1: "Mawasel makes various efforts to protect users' personal information.",
                p2: "We also strive to implement technical measures to ensure security when additional security issues are discovered.",
                password: {
                    title: "Password Encryption",
                    text: "Passwords are stored and managed in encrypted form. Only the user can know their password, and administrators cannot access user passwords.",
                },
                encryption: {
                    title: "Personal Information Encryption",
                    text: "Important personal information is encrypted during data transmission.",
                },
            },
        },
    };

    const t = content[lang];

    return (
        <div className="mt-10 rounded-lg p-6 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
                <h1 className="text-3xl font-extrabold dark:text-violet-50">
                    {t.title}
                </h1>
                <div className="flex gap-2 rounded-lg border border-gray-300 p-1 dark:border-gray-600">
                    <button
                        onClick={() => setLang("ko")}
                        className={`min-w-[72px] rounded-md px-4 py-2 text-sm font-semibold transition-all ${
                            lang === "ko"
                                ? "bg-violet-600 text-white shadow-md dark:bg-violet-500"
                                : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                        }`}
                    >
                        한글
                    </button>
                    <button
                        onClick={() => setLang("en")}
                        className={`min-w-[72px] rounded-md px-4 py-2 text-sm font-semibold transition-all ${
                            lang === "en"
                                ? "bg-violet-600 text-white shadow-md dark:bg-violet-500"
                                : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
                        }`}
                    >
                        English
                    </button>
                </div>
            </div>

            <h2 className="mb-5 mt-5 text-3xl font-semibold">{t.purpose.heading}</h2>
            <div className="leading-loose">
                <p>{t.purpose.p1}</p>
                <p>{t.purpose.p2}</p>
                <p>{t.purpose.p3}</p>
            </div>

            <hr className="my-6 border-gray-300" />
            <h2 className="mb-5 text-3xl font-semibold">{t.processPurpose.heading}</h2>
            <div className="leading-loose">
                <p>{t.processPurpose.p1}</p>
                <p>{t.processPurpose.p2}</p>
                {t.processPurpose.sections.map((section, i) => (
                    <div key={i}>
                        <h2 className="mb-2 mt-5 text-xl font-bold">{section.title}</h2>
                        <p>{section.text}</p>
                    </div>
                ))}
            </div>

            <hr className="my-6 border-gray-300" />
            <h2 className="mb-5 text-3xl font-semibold">{t.retentionPeriod.heading}</h2>
            <div className="leading-loose">
                <p>{t.retentionPeriod.p1}</p>
                <p>{t.retentionPeriod.p2}</p>
                <ul className="mb-4 ml-4 mt-4 list-inside list-decimal">
                    {t.retentionPeriod.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>

            <hr className="my-6 border-gray-300" />
            <h2 className="mb-5 text-3xl font-semibold">{t.destruction.heading}</h2>
            <div className="leading-loose">
                <p>{t.destruction.p1}</p>
                <h2 className="mb-2 mt-5 text-xl font-bold">{t.destruction.procedure.title}</h2>
                <p>{t.destruction.procedure.text}</p>
                <h2 className="mb-2 mt-5 text-xl font-bold">{t.destruction.deadline.title}</h2>
                <p>{t.destruction.deadline.text}</p>
                <p>{t.destruction.deadline.text2}</p>
                <p>{t.destruction.deadline.text3}</p>
                <h2 className="mb-2 mt-5 text-xl font-bold">{t.destruction.method.title}</h2>
                <p>{t.destruction.method.text}</p>
            </div>

            <hr className="my-6 border-gray-300" />
            <h2 className="mb-5 text-3xl font-semibold">{t.cookies.heading}</h2>
            <div className="leading-loose">
                <p>
                    <Link href={t.cookies.cookieUrl} target="_blank">
                        <span className="link link-hover font-bold dark:text-violet-400">
                            {t.cookies.cookieLabel}
                        </span>
                    </Link>
                    {t.cookies.p1}
                </p>
                <p>{t.cookies.p2}</p>
                <p>{t.cookies.p3}</p>
                <ul className="mb-4 ml-4 mt-4 list-inside list-decimal">
                    {t.cookies.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
                <p>{t.cookies.p4}</p>
                <p>{t.cookies.p5}</p>
            </div>

            <hr className="my-6 border-gray-300" />
            <h2 className="mb-5 text-3xl font-semibold">{t.security.heading}</h2>
            <div className="leading-loose">
                <p>{t.security.p1}</p>
                <p>{t.security.p2}</p>
                <h2 className="mb-2 mt-5 text-xl font-bold">{t.security.password.title}</h2>
                <p>{t.security.password.text}</p>
                <h2 className="mb-2 mt-5 text-xl font-bold">{t.security.encryption.title}</h2>
                <p>{t.security.encryption.text}</p>
            </div>
            <hr className="my-6 border-gray-300" />
        </div>
    );
}
