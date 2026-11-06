import ContactForm from '@src/components/contactForm';
import Footer from '@src/components/footer';
import Header from '@src/components/header';
import ImageSkeleton from '@src/components/imageSkeleton';
import NavigationBar from '@src/components/navigationBar';
import PersonalityDevCourse from '@src/components/personalityDevCourse';
import TranslationsProvider from '@src/components/translationProvider';

import initTranslations from '../i18n';

const i18nNamespaces = ['home'];

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
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center py-4">
              {/* Image Section */}
              <div className="w-full md:w-4/5 lg:w-2/5 mx-auto">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-3xl hover:-translate-y-1">
                  <ImageSkeleton
                    src="/images/swamiji.png"
                    alt="Swamiji"
                    width={400}
                    height={400}
                    title="Swamiji - Vethathiri Maharishi"
                    classname="transition-transform object-cover duration-300 hover:scale-105 lg:h-[313px] h-full"
                  />
                </div>
              </div>
              {/* Text Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h2 className="font-bold text-gray-800 mb-6">
                  {t('heroTitle')}
                </h2>
                <div className="space-y-4 ">
                  <p className="leading-relaxed text-justify">
                    {t('heroParagraph')}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-between py-6 lg:py-12">
              <div className="w-full lg:w-1/2 space-y-6 flex flex-col items-center">
                <p className="leading-normal text-justify">
                  {t('heroParagraph2')}
                </p>
                <p className="leading-normal text-justify">
                  {t('heroParagraph3')}
                </p>
              </div>
              <div className="w-full md:w-4/5 lg:w-2/5">
                <div className="relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-3xl hover:-translate-y-1">
                  <ImageSkeleton
                    src="/images/vethathiri-maharishi.png"
                    alt="Swamiji"
                    width={800}
                    height={800}
                    title="Swamiji - Vethathiri Maharishi"
                    classname="transition-transform object-cover duration-300 hover:scale-105 lg:h-[313px] h-full"
                  />
                </div>
              </div>
            </div>
            <PersonalityDevCourse locale={locale} />
            <div className="w-full mx-auto bg-white rounded-lg p-8 my-10 md:p-10 sm:p-6 text-justify">
              <h2 className="mb-6 text-center">{t('yogaForModernAgeTitle')}</h2>
              <div className="space-y-4">
                <p className="leading-relaxed">{t('yogaForModernAgePara1')}</p>

                <p className="leading-relaxed">{t('yogaForModernAgePara2')}</p>

                <p className="">{t('yogaForModernAgePara3')}</p>

                <blockquote className="italic text-xl font-semibold md:text-lg sm:text-base text-center text-indigo-700 mb-6">
                  {`"${t('yogaForModernAgeClosing')}"`}
                </blockquote>
              </div>
            </div>

            <div
              id="contact-form"
              className="w-full pt-6 pb-8 px-8 bg-white rounded-sm"
            >
              <ContactForm />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </TranslationsProvider>
  );
};

export default page;
