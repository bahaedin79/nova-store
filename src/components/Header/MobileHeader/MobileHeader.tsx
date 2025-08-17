import React, { useState } from 'react';
import MobileHeaderNavSection from './MobileHeaderNavSection';
import SearchBar from './SearchBar';
import MobileNavBarMenu from './MobileNavBarMenu';

export default function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2 bg-brand-primary text-white py-3">
      <MobileHeaderNavSection setIsMenuOpen={setIsMenuOpen} />
      <div className="md:hidden">
        <SearchBar />
      </div>
      <div>
        <MobileNavBarMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
    </div>
  );
}
