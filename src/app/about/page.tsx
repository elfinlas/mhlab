import { Manrope } from 'next/font/google';
import AboutContent from '@/components/about/AboutContent';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

export default function AboutPage() {
  return (
    <div
      className={`${manrope.className} relative min-h-screen overflow-x-hidden bg-[#f8f9fa] text-[#191c1d] antialiased selection:bg-[#ffdad9] selection:text-[#40000a] dark:bg-[#0c0a0b] dark:text-stone-100 dark:selection:bg-violet-950 dark:selection:text-violet-100`}
    >
      <AboutContent />
    </div>
  );
}
