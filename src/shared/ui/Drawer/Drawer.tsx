import { memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { UseTheme } from 'app/providers/ThemeProvider';
import cls from './Drawer.module.scss';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Drawer = memo((props: DrawerProps) => {
  const { className, children, onClose, isOpen } = props;
  const { theme } = UseTheme();

  const mods: Mods = {
    [cls.opened]: isOpen,
  };

  return (
    <Portal>
      <div
        className={classNames(
          cls.Drawer,
          [className, theme, 'app_drawer'],
          mods
        )}
      >
        <Overlay onClick={onClose} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
