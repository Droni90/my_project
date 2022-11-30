import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSizeEnum } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { List, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { ListRowProps } from 'react-virtualized/dist/es/List';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { Article, ArticleViewEnum } from '../../model/types/article';
import { ArticleListItem } from '../../ui/ArticleListItem/ArticleListItem';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleViewEnum;
  target?: HTMLAttributeAnchorTarget;
  virtualized?: boolean;
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
    virtualized = true,
  } = props;
  const { t } = useTranslation();

  const isList = view === ArticleViewEnum.LIST;
  const itemsPerRow = isList ? 1 : 3;
  const rowCount = isList
    ? articles.length
    : Math.ceil(articles.length / itemsPerRow);

  const rowRender = ({ index, key, style }: ListRowProps) => {
    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

    for (let i = fromIndex; i < toIndex; i += 1) {
      items.push(
        <ArticleListItem
          className={cls.card}
          article={articles[i]}
          view={view}
          target={target}
          key={articles[i].id}
        />
      );
    }
    return (
      <div key={key} style={style} className={cls.row}>
        {items}
      </div>
    );
  };

  if (!isLoading && !articles.length) {
    return (
      <div className={classNames(cls.ArticleList, [className, cls[view]])}>
        <Text size={TextSizeEnum.L} title={t('Статьи не найдены')} />
      </div>
    );
  }
  return (
    // @ts-ignore
    <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
      {({
        width,
        height,
        registerChild,
        onChildScroll,
        isScrolling,
        scrollTop,
      }) => (
        <div
          // @ts-ignore
          ref={registerChild}
          className={classNames(cls.ArticleList, [className, cls[view]])}
        >
          {virtualized ? (
            // @ts-ignore
            <List
              height={height ?? 700}
              rowCount={rowCount}
              rowHeight={isList ? 700 : 330}
              rowRenderer={rowRender}
              width={width ? width - 80 : 700}
              autoHeight
              onScroll={onChildScroll}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
            />
          ) : (
            articles.map((item) => (
              <ArticleListItem
                article={item}
                view={view}
                target={target}
                key={item.id}
                className={cls.card}
              />
            ))
          )}

          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  );
});
