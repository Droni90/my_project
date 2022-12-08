import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups/ui/ListBox/ListBox';
import { CountryEnum } from '../../model/types/country';

export interface CountrySelectProps {
  className?: string;
  value?: CountryEnum;
  onChange?: (value: CountryEnum) => void;
  readonly?: boolean;
}

const options = [
  { value: CountryEnum.ARMENIA, content: CountryEnum.ARMENIA },
  { value: CountryEnum.BELARUS, content: CountryEnum.BELARUS },
  { value: CountryEnum.KAZAKHSTAN, content: CountryEnum.KAZAKHSTAN },
  { value: CountryEnum.RUSSIA, content: CountryEnum.RUSSIA },
];

export const CountrySelect = memo((props: CountrySelectProps) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation('profile');

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as CountryEnum);
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
      defaultValue={t('Укажите страну')}
      readonly={readonly}
      direction="top right"
      label={t('Укажите страну')}
    />
  );
});
