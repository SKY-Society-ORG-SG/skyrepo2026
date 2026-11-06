import { Metadata } from 'next';

import initTranslations from '@app/i18n';
import Footer from '@src/components/footer';
import Header from '@src/components/header';
import ImageSkeleton from '@src/components/imageSkeleton';
import NavigationBar from '@src/components/navigationBar';
import TranslationsProvider from '@src/components/translationProvider';

const i18nNamespaces = ['our-guru'];

export const metadata: Metadata = {
  title: 'About Vethathiri Maharishi | SKY Yoga',
  description: `Discover the life journey, philosophy, and global teachings of Vethathiri Maharishi. Explore SKY Yoga, Kundalini, and the WCSC's vision.`,
  keywords: ['About Vethathiri Maharishi', 'Guru', 'Simplified Kundalini Yoga'],
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

          <div className="container mx-auto lg:px-4 py-4 max-w-7xl">
            {/* Hero Section */}
            <section className="relative flex flex-col items-center text-center py-4">
              <div className="container mx-auto px-6">
                <div className="text-center space-y-4 py-4">
                  <h2 className="font-bold">{t('aboutTitle')}</h2>
                  <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
                </div>
                <p className="max-w-2xl mx-auto mb-4 text-center leading-relaxed">
                  {t('heroDescription')}
                </p>
              </div>
            </section>
            {/* Life Journey Timeline Section */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-6">
                <h2 className="font-semibold text-center underline underline-offset-4 mb-12">
                  {t('timelineTitle')}
                </h2>
                <div className="space-y-12">
                  {/* Younger Age */}
                  <div className="flex flex-col md:flex-row items-center justify-center md:items-center">
                    <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8 mb-8 md:mb-0">
                      <ImageSkeleton
                        src="/images/swamiji1.png"
                        alt="Vethathiri Maharishi in younger age"
                        title="Vethathiri Maharishi in younger age"
                        classname="w-44 h-48 rounded-lg shadow-lg"
                        width={800}
                        height={800}
                      />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                      <h3 className="font-bold mb-4 ">
                        {t('searchForKnowledgeTitle')}
                      </h3>
                      <p className="leading-relaxed text-justify">
                        {t('searchForKnowledgeDescription')}
                      </p>
                    </div>
                  </div>

                  {/* Age 40's */}
                  <div className="flex flex-col md:flex-row-reverse items-center justify-center md:items-center">
                    <div className="md:w-1/2 flex justify-center md:justify-start md:pl-8 mb-8 md:mb-0">
                      <ImageSkeleton
                        src="/images/swamiji2.png"
                        alt="Vethathiri Maharishi"
                        classname="w-44 h-48 rounded-lg shadow-lg"
                        width={800}
                        height={800}
                      />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                      <h3 className=" mb-4 ">{t('philosophyTitle')}</h3>
                      <p className="leading-relaxed text-justify">
                        {t('philosophyDescription')}
                      </p>
                    </div>
                  </div>

                  {/* Older Age (Image 1) */}
                  <div className="flex flex-col md:flex-row items-center justify-center md:items-center">
                    <div className="md:w-1/2 flex justify-center md:justify-end md:pr-8 mb-8 md:mb-0">
                      <ImageSkeleton
                        src="/images/swamiji3.png"
                        alt="Vethathiri Maharishi"
                        title="Vethathiri Maharishi"
                        classname="w-44 h-48 rounded-lg shadow-lg"
                        width={800}
                        height={800}
                      />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                      <h3 className="text-2xl  mb-4 ">
                        {t('spreadingMessageGloballyTitle')}
                      </h3>
                      <p className="leading-relaxed ">
                        {t('spreadingMessageGloballyDescription')}
                      </p>
                    </div>
                  </div>

                  {/* Older Age (Image 2) */}
                  <div className="flex flex-col md:flex-row-reverse items-center justify-center md:items-center">
                    <div className="md:w-1/2 flex justify-center md:justify-start md:pl-8 mb-8 md:mb-0">
                      <ImageSkeleton
                        src="/images/swamiji4.png"
                        alt="Vethathiri Maharishi in old age"
                        title="vethathiri Maharishi"
                        classname="w-44 h-48 rounded-lg shadow-lg"
                        width={800}
                        height={800}
                      />
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                      <h3 className="text-2xl  mb-4 ">{t('legacyTitle')}</h3>
                      <p className="leading-relaxed ">
                        {t('legacyDescription')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Vision and Teachings Section */}
            <section className="py-16 bg-gray-100">
              <div className="container mx-auto">
                <h2 className="text-3xl font-semibold text-center underline underline-offset-4 mb-12">
                  {t('visionTeachingsTitle')}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {/* WCSC Section */}
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="mb-4 ">{t('wcscTitle')}</h3>
                    <p className="text-justify mb-4 ">
                      {t('wcscDescription1')}
                    </p>
                    <p className="text-justify">{t('wcscDescription2')}</p>
                  </div>

                  {/* Kundalini Yoga and Kaya Kalpa Research */}
                  <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="mb-4 ">{t('kundaliniTitle')}</h3>
                    <p className="text-justify mb-4 text-gray-700">
                      {t('kundaliniDescription1')}
                    </p>
                    <p className="text-justify text-gray-700">
                      {t('kundaliniDescription2')}
                    </p>
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
