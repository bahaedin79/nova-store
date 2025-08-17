import React from 'react';

export default function OurDeals({ color }: { color?: string }) {
  return (
    <div
      className={`p-2 bg-transparent rounded-full px-6 md:hidden ${
        color === 'blue' ? 'text-white border-3 border-white' : 'text-brand-primary border-3 border-brand-primary'
      }`}>
      OurDeals
    </div>
  );
}
