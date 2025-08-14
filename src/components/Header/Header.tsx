'use client';
import { useScreenSize } from '@/hooks/useScreenSize';
import MobileHeader from './MobileHeader/MobileHeader';
import DesktopHeader from './DesktopHeader/DesktopHeader';

export default function Header() {
  const { isDesktop } = useScreenSize(1024);

  if (isDesktop === undefined) return null;

  return isDesktop ? <DesktopHeader /> : <MobileHeader />;
}
