import initTranslations from '@app/i18n';
import Footer from '@src/components/footer';
import Header from '@src/components/header';
import NavigationBar from '@src/components/navigationBar';
import TranslationsProvider from '@src/components/translationProvider';
import YoutubeChannelGallery from '@src/components/youtubeChannelGallery';
import YouTubeVideoGallery from '@src/components/youtubeVideoGallery';

const i18nNamespaces = ['videos'];

const page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const locale = (await params).locale;
  const { resources, t } = await initTranslations(locale, i18nNamespaces);
  const categories = t('categories', { returnObjects: true });
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
            <YoutubeChannelGallery />

            {/* <YouTubeVideoGallery
              categories={categories}
              closeModal={t('closeModal')}
            /> */}
          </div>
        </main>
        <Footer />
      </div>
    </TranslationsProvider>
  );
};

export default page;
