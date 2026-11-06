'use client';

import { BookOpen, Quote } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

interface ParagraphProps {
  index: number;
}

const Paragraph = ({ index }: ParagraphProps): JSX.Element => {
  const { t } = useTranslation('articles', {
    keyPrefix: 'teachingOfPhilosophers',
  });

  return (
    <div className="mb-6 bg-white p-6 rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition-all duration-300">
      <p className="text-justify leading-relaxed">
        {t(`content.${index}.paragraph`)}
      </p>
    </div>
  );
};

const TeachingOfPhilosophers = (): JSX.Element => {
  const { t } = useTranslation('articles', {
    keyPrefix: 'teachingOfPhilosophers',
  });

  const paragraphCount = 4; // Number of paragraphs in the content

  return (
    <div className="min-h-screen py-12 my-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <BookOpen className="w-16 h-16 text-blue-600" />
          </div>
          <h2 className="text-blue-800 mb-6">{t('title')}</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Quote Icon */}
        <div className="flex justify-center mb-8">
          <Quote className="w-12 h-12 text-blue-400" />
        </div>

        {/* Content */}
        <div className="space-y-6">
          {Array.from({ length: paragraphCount }).map((_, index) => (
            <Paragraph key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeachingOfPhilosophers;
