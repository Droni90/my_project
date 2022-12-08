import { CountryEnum } from '@/entities/Country';
import { CurrencyEnum } from '@/entities/Currency';
import { ValidateProfileError } from '../../consts/consts';
import { validateProfileData } from './validateProfileData';

const data = {
  username: 'admin',
  age: 22,
  country: CountryEnum.RUSSIA,
  lastname: 'Azaza',
  first: 'first',
  city: 'Moscow',
  currency: CurrencyEnum.USD,
};
describe('validateProfileData', () => {
  test('success', () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('wiothout first name and last name ', () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('incorrect age', () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('incorrect country', () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('incorrect all', () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
