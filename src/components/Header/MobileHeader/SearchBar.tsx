import Container from '@/components/common/Container';
import { Search } from 'lucide-react';
import React from 'react';

export default function SearchBar() {
  return (
    <Container>
      <form className="flex items-center gap-5 text-[#CACDD8] bg-white rounded-full px-4 py-1">
        <Search size={24} strokeWidth={3} />
        <input type="text" placeholder="Search" className="w-full py-2 border-0 outline-0" />
      </form>
    </Container>
  );
}
