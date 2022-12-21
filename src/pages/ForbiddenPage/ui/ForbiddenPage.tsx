import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ForbiddenPageProps {
  className?: string;
}

export const ForbiddenPage = memo((props: ForbiddenPageProps) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <Page data-testid="ForbiddenPage" className={classNames('', [className])}>
      {t('У вас нет доступа к этой странице!')}
    </Page>
  );
});
