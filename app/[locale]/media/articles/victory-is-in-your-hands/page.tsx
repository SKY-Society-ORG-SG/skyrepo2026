'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const VictoryInOurHandsPage = () => {
  const { t } = useTranslation('articles', {
    keyPrefix: 'victoryIsInYourHands',
  });
  const paragraphs = t('content.paragraphs', {
    returnObjects: true,
  }) as string[];
  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
        <div className="text-center mb-12">
          <h2 className="text-indigo-700 mb-4">{t('title')}</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        <div className="space-y-4 lg:space-y-8">
          {paragraphs.map((paragraph, index) => (
            <p className="text-justify" key={index}>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VictoryInOurHandsPage;
