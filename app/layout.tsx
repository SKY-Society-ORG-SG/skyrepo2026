import type { Metadata } from 'next';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  title: 'Simplified Kundalini Yoga Society',
  description:
    'A non-profit organisation in Singapore to achieve peace and harmony in society',
  keywords: [
    'About Vethathiri Maharishi',
    'Guru',
    'Simplified Kundalini Yoga',
    'articles',
    'notifications',
    'sky yoga events',
    'sky courses',
  ],
  icons: {
    icon: `${basePath}/images/favicon.png`,
  },
};

// <html> and <body> are rendered by app/[locale]/layout.tsx (so `lang` matches
// the page language) and by app/not-found.tsx. This root layout only exists
// because a root-level not-found page requires one.
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
