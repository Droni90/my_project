import { CountryEnum } from '@/entities/Country';
import { CurrencyEnum } from '@/entities/Currency';
import { ValidateProfileError } from '../consts/consts';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema } from '../types/EditableProfileCardSchema';

const data = {
  username: 'admin',
  age: 22,
  country: CountryEnum.RUSSIA,
  lastname: 'Azaza',
  first: 'first',
  city: 'Moscow',
  currency: CurrencyEnum.USD,
};

describe('profileSlice.test', () => {
  test('test set readonly', async () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    };
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadonly(true)),
    ).toEqual({ readonly: true });
  });

  test('test cancel edit', async () => {
    const state: DeepPartial<ProfileSchema> = {
      data,
      form: { username: '' },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.cancelEditProfile(),
      ),
    ).toEqual({ readonly: true, validateErrors: undefined, data, form: data });
  });

  test('test update profile', async () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: '123' },
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: 'AZAZA' }),
      ),
    ).toEqual({ form: { username: 'AZAZA' } });
  });

  test('test update profile service pending', async () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [ValidateProfileError.SERVER_ERROR],
    };
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending),
    ).toEqual({ isLoading: true, validateErrors: undefined });
  });

  test('test update profile service fullfiled', async () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };
    expect(
      profileReducer(
        state as ProfileSchema,
        updateProfileData.fulfilled(data, ''),
      ),
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      validateError: undefined,
      form: data,
      data,
    });
  });
});
