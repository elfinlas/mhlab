'use client';

import { useMemo, useState } from 'react';
import { publishedProductList } from '@/data/Product';
import { ProductComingSoon } from '@/components/product/ProductComingSoon';
import { ProductDockNav } from '@/components/product/ProductDockNav';
import { ProductListing } from '@/components/product/ProductListing';
import { ProductPageFooter } from '@/components/product/ProductPageFooter';
import { ProductPageHeader } from '@/components/product/ProductPageHeader';
import { ProductSearchField } from '@/components/product/ProductSearchField';
import { ProductTopNav } from '@/components/product/ProductTopNav';
import { filterProducts } from '@/components/product/productListModel';

export default function ProductListingView() {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = useMemo(
    () => filterProducts(publishedProductList, searchQuery),
    [searchQuery]
  );

  return (
    <>
      <ProductTopNav
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className='product-listing-light-bg min-h-screen px-6 pb-28 pt-32 md:px-12 md:pb-24'>
        <div className='mx-auto max-w-6xl'>
          <ProductPageHeader />

          {/* 여기에 우측 정렬로 마지막 업데이트 날짜를 알려주고 싶어. */}
          <div className='text-right mb-10'>
            <p className='text-sm text-gray-500 dark:text-slate-400'>
              Last updated: 2026.04.04
            </p>
          </div>

          <ProductSearchField
            value={searchQuery}
            onChange={setSearchQuery}
            wrapperClassName='relative mb-10 sm:hidden'
            inputClassName='w-full rounded-xl border-0 bg-gray-50 py-2.5 pl-10 pr-4 text-sm text-gray-900 ring-1 ring-gray-200/60 transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500/25 dark:bg-slate-800/90 dark:text-slate-100 dark:ring-slate-600/50 dark:placeholder:text-slate-500'
          />

          <ProductListing items={filtered} />

          <ProductComingSoon />

          <ProductPageFooter />
        </div>
      </main>

      <ProductDockNav />
    </>
  );
}
