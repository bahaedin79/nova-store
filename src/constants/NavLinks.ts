// src/constants/NavLinks.ts

type NavLink = {
  name: string;
  path: string;
  subLinks?: NavLink[];
};

export const NAV_LINKS: NavLink[] = [
  {
    name: 'Laptops',
    path: '/laptops',
  },
  {
    name: 'Desktop',
    path: '/desktop-pcs',
  },
  {
    name: 'Networking',
    path: '/networking',
  },
  {
    name: 'Printers & Scanners',
    path: '/printers-scanners',
  },
  {
    name: 'PC Parts',
    path: '/pc-parts',
  },
  {
    name: 'Other',
    path: '/other',
  },
  {
    name: 'Repairs',
    path: '/repairs',
  },
];
