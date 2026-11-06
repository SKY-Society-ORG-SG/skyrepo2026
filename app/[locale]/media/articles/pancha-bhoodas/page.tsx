'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-6 px-4 max-w-7xl">
      <div className="text-center mb-12">
        <h2 className="text-indigo-700 mb-4">{t('akashParticles.title')}</h2>
        <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
      </div>

      <Card className="mb-6 ">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold ">
            {t('akashParticles.introduction.summary')}
          </CardTitle>
          <CardDescription className="text-base xl:text-lg">
            {t('akashParticles.introduction.summary')}
          </CardDescription>
        </CardHeader>
      </Card>

      <ScrollArea className="h-full rounded-md border border-blue-200 p-4 bg-white shadow-lg">
        <Accordion type="single" collapsible className="w-full">
          {/* Pancha Bhoodas Section */}
          <AccordionItem value="pancha-bhoodas">
            <AccordionTrigger className="text-lg text-start font-medium hover:no-underline">
              {t('akashParticles.panchaBhoodasAndAkashParticles.description')}
            </AccordionTrigger>
            <AccordionContent>
              <Card className="mb-4 bg-blue-50">
                <CardContent className="pt-4">
                  <p className="mb-4">
                    {t(
                      'akashParticles.panchaBhoodasAndAkashParticles.description',
                    )}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {(
                      t(
                        'akashParticles.panchaBhoodasAndAkashParticles.elements',
                        {
                          returnObjects: true,
                        },
                      ) as { element: string; description: string }[]
                    ).map((element) => (
                      <Card key={element.element} className="bg-blue-100">
                        <CardContent className="pt-4">
                          <h3 className="font-semibold text-blue-800 mb-1">
                            {element.element}
                          </h3>
                          <p className="">{element.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          {/* Pancha Tanmatras Section */}
          <AccordionItem value="pancha-tanmatras">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">
              {t('akashParticles.panchaTanmatras.description')}
            </AccordionTrigger>
            <AccordionContent>
              <Card className="mb-4 bg-blue-50">
                <CardContent className="pt-4">
                  <p className="mb-4  ">
                    {t('akashParticles.panchaTanmatras.description')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {(
                      t('akashParticles.panchaTanmatras.tanmatras', {
                        returnObjects: true,
                      }) as { tanmatra: string; description: string }[]
                    ).map((tanmatra) => (
                      <Card key={tanmatra.tanmatra} className="bg-blue-100">
                        <CardContent className="pt-4">
                          <h3 className="font-semibold text-blue-800 mb-1">
                            {tanmatra.tanmatra}
                          </h3>
                          <p className=" ">{tanmatra.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          {/* Life Force and Sensations Section */}
          <AccordionItem value="life-force">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">
              {t('akashParticles.lifeForceAndSensations.description')}
            </AccordionTrigger>
            <AccordionContent>
              <Card className="bg-blue-50">
                <CardContent className="pt-4">
                  <p className="mb-4  ">
                    {t('akashParticles.lifeForceAndSensations.description')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(
                      t('akashParticles.lifeForceAndSensations.sensations', {
                        returnObjects: true,
                      }) as { process: string; description: string }[]
                    ).map((sensation) => (
                      <Card key={sensation.process} className="bg-blue-100">
                        <CardHeader>
                          <CardTitle className="text-lg text-blue-800">
                            {sensation.process}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-lg">
                          {sensation.description}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>

          {/* Conclusion Section */}
          <AccordionItem value="conclusion">
            <AccordionTrigger className="text-lg font-medium hover:no-underline">
              {t(
                'akashParticles.conclusionForResearchersAndTruthSeekers.message',
              )}
            </AccordionTrigger>
            <AccordionContent>
              <Card className="bg-blue-50">
                <CardContent className="pt-4">
                  <p className="text-justify">
                    {t(
                      'akashParticles.conclusionForResearchersAndTruthSeekers.message',
                    )}
                  </p>
                </CardContent>
              </Card>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </ScrollArea>
    </div>
  );
};

export default page;
