import React from 'react';
import { MobileNavbar } from '../components/MobileNavbar/MobileNavbar';
import { AuthLayout } from '../components/AuthLayout/AuthLayout';

export function Home() {
  return (
    <>
      <AuthLayout />
      <MobileNavbar />
    </>
  );
}
