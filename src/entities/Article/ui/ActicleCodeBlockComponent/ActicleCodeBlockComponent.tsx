import { memo, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ActicleCodeBlockComponent.module.scss';

interface ActicleCodeBlockComponentProps {
  className?: string;
}

export const ActicleCodeBlockComponent = memo(
  (props: ActicleCodeBlockComponentProps) => {
    const { t } = useTranslation('article-details');
    const { className } = props;
    return (
      <div className={classNames(cls.mainLink, [className])}>
        {t('ActicleCodeBlockComponent')}
      </div>
    );
  }
);
