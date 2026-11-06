'use client';

import { ScrollText, Award } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface PrincipleCardProps {
  number: number;
  translationKey: string;
}

const PrincipleCard = ({
  number,
  translationKey,
}: PrincipleCardProps): JSX.Element => {
  const { t } = useTranslation('articles', {
    keyPrefix: 'vethathirianPrinciplesOfLife',
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-emerald-100 hover:shadow-md transition-all duration-300 flex gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-xl font-bold text-blue-700">{number}</span>
        </div>
      </div>
      <div className="flex items-center">
        <p className="">{t(`principles.list.${translationKey}`)}</p>
      </div>
    </div>
  );
};

const VethathirianPrinciples = (): JSX.Element => {
  const { t } = useTranslation('articles', {
    keyPrefix: 'vethathirianPrinciplesOfLife',
  });

  // Array of principle keys for mapping
  const principleKeys = [
    'worldWithoutWar',
    'economicJustice',
    'fairJudiciary',
    'worldFederalGovernment',
    'cultureReformation',
    'intellectualGuidance',
    'womensRights',
    'natureLaw',
    'avoidRituals',
    'sportsForChildren',
    'causeEffectEducation',
    'magnetismPhilosophy',
    'foodWaterAvailability',
    'universalTruth',
  ];

  return (
    <div className="min-h-screen bg-zinc-100">
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Award className="w-16 h-16 text-blue-600" />
          </div>
          <h2 className="text-blue-800 mb-4">{t('title')}</h2>
          <div className="flex items-center justify-center gap-2 text-blue-600">
            <ScrollText className="w-5 h-5" />
            <h2 className="text-xl font-semibold">{t('principles.title')}</h2>
          </div>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Principles Grid */}
        <div className="grid gap-4 md:gap-6 pb-8">
          {principleKeys.map((key, index) => (
            <PrincipleCard key={key} number={index + 1} translationKey={key} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VethathirianPrinciples;
