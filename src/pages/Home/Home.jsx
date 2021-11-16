import React from 'react';
import { NavbarComponent } from '../../components/NavbarComponent/NavbarComponent';
import { AuthLayout } from '../../components/AuthLayout/AuthLayout';

//import styles from './Home.module.css';

import './Home.css';

export function Home() {
  return (
    <>
      <NavbarComponent />
      <AuthLayout />
    </>
  );
}
