'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { useLocalePath } from '@src/hooks/useLocalePath';

const Header = () => {
  const { t } = useTranslation();
  const localizePath = useLocalePath();
  return (
    <header className="w-full p-2 lg:order-first order-last px-4 lg:px-8">
      <Link
        href={localizePath('/')}
        className="flex flex-row justify-between items-center"
      >
        <div className="w-[calc(100%-58px)] md:w-full lg:w-full flex flex-wrap flex-col lg:mx-0">
          <h1 className="text-blue-800 font-bold text-center text-lg md:text-2xl lg:text-3xl lg:text-left mb-3 lg:mb-1 break-words">
            {t('headerTitle')}
          </h1>
          <p className="lg:text-base hidden md:flex lg:flex text-center justify-center lg:justify-start lg:text-left text-gray-600 break-words">
            {t('headerDescription')}
          </p>
        </div>
        <Image
          src={'/images/sky-logo.png'}
          className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain"
          alt="sky logo"
          width={450}
          height={450}
        />
      </Link>
    </header>
  );
};

export default Header;
