'use client';

import { ServiceCard } from '@/components/product/ServiceCard';
import type { ProductListItem } from '@/components/product/productListModel';
import {
  resolveLocalizedString,
  resolveLocalizedStringList,
  resolveProductImages,
} from '@/data/Product';
import { editorialProductTitle } from '@/components/product/productListModel';
import { useLanguage } from '@/contexts/LanguageContext';

type ProductListingProps = {
  items: ProductListItem[];
};

export function ProductListing({ items }: ProductListingProps) {
  const { t, locale } = useLanguage();

  return (
    <div className='space-y-12'>
      {items.map((project, index) => {
        const titleStr = resolveLocalizedString(project.title, locale);
        return (
          <ServiceCard
            key={project.id}
            project={project}
            index={index}
            viewDetailsLabel={t('productListing.viewDetails')}
            heroSrc={
              resolveProductImages(project.images, locale)[0] ??
              '/og-image.webp'
            }
            heading={editorialProductTitle(titleStr)}
            categoryLabel={resolveLocalizedString(project.category, locale)}
            teaser={
              resolveLocalizedStringList(project.description, locale)[0] ?? ''
            }
            bullets={resolveLocalizedStringList(
              project.mainFeatures,
              locale
            ).slice(0, 3)}
            supportedLocales={project.supportedLocales}
          />
        );
      })}
      {items.length === 0 ? (
        <p className='py-12 text-center text-gray-500 dark:text-slate-400'>
          {t('productListing.noResults')}
        </p>
      ) : null}
    </div>
  );
}
