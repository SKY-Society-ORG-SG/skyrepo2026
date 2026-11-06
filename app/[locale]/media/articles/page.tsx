import initTranslations from '@app/i18n';
import ArticleCard from '@src/components/articleCard';

const i18nNamespaces = ['articles'];
const page = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const locale = (await params).locale;
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <div className="container mx-auto md:px-4 lg:px-6 py-4 md:py-6 lg:py-8 max-w-7xl">
      <div className="space-y-8">
        {t('articles', { returnObjects: true }).map(
          (article: {
            id: number;
            title: string;
            author: string;
            desc: string;
            route: string;
            readMore: string;
          }) => (
            <ArticleCard
              key={article.id}
              article={article}
              readMore={t('readMore')}
            />
          ),
        )}
        <p className="italic text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200 flex items-center gap-1 mt-4">
          <span>{t('referBookTitle')}</span>
          <a
            href="https://www.vethathiri.edu.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 underline underline-offset-2"
          >
            vethathiri.edu.in
          </a>
          <span>{t('referBookDescription')}</span>
        </p>
      </div>
    </div>
  );
};

export default page;
