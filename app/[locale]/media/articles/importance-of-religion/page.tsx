'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const ImportanceOfReligion = () => {
  const { t } = useTranslation('articles', {
    keyPrefix: 'importanceOfReligion',
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 bg-gray-100 my-8">
      {/* Definition Section */}
      <section className="bg-white p-6 rounded-lg shadow space-y-4">
        <div className="text-center mb-12">
          <h2 className="text-indigo-700 mb-4">{t('title')}</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>
        <h2 className="text-2xl font-semibold text-gray-700">
          {t('definition.title')}
        </h2>
        <p className="text-justify">{t('definition.summary')}</p>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-medium text-gray-700">
            {t('definition.details.title')}
          </h3>
          <p className="text-justify">{t('definition.details.explanation')}</p>

          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-700">
              {t('definition.details.culturalValues.title')}
            </h4>
            <p className="text-justify mt-1">
              {t('definition.details.culturalValues.roots')}
            </p>
            <p className="text-justify italic mt-1">
              {t('definition.details.culturalValues.metaphor')}
            </p>
          </div>
        </div>
      </section>

      {/* Guidance Section */}
      <section className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          {t('guidance.title')}
        </h2>
        <p className="text-justify">{t('guidance.summary')}</p>

        <div className="bg-gray-100 p-4 rounded-lg">
          <p className="text-justify">{t('guidance.details.observation')}</p>

          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-700">
              {t('guidance.details.title')}
            </h4>
            <ul className="list-disc list-inside text-justify mt-2 space-y-2">
              <li>{t('guidance.details.corePrinciples.0')}</li>
              <li>{t('guidance.details.corePrinciples.1')}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Realization of God Section */}
      <section className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          {t('realisationOfGod.title')}
        </h2>
        <p className="text-justify">{t('realisationOfGod.summary')}</p>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="">{t('realisationOfGod.details.title')}</h3>
          <p className="text-justify">
            {t('realisationOfGod.details.interconnection')}
          </p>
        </div>
      </section>
    </div>
  );
};

export default ImportanceOfReligion;
