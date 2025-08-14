import Container from '@/components/common/Container';
import OurDeals from '@/components/ui/OurDeals';
import { Menu, ShoppingCart, UserRound } from 'lucide-react';
import Logo from '@/assets/images/logo.png';
import Image from 'next/image';
import React from 'react';
import SearchBar from './SearchBar';

interface MobileHeaderNavSectionProps {
  onMenuClick: () => void;
}

export default function MobileHeaderNavSection({ onMenuClick }: MobileHeaderNavSectionProps) {
  return (
    <Container>
      <div className="flex justify-evenly items-center gap-10 sm:justify-between ">
        <button onClick={onMenuClick} className="p-2">
          <Menu size={24} strokeWidth={3} />
          <span className="sr-only">Open menu</span>
        </button>
        <Image src={Logo} alt="Logo" />
        <OurDeals color="blue" />
        <div className="hidden md:block md:grow">
          <SearchBar />
        </div>
        <ShoppingCart size={24} strokeWidth={3} />
        <UserRound size={40} strokeWidth={3} className="block p-2 border-2 border-white rounded-full" />
      </div>
    </Container>
  );
}
