import { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  ERROR = 'error',
}
export enum TextAlignEnum {
  RIGHT = 'right',
  LEFT = 'left',
  CENTER = 'center',
}

export enum TextSizeEnum {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSizeEnum, HeaderTagType> = {
  [TextSizeEnum.S]: 'h3',
  [TextSizeEnum.M]: 'h2',
  [TextSizeEnum.L]: 'h1',
};

interface TextProps {
  className?: string;
  text?: string;
  title?: string;
  theme?: TextTheme;
  align?: TextAlignEnum;
  size?: TextSizeEnum;
}
export const Text = memo((props: TextProps) => {
  const {
    className,
    text,
    title,
    size = TextSizeEnum.M,
    align = TextAlignEnum.LEFT,
    theme = TextTheme.PRIMARY,
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  const mods: Mods = {
    [cls[theme]]: true,
    [cls[align]]: true,
    [cls[size]]: true,
  };
  return (
    <div className={classNames(cls.Text, [className], mods)}>
      {title && <HeaderTag className={cls.title}>{title}</HeaderTag>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  );
});
