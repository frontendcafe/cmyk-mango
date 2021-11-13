import React from 'react';
import { NavbarComponent } from '../components/NavbarComponent/NavbarComponent';
import { MobileNavbar } from '../components/MobileNavbar/MobileNavbar';

export function Home() {
  return (
    <>
      <MobileNavbar />
      <NavbarComponent />
    </>
  );
}
