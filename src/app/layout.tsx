import type { Metadata } from "next";
import { Nanum_Gothic, Nanum_Gothic_Coding } from "next/font/google";
import "./globals.css";

const nanumGothic = Nanum_Gothic({
  variable: "--font-nanum-gothic",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const nanumGothicCoding = Nanum_Gothic_Coding({
  variable: "--font-nanum-gothic-coding",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "포트폴리오 | 개발자 포트폴리오",
  description: "창의적인 웹 개발과 사용자 경험에 열정을 가진 개발자의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${nanumGothic.variable} ${nanumGothicCoding.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
