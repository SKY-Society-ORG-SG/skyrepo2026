import { Menu } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@components/ui/accordion';
import { Button } from '@components/ui/button';
import { ScrollArea } from '@components/ui/scroll-area';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@components/ui/sheet';
import { useLocalePath } from '@src/hooks/useLocalePath';

import LocaleConfigurer from './localeConfigurer';
// import { usePathname } from 'next/navigation';

interface LinkItemProps {
  href: string;
  title: string;
  className?: string;
  children?: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  external?: boolean;
  translatedTitle?: string; // New prop for translated title
}

const LinkItem: React.FC<LinkItemProps> = ({
  href,
  title,
  className,
  children,
  onOpenChange,
  external = false,
  translatedTitle,
}) => {
  const { t } = useTranslation();
  const localizePath = useLocalePath();

  const handleClick = () => {
    if (onOpenChange) {
      onOpenChange(false);
    }
  };

  const linkProps = external
    ? {
        target: '_blank',
        rel: 'noopener noreferrer',
      }
    : {};

  const displayTitle = translatedTitle || t(title);

  return (
    <li>
      {external ? (
        <a
          href={href}
          className={cn(
            'block p-2 text-gray-700 text-base hover:bg-gray-100 rounded-md transition-colors duration-200',
            className,
          )}
          onClick={handleClick}
          {...linkProps}
        >
          {displayTitle}
          {children && <span className="px-2">-</span>}
          {children}
        </a>
      ) : (
        <Link
          href={localizePath(href)}
          className={cn(
            'block p-2 text-gray-700 text-base hover:bg-blue-100 rounded-md transition-colors duration-200',
            className,
          )}
          onClick={handleClick}
        >
          {displayTitle}
          {children && <span className="px-2">-</span>}
          {children}
        </Link>
      )}
    </li>
  );
};

export default function MobileNav() {
  const [open, setOpen] = React.useState(false);
  const { t } = useTranslation();
  const localizePath = useLocalePath();
  // const path = usePathname();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="default"
          className="text-base w-12 h-8 md:w-16 md:h-10 lg:hidden mx-2 text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">{t('nav_toggle_menu', 'Open menu')}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0 bg-slate-50 w-[320px]">
        <div className="p-6">
          <SheetHeader className="mb-6">
            <SheetTitle className="text-xl font-bold text-blue-800">
              {t('headerTitle')}
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="h-[calc(100dvh-8rem)] pb-10 pr-4 flex justify-center items-center">
            <Accordion type="multiple" defaultValue={['home']}>
              {/* Home Section */}
              <AccordionItem value="home">
                <AccordionTrigger className="text-base text-blue-700 font-medium hover:text-blue-900">
                  {t('navHome')}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4">
                    <li>
                      <Link
                        href={localizePath('/')}
                        className="block text-base text-gray-700 hover:bg-blue-100 p-3 rounded-md font-medium transition-colors duration-200"
                      >
                        {t('navSkySocietySingapore')}
                      </Link>
                    </li>
                    <LinkItem href="/our-guru" title="navOurGuruTitle">
                      {t('navOurGuruDescription')}
                    </LinkItem>
                    <p className="block text-base select-none space-y-2 rounded-md p-2 leading-relaxed no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">{`"${t('quotes')}"`}</p>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* About Us Section */}
              <AccordionItem value="about-us">
                <AccordionTrigger className="text-base text-blue-700 font-medium hover:text-blue-900">
                  {t('navAboutUs')}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4">
                    <LinkItem
                      href="/about-sky"
                      title={t('navSkySocietySingapore')}
                    />
                    <LinkItem href="/wcsc" title={t('navWcsc')} />
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Pillars of SKY Yoga Section */}
              <AccordionItem value="sky-yoga">
                <AccordionTrigger className="text-base text-blue-700 font-medium hover:text-blue-900">
                  {t('navSkyYoga')}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4">
                    <LinkItem
                      href="/sky-courses/simplified-sky-exercise"
                      title="navSimplifiedSkyExercise"
                    />
                    <LinkItem
                      href="/sky-courses/simplified-kundalini-yoga"
                      title="navSimplifiedKundaliniYoga"
                    />
                    <LinkItem
                      href="/sky-courses/kaya-kalpa-yoga"
                      title="navKayaKalpaYoga"
                    />
                    <LinkItem
                      href="/sky-courses/introspection"
                      title="navIntrospection"
                    />
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* SKY Courses Section */}
              <AccordionItem value="sky-courses">
                <AccordionTrigger className="text-base text-blue-700 font-medium hover:text-blue-900">
                  {t('navSkyCourses')}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4">
                    <LinkItem
                      href="/courses/in-person"
                      title="navInPersonCoursesTitle"
                    >
                      {t('navInPersonCoursesDescription')}
                    </LinkItem>
                    {/* <LinkItem
                      href="/courses/online"
                      title="nav_online_courses_title"
                    >
                      {t('nav_online_courses_description')}
                    </LinkItem> */}
                    {/* <LinkItem href="/schedule" title="navCourseScheduleTitle">
                      {t('navCourseScheduleDescription')}
                    </LinkItem> */}
                    {/* <LinkItem href="/enroll" title="nav_join_now_title">
                      {t('nav_join_now_description')}
                    </LinkItem> */}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Media and Reading Section */}
              <AccordionItem value="media-reading">
                <AccordionTrigger className="text-base text-blue-700 font-medium hover:text-blue-900">
                  {t('navMediaReading')}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4">
                    <LinkItem href="/media/books" title="navBooksTitle">
                      {t('navBooksDescription')}
                    </LinkItem>
                    <LinkItem href="/media/articles" title="navArticlesTitle">
                      {t('navArticlesDescription')}
                    </LinkItem>
                    <LinkItem href="/media/gallery" title="navGalleryTitle">
                      {t('navGalleryDescription')}
                    </LinkItem>
                    <LinkItem href="/media/videos" title="navVideosTitle">
                      {t('navVideosDescription')}
                    </LinkItem>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Notifications */}
              <AccordionItem value="notifications-forms">
                <AccordionTrigger className="text-base text-blue-700 font-medium hover:text-blue-900">
                  {t('navNotificationsForms')}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4">
                    <LinkItem
                      href="/notifications"
                      title="navNotificationsTitle"
                    ></LinkItem>
                    {/* <LinkItem href="/forms" title="navFormsTitle"></LinkItem> */}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Contact Us */}
              <AccordionItem value="contact-us">
                <AccordionTrigger className="text-base text-blue-700 font-medium hover:text-blue-900">
                  {t('navContactUs')}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4">
                    <LinkItem
                      href="/contact-us"
                      title="navContactInfo"
                    ></LinkItem>
                    <LinkItem
                      href="/#contact-form"
                      title={t('navContactSendMessage')}
                    ></LinkItem>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <div className="py-4  flex items-start justify-start">
                <LocaleConfigurer theme="blue" />
              </div>
            </Accordion>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
}
