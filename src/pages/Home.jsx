import React from 'react';
import { MobileNavbar } from '../components/MobileNavbar/MobileNavbar';
import { NavbarComponent } from '../components/NavbarComponent/NavbarComponent';

export function Home() {
  return (
    <>
      <NavbarComponent />
      <MobileNavbar />
    </>
  );
}
