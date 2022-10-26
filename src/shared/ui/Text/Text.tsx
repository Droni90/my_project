import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}
export enum TextAlignEnum {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}
interface TextProps {
  className?: string;
  text?: string;
  title?: string;
  theme?: TextTheme;
  align?: TextAlignEnum;
}
export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    align = TextAlignEnum.LEFT,
    theme = TextTheme.PRIMARY,
  } = props;

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
  };
  return (
    <div className={classNames(cls.Text, [className], mods)}>
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
