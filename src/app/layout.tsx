import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ThemeProvider } from '@/contexts/ThemeContext';

export const metadata: Metadata = {
  title: 'MHLab',
  description: 'Introduction of MHLab products',
  keywords: ['MHLab', '개발', '프로젝트', '포트폴리오', '웹 개발', '앱 개발', "development", "portfolio", "web development", "mobile development", "development", "portfolio", "web development", "mobile development"],
  authors: [{ name: 'MHLab' }],
  creator: 'MHLab',
  publisher: 'MHLab',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://mhlab.im',
    siteName: 'MHLab',
    title: 'MHLab - Introduction of MHLab products',
    description: 'Introduction of MHLab products',
    images: [
      {
        url: '/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'MHLab - Products',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MHLab',
    description: 'Introduction of MHLab products',
    images: ['/og-image.webp'],
    creator: '@MHLab',
  },
  icons: {
    icon: [
      {
        url: '/favicon.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/favicon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <head>
        <link rel='icon' href='/favicon.png' />
        <link rel='apple-touch-icon' href='/favicon.png' />
      </head>
      <body className='antialiased bg-white'>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HHYB5GDXKT"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HHYB5GDXKT');
          `}
        </Script>
        
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
