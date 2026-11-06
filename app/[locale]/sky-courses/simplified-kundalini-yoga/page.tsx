import Image from 'next/image';
import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import initTranslations from '@app/i18n';
import Footer from '@src/components/footer';
import Header from '@src/components/header';
import NavigationBar from '@src/components/navigationBar';
import TranslationsProvider from '@src/components/translationProvider';

const i18nNamespaces = ['simplified-kundalini'];
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
          <div className="container mx-auto px-4 py-4 md:py-6 lg:py-8 max-w-7xl">
            <div className="text-center space-y-4 mb-6">
              <h2 className="lg:text-3xl text-2xl font-bold  dark:text-purple-100">
                {t('title')}
              </h2>
              <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12 w-full">
              <Card className="col-span-2 md:col-span-1">
                <CardHeader>
                  <CardTitle className="">{t('introductionTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className=" mb-4">{t('introductionDescription')}</p>
                  <Image
                    width={800}
                    height={800}
                    src="/images/mediation-intro.png"
                    alt={t('introductionTitle')}
                    className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
                  />
                </CardContent>
              </Card>

              <Card className="col-span-2 md:col-span-1">
                <CardHeader>
                  <CardTitle className="">
                    {t('mindFrequenciesTitle')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 ">
                    {t('mindFrequenciesList', { returnObjects: true }).map(
                      (
                        frequency: { label: string; description: string },
                        index: number,
                      ) => (
                        <li key={index}>
                          <span className="font-semibold">
                            {frequency.label}:
                          </span>{' '}
                          {frequency.description}
                        </li>
                      ),
                    )}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="agna" className="">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
                <TabsTrigger value="agna" className="p-2">
                  {t('agnaMeditationTitle')}
                </TabsTrigger>
                <TabsTrigger value="shanthi" className="p-2">
                  {t('shanthiYogaTitle')}
                </TabsTrigger>
                <TabsTrigger value="thuriya" className="p-2">
                  {t('thuriyaMeditationTitle')}
                </TabsTrigger>
                <TabsTrigger value="thuriatheetha" className="p-2">
                  {t('thuriatheethaYogaTitle')}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="agna" className="py-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="">
                      {t('agnaMeditationTitle')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8">
                    <p className="">{t('agnaMeditationDescription')}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="shanthi" className="py-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="">{t('shanthiYogaTitle')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className=" mb-4">{t('shanthiYogaDescription')}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="thuriya" className="py-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="">
                      {t('thuriyaMeditationTitle')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className=" mb-4">{t('thuriyaMeditationDescription')}</p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="thuriatheetha" className="py-12">
                <Card>
                  <CardHeader>
                    <CardTitle className="">
                      {t('thuriatheethaYogaTitle')}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className=" mb-4">{t('thuriatheethaYogaDescription')}</p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardHeader>
                  <CardTitle className="">{t('whenToMeditateTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{t('whenToMeditateDescription')}</p>
                  <Image
                    width={800}
                    height={800}
                    src="/images/mediation.png"
                    alt={t('when to meditate')}
                    className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="">{t('benefitsTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {t('benefitsList', { returnObjects: true }).map(
                      (benefit: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0"
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

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="">{t('conclusionTitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className=" mb-4">{t('conclusionDescription')}</p>
                <blockquote className="border-l-4 border-indigo-500 pl-4 italic text-gray-600">
                  {t('conclusionQuote')}
                </blockquote>
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
