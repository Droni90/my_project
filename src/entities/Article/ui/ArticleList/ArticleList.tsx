import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { Article, ArticleViewEnum } from '../../model/types/article';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleViewEnum;
}

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, isLoading, view = ArticleViewEnum.LIST } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.ArticleList, [className, cls[view]])}>
        {new Array(view === ArticleViewEnum.TILE ? 9 : 3)
          .fill(0)
          .map((item, idx) => (
            <ArticleListItemSkeleton
              className={cls.card}
              view={view}
              key={idx}
            />
          ))}
      </div>
    );
  }

  const renderArticle = (article: Article) => (
    <ArticleListItem
      key={article.id}
      className={cls.card}
      article={article}
      view={view}
    />
  );

  return (
    <div className={classNames(cls.ArticleList, [className, cls[view]])}>
      {articles.length ? articles.map(renderArticle) : null}
    </div>
  );
});
