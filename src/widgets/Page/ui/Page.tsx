import { memo, MutableRefObject, ReactNode, useRef, UIEvent } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useInfinityScroll } from '@/shared/lib/hooks/useInfinityScroll';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { getUiScrollByPath, uiActions } from '@/features/UI';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { StateSchema } from '@/app/providers/StoreProvider';
import { useThrottle } from '@/shared/lib/hooks/useThrottle';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}
export const PAGE_ID = 'PAGE_ID';

export const Page = memo((props: PageProps) => {
  const { className, children, onScrollEnd } = props;
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const scrollPosition = useSelector((state: StateSchema) =>
    getUiScrollByPath(state, pathname));

  useInfinityScroll({
    triggerRef,
    wrapperRef,
    callback: onScrollEnd,
  });

  useInitialEffect(() => {
    wrapperRef.current.scrollTop = scrollPosition;
  });

  const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
    dispatch(
      uiActions.setScrollPosition({
        path: pathname,
        position: e.currentTarget.scrollTop,
      })
    );
  }, 500);
  return (
    <main
      ref={wrapperRef}
      className={classNames(cls.Page, [className])}
      onScroll={onScroll}
      id={PAGE_ID}
    >
      {children}
      {onScrollEnd ? <div ref={triggerRef} /> : null}
    </main>
  );
});
