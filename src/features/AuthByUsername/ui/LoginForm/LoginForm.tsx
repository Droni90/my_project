import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/ui/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
  className?: string;
}
export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  return (
    <div className={classNames(cls.LoginForm, [className])}>
      <Input
        placeholder={t('Введите логин')}
        className={cls.input}
        type="text"
        autoFocus
      />
      <Input
        placeholder={t('Введите пароль')}
        className={cls.input}
        type="text"
      />
      <Button className={cls.loginBtn}>{t('Войти')}</Button>
    </div>
  );
};
