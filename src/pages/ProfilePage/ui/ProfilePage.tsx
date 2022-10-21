import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { profileReducer } from 'entities/Profile';
import {
  ReducerList,
  DinamicModuleLoader,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader';

const reducers: ReducerList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();

  return (
    <DinamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', [className])}>{t('PROFILE PAGE')}</div>
    </DinamicModuleLoader>
  );
};

export default ProfilePage;
