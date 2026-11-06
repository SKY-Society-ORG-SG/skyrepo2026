'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import i18nConfig from '@/i18nConfig';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@components/ui/select';
const LocaleConfigurer = ({ theme }: { theme?: string }) => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (value: string) => {
    const newLocale = value;

    // Remember the choice; the redirect pages at "/" and at un-prefixed URLs
    // (see scripts/postbuild.mjs) read it to pick the language.
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;
    try {
      localStorage.setItem('NEXT_LOCALE', newLocale);
    } catch {
      // storage can be unavailable (private mode); the cookie still works
    }

    // Swap the language segment: /en/our-guru/ -> /ta/our-guru/
    const segments = currentPathname.split('/');
    if (i18nConfig.locales.includes(segments[1])) {
      segments[1] = newLocale;
    } else {
      segments.splice(1, 0, newLocale);
    }
    router.push(segments.join('/'));
  };

  return (
    <Select onValueChange={handleChange} defaultValue={currentLocale}>
      <SelectTrigger
        className={`border-0 text-xs group w-full ${theme === 'blue' ? 'text-blue-700' : ''} px-0 decoration-white focus:ring-0 hover:underline underline-offset-4 shadow-none text-base`}
      >
        <SelectValue>
          <h3 className="">{i18n.t('language')}</h3>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="max-w-[160px]">
            {i18n.t('selectLanguage')}
          </SelectLabel>
          <SelectItem value="en">{i18n.t('englishLanguage')}</SelectItem>
          <SelectItem value="ta">{i18n.t('tamilLanguage')}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LocaleConfigurer;
