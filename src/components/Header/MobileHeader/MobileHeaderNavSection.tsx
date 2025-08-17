import Container from '@/components/common/Container';
import OurDeals from '@/components/ui/OurDeals';
import { Menu, ShoppingCart, UserRound } from 'lucide-react';
import Logo from '@/assets/images/logo.png';
import Image from 'next/image';
import SearchBar from './SearchBar';

type Props = {
  setIsMenuOpen: (isOpen: boolean) => void;
};

export default function MobileHeaderNavSection({ setIsMenuOpen }: Props) {
  return (
    <Container>
      <div className="flex justify-between items-center md:gap-4">
        <button className="p-2" onClick={() => setIsMenuOpen(true)}>
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
