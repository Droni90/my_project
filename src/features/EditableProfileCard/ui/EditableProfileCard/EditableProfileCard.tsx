import { useTranslation } from 'react-i18next';
import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';

import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { CurrencyEnum } from '@/entities/Currency';
import { CountryEnum } from '@/entities/Country';
import { Text, TextTheme } from '@/shared/ui/Text/Text';
import { ProfileCard } from '@/entities/Profile';
import {
  DynamicModuleLoader,
  ReducerList,
} from '@/shared/lib/components/DinamicModuleLoader/DynamicModuleLoader';
import { VStack } from '@/shared/ui/Stack';
import { ValidateProfileError } from '../../model/consts/consts';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
  className?: string;
  id?: string;
}

const reducers: ReducerList = {
  profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
  const { className, id } = props;
  const { t } = useTranslation('profile');

  const dispatch = useAppDispatch();
  const formData = useSelector(getProfileForm);
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readonly = useSelector(getProfileReadonly);
  const validateErrors = useSelector(getProfileValidateErrors);

  const validateErrorTranslates = {
    [ValidateProfileError.SERVER_ERROR]: t('Ошибка сервера'),
    [ValidateProfileError.INCORRECT_AGE]: t('Некорректный возраст'),
    [ValidateProfileError.INCORRECT_COUNTRY]: t('Некорректная страна'),
    [ValidateProfileError.INCORRECT_USER_DATA]: t('Имя и Фамилия обязательны'),
    [ValidateProfileError.NO_DATA]: t('Данные не указаны'),
  };
  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });

  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          first: value || '',
        })
      );
    },
    [dispatch]
  );

  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          lastname: value || '',
        })
      );
    },
    [dispatch]
  );

  const onChangeAge = useCallback(
    (value?: string) => {
      if (value && Number(value) && /\d+/.test(value)) {
        dispatch(
          profileActions.updateProfile({
            age: Number(value || 0),
          })
        );
      } else {
        dispatch(
          profileActions.updateProfile({
            age: data?.age,
          })
        );
      }
    },
    [dispatch, data?.age]
  );

  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          city: value || '',
        })
      );
    },
    [dispatch]
  );

  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          avatar: value || '',
        })
      );
    },
    [dispatch]
  );

  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(
        profileActions.updateProfile({
          username: value || '',
        })
      );
    },
    [dispatch]
  );

  const onChangeCurrency = useCallback(
    (currency?: CurrencyEnum) => {
      dispatch(
        profileActions.updateProfile({
          currency,
        })
      );
    },
    [dispatch]
  );

  const onChangeCountry = useCallback(
    (country?: CountryEnum) => {
      dispatch(
        profileActions.updateProfile({
          country,
        })
      );
    },
    [dispatch]
  );
  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack gap="8" max className={classNames('', [className])}>
        <EditableProfileCardHeader />
        {validateErrors?.map((error) => (
          <Text
            key={error}
            theme={TextTheme.ERROR}
            text={validateErrorTranslates[error]}
            data-testid="EditableProfileCard.Error"
          />
        ))}
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          error={error}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeAvatar={onChangeAvatar}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          onChangeCountry={onChangeCountry}
          readonly={readonly}
        />
      </VStack>
    </DynamicModuleLoader>
  );
});
