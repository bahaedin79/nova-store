import React from 'react';
import LogoBlue from '@/assets/images/Logo-blue.png';
import Image from 'next/image';
import { ChevronRight, Link, X } from 'lucide-react';
import OurDeals from '@/components/ui/OurDeals';
import { NAV_LINKS } from '@/constants/NavLinks';

type props = {
  setIsMenuOpen: (isOpen: boolean) => void;
  isMenuOpen: boolean;
};

export default function MobileNavBarMenu({ isMenuOpen, setIsMenuOpen }: props) {
  return (
    <div
      className={`${
        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } absolute top-0 left-0 bottom-0 bg-white text-black min-w-3/4 z-50 p-5 text-font-poppins transition-all duration-300 ease-in-out flex flex-col`}>
      <div className="flex items-center justify-between border-b-2 border-gray-300 pb-8 lg:hidden">
        <Image src={LogoBlue} alt="Logo" />
        <X size={28} strokeWidth={2} onClick={() => setIsMenuOpen(false)} />
      </div>

      <ul className="space-y-4 my-5">
        {NAV_LINKS.map(link => (
          <li key={link.name}>
            <Link href={link.path} className="flex justify-between items-center">
              {link.name}
              <ChevronRight size={24} strokeWidth={2} />
            </Link>
          </li>
        ))}
      </ul>
      <div className="self-center">
        <OurDeals />
      </div>
    </div>
  );
}
