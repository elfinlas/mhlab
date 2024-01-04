"use client";

import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { GoPaperclip } from "react-icons/go";
import { FiSend } from "react-icons/fi";
import { SiNaver } from "react-icons/si";
import { FaGithubAlt, FaGithubSquare } from "react-icons/fa";

export interface ContactPageProps {}

interface ToastProps {
  isOpen: boolean;
  message: string;
}

export default function ContactPage(props: ContactPageProps) {
  const [toast, setToast] = useState({ isOpen: false, message: "" });

  const copyToClipboard = async () => {
    if (!toast.isOpen) {
      try {
        await navigator.clipboard.writeText("elfinlas@gmail.com");
        showToast("주소 복사를 하였습니다.");
      } catch (err) {
        console.error("Failed to copy text: ", err);
      }
    }
  };

  const Toast: React.FC<ToastProps> = ({ isOpen, message }) => {
    return (
      <div className={`toast ${isOpen ? "toast-end" : "hidden"}`}>
        <div className="alert alert-info text-white">
          <span>{message}</span>
        </div>
      </div>
    );
  };

  const showToast = (message: string) => {
    setToast({ isOpen: true, message });

    setTimeout(() => {
      setToast({ isOpen: false, message: "" });
    }, 3000); // 3초 후에 토스트를 숨김
  };

  return (
    <>
      <div className="c_pc:p-5">
        <div className="card c_pc:w-96 c_mobile:w-auto bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title font-dongle-header">
              <AiOutlineMail />
              Email
            </h2>

            <p>Gmail : elfinlas</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-secondary text-white"
                onClick={copyToClipboard}
              >
                <GoPaperclip />
                주소 복사
              </button>
              <button
                className="btn btn-info text-white"
                onClick={() => {
                  const email = "elfinlas@gmail.com";
                  const subject = "제목을 입력하세요.";
                  const body = "메일 내용을 입력하세요.";

                  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
                    subject,
                  )}&body=${encodeURIComponent(body)}`;

                  window.location.href = mailtoLink;
                }}
              >
                <FiSend />
                메일 보내기
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid c_pc:grid-cols-4 c_m_pc:grid-cols-2 c_m_pc:gap-5 c_mobile:grid-cols-1 c_mobile:gap-5 ">
          <div className="card c_pc:w-96 c_mobile:w-auto bg-base-100 shadow-xl ">
            <div className="card-body">
              <h2 className="card-title font-dongle-header">
                <SiNaver />
                Naver Blog
              </h2>

              <p>취미 생활 블로그</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-success text-white"
                  onClick={() => {
                    // 버튼을 클릭하면 새 창으로 이동
                    window.open("https://blog.naver.com/wisseraph", "_blank");
                  }}
                >
                  <SiNaver />
                  구경가기
                </button>
              </div>
            </div>
          </div>

          <div className="card c_pc:w-96 c_mobile:w-auto bg-base-100 shadow-xl ">
            <div className="card-body">
              <h2 className="card-title font-dongle-header">
                <FaGithubAlt />
                Dev Blog
              </h2>

              <p>개발 블로그</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-info text-white"
                  onClick={() => {
                    // 버튼을 클릭하면 새 창으로 이동
                    window.open("https://elfinlas.github.io", "_blank");
                  }}
                >
                  <FaGithubAlt />
                  구경가기
                </button>
              </div>
            </div>
          </div>

          <div className="card c_pc:w-96 c_mobile:w-auto bg-base-100 shadow-xl ">
            <div className="card-body">
              <h2 className="card-title font-dongle-header">
                <FaGithubSquare />
                Github
              </h2>

              <p>Github</p>
              <div className="card-actions justify-end">
                <button
                  className="btn btn-neutral text-white"
                  onClick={() => {
                    // 버튼을 클릭하면 새 창으로 이동
                    window.open("https://github.com/elfinlas", "_blank");
                  }}
                >
                  <FaGithubSquare />
                  구경가기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 토스트 컴포넌트를 렌더링 */}
      <Toast isOpen={toast.isOpen} message={toast.message} />
    </>
  );
}
