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
  disabled?: boolean;
}
export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, square, disabled, size, ...otherProps } =
    props;

  const mods: Record<string, boolean> = {
    [cls.square]: square,
    [cls.disabled]: disabled,
  };
  return (
    <button
      type="button"
      className={classNames(
        cls.Button,
        [className, cls[theme], cls[size]],
        mods
      )}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};
