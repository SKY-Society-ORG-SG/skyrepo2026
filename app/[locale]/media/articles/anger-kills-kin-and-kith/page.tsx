'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const AngerKillsKinAndKith = () => {
  const { t } = useTranslation('articles', {
    keyPrefix: 'angerKillsKinAndKith',
  });
  return (
    <div className="p-8 max-w-7xl mx-auto my-8 space-y-8 bg-gray-100">
      {/* Introduction */}
      <section className="text-center">
        <h2 className="mb-2">{t('introduction.title')}</h2>
        <p className="text-lg font-semibold text-primary mb-2 flex text-center justify-center">
          {`- ${t('introduction.author')}`}
        </p>
      </section>
      {/* Sections */}
      <section className="space-y-6">
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <p className="text-justify">{t('angerAndMentalFrequency.summary')}</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <p className="text-justify">{t('impactOnTheBody.summary')}</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <p className="text-justify">{t('angerAndRelationships.summary')}</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <p className="text-justify">{t('angerAsTheRootOfAllSins.summary')}</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <p className="text-justify">{t('neutralizingAnger.summary')}</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow">
          <p className="text-justify">{t('husbandWifeRelationship.summary')}</p>
        </div>
      </section>

      {/* Practical Exercise */}
      <section className="bg-yellow-50 p-6 rounded-lg shadow border-l-4 border-yellow-500">
        <h2 className="text-2xl font-semibold text-yellow-700 mb-3">
          {t('practicalExerciseForAngerControl.title')}
        </h2>
        <p className="text-justify">
          {t('practicalExerciseForAngerControl.description')}
        </p>
      </section>

      {/* Practice & Awareness */}
      <section className="bg-blue-50 p-6 rounded-lg shadow border-l-4 border-blue-500">
        <h2 className="text-2xl font-semibold text-blue-700 mb-3">
          {t('practiceAndAwareness.title')}
        </h2>
        <p className="text-justify">{t('practiceAndAwareness.message')}</p>
      </section>
    </div>
  );
};

export default AngerKillsKinAndKith;
