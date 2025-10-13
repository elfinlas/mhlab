import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products - MHLab',
  description: 'MHLab이 개발한 다양한 프로젝트들을 확인해보세요. 웹 서비스, 모바일 앱, 다양한 개발 프로젝트를 소개합니다.',
  openGraph: {
    title: 'Products - MHLab',
    description: 'MHLab이 개발한 다양한 프로젝트들을 확인해보세요.',
    url: 'https://mhlab.im/product',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MHLab Products',
      },
    ],
  },
  twitter: {
    title: 'Products - MHLab',
    description: 'MHLab이 개발한 다양한 프로젝트들을 확인해보세요.',
    images: ['/og-image.png'],
  },
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 