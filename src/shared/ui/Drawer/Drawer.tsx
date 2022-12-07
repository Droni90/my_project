import { memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { UseTheme } from 'app/providers/ThemeProvider';
import { useModal } from 'shared/lib/hooks/useModal';
import cls from './Drawer.module.scss';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Drawer = memo((props: DrawerProps) => {
  const { className, children, onClose, isOpen, lazy } = props;
  const { theme } = UseTheme();
  const { isMounted, close, isClosing } = useModal({
    onClose,
    isOpen,
    animationDelay: 300,
  });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(
          cls.Drawer,
          [className, theme, 'app_drawer'],
          mods
        )}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
});
