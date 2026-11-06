'use client';

import {
  ScrollText,
  Leaf,
  History,
  Book,
  Heart,
  Brain,
  CheckCircle,
  LucideIcon,
} from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface SectionHeaderProps {
  children: React.ReactNode;
  icon: LucideIcon; // This type comes from lucide-react for icon components
}

interface BenefitCardProps {
  title: string;
  children: React.ReactNode;
}

const SectionHeader = ({ children, icon: Icon }: SectionHeaderProps) => (
  <div className="flex items-center gap-3 mb-6">
    <Icon className="w-8 h-8 text-indigo-600" />
    <h2 className="text-2xl font-semibold text-indigo-600">{children}</h2>
  </div>
);

const BenefitCard = ({ title, children }: BenefitCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-100 hover:shadow-md transition-shadow">
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-justify">{children}</p>
  </div>
);

const ScienceOfKayaKalpa = () => {
  const { t } = useTranslation('articles', {
    keyPrefix: 'scienceOfKayaKalpa',
  });

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto p-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-indigo-700 mb-4">{t('title')}</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        {/* Introduction */}
        <section className="mb-12 bg-white p-8 rounded-xl shadow-lg">
          <SectionHeader icon={ScrollText}>
            {t('introduction.title')}
          </SectionHeader>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              {t('introduction.definition.withstandAging')}
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              {t('introduction.definition.maintainYouth')}
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
              {t('introduction.definition.postponeDeath')}
            </li>
          </ul>
          <p className=" italic">{t('introduction.summary')}</p>
        </section>

        {/* History */}
        <section className="mb-12">
          <SectionHeader icon={History}>{t('history.title')}</SectionHeader>
          <div className="space-y-4 text-justify">
            <p>{t('history.earlyDevelopment.summary')}</p>
            <p>{t('history.buddhistInfluence.summary')}</p>
            <p>{t('history.siddhaAlchemists.summary')}</p>
          </div>
        </section>

        {/* Discovery by Maharishi */}
        <section className="mb-12">
          <SectionHeader icon={Book}>
            {t('discoveryByMaharishi.title')}
          </SectionHeader>
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm text-justify">
            <p className="">{t('discoveryByMaharishi.earlyInquiry.summary')}</p>
            <p className="">
              {t('discoveryByMaharishi.studyAndPractice.summary')}
            </p>
            <p className="">
              {t('discoveryByMaharishi.teachingKayaKalpa.summary')}
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-12">
          <SectionHeader icon={Heart}>
            {t('spiritualAndPhysicalBenefits.title')}
          </SectionHeader>
          <div className="grid md:grid-cols-2 gap-6">
            <BenefitCard
              title={t('spiritualAndPhysicalBenefits.spiritualBenefits.title')}
            >
              {t('spiritualAndPhysicalBenefits.spiritualBenefits.summary')}
            </BenefitCard>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-100">
              <h3 className="text-xl font-semibold text-gray-700 mb-3">
                {t('spiritualAndPhysicalBenefits.physicalBenefits.title')}
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>
                  {t(
                    'spiritualAndPhysicalBenefits.physicalBenefits.strengthAndVitality',
                  )}
                </li>
                <li>
                  {t(
                    'spiritualAndPhysicalBenefits.physicalBenefits.diseasePrevention',
                  )}
                </li>
                <li>
                  {t(
                    'spiritualAndPhysicalBenefits.physicalBenefits.agingDelay',
                  )}
                </li>
                <li>
                  {t(
                    'spiritualAndPhysicalBenefits.physicalBenefits.enhancedSexualPotency',
                  )}
                </li>
                <li>
                  {t(
                    'spiritualAndPhysicalBenefits.physicalBenefits.overallHealth',
                  )}
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Practice */}
        <section className="mb-12">
          <SectionHeader icon={Brain}>
            {t('practiceOfKayaKalpa.title')}
          </SectionHeader>
          <div className="grid md:grid-cols-2 gap-6">
            <BenefitCard
              title={t(
                'practiceOfKayaKalpa.exercises.nervousSystemToning.name',
              )}
            >
              {t(
                'practiceOfKayaKalpa.exercises.nervousSystemToning.description',
              )}
            </BenefitCard>
            <BenefitCard
              title={t('practiceOfKayaKalpa.exercises.ojasBreath.name')}
            >
              {t('practiceOfKayaKalpa.exercises.ojasBreath.description')}
            </BenefitCard>
          </div>
          <div className="mt-6 space-y-4">
            <p className="text-justify">
              {t('practiceOfKayaKalpa.learningStructure.summary')}
            </p>
            <p className="text-justify">
              {t('practiceOfKayaKalpa.eligibility.summary')}
            </p>
          </div>
        </section>

        {/* Principles */}
        <section className="mb-12">
          <SectionHeader icon={Leaf}>
            {t('principlesOfPractice.title')}
          </SectionHeader>
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <p className="text-justify">
              {t('principlesOfPractice.moderation.summary')}
            </p>
            <p className="text-justify">
              {t('principlesOfPractice.personalOath.summary')}
            </p>
          </div>
        </section>

        {/* Benefits of Practice */}
        <section className="mb-12">
          <SectionHeader icon={Heart}>
            {t('benefitsOfPractice.title')}
          </SectionHeader>
          <div className="space-y-4 bg-white p-6 rounded-lg shadow-sm">
            <p className="text-justify">
              {t('benefitsOfPractice.sexualVitalFluid.summary')}
            </p>
            <p className="text-justify">
              {t('benefitsOfPractice.spiritualEnergy.summary')}
            </p>
            <p className="text-justify">
              {t('benefitsOfPractice.geneticImprovement.summary')}
            </p>
            <p className="text-justify">
              {t('benefitsOfPractice.conceptionControl.summary')}
            </p>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <SectionHeader icon={ScrollText}>
            {t('finalThoughts.title')}
          </SectionHeader>
          <p className="text-justify bg-white p-6 rounded-lg shadow-sm">
            {t('finalThoughts.conclusion.summary')}
          </p>
        </section>
      </div>
    </div>
  );
};

export default ScienceOfKayaKalpa;
