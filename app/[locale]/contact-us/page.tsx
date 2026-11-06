import { ExternalLink, MapPinIcon, PhoneIcon } from 'lucide-react';
import { Metadata } from 'next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import initTranslations from '@app/i18n';
import Footer from '@src/components/footer';
import Header from '@src/components/header';
import NavigationBar from '@src/components/navigationBar';
import TranslationsProvider from '@src/components/translationProvider';
import VenueLocationCard from '@src/components/venueLocationCard';

const i18nNamespaces = ['contact-us'];

export const metadata: Metadata = {
  title: 'Simplified Kundalini Yoga Society - Contact Us',
  description: `Reach Our Sky masters and our venue for further enquiries.`,
  keywords: [
    'Darma Muneeswaran Temple SKY Center',
    'Simplified Kundalini Yoga Registered Office',
    'Sinagpore',
    'Course Enquiry Contact Numbers',
    'SKY Masters HP ',
  ],
};

const page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const locale = (await params).locale;
  const { resources, t } = await initTranslations(locale, i18nNamespaces);
  const contactPersons = t('contact.contactPersons', {
    returnObjects: true,
  }) as string[];

  const phnumbers = t('contact.contactNumbers', {
    returnObjects: true,
  }) as string[];

  const address = t('contact.venue.address', {
    returnObjects: true,
  }) as string[];

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
            {/* Page Title */}
            <div className="text-center space-y-2 pb-8">
              <h2 className="font-bold">{t('contact.title')}</h2>
              <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
            </div>

            {/* Address and Venue Section */}
            <VenueLocationCard address={address} />

            {/* Contact Information */}
            <div className="flex flex-row items-center justify-center mb-12 w-full">
              <Card className="shadow-md hover:shadow-lg transition-shadow w-full lg:p-12 p-6">
                <CardContent className="flex lg:flex-row md:flex-row flex-col items-start xl:gap-14 gap-8 justify-between">
                  <div className="space-y-3  w-full">
                    <CardTitle className="flex items-center gap-2">
                      <PhoneIcon className="h-5 w-5 text-blue-600" />
                      {t('contact.phoneTitle')}
                    </CardTitle>
                    {contactPersons.map((person, index) => (
                      <Card key={index} className="bg-secondary">
                        <CardContent className="pt-6 justify-between items-start flex">
                          <div className="flex justify-between gap-2 items-center flex-wrap">
                            <p className="">{person}</p>
                            <span> - </span>
                            {phnumbers[index] && (
                              <span className="text-primary text-base xl:text-lg ">
                                {phnumbers[index]}
                              </span>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Yoga Society Registered Office*/}

            <Card className="w-full overflow-hidden mb-12">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPinIcon className="h-5 w-5 text-blue-600" />
                  {t('contact.locationTitle')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <p>{t('contact.officeAddress')}</p>
                  <p>{t('contact.address')}</p>
                  <p>{t('contact.phone')}</p>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href="https://www.vethathiri.edu.in/pages/wcsc"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Visit WCSC website
                  </a>

                  <a
                    href="https://www.vethathiri.edu.in/pages/sky-centres-locator"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                    Global Vethathiri SKY Centers Locator
                  </a>
                </div>
              </CardContent>
            </Card>
            <Card className="mb-12 shadow-md">
              <CardHeader>
                <CardTitle className="">
                  {t('contact.membership.title')}
                </CardTitle>
              </CardHeader>
              <CardContent className="">
                <p className="">{t('contact.membership.description')}</p>
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
