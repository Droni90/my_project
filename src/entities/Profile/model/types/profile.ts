import { CountryEnum } from 'entities/Country';
import { CurrencyEnum } from 'entities/Currency';

export interface Profile {
  first?: string;
  lastname?: string;
  age?: number;
  currency?: CurrencyEnum;
  country?: CountryEnum;
  city?: string;
  username?: string;
  avatar?: string;
}

export interface ProfileSchema {
  data?: Profile;
  form?: Profile;
  isLoading: boolean;
  error?: string;
  readonly: boolean;
}
