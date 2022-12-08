import { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSizeEnum } from '@/shared/ui/Text/Text';
import { ArticleViewEnum } from '../../model/consts/consts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleViewEnum;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleViewEnum) =>
  new Array(view === ArticleViewEnum.TILE ? 9 : 3)
    .fill(0)
    .map((item, index) => (
      <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

export const ArticleList = memo((props: ArticleListProps) => {
  const {
    className,
    articles,
    isLoading,
    target,
    view = ArticleViewEnum.TILE,
  } = props;
  const { t } = useTranslation();

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, [className, cls[view]])}>
        <Text size={TextSizeEnum.L} title={t('Статьи не найдены')} />
      </div>
    );
  }
  return (
    <div className={classNames(cls.ArticleList, [className, cls[view]])}>
      {articles.map((item) => (
        <ArticleListItem
          article={item}
          view={view}
          target={target}
          key={item.id}
          className={cls.card}
        />
      ))}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
