import type { NextConfig } from 'next';
import { DEFAULT_PATCH_NOTE_LOCALE } from './src/data/patch-notes/types';

const nextConfig: NextConfig = {
  /** 클라이언트(PostHog 등)에서 배포 환경 구분 — 로컬·Preview는 비어 있음 */
  env: {
    NEXT_PUBLIC_VERCEL_ENV: process.env.VERCEL_ENV ?? '',
  },
  async redirects() {
    const loc = DEFAULT_PATCH_NOTE_LOCALE;
    return [
      {
        source: '/product/:id/patch-notes',
        destination: `/product/:id/patch_notes/${loc}`,
        permanent: true,
      },
      {
        source: '/product/:id/patch-notes/:slug',
        destination: `/product/:id/patch_notes/${loc}/:slug`,
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
