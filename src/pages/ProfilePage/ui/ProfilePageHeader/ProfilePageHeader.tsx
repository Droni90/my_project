import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';
import { Text } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import {
  getProfileReadonly,
  profileActions,
  updateProfileData,
} from 'entities/Profile';
import { useCallback } from 'react';
import { UseAppDispatch } from 'shared/lib/hooks/UseAppDispatch';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
  className?: string;
}

const ProfilePageHeader = (props: ProfilePageHeaderProps) => {
  const { t } = useTranslation();
  const { className } = props;
  const readonly = useSelector(getProfileReadonly);
  const dispatch = UseAppDispatch();

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEditProfile());
  }, [dispatch]);

  const onSaveEdit = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);
  return (
    <div className={classNames(cls.ProfilePageHeader, [className])}>
      <Text title={t('Профиль')} />
      {readonly ? (
        <Button
          onClick={onEdit}
          className={cls.editBtn}
          theme={ThemeButton.OUTLINE}
        >
          {t('Редактировать')}
        </Button>
      ) : (
        <>
          <Button
            onClick={onCancelEdit}
            className={cls.editBtn}
            theme={ThemeButton.OUTLINE_RED}
          >
            {t('Отменить')}
          </Button>
          <Button
            onClick={onSaveEdit}
            className={cls.saveBtn}
            theme={ThemeButton.OUTLINE}
          >
            {t('Сохранить')}
          </Button>
        </>
      )}
    </div>
  );
};

export default ProfilePageHeader;