// components/BetterToBeHealthy.js
'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

const TheThirdEye: React.FC = () => {
  const { t } = useTranslation('articles', {
    keyPrefix: 'theThirdEyeAThousandPetalsInOurBrain',
  });

  // Define the sections based on your JSON structure
  const sections = [
    {
      title: t('content.section1.title'),
      paras: [
        t('content.section1.paras.para1'),
        t('content.section1.paras.para2'),
        t('content.section1.paras.para3'),
        t('content.section1.paras.para4'),
      ],
    },
    {
      title: t('content.section2.title'),
      paras: [
        t('content.section2.paras.para1'),
        t('content.section2.paras.para2'),
        t('content.section2.paras.para3'),
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-7xl w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-4 flex text-center justify-center">
          {t('title')}
        </h2>
        <h4 className="text-lg font-semibold text-primary mb-2 flex text-center justify-center">
          {`- ${t('author')}`}
        </h4>
        {sections.map((section, index) => (
          <div key={index} className="mt-6">
            <h3 className="text-2xl font-semibold text-gray-800 underline border-spacing-2">
              {section.title}
            </h3>
            {section.paras.map((paragraph, idx) => (
              <p key={idx} className="py-2 leading-relaxed mb-2 text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheThirdEye;
