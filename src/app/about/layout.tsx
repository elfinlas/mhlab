import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - MHLab',
  description: 'MHLab의 개발 경험과 프로젝트 히스토리를 확인해보세요. 다양한 기술 스택과 개발 여정을 소개합니다.',
  openGraph: {
    title: 'About - MHLab',
    description: 'MHLab의 개발 경험과 프로젝트 히스토리를 확인해보세요.',
    url: 'https://elfinlas.com/about',
    images: [
      {
        url: '/about/profile.webp',
        width: 400,
        height: 400,
        alt: 'MHLab 프로필',
      },
    ],
  },
  twitter: {
    title: 'About - MHLab',
    description: 'MHLab의 개발 경험과 프로젝트 히스토리를 확인해보세요.',
    images: ['/about/profile.webp'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 