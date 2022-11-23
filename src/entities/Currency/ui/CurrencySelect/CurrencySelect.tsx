import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { CurrencyEnum } from '../../model/types/currency';

export interface CurrencySelectProps {
  className?: string;
  value?: CurrencyEnum;
  onChange?: (value: CurrencyEnum) => void;
  readonly?: boolean;
}

const options = [
  { value: CurrencyEnum.RUB, content: CurrencyEnum.RUB },
  { value: CurrencyEnum.EUR, content: CurrencyEnum.EUR },
  { value: CurrencyEnum.USD, content: CurrencyEnum.USD },
];

export const CurrencySelect = memo((props: CurrencySelectProps) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as CurrencyEnum);
    },
    [onChange]
  );

  const mods: Mods = {};
  return (
    <ListBox
      className={classNames('', [className], mods)}
      onChange={onChangeHandler}
      value={value}
      items={options}
      defaultValue={t('Укажите валюту')}
      label={t('Укажите валюту')}
      readonly={readonly}
      direction="top"
    />
  );
});
