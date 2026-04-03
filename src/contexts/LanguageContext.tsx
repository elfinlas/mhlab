'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { messages } from '@/lib/i18n';
import type { Locale } from '@/lib/i18n';

const LOCALE_STORAGE_KEY = 'elfinlas-locale';

function readStoredLocale(): Locale | null {
  if (typeof window === 'undefined') return null;
  const raw = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (raw === 'ko' || raw === 'en' || raw === 'ja') return raw;
  return null;
}

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('ko');

  useEffect(() => {
    const stored = readStoredLocale();
    if (stored) {
      // localStorage는 클라이언트 마운트 후에만 안전; useState 초기값은 SSR과 맞추기 위해 'ko' 고정
      // eslint-disable-next-line react-hooks/set-state-in-effect -- 위 이유로 하이드레이션 후 로케일 복원
      setLocaleState(stored);
    }
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = messages[locale];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // 키가 없으면 원본 키 반환
      }
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
