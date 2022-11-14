import { MutableRefObject, useEffect } from 'react';

export interface UseInfinityScrollOptions {
  callback?: () => void;
  triggerRef: MutableRefObject<HTMLElement>;
  wrapperRef: MutableRefObject<HTMLElement>;
}

export function useInfinityScroll({
  callback,
  triggerRef,
  wrapperRef,
}: UseInfinityScrollOptions) {
  useEffect(() => {
    const wrapperElement = wrapperRef.current;
    const triggerElement = triggerRef.current;
    let observe: IntersectionObserver | null = null;
    if (callback) {
      const options = {
        root: wrapperElement,
        rootMargin: '0px',
        threshold: 1.0,
      };
      observe = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          callback();
        }
      }, options);
      observe.observe(wrapperElement);
    }
    return () => {
      if (observe && triggerElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observe.unobserve(triggerElement);
      }
    };
  }, [callback, triggerRef, wrapperRef]);
}
