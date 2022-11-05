import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
}

export const ArticleImageBlockComponent = memo(
  (props: ArticleImageBlockComponentProps) => {
    const { className } = props;

    const { t } = useTranslation('article-details');
    return (
      <div className={classNames(cls.mainLink, [className])}>
        {t('ArticleImageBlockComponent')}
      </div>
    );
  }
);
