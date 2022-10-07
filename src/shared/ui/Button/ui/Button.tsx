import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
  CLEAR_INVERTED = 'clearInverted',
}

export enum ButtonSize {
  L = 'size_l',
  M = 'size_m',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: ButtonSize;
}
export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, square, size, ...otherProps } = props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
  };
  return (
    <button
      type="button"
      className={classNames(
        cls.Button,
        [className, cls[theme], cls[size]],
        mods
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
};
