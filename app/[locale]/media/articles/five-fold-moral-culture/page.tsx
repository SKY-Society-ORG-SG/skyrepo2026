'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const FiveFoldMoralCulture = () => {
  const { t } = useTranslation('articles', {
    keyPrefix: 'fiveFoldMoralCulture',
  });

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8 my-8 bg-gray-100 rounded-lg shadow-md">
      {/* Principle 1 */}
      <section className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-center py-4">{t('title')}</h2>
        <h3 className="text-2xl font-semibold text-gray-700">
          {t('principle1.description')}
        </h3>
        <p className="text-justify">{t('principle1.details.summary')}</p>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-xl font-medium text-gray-700">
            {t('principle1.details.comparisonWithAnimals.summary')}
          </h3>
          <ul className="list-disc list-inside mt-2 text-justify space-y-2">
            <li>{t('principle1.details.comparisonWithAnimals.actions.0')}</li>
            <li>{t('principle1.details.comparisonWithAnimals.actions.1')}</li>
            <li>{t('principle1.details.comparisonWithAnimals.actions.2')}</li>
            <li>{t('principle1.details.comparisonWithAnimals.actions.3')}</li>
          </ul>
          <p className="mt-3 text-justify">
            {t(
              'principle1.details.comparisonWithAnimals.geneticCenter.summary',
            )}
          </p>
        </div>
      </section>

      {/* Principle 2 */}
      <section className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          {t('principle2.description')}
        </h2>
        <p className="text-gray-600">{t('principle2.details.summary')}</p>
      </section>

      {/* Principle 3 */}
      <section className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          {t('principle3.description')}
        </h2>
        <p className="text-gray-600">{t('principle3.details.summary')}</p>
      </section>

      {/* Principle 4 */}
      <section className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          {t('principle4.description')}
        </h2>
        <p className="text-gray-600">{t('principle4.details.summary')}</p>
      </section>

      {/* Principle 5 */}
      <section className="bg-white p-6 rounded-lg shadow space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          {t('principle5.description')}
        </h2>
        <p className="text-justify">{t('principle5.details.summary')}</p>
      </section>

      {/* Conclusion */}
      <section className="bg-blue-50 p-6 rounded-lg shadow border-l-4 border-blue-500">
        <h2 className="text-2xl font-semibold text-blue-700">Conclusion</h2>
        <p className="text-justify">{t('conclusion.summary')}</p>
      </section>
    </div>
  );
};

export default FiveFoldMoralCulture;
