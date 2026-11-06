'use client';

import { ChevronRight } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const YogaArticle = () => {
  const { t } = useTranslation('articles', {
    keyPrefix: 'yogaTheScienceOfLiving',
  });

  const sections = Array.from({ length: 11 }, (_, i) => i + 1);
  // eslint-disable-next-line no-console

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Article Header */}
      <div className="mb-8 text-center">
        <h2 className="mb-2">{t('title')}</h2>
        <p className="text-lg text-blue-600">- by {t('author')}</p>
      </div>

      {/* Table of Contents */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl text-blue-500">
            {t('content.tableOfContents')}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <nav>
            <ul className="space-y-2">
              {sections.map((section) => (
                <li key={section} className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary" />
                  <a
                    href={`#section${section}`}
                    className="ml-2 hover:text-primary transition-colors"
                  >
                    {t(`content.section${section}.title`)}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </CardContent>
      </Card>

      {/* Article Content */}
      <ScrollArea className="h-full">
        <article className="space-y-12">
          {sections.map((section) => (
            <section
              key={section}
              id={`section${section}`}
              className="scroll-mt-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    {t(`content.section${section}.title`)}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.keys(
                    t(`content.section${section}.paras`, {
                      returnObjects: true,
                    }),
                  ).map((paraKey) => (
                    <p key={paraKey} className="text-justify leading-relaxed">
                      {t(`content.section${section}.paras.${paraKey}`)}
                    </p>
                  ))}
                </CardContent>
              </Card>
            </section>
          ))}
        </article>
      </ScrollArea>
    </div>
  );
};

export default YogaArticle;
