'use client';

import { LucideIcon, CircleQuestionMark, Apple } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { BsAndroid } from 'react-icons/bs';
import { TbBrowser } from 'react-icons/tb';
import Link from 'next/link';

/**
 * 프로젝트 카드
 * @param props
 */

export default function ProjectCard(props: {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon | string;
  platform: { title: 'iOS' | 'android' | 'web' }[];
  link: string;
}) {
  const [imageError, setImageError] = useState(false);

  const renderIcon = () => {
    if (typeof props.icon === 'string') {
      // 문자열인 경우 이미지로 처리
      if (imageError) {
        // 이미지 로드 실패 시 circle-question-mark 아이콘 표시
        return (
          <CircleQuestionMark className='w-7 h-7 text-slate-700 dark:text-slate-200' />
        );
      }

      return (
        <Image
          src={props.icon}
          alt={props.title}
          width={48}
          height={48}
          className='w-full h-full '
          onError={() => setImageError(true)}
        />
      );
    } else {
      // LucideIcon인 경우 아이콘 컴포넌트 렌더링
      const IconComponent = props.icon;
      return (
        <IconComponent className='w-7 h-7 text-slate-700 dark:text-slate-200' />
      );
    }
  };

  const renderPlatform = () => {
    return props.platform.map((platform, index) => {
      return (
        <span
          key={index}
          className={`text-xs rounded-full  flex items-center gap-2 px-2 py-1`}
        >
          {platform.title === 'iOS' ? (
            <Apple className='w-5 h-5' />
          ) : platform.title === 'android' ? (
            <BsAndroid className='w-5 h-5' />
          ) : (
            <TbBrowser className='w-5 h-5' />
          )}
          {platform.title.toUpperCase()}
        </span>
      );
    });
  };

  return (
    <Link href={`/product/${props.id}`} className='block'>
      <div className='p-4 rounded-2xl bg-slate-50 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 hover:scale-105 transition-transform duration-200 flex flex-col h-full cursor-pointer'>
      <div className='w-12 h-12 mb-3 flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-700 group-hover:bg-green-100 dark:group-hover:bg-green-900 overflow-hidden'>
        {renderIcon()}
      </div>

      <h3 className='font-semibold text-slate-900 dark:text-white mb-2'>
        {props.title}
      </h3>
      <p className='text-sm text-slate-600 dark:text-slate-300 mb-3 flex-grow'>
        {props.description}
      </p>

      {props.platform && (
        <div className='flex flex-wrap gap-2 mt-auto'>{renderPlatform()}</div>
      )}
      </div>
    </Link>
  );
}
