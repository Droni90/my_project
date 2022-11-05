import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string;
}

export const ArticleTextBlockComponent = memo(
  (props: ArticleTextBlockComponentProps) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    return (
      <div className={classNames(cls.mainLink, [className])}>
        {t('ArticleTextBlockComponent')}
      </div>
    );
  }
);
