import React from 'react';
import Logo from '@/assets/images/Logo-blue.png';
import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/common/Container';
import { NAV_LINKS } from '@/constants/NavLinks';
import { Search, ShoppingCart, UserRound } from 'lucide-react';

export default function DesktopHeader() {
  return (
    <div className="bg-white">
      <Container>
        <div className=" flex justify-between items-center">
          <Image
            src={Logo}
            alt="Logo"
            className="scale-110 transition-transform duration-300 cursor-pointer hover:scale-125 "
          />
          <ul className="flex items-center text-sm font-medium xl:text-base">
            {NAV_LINKS.map(link => (
              <li key={link.name}>
                <Link
                  className="inline-block py-5 px-4 transition-colors duration-200 hover:bg-gray-200"
                  href={link.path}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5">
            <Search size={24} strokeWidth={2} className="cursor-pointer" />
            <ShoppingCart size={24} strokeWidth={2} className="cursor-pointer" />
            <UserRound size={24} strokeWidth={2} className="cursor-pointer" />
          </div>
        </div>
      </Container>
    </div>
  );
}
