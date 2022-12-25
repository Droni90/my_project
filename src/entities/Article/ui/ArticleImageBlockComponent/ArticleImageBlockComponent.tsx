import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlignEnum } from '@/shared/ui/Text';
import cls from './ArticleImageBlockComponent.module.scss';
import { ArticleImageBlock } from '../../model/types/article';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  (props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;

    const { t } = useTranslation('article-details');
    return (
      <div className={classNames(cls.mainLink, [className])}>
        <img alt={block.title} src={block.src} className={cls.img} />
        {block.title && (
          <Text text={block.title} align={TextAlignEnum.CENTER} />
        )}
      </div>
    );
  },
);
