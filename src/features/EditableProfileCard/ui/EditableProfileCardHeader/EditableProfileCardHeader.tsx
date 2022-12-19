import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { getUserAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = memo(
  (props: EditableProfileCardHeaderProps) => {
    const { t } = useTranslation();
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const { className } = props;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

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
      <HStack max justify="between" className={classNames('', [className])}>
        <Text title={t('Профиль')} />
        {canEdit && (
          <div>
            {readonly ? (
              <Button
                onClick={onEdit}
                theme={ThemeButton.OUTLINE}
                data-testid="EditableProfileCardHeader.EditButton"
              >
                {t('Редактировать')}
              </Button>
            ) : (
              <HStack gap="8">
                <Button
                  onClick={onCancelEdit}
                  theme={ThemeButton.OUTLINE_RED}
                  data-testid="EditableProfileCardHeader.CancelButton"
                >
                  {t('Отменить')}
                </Button>
                <Button
                  onClick={onSaveEdit}
                  theme={ThemeButton.OUTLINE}
                  data-testid="EditableProfileCardHeader.SaveButton"
                >
                  {t('Сохранить')}
                </Button>
              </HStack>
            )}
          </div>
        )}
      </HStack>
    );
  }
);
