import localFont from 'next/font/local';
import '@themes/globals.css';

import i18nConfig from '@/i18nConfig';

const geistSans = localFont({
  src: '../fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: '../fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

// Pre-render every page once per language (/en/... and /ta/...).
export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const locale = (await params).locale;
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-900 dark:text-white bg-slate-50 dark:bg-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
