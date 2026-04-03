import { Manrope } from 'next/font/google';
import ProductListingView from '@/components/product/ProductListingView';

//next/font/google에서 Manrope 폰트를 불러와 설정하는 코드입니다.
/*
Manrope({ ... })
빌드 시점에 Google Fonts의 Manrope를 가져와, 프로젝트에 맞게 최적화(자체 호스팅·서브셋 등)한 뒤 manrope 객체를 만듭니다.
subsets: ['latin']
라틴 문자만 포함해 폰트 파일 크기를 줄입니다. (한글은 보통 시스템/다른 폰트로 보일 수 있음.)
display: 'swap'
폰트가 로드되기 전에는 대체 글꼴로 보이다가, 로드되면 Manrope로 바꿉니다. (깜빡임은 있을 수 있지만, 긴 공백 텍스트는 피하는 전략입니다.)
*/
const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

export default function ProjectsPage() {
  return (
    <div
      className={`${manrope.className} min-h-screen bg-white text-gray-900 selection:bg-indigo-100 dark:bg-[oklch(0.145_0_0)] dark:text-slate-100 dark:selection:bg-violet-950 dark:selection:text-violet-100`}
    >
      <ProductListingView />
    </div>
  );
}
