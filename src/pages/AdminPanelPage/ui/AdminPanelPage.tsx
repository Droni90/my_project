import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducerList,
} from '@/shared/lib/components/DinamicModuleLoader/DynamicModuleLoader';

import { Page } from '@/widgets/Page';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducerList = {};

const AdminPanelPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { t } = useTranslation('article-details');

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames('', [className])}>
        {/* <VStack gap="16" max></VStack> */}
      </Page>
    </DynamicModuleLoader>
  );
};
export default memo(AdminPanelPage);
