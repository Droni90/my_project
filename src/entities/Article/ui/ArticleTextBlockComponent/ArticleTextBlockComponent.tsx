import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import cls from './ArticleTextBlockComponent.module.scss';
import { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation('article-details');
    return (
      <div className={classNames(cls.mainLink, [className])}>
        {block.title && <Text title={block.title} className={cls.title} />}
        {block.paragraphs.map((paragraph, idx) => (
          // eslint-disable-next-line react/no-array-index-key
          <Text key={idx} text={paragraph} className={cls.paragraph} />
        ))}
      </div>
    );
  }
);