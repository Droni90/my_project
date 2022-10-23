import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from 'entities/Profile';
import {
  ReducerList,
  DinamicModuleLoader,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader';
import { useEffect } from 'react';
import { UseAppDispatch } from 'shared/lib/hooks/UseAppDispatch';

const reducers: ReducerList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation();
  const dispatch = UseAppDispatch();
  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DinamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', [className])}>
        <ProfileCard />
      </div>
    </DinamicModuleLoader>
  );
};

export default ProfilePage;
