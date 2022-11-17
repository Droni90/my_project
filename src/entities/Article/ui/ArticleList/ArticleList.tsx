import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import { Text, TextSizeEnum } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import cls from './ArticleList.module.scss';
import { Article, ArticleViewEnum } from '../../model/types/article';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleViewEnum;
}

const getSkeletons = (view: ArticleViewEnum) =>
  new Array(view === ArticleViewEnum.TILE ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleViewEnum.LIST } = props;
  const { t } = useTranslation();

  const renderArticle = (article: Article) => (
    <ArticleListItem
      key={article.id}
      className={cls.card}
      article={article}
      view={view}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, [className, cls[view]])}>
        <Text size={TextSizeEnum.L} title={t('Статьи не найдены')} />
      </div>
    );
  }
  return (
    <div className={classNames(cls.ArticleList, [className, cls[view]])}>
      {articles.length ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
