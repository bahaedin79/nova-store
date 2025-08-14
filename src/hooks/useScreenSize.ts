'use client';
import { useState, useEffect } from 'react';

export function useScreenSize(breakpoint = 1024) {
  const [isDesktop, setIsDesktop] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const update = () => setIsDesktop(window.innerWidth >= breakpoint);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, [breakpoint]);

  return {
    isDesktop,
    isMobile: isDesktop === undefined ? undefined : !isDesktop,
  };
}
