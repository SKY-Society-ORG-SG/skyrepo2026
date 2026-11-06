'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@lib/utils';
import { useLocalePath } from '@src/hooks/useLocalePath';

import InteractiveHoverCard from './interactiveHoverCard';
import LocaleConfigurer from './localeConfigurer';
import MobileNav from './mobileNav';

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  Omit<React.ComponentPropsWithoutRef<'a'>, 'href'> & { href: string }
>(({ className, title, children, href, ...props }, ref) => {
  const localizePath = useLocalePath();
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          href={localizePath(href)}
          className={cn(
            'block select-none space-y-2 rounded-md p-2 text-lg leading-relaxed no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className="text-base font-semibold leading-normal text-blue-800">
            {title}
          </div>
          {children ? (
            <p className="line-clamp-2 text-base leading-relaxed overflow-clip">
              {children}
            </p>
          ) : null}
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';

const NavigationBar = () => {
  const { t } = useTranslation('common');
  const localizePath = useLocalePath();

  const path = usePathname();

  const isPathIncludesTranslation = path.includes('/ta');
  return (
    <div className="lg:bg-blue-600 lg:text-white lg:w-full">
      <NavigationMenu className="w-full px-4 lg:flex hidden [&_div.absolute]:right-[26rem] [&_div.absolute]:top-12">
        {/* Home */}
        <NavigationMenuItem>
          <InteractiveHoverCard
            triggerContent={<>{t('navHome')}</>}
            openDelay={200}
            closeDelay={150}
            className={`hover:underline ${isPathIncludesTranslation ? '' : 'px-1'} text-base underline-offset-4 decoration-white`}
            contentClassName="md:w-[430px] lg:w-full w-full"
          >
            <ul className="grid gap-3 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href={localizePath('/')}
                  >
                    <div className="mb-2 mt-4 text-lg font-medium text-blue-800">
                      {t('navSkySocietySingapore')}
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      {t('navSkySocietyDescription')}
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/our-guru" title={t('navOurGuruTitle')}>
                {t('navOurGuruDescription')}
              </ListItem>
              <p className="block text-base select-none space-y-2 rounded-md p-2 leading-relaxed no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">{`"${t('quotes')}"`}</p>
            </ul>
          </InteractiveHoverCard>
        </NavigationMenuItem>

        {/* About Us */}
        <NavigationMenuItem>
          <InteractiveHoverCard
            triggerContent={<> {t('navAboutUs')}</>}
            openDelay={200}
            closeDelay={150}
            className={`hover:underline ${isPathIncludesTranslation ? '' : 'px-1'} text-base underline-offset-4 decoration-white`}
            contentClassName="md:w-[430px] lg:w-full w-full"
          >
            <ul className="grid w-[240px] gap-3">
              <ListItem href="/about-sky">
                {t('navSkySocietySingapore')}
              </ListItem>
              {/* <ListItem href="/sky-centres">
                {t('nav_sky_society_centres')}
              </ListItem> */}
              <ListItem href="/wcsc">{t('navWcsc')}</ListItem>
            </ul>
          </InteractiveHoverCard>
        </NavigationMenuItem>

        {/* Pillars of SKY Yoga */}
        <NavigationMenuItem>
          <InteractiveHoverCard
            triggerContent={<> {t('navSkyYoga')}</>}
            openDelay={200}
            closeDelay={150}
            className={`hover:underline ${isPathIncludesTranslation ? '' : 'px-1'} text-base underline-offset-4 decoration-white`}
            contentClassName="md:w-[430px] lg:w-full w-full"
          >
            <ul className="grid w-[400px] gap-3 md:w-[450px] lg:grid-cols-1 xl:grid-cols-2 lg:w-[450px] xl:w-[520px]">
              <ListItem href="/sky-courses/simplified-sky-exercise">
                {t('navSimplifiedSkyExercise')}
              </ListItem>
              <ListItem href="/sky-courses/simplified-kundalini-yoga">
                {t('navSimplifiedKundaliniYoga')}
              </ListItem>
              <ListItem href="/sky-courses/kaya-kalpa-yoga">
                {t('navKayaKalpaYoga')}
              </ListItem>
              <ListItem href="/sky-courses/introspection">
                {t('navIntrospection')}
              </ListItem>
            </ul>
          </InteractiveHoverCard>
        </NavigationMenuItem>

        {/* SKY Courses */}
        <NavigationMenuItem>
          <InteractiveHoverCard
            triggerContent={<>{t('navSkyCourses')}</>}
            openDelay={200}
            closeDelay={150}
            className={`hover:underline ${isPathIncludesTranslation ? '' : 'px-1'} text-base underline-offset-4 decoration-white`}
            contentClassName="md:w-[430px] lg:w-full w-full"
          >
            <ul className="grid grid-cols-1 gap-3 lg:grid-cols-1 xl:grid-cols-1 w-[290px]">
              <ListItem
                href="/courses/in-person"
                title={t('navInPersonCoursesTitle')}
              >
                {t('navInPersonCoursesDescription')}
              </ListItem>

              {/* <ListItem href="/schedule" title={t('navCourseScheduleTitle')}>
                {t('navCourseScheduleDescription')}
              </ListItem> */}
            </ul>
          </InteractiveHoverCard>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <InteractiveHoverCard
            triggerContent={<>{t('navGalleryTitle')}</>}
            openDelay={200}
            closeDelay={150}
            className={`hover:underline ${isPathIncludesTranslation ? '' : 'px-1'} text-base underline-offset-4 decoration-white`}
            contentClassName="md:w-[430px] lg:w-full w-full"
          >
            <ul className="grid xl:grid-cols-1 grid-cols-1 w-[400px] gap-3 md:w-[450px]">
              <ListItem href="/media/gallery" title={t('navGalleryTitle')}>
                {t('navGalleryDescription')}
              </ListItem>
            </ul>
          </InteractiveHoverCard>
        </NavigationMenuItem>

        {/* Media and Reading */}
        <NavigationMenuItem>
          <InteractiveHoverCard
            triggerContent={<>{t('navMediaReading')}</>}
            openDelay={200}
            closeDelay={150}
            className={`hover:underline ${isPathIncludesTranslation ? '' : 'px-1'} text-base underline-offset-4 decoration-white`}
            contentClassName="md:w-[430px] lg:w-full w-full"
          >
            <ul className="grid xl:grid-cols-1 grid-cols-1 w-[400px] gap-3 md:w-[450px]">
              {/* <ListItem href="/media/books" title={t('navBooksTitle')}>
                {t('navBooksDescription')}
              </ListItem> */}
              <ListItem href="/media/videos" title={t('navVideosTitle')}>
                {t('navVideosDescription')}
              </ListItem>
              <ListItem href="/media/articles" title={t('navArticlesTitle')}>
                {t('navArticlesDescription')}
              </ListItem>
            </ul>
          </InteractiveHoverCard>
        </NavigationMenuItem>

        {/* Important Notifications and Forms */}
        <NavigationMenuItem>
          <InteractiveHoverCard
            triggerContent={<>{t('navNotificationsForms')}</>}
            openDelay={200}
            closeDelay={150}
            className={`hover:underline ${isPathIncludesTranslation ? '' : 'px-1'} text-base underline-offset-4 decoration-white`}
            contentClassName="md:w-[430px] lg:w-full w-full"
          >
            <ul className="grid w-[240px] gap-3 md:w-[260px]">
              <ListItem href="/notifications">
                {t('navNotificationsTitle')}
              </ListItem>
              {/*<ListItem href="/forms">{t('navFormsTitle')}</ListItem> */}
            </ul>
          </InteractiveHoverCard>
        </NavigationMenuItem>
        {/* Contact Us */}
        <NavigationMenuItem>
          <InteractiveHoverCard
            triggerContent={<>{t('navContactUs')}</>}
            openDelay={200}
            closeDelay={150}
            className={`hover:underline ${isPathIncludesTranslation ? '' : 'px-1'} text-base underline-offset-4 decoration-white`}
            contentClassName="md:w-[430px] lg:w-full w-full"
          >
            <ul className="grid w-[240px] gap-3">
              <ListItem href="/contact-us">{t('navContactInfo')}</ListItem>
              <ListItem href="/#contact-form">
                {t('navContactSendMessage')}
              </ListItem>
            </ul>
          </InteractiveHoverCard>
        </NavigationMenuItem>

        {/* Language Config */}
        <NavigationMenuItem className="px-1">
          <LocaleConfigurer />
        </NavigationMenuItem>
      </NavigationMenu>
      <MobileNav />
    </div>
  );
};

export default NavigationBar;
