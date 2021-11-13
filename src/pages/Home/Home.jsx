import React from 'react';
import { NavbarComponent } from '../../components/NavbarComponent/NavbarComponent';
import { MobileNavbar } from '../../components/MobileNavbar/MobileNavbar';

import styles from './Home.module.css';

export function Home() {
  return (
    <>
      <NavbarComponent />
      <MobileNavbar className={styles["sticky"]}/>
    </>
  );
}
