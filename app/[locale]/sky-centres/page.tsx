import initTranslations from '@app/i18n';
import Footer from '@src/components/footer';
import Header from '@src/components/header';
import NavigationBar from '@src/components/navigationBar';
import TranslationsProvider from '@src/components/translationProvider';

const i18nNamespaces = ['sky-centers'];
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
          <div className="container mx-auto lg:px-4 md:px-4 py-4 md:py-6 lg:py-8 max-w-7xl">
            <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-6">
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
                  {t('our_location_title')}
                </h2>
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                  {t('our_location_desc')}
                </p>
              </div>
              {/* Addresses Section */}
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
                {/* Venue*/}
                {/* <VenueLocationCard /> */}
                {/* Singapore Office Address */}
                <div className="bg-white dark:bg-slate-800 shadow-lg rounded-lg p-8">
                  <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">
                    {t('yoga_office')}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-2">
                    {t('yoga_office_address')}
                  </p>
                  <div className="max-w-5xl mx-auto">
                    {/* Google Maps API Script */}
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63820.06727715102!2d103.78464856848733!3d1.3233207184144973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19cf6e6dcc0d%3A0x9c0136ebcb8b7fd6!2sSimplified%20Kundalini%20Yoga%20Society!5e0!3m2!1sen!2sin!4v1729570698297!5m2!1sen!2sin"
                      width={'100%'}
                      className="lg:min-w-[400px] w-full"
                      height="450"
                      loading="lazy"
                    ></iframe>
                  </div>
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
