'use client';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsFacebook } from 'react-icons/bs';

import { Toaster } from '@components/ui/toaster';
import { useLocalePath } from '@src/hooks/useLocalePath';

import NewsletterForm from './newsLetterForm';

const Footer = () => {
  const { t } = useTranslation();
  const localizePath = useLocalePath();
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {/* Newsletter Section */}
          <div className="space-y-4 flex flex-col justify-center items-start">
            <h3 className="">{t('subscribeTitle')}</h3>
            <NewsletterForm />
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="">{t('quickLinksTitle')}</h3>
            <ul className="space-y-2">
              {/* <li key={t('quickLinksPrivacyPolicy')}>
                <Link
                  href="#"
                  className="text-base hover:text-indigo-400 transition-colors"
                >
                  {t('quickLinksPrivacyPolicy')}
                </Link>
              </li> */}
              {/* <li key={t('quickLinksTermsAndConditions')}>
                <Link
                  href="#"
                  className="text-base hover:text-indigo-400 transition-colors"
                >
                  {t('quickLinksTermsAndConditions')}
                </Link>
              </li> */}
              <li key={t('quickLinksContactUs')}>
                <Link
                  href={localizePath('/contact-us')}
                  className="text-base hover:text-indigo-400 transition-colors"
                >
                  {t('quickLinksContactUs')}
                </Link>
              </li>
              {/* <li key={t('quickLinksRefundPolicy')}>
                <Link
                  href="#"
                  className="text-base hover:text-indigo-400 transition-colors"
                >
                  {t('quickLinksRefundPolicy')}
                </Link>
              </li> */}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="">{t('contactInfoAddressTitle')}</h3>

              <p className="">
                <span className="font-semibold">
                  {t('contactInfoEmailTitle')}
                </span>{' '}
                <a
                  href="mailto:info@skysociety.org.sg"
                  className="text-indigo-400 hover:underline"
                >
                  {t('contactInfoEmail')}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Icons Section */}
        <div className="mt-8 flex justify-center space-x-6">
          {[
            {
              Icon: BsFacebook,
              href: 'https://www.facebook.com/skysocietysingapore/',
            },
          ].map(({ Icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition-colors"
            >
              <Icon size={32} />
            </a>
          ))}
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} {t('skySocietyAllRightsReserved')}
        </div>
      </div>
      <Toaster />
    </footer>
  );
};

export default Footer;
