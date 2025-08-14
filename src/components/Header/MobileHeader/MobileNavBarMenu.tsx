import React, { useEffect, useRef } from 'react';
import { X, Twitter, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';
import Logo from '@/assets/images/logo.png';

interface MobileNavBarMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavBarMenu: React.FC<MobileNavBarMenuProps> = ({ isOpen, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      triggerRef.current = document.activeElement as HTMLButtonElement;
      const focusableElements = menuRef.current?.querySelectorAll(
        'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
      );
      if (focusableElements && focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    } else {
      triggerRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'Tab' && isOpen && menuRef.current) {
        const focusableElements = Array.from(
          menuRef.current.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select',
          ),
        ) as HTMLElement[];

        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden={!isOpen}
      />
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 h-full bg-white w-[85%] max-w-sm z-50 transform transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}>
        <div className="flex flex-col h-full">
          <header className="flex items-center justify-between h-[60px] px-4 border-b border-gray-200">
            <Image src={Logo} alt="Nova Store Logo" width={100} height={24} />
            <button onClick={onClose} className="p-2">
              <X className="h-6 w-6 text-gray-800" />
              <span className="sr-only">Close menu</span>
            </button>
          </header>

          <nav className="flex-grow mt-6">
            <ul>
              {[
                'Laptops',
                'Desktop PCs',
                'Networking Devices',
                'Printers & Scanners',
                'PC Parts',
                'All Other Products',
                'Repairs',
              ].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center h-12 px-4 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-4 py-8">
            <button className="w-[90%] mx-auto h-11 flex items-center justify-center rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Get Started
            </button>
          </div>

          <footer className="py-6">
            <div className="flex justify-center items-center space-x-5">
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-900">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default MobileNavBarMenu;
