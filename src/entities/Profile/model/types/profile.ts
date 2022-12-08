import { CountryEnum } from '@/entities/Country';
import { CurrencyEnum } from '@/entities/Currency';

export interface Profile {
  id?: string;
  first?: string;
  lastname?: string;
  age?: number;
  currency?: CurrencyEnum;
  country?: CountryEnum;
  city?: string;
  username?: string;
  avatar?: string;
}
