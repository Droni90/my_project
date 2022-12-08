import { CSSProperties, memo, useMemo } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}
export const Avatar = memo((props: AvatarProps) => {
  const { className, src, size, alt } = props;
  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size]
  );

  const mods: Mods = {};
  return (
    <img
      alt={alt}
      src={src}
      className={classNames(cls.Avatar, [className], mods)}
      style={styles}
    />
  );
});
