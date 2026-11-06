import Image from 'next/image';
import React from 'react';

import initTranslations from '@app/i18n';
import Footer from '@src/components/footer';
import Header from '@src/components/header';
import NavigationBar from '@src/components/navigationBar';
import TranslationsProvider from '@src/components/translationProvider';

const i18nNamespaces = ['simplified-excercise'];

const page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const locale = (await params).locale;
  const { resources, t } = await initTranslations(locale, i18nNamespaces);
  const exercises = t('exercises', { returnObjects: true });
  const overallBenefits = t('overallBenefits', { returnObjects: true });
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
            <section className="mb-16 space-y-4">
              <div className="text-center space-y-4">
                <h2 className="lg:text-3xl text-2xl font-bold  dark:text-purple-100">
                  {t('exerciseSectionTitle')}
                </h2>
                <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
              </div>

              <h3>{t('exerciseSubtitle')}</h3>
              <p className="leading-relaxed">
                {t('exerciseSectionDescription')}
              </p>
            </section>

            <section className="mb-16">
              <h2 className="mb-8">{t('exerciseTypesTitle')}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {exercises.map(
                  (
                    exercise: {
                      title: string;
                      benefits: string[];
                      image?: string;
                    },
                    index: number,
                  ) => (
                    <div
                      key={index}
                      className="rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105"
                    >
                      {/* Image Section */}
                      {exercise.image && (
                        <Image
                          src={exercise.image}
                          alt={exercise.title}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                          width={800}
                          height={800}
                        />
                      )}

                      {/* Title */}
                      <h3 className=" mb-4">{exercise.title}</h3>

                      {/* Benefits List */}
                      <ul className="list-disc list-inside xl:text-lg text-base">
                        {exercise.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="mb-2">
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ),
                )}
              </div>
            </section>

            <section className="mb-16">
              <h2 className="lg:text-3xl md:text-2xl  mb-8">
                {t('overallBenefitsTitle')}
              </h2>
              <div className="rounded-lg shadow-lg p-8">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {overallBenefits.map((benefit: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-start xl:text-lg text-base"
                    >
                      <svg
                        className="h-6 w-6 text-green-500 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
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
