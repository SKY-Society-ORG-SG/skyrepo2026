'use client';

import { useParams } from 'next/navigation';

import i18nConfig from '@/i18nConfig';

// Pages live under /en/... and /ta/..., so internal links written as
// "/our-guru" need the current language in front: "/ta/our-guru".
export const localizePath = (locale: string, path: string) =>
  path.startsWith('/') ? `/${locale}${path}` : path;

export function useLocalePath() {
  const params = useParams<{ locale?: string }>();
  const locale = params?.locale ?? i18nConfig.defaultLocale;
  return (path: string) => localizePath(locale, path);
}
