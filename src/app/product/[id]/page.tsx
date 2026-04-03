import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import { ProductDetailView } from '@/components/product/detail/ProductDetailView';
import {
  isProductPublished,
  productItemList,
  resolveLocalizedString,
  resolveLocalizedStringList,
  resolveProductImages,
} from '@/data/Product';

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const awaitedParams = await params;
  const project = productItemList.find((p) => p.id === awaitedParams.id);

  if (!project || !isProductPublished(project)) {
    return {
      title: 'Project Not Found - MHLab',
    };
  }

  const ogImage =
    resolveProductImages(project.images, 'ko')[0] || '/og-image.png';
  const pageTitle = resolveLocalizedString(project.title, 'ko');
  const descFirst =
    resolveLocalizedStringList(project.description, 'ko')[0] || '';
  const metaDescription =
    descFirst || `MHLab의 ${pageTitle} 프로젝트를 확인해보세요.`;

  return {
    title: `${pageTitle} - MHLab`,
    description: metaDescription,
    openGraph: {
      title: `${pageTitle} - MHLab`,
      description: metaDescription,
      url: `https://elfinlas.com/product/${project.id}`,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      title: `${pageTitle} - MHLab`,
      description: metaDescription,
      images: [ogImage],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const awaitedParams = await params;
  const project = productItemList.find((p) => p.id === awaitedParams.id);

  if (!project || !isProductPublished(project)) {
    notFound();
  }

  return (
    <div
      className={`${manrope.className} min-h-screen bg-white text-gray-900 selection:bg-indigo-100 dark:bg-[oklch(0.145_0_0)] dark:text-slate-100 dark:selection:bg-violet-950 dark:selection:text-violet-100`}
    >
      <ProductDetailView project={project} />
    </div>
  );
}
