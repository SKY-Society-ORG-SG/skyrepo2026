'use client';
import { ArrowRightCircleIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { ComponentType } from 'react';

import { Button } from '@components/ui/button';
import { useLocalePath } from '@src/hooks/useLocalePath';

const PersonalityCourseCard = ({
  title,
  description,
  icon: Icon,
  route,
}: {
  title: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: ComponentType<any>;
  route: string;
}) => {
  const router = useRouter();
  const localizePath = useLocalePath();
  return (
    <div className="flex flex-col w-full justify-between bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="flex flex-col">
        <div className="flex items-center mb-4">
          <Icon className="w-8 h-8 text-blue-900 mr-3 flex-shrink-0" />
          <h3 className="lg:text-xl text-primary font-semibold text-gray-800 break-words w-full text-base">
            {title}
          </h3>
        </div>
        <p className=" break-words">{description}</p>
      </div>
      <div className="flex justify-end">
        <Button
          onClick={() => router.push(localizePath(route))}
          variant="ghost"
          className="p-2 transition-all duration-300"
          aria-label="Learn more"
        >
          <ArrowRightCircleIcon className="h-6 w-6 sm:h-8 sm:w-8" />
        </Button>
      </div>
    </div>
  );
};

export default PersonalityCourseCard;
