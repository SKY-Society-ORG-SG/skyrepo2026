'use client';
import { CheckCircle2 } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';

import CourseSignup from './courseSignUp';
import ImageSkeleton from './imageSkeleton';

interface ListItemProps {
  children: React.ReactNode;
  type: 'tick' | 'pointer';
}

interface CourseDescription {
  para1: string;
  para2?: string;
  para3?: string;
  pointer1?: string;
  pointer2?: string;
  pointer3?: string;
}

const ListItem: React.FC<ListItemProps> = ({ children, type }) => {
  if (type === 'tick') {
    return (
      <li className="flex items-start gap-3 py-2 px-3 group hover:bg-white/70 rounded-lg transition-all duration-300 cursor-default">
        <span className="flex-shrink-0 mt-0.5">
          <CheckCircle2 className="w-5 h-5 my-1 text-emerald-500 group-hover:text-emerald-600" />
        </span>
        <span
          style={{ wordBreak: 'break-word' }}
          className="text-gray-800 group-hover:text-gray-900 transition-colors duration-200 cursor-pointer leading-relaxed"
        >
          {children}
        </span>
      </li>
    );
  }

  return (
    <li className="relative py-2 pl-6 group hover:bg-white/70 rounded-lg cursor-default before:absolute before:content-['•'] before:text-gray-800 before:left-2 before:top-2">
      <span
        style={{ wordBreak: 'break-word' }}
        className="text-gray-800 group-hover:text-gray-900 leading-relaxed"
      >
        {children}
      </span>
    </li>
  );
};

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <h3 className="text-xl font-semibold text-gray-900 mb-4 pb-2 border-b border-gray-100">
    {children}
  </h3>
);

const CourseSection = ({
  course,
  imageSrc,
}: {
  course: string;
  imageSrc?: string;
}) => {
  const { t } = useTranslation();

  const objectives = t(`${course}.objectives`, {
    returnObjects: true,
  }) as string[];
  const content = t(`${course}.content`, { returnObjects: true }) as string[];
  const features = t(`${course}.features`, { returnObjects: true }) as string[];
  const duration = t(`${course}.duration`, { returnObjects: true }) as string[];
  const benefits = t(`${course}.benefits`, { returnObjects: true }) as string[];
  const description = t(`${course}.description`, {
    returnObjects: true,
  }) as CourseDescription;
  const eligibility = t(`${course}.eligibility`, {
    returnObjects: true,
  }) as string[];

  return (
    <Card className="mb-8 shadow-lg border w-full lg:p-8 md:p-6 p-0 border-gray-200 bg-gradient-to-br from-white/80 to-white/60 rounded-2xl">
      <CardHeader className="p-4 pb-0">
        <CardHeader className="p-0 pb-0">
          <CardTitle className="text-2xl order-2 lg:order-1 sm:text-3xl font-bold bg-clip-text text-center sm:text-left">
            {t(`${course}.title`)}
          </CardTitle>
        </CardHeader>

        <div className="py-4 leading-relaxed space-y-3 text-gray-800">
          <p className="text-justify">{description.para1}</p>
          <p className="text-justify">{description.para2}</p>
          <p className="text-justify">{description.para3}</p>
          <ul className="list-disc marker:text-gray-800 ml-6">
            {description.pointer1 && (
              <li className="text-left pl-2">{description.pointer1}</li>
            )}
            {description.pointer2 && (
              <li className="text-left pl-2">{description.pointer2}</li>
            )}
            {description.pointer3 && (
              <li className="text-left pl-2">{description.pointer3}</li>
            )}
          </ul>
        </div>
        {imageSrc ? (
          <div className="justify-center items-center flex py-4">
            <ImageSkeleton
              src={imageSrc}
              alt={t(`${course}.title`)}
              width={400}
              height={400}
              classname="object-contain bg-transparent min-h-40"
              title={t(`${course}.title`)}
            />
          </div>
        ) : null}
      </CardHeader>

      <CardContent className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        <div className="space-y-6">
          <div className="group bg-zinc-200 p-4 lg:p-5 rounded-lg">
            <SectionTitle>{t(`${course}.objectivesHeading`)}</SectionTitle>
            <ul className="space-y-2">
              {objectives.map((item, index) => (
                <ListItem key={index} type="tick">
                  {item}
                </ListItem>
              ))}
            </ul>
          </div>

          <div className="group">
            <SectionTitle>{t(`${course}.contentHeading`)}</SectionTitle>
            <ul className="space-y-4">
              {content.map((item, index) => {
                const [mainContent, ...subContents] = item
                  .split('|')
                  .map((str) => str.trim());

                return (
                  <li
                    key={index}
                    className="ml-4 text-gray-800 relative pl-4 before:absolute before:content-['•'] before:left-0"
                  >
                    <span className="font-medium">{mainContent}</span>
                    {subContents.length > 0 && (
                      <ul className="ml-6 mt-2 space-y-2">
                        {subContents.map((subItem, subIndex) => (
                          <li
                            key={subIndex}
                            className="flex items-start relative pl-2"
                          >
                            <span className="mr-2 font-semibold">
                              {String.fromCharCode(97 + subIndex)}.
                            </span>
                            <span>{subItem}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="group bg-zinc-200 p-4 lg:p-5 rounded-lg">
            <SectionTitle>{t(`${course}.featuresHeading`)}</SectionTitle>
            <ul className="space-y-2">
              {features.map((item, index) => (
                <ListItem key={index} type="tick">
                  {item}
                </ListItem>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="group">
            <SectionTitle>{t(`${course}.durationHeading`)}</SectionTitle>
            <ul className="">
              {duration.map((item, index) => (
                <ListItem key={index} type="pointer">
                  {item}
                </ListItem>
              ))}
            </ul>
          </div>

          <div className="group bg-zinc-200 p-4 lg:p-5 rounded-lg">
            <SectionTitle>{t(`${course}.benefitsHeading`)}</SectionTitle>
            <ul className="space-y-2">
              {benefits.map((item, index) => (
                <ListItem key={index} type="tick">
                  {item}
                </ListItem>
              ))}
            </ul>
          </div>

          <div className="group">
            <SectionTitle>{t(`${course}.eligibilityHeading`)}</SectionTitle>
            <ul className="">
              {eligibility.map((item, index) => (
                <ListItem key={index} type="pointer">
                  {item}
                </ListItem>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-2">
          <h3>{t('certificateTitle')}</h3>
          <p className="text-lg font-semibold indent-8 py-8 border-t text-blue-900 border-gray-200 hover:text-blue-800">
            {`* ${t(`${course}.certification`)}`}
          </p>
        </div>

        <div className="md:col-span-2 flex justify-center items-center w-full">
          <CourseSignup />
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseSection;
