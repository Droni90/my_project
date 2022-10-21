import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/ui/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
  isShort?: boolean;
}
export const LangSwitcher = memo((props: LangSwitcherProps) => {
  const { className, isShort } = props;
  const { t, i18n } = useTranslation();
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };
  return (
    <Button
      className={classNames(cls.LangSwitcher, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t(isShort ? 'Короткий язык' : 'Язык')}
    </Button>
  );
});
