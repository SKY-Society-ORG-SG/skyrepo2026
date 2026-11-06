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
  <section
    id={id}
    className="mb-12 flex flex-col justify-center text-justify items-center"
  >
    <div className="text-center space-y-4">
      <h2 className="tracking-tight">{title}</h2>
      <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
    </div>
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
            {/* About WCSC Section */}
            <Section id="#about-wcsc" title={t('aboutWcscTitle')}>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <Card className="w-full md:w-1/4 mt-4 lg:mt-0">
                  <CardContent className="p-4">
                    <div className="relative w-full pb-[125%]">
                      <Image
                        width={600}
                        height={600}
                        src="/images/shri-vethathiri-maharishi.png"
                        alt="Shri Vethathri Maharishi"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <p className="text-center mt-2 font-semibold">
                      {t('founder')}
                      <br />
                    </p>
                  </CardContent>
                </Card>

                <div className="w-full md:w-1/2">
                  <h3 className="my-6">{t('founder')}</h3>
                  <p className="mb-4">{t('founderDescription')}</p>
                  <p className="mb-4">{t('globalOutreach')}</p>
                  <p>{t('teachingLegacy')}</p>
                </div>

                <Card className="w-full md:w-1/4 mt-4 lg:mt-0">
                  <CardContent className="p-4">
                    <div className="relative w-full pb-[125%]">
                      <Image
                        width={600}
                        height={600}
                        src="/images/omkara-mandapam.png"
                        alt="Omkara Mandapam"
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <p className="text-center mt-2 font-semibold">
                      Omkara Mandapam
                      <br />
                      (Aliyar, Tamilnadu, India)
                    </p>
                  </CardContent>
                </Card>
              </div>
            </Section>
          </div>
        </main>
        <Footer />
      </div>
    </TranslationsProvider>
  );
};

export default page;
