import Image from 'next/image';
import React from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import initTranslations from '@app/i18n';
import Footer from '@src/components/footer';
import Header from '@src/components/header';
import NavigationBar from '@src/components/navigationBar';
import TranslationsProvider from '@src/components/translationProvider';

const i18nNamespaces = ['about'];

const Section = ({
  title,
  children,
  id,
}: {
  title: string;
  children: React.ReactNode;
  id?: string;
}) => (
  <section id={id} className="mb-12 flex flex-col justify-center items-center">
    <h2 className="mb-4 underline underline-offset-4">{title}</h2>
    <div className="space-y-4">{children}</div>
  </section>
);

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
          <div className="container mx-auto px-4 py-8 space-y-12 max-w-7xl">
            {/* Title Section */}
            <div className="text-center space-y-4">
              <h2 className="tracking-tight">{t('title')}</h2>
              <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
            </div>

            {/* Hero Card */}

            <div className="space-y-4 text-justify">
              <div className="flex lg:flex-row md:flex-row flex-col justify-between items-center gap-4 lg:gap-6">
                <Image
                  src={'/images/sky-logo.png'}
                  className="w-52 h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 object-contain"
                  alt="sky logo"
                  width={600}
                  height={600}
                />
                <div className="flex flex-col gap-4">
                  <p className="leading-relaxed">{t('titlePara')}</p>
                  <p className="">{t('aboutwcsc')}</p>
                </div>
              </div>
              <p className="">{t('whatIswcsc')}</p>
              <p className="text-primary text-center">
                {t('wcscAchievements')}
              </p>
              <p className="">{t('skySocietyEstablished')}</p>
            </div>

            {/* Introduction Section */}
            <section className="space-y-6">
              <h2 className="tracking-tight">{t('introduction.heading')}</h2>
              <div className="prose prose-slate text-justify dark:prose-invert max-w-none">
                <p className="">{t('introduction.paragraph1')}</p>
                <p>{t('introduction.paragraph2')}</p>
              </div>
            </section>

            {/* Core Practices Section */}
            <section className="space-y-8">
              <h2 className="tracking-tight">{t('corePractices.heading')}</h2>
              <p className="text-lg ">{t('corePractices.intro')}</p>
              <div className="flex flex-col gap-6">
                {[
                  {
                    title: t('corePractices.simplifiedPhysicalExercises'),
                    description: t(
                      'corePractices.simplifiedPhysicalExercisesDesc',
                    ),
                  },
                  {
                    title: t('corePractices.simplifiedKundaliniYogaMeditation'),
                    description: t(
                      'corePractices.simplifiedKundaliniYogaMeditationDesc',
                    ),
                  },
                  {
                    title: t('corePractices.introspectionTechniques'),
                    description: t('corePractices.introspectionTechniquesDesc'),
                  },
                  {
                    title: t('corePractices.sublimationPractices'),
                    description: t('corePractices.sublimationPracticesDesc'),
                  },
                  {
                    title: t('corePractices.kayakalpaYoga'),
                    description: t('corePractices.kayakalpaYogaDesc'),
                  },
                ].map((practice, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <CardTitle className="text-primary text-xl">
                        {practice.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-justify">{practice.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Benefits Section */}
            <Section title={t('benefits.heading')}>
              <Card className="shadow-lg p-6">
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      {
                        title: t('benefits.enhancedPhysicalHealth'),
                        description: t('benefits.enhancedPhysicalHealthDesc'),
                      },
                      {
                        title: t('benefits.mentalClarity'),
                        description: t('benefits.mentalClarityDesc'),
                      },
                      {
                        title: t('benefits.spiritualAwakening'),
                        description: t('benefits.spiritualAwakeningDesc'),
                      },
                      {
                        title: t('benefits.personalGrowth'),
                        description: t('benefits.personalGrowthDesc'),
                      },
                      {
                        title: t('benefits.longevityVitality'),
                        description: t('benefits.longevityVitalityDesc'),
                      },
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-4">
                        <span className="text-lg font-semibold text-blue-600">
                          {index + 1}.
                        </span>
                        <div>
                          <span className="font-semibold text-gray-800">
                            {benefit.title}
                          </span>
                          <p className="text-justify">{benefit.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Section>

            {/* Conclusion Section */}
            <Card className="border-none">
              <CardHeader>
                <CardTitle className="text-2xl">
                  {t('conclusion.heading')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-justify">{t('conclusion.paragraph')}</p>
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
