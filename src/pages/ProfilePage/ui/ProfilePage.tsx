import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
  fetchProfileData,
  getProfileData,
  getProfileError,
  getProfileIsLoading,
  getProfileReadonly,
  getProfileValidateErrors,
  profileActions,
  ProfileCard,
  profileReducer,
  ValidateProfileError,
} from 'entities/Profile';
import {
  ReducerList,
  DinamicModuleLoader,
} from 'shared/lib/components/DinamicModuleLoader/DinamicModuleLoader';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/UseAppDispatch';
import { useSelector } from 'react-redux';
import { getProfileForm } from 'entities/Profile/model/selectors/getProfileForm/getProfileForm';
import { CurrencyEnum } from 'entities/Currency';
import { CountryEnum } from 'entities/Country';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

const reducers: ReducerList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
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
  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchProfileData());
    }
  }, [dispatch]);

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
    <DinamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames('', [className])}>
        <ProfilePageHeader />
        {validateErrors?.map((error) => (
          <Text
            key={error}
            theme={TextTheme.ERROR}
            text={validateErrorTranslates[error]}
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
      </div>
    </DinamicModuleLoader>
  );
};

export default ProfilePage;
