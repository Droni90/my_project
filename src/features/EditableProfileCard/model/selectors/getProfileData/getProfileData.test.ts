import { StateSchema } from '@/app/providers/StoreProvider';
import { CountryEnum } from '@/entities/Country';
import { CurrencyEnum } from '@/entities/Currency';
import { getProfileData } from './getProfileData';

describe('getProfileData', () => {
  test('should return data', async () => {
    const data = {
      username: 'admin',
      age: 22,
      country: CountryEnum.RUSSIA,
      lastname: 'Azaza',
      first: 'first',
      city: 'Moscow',
      currency: CurrencyEnum.USD,
    };
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    };
    expect(getProfileData(state as StateSchema)).toEqual(data);
  });

  test('should work with empty state', async () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toEqual(undefined);
  });
});
