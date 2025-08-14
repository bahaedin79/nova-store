import React, { useState } from 'react';
import MobileHeaderNavSection from './MobileHeaderNavSection';
import SearchBar from './SearchBar';
import MobileNavBarMenu from './MobileNavBarMenu';
import { Menu } from 'lucide-react';

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 bg-brand-primary text-white py-3">
      <MobileHeaderNavSection onMenuClick={() => setIsMenuOpen(true)} />
      <div className="md:hidden">
        <SearchBar />
      </div>
      <MobileNavBarMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </div>
  );
}
