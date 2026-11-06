import { Info } from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from '@/components/ui/dialog';

type CourseType = 'english' | 'tamil';

// Define an interface for the courses object
interface Courses {
  english: string;
  tamil: string;
}

const courses: Courses = {
  english: '', // Empty string means course not available
  tamil: 'https://forms.gle/ucVNnPjZHtAq3xnW6', // Example URL
};

const CourseSignup = () => {
  const [showDialog, setShowDialog] = useState(false);
  const { t } = useTranslation();

  // Example course availability - replace with your actual logic
  const handleCourseClick = (courseType: CourseType) => {
    if (!courses[courseType]) {
      setShowDialog(true);
      return;
    }
  };

  return (
    <div className="md:col-span-2 flex flex-col sm:flex-row justify-center items-center w-full gap-4 p-4">
      {/* English Course Button */}
      {courses.english ? (
        <Link
          href={courses.english}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-48 items-center justify-center px-4 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Sign up for English Course"
        >
          {t('signUpEnglishCourseButton')}
        </Link>
      ) : (
        <Button
          onClick={() => handleCourseClick('english')}
          className="w-48 bg-blue-600 hover:bg-blue-700 transition-all duration-200"
        >
          {t('signUpEnglishCourseButton')}
        </Button>
      )}

      {/* Tamil Course Button */}
      {courses.tamil ? (
        <Link
          href={courses.tamil}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-48 items-center justify-center px-4 py-3 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Sign up for Tamil Course"
        >
          {t('signUpTamilCourseButton')}
        </Link>
      ) : (
        <Button
          onClick={() => handleCourseClick('tamil')}
          className="w-48 bg-green-600 hover:bg-green-700 transition-all duration-200"
        >
          {t('signUpTamilCourseButton')}
        </Button>
      )}

      {/* Unavailability Dialog */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-blue-600">
              <Info className="w-5 h-5" />
              {t('courseAvailabiltyTitle')}
            </DialogTitle>
            <DialogDescription className="pt-4 text-gray-600 dark:text-gray-300">
              {t('courseAvailabilityMessage')}
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end mt-4">
            <DialogClose asChild>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200">
                {t('closeButton')}
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CourseSignup;
