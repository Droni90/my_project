import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Dropdown } from '@/shared/ui/Popups';
import { Avatar } from '@/shared/ui/Avatar';
import {
  getUserAuthData,
  isUserAdmin,
  isUserManager,
  userActions,
} from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './AvatarDropdown.module.scss';
import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
  const { className } = props;
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const authData = useSelector(getUserAuthData);

  const isAdmin = useSelector(isUserAdmin);
  const isManager = useSelector(isUserManager);
  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isAdminPanelAvailable = isAdmin || isManager;
  if (!authData) {
    return null;
  }
  return (
    <Dropdown
      className={classNames(cls.AvatarDropdown, [className])}
      direction="bottom left"
      items={[
        ...(isAdminPanelAvailable
          ? [
            {
              content: t('Админка'),
              href: getRouteAdmin(),
            },
          ]
          : []),
        {
          content: t('Профиль'),
          href: getRouteProfile(authData.id),
        },
        {
          content: t('Выйти'),
          onClick: onLogout,
        },
      ]}
      trigger={<Avatar fallbackInverted size={30} src={authData.avatar} />}
    />
  );
});
