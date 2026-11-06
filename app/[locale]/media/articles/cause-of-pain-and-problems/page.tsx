'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-center p-6 w-full h-full">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-7xl w-full">
        <h2 className="text-2xl font-bold  text-gray-800 mb-4">
          {t('causeOfPainAndProblems.title')}
        </h2>
        <h4 className="text-lg font-semibold text-primary mb-2 flex text-center justify-center">
          {`- ${t('causeOfPainAndProblems.author')}`}
        </h4>
        <p className=" leading-relaxed mb-4 text-justify">
          {t('causeOfPainAndProblems.description')}
        </p>
        <div className="mt-4">
          <h3 className="text-md font-semibold text-gray-800">Key Points:</h3>
          <ul className="list-disc list-inside  mt-2">
            <li>{t('causeOfPainAndProblems.keyPoints.point1')}</li>
            <li>{t('causeOfPainAndProblems.keyPoints.point2')}</li>
            <li>{t('causeOfPainAndProblems.keyPoints.point3')}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
