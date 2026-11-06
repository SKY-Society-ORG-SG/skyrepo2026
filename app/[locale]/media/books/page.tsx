import { Metadata } from 'next';
import React from 'react';

import initTranslations from '@app/i18n';
import BookCard from '@src/components/bookCard';
import Footer from '@src/components/footer';
import Header from '@src/components/header';
import NavigationBar from '@src/components/navigationBar';
import TranslationsProvider from '@src/components/translationProvider';

const i18nNamespaces = ['books'];

export const metadata: Metadata = {
  title: 'Vethathiri Maharishi Books | SKY Yoga Books',
  description: `Read and Learn from the best books on Vethathiri Maharishi's Yoga philosophy and teachings.`,
  keywords: [
    'Sky Society',
    'Kundalini Yoga',
    'Vethathiri Maharishi Books',
    'SKY Yoga Books',
  ],
};

const page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const locale = (await params).locale;
  const { resources, t } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="flex flex-col min-h-screen w-full relative bg-gray-100">
        <main className="flex flex-col gap-6 items-center w-full">
          <div className="flex flex-row items-center justify-center w-full lg:items-start lg:flex-col max-w-full mx-auto lg:gap-1 bg-gradient-to-r bg-opacity-30 from-blue-100 from-5% via-blue-100 via-25% to-blue-50 bg-cloud animate-cloud">
            <Header />
            <NavigationBar />
          </div>
          <div className="container mx-auto py-4 md:py-6 lg:py-8 lg:px-8 md:px-8 max-w-7xl">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="lg:text-3xl text-2xl font-bold  dark:text-purple-100">
                  {t('title')}
                </h2>
                <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
              </div>
              <div>
                <h3 className="lg:text-2xl text-xl font-semibold underline underline-offset-4 decoration-blue-800 py-4 lg:py-6">
                  {t('englishBooksTitle')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {t('englishBooks', { returnObjects: true }).map(
                    (book: {
                      id: number;
                      title: string;
                      description: string;
                      image: string;
                    }) => (
                      <BookCard key={book.id} book={book} />
                    ),
                  )}
                </div>
              </div>
              <div>
                <h3 className="lg:text-2xl text-xl font-semibold underline underline-offset-4 decoration-blue-800 py-4 lg:py-6">
                  {t('tamilBooksTitle')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {t('tamilBooks', { returnObjects: true }).map(
                    (book: {
                      id: number;
                      title: string;
                      description: string;
                      image: string;
                    }) => (
                      <BookCard key={book.id} book={book} />
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </TranslationsProvider>
  );
};

export default page;
