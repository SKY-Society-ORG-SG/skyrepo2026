'use client';

import { Activity, Brain, Battery, Search } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import PersonalityCourseCard from './personalityCourseCard';

const PersonalityDevCourse = ({ locale }: { locale: string }) => {
  const { t } = useTranslation();
  const courses = [
    {
      title: `${t('simplifiedPhysicalExercise')}`,
      description: `${t('simplifiedPhysicalExerciseDesc')}`,
      icon: Activity,
      route: '/sky-courses/simplified-sky-exercise',
    },
    {
      title: `${t('simplifiedKundaliniYoga')}`,
      description: `${t('simplifiedKundaliniYogaDesc')}`,
      icon: Brain,
      route: '/sky-courses/simplified-kundalini-yoga',
    },
    {
      title: `${t('kayaKalpaYoga')}`,
      description: `${t('kayaKalpaYogaDesc')}`,
      icon: Battery,
      route: '/sky-courses/kaya-kalpa-yoga',
    },
    {
      title: `${t('introspection')}`,
      description: `${t('introspectionDesc')}`,
      icon: Search,
      route: '/sky-courses/introspection',
    },
  ];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-8">{t('personslaityDevCourseTitle')}</h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ${locale === 'ta' ? 'xl:grid-cols-2' : 'xl:grid-cols-4'} gap-8`}
        >
          {courses.map((course, index) => (
            <PersonalityCourseCard
              key={index}
              route={course.route}
              description={course.description}
              icon={course.icon}
              title={course.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PersonalityDevCourse;
