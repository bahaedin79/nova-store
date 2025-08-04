'use client';
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Clock3, MapPin, Phone } from 'lucide-react';

interface OpeningHour {
  day: string;
  time: string;
}

interface ShopInfo {
  opening_hours: OpeningHour[];
  address: string;
  phone: string;
  email: string;
}

interface ShopInfoPopoverProps {
  shopInfo: ShopInfo;
}

export default function ShopInfoPopover({ shopInfo }: ShopInfoPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  // Click-outside handler for mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only handle click-outside for mobile (when isOpen state is used)
      if (isOpen && popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Add event listener when popover is open
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (!shopInfo) {
    return null; // Or a loading skeleton
  }

  return (
    <div
      ref={popoverRef}
      className="flex items-center gap-1 relative group border border-gray-200 px-2.5 py-1.5 rounded-full hover:cursor-pointer">
      <span>Mon-Thu: 9:00 AM - 5:30 PM</span>
      <ChevronDown
        size={18}
        className={`cursor-pointer transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div
        className={`absolute z-10 flex flex-col top-full left-0 pt-2 rounded-lg w-72 h-auto bg-white border border-gray-200 text-text-primary shadow-lg text-sm space-y-3 transition-all duration-300 ease-out transform-gpu before:content-[''] before:absolute before:-top-2 before:left-4 before:w-0 before:h-0 before:border-l-8 before:border-r-8 before:border-b-8 before:border-l-transparent before:border-r-transparent before:border-b-white after:content-[''] after:absolute after:-top-2 after:left-0 after:right-0 after:h-2 after:bg-transparent ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'
        } lg:group-hover:opacity-100 lg:group-hover:scale-100 lg:group-hover:translate-y-0 lg:group-hover:pointer-events-auto`}>
        <div className="flex gap-3 p-4">
          <Clock3 size={24} strokeWidth={2} className="shrink-0 text-gray-500" />
          <div>
            <h6 className="font-semibold text-gray-800">We are open:</h6>
            <ul className="space-y-1">
              {shopInfo.opening_hours.map(item => (
                <li key={item.day}>
                  <span className="text-gray-500">{item.day}:</span>
                  <span className="font-bold"> {item.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="border-t-gray-200" />
        <div className="flex gap-3 px-4">
          <MapPin size={24} strokeWidth={2} className="shrink-0 text-gray-500" />
          <div>
            <h6 className="font-semibold text-gray-800 text-wrap">Address: {shopInfo.address}</h6>
          </div>
        </div>
        <hr className="border-t-gray-200" />
        <div className="flex gap-3 px-4 pb-4">
          <Phone size={24} strokeWidth={2} className="shrink-0 text-gray-500" />
          <ul className="space-y-1">
            <li>
              Phone: <span className="text-brand-primary">{shopInfo.phone}</span>
            </li>
            <li>
              E-mail: <span className="text-brand-primary">{shopInfo.email}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
