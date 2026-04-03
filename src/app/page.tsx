import type { Metadata } from 'next';
import HomeContent from '@/components/home/Home';

export const metadata: Metadata = {
  title: 'MHLab Profile',
};

export default function Home() {
  return <HomeContent />;
}
