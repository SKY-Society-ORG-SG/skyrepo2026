import Image from 'next/image';
import React from 'react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import initTranslations from '@app/i18n';
import Footer from '@src/components/footer';
import Header from '@src/components/header';
import NavigationBar from '@src/components/navigationBar';
import TranslationsProvider from '@src/components/translationProvider';

const i18nNamespaces = ['kaya-kalpa-yoga'];

const page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const locale = (await params).locale;
  const { resources, t } = await initTranslations(locale, i18nNamespaces);
  const imageInfo = t('imageInfo', { returnObjects: true }) as {
    src: string;
    alt: string;
    tags: string[];
    description: string;
  }[];
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

          <div className="container mx-auto px-4 py-4 md:py-6 lg:py-8 max-w-7xl">
            <div className="text-center space-y-4 py-8">
              <h2 className="">{t('kayaKalpaYogaTitle')}</h2>
              <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="">
                    {t('whatIsKayaKalpaTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/kaya-kalpa-yoga.png"
                    alt="Kaya Kalpa"
                    width={600}
                    height={600}
                    className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
                  />
                  <p className="">{t('kayaKalpaDescription')}</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    {t('kayaKalpaObjectives', { returnObjects: true }).map(
                      (objective: string, index: number) => (
                        <li key={index}>{objective}</li>
                      ),
                    )}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="">{t('benefitsTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 ">
                    {t('benefitsList', { returnObjects: true }).map(
                      (benefit: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            ></path>
                          </svg>
                          {benefit}
                        </li>
                      ),
                    )}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <Card className="w-full bg-white dark:bg-gray-800 mb-8">
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {imageInfo.map((image, index) => (
                    <div key={index} className="flex flex-col space-y-4">
                      <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-lg">
                        <Image
                          width={600}
                          height={600}
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                        />
                      </div>

                      <div className="space-y-3">
                        <div className="flex flex-wrap gap-2">
                          {image.tags.map((tag, tagIndex) => (
                            <Badge
                              key={tagIndex}
                              variant="secondary"
                              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                          {image.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="">
                  {t('additionalInformationTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4 ">
                  {t('additionalInfoItems', { returnObjects: true }).map(
                    (
                      item: { label: string; description: string },
                      index: number,
                    ) => (
                      <li key={index} className="flex items-center">
                        <Badge variant="secondary" className="mr-2">
                          {item.label}
                        </Badge>
                        {item.description}
                      </li>
                    ),
                  )}
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
        <Footer />
      </div>
    </TranslationsProvider>
  );
};

export default page;
