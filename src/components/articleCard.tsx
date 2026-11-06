'use client';

import { ChevronDown } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLocalePath } from '@src/hooks/useLocalePath';

interface ArticleProps {
  id: number;
  title: string;
  author: string;
  desc: string;
  route: string;
}

const ArticleCard = ({
  article,
  readMore,
}: {
  article: ArticleProps;
  readMore: string;
}) => {
  const route = useRouter();
  const localizePath = useLocalePath();

  return (
    <div>
      {/* Card Layout */}
      <Card className="relative overflow-hidden transition-all duration-500 bg-white dark:bg-slate-800">
        <CardContent className="p-6">
          {/* Header Section */}
          <div className="space-y-3 mb-4">
            <h2 className="text-blue-900 dark:text-blue-100">
              {article.title}
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                - {article.author}
              </span>
            </div>
          </div>

          {/* Preview of Content */}
          <div className="max-h-24 overflow-hidden">
            <div className="prose dark:prose-invert">
              {article.desc.split('\n\n').map((paragraph, index) => (
                <p
                  key={index}
                  className="mb-4 text-justify dark:text-slate-300 line-clamp-3"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-slate-800 to-transparent" />

          {/* Read More Button */}
          <div className="text-center mt-4 relative">
            <Button
              variant="outline"
              className="group"
              onClick={() => route.push(localizePath(article.route))}
            >
              <span className="mr-2">{readMore}</span>
              <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleCard;
