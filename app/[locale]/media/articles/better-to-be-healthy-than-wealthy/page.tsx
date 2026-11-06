// components/BetterToBeHealthy.js
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const BetterToBeHealthy = () => {
  // Use the namespace that contains your translations
  const { t } = useTranslation('articles', {
    keyPrefix: 'betterToBeHealthyThanWealthy',
  });

  const sections = [
    {
      title: t('content.secTitle'),
      content: t('content.intro.paragraphs', {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t('content.plantsAndAnimals.title'),
      content: t('content.plantsAndAnimals.paragraphs', {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t('content.speciality.title'),
      content: t('content.speciality.paragraphs', {
        returnObjects: true,
      }) as string[],
    },
    {
      title: t('content.conclusion.title'),
      content: t('content.conclusion.paragraphs', {
        returnObjects: true,
      }) as string[],
      quote: t('content.conclusion.quote'),
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-7xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-4  flex text-center justify-center">
          {t('title')}
        </h2>
        <h3 className="text-lg font-semibold text-primary mb-2 flex text-center justify-center">
          {`- ${t('author')}`}
        </h3>
        {sections.map((section, index) => (
          <div key={index} className="mt-6">
            <h3 className="underline border-spacing-2 text-2xl">
              {section.title}
            </h3>
            {section.content.map((paragraph, idx) => (
              <p key={idx} className="text-justify leading-relaxed mb-2 py-3">
                {paragraph}
              </p>
            ))}
            {section.quote && (
              <blockquote className="mt-4 border-l-4 border-blue-500 pl-4 italic text-gray-600">
                {section.quote}
              </blockquote>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BetterToBeHealthy;
