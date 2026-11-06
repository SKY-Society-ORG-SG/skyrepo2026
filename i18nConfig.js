const i18nConfig = {
  locales: ['en', 'ta'], // 'en' for English, 'ta' for Tamil
  defaultLocale: 'en', // Set the default language
  pages: {
    '*': ['common'], // Load the 'common' translation namespace for all pages
  },
};

// '/about-us' - default locale
// '/en/about-us' - English locale
// '/ta/about-us' - Tamil locale

export default i18nConfig;
