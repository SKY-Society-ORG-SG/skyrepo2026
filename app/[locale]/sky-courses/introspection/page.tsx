import Image from 'next/image';
import React from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import initTranslations from '@app/i18n';
import Footer from '@src/components/footer';
import Header from '@src/components/header';
import NavigationBar from '@src/components/navigationBar';
import TranslationsProvider from '@src/components/translationProvider';

const i18nNamespaces = ['introspection'];

const page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const locale = (await params).locale;
  const { resources, t } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div className="flex flex-col min-h-screen w-full relative bg-gray-50">
        <main className="flex flex-col gap-6 items-center w-full">
          <div className="flex flex-row items-center justify-center w-full lg:items-start lg:flex-col max-w-full mx-auto lg:gap-1 bg-gradient-to-r bg-opacity-30 from-blue-100 from-5% via-blue-100 via-25% to-blue-50 bg-cloud animate-cloud">
            <Header />
            <NavigationBar />
          </div>
          <div className="container mx-auto px-4 py-4 md:py-6 lg:py-8 max-w-7xl">
            <section className="relative flex flex-col items-center justify-center text-center">
              {/* Card for the Introductory Content */}
              <Card className="mb-12 shadow-lg rounded-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row">
                    {/* Text Section */}
                    <div className="md:w-2/3 pr-4">
                      <CardHeader>
                        <CardTitle className="">
                          <div className="text-center space-y-4">
                            <h2 className="">{t('introTitle')}</h2>
                            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardDescription className="leading-relaxed text-justify  lg:text-xl  mb-6">
                        {t('introText1')}
                      </CardDescription>
                      <CardDescription className="leading-relaxed text-justify justify-evenly  lg:text-xl">
                        {t('introText2')}
                      </CardDescription>
                    </div>
                    {/* Image Section */}
                    <div className="md:w-1/3 flex justify-center items-center">
                      <Image
                        src="/images/introspection-kanchinathan.png"
                        alt="Introspection"
                        className="rounded-lg shadow-lg h-[calc(100%-50px)]"
                        width={400}
                        height={400}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Five Techniques Section */}
            <section className="py-8 bg-gray-50">
              <div className="container mx-auto">
                <h2 className="text-center mb-12">
                  {t('fiveTechniquesTitle')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                    <Image
                      src="/images/introspection-course-1.png"
                      alt="Thought Analysis"
                      className="w-full h-64 object-fill rounded-lg mb-4"
                      width={600}
                      height={600}
                    />
                    <h3 className="mb-4">{t('technique1Title')}</h3>
                    <p>{t('technique1Desc')}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                    <Image
                      src="/images/introspection-course-4.png"
                      alt="Streamlining of Desires"
                      className="w-full h-64 object-fill rounded-lg mb-4"
                      width={800}
                      height={800}
                    />
                    <h3 className="mb-4">{t('technique2Title')}</h3>
                    <p>{t('technique2Desc')}</p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                    <Image
                      src="/images/introspection-course-3.png"
                      alt="Neutralization of Anger"
                      className="w-full h-64 object-fill rounded-lg mb-4"
                      width={800}
                      height={800}
                    />
                    <h3 className="mb-4">{t('technique3Title')}</h3>
                    <p>{t('technique3Desc')}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Introspection Course Levels */}
            <section className="py-16">
              <div className="container px-4 mx-auto max-w-7xl">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                  {t('courseLevelsTitle')}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                  {/* Level 1 Card */}
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                        {t('level1')}
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">
                            {t('level1Meditation')}
                          </h4>
                          <ul className="space-y-2">
                            {t('level1MeditationItems', {
                              returnObjects: true,
                            }).map((item: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <span className=" mr-2">•</span>
                                <span className="text-gray-800">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">
                            {t('level1Lectures')}
                          </h4>
                          <ul className="space-y-2">
                            {t('level1LectureItems', {
                              returnObjects: true,
                            }).map((item: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <span className=" mr-2">•</span>
                                <span className="text-gray-800">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Level 2 Card */}
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                        {t('level2')}
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">
                            {t('level2Meditation')}
                          </h4>
                          <ul className="space-y-2">
                            {t('level2MeditationItems', {
                              returnObjects: true,
                            }).map((item: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <span className=" mr-2">•</span>
                                <span className="text-gray-800">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">
                            {t('level2Lectures')}
                          </h4>
                          <ul className="space-y-2">
                            {t('level2LectureItems', {
                              returnObjects: true,
                            }).map((item: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <span className=" mr-2">•</span>
                                <span className="text-gray-800">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Level 3 Card */}
                  <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                        {t('level3')}
                      </h3>

                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold mb-3">
                            {t('level3Meditation')}
                          </h4>
                          <ul className="space-y-2">
                            {t('level3MeditationItems', {
                              returnObjects: true,
                            }).map((item: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <span className=" mr-2">•</span>
                                <span className="text-gray-800">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-3">
                            {t('level3Lectures')}
                          </h4>
                          <ul className="space-y-2">
                            {t('level3LectureItems', {
                              returnObjects: true,
                            }).map((item: string, index: number) => (
                              <li key={index} className="flex items-start">
                                <span className=" mr-2">•</span>
                                <span className="text-gray-800">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </TranslationsProvider>
  );
};

export default page;
