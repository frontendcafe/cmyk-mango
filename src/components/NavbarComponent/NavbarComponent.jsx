import React from 'react';

//styles
import styles from './NavbarComponent.module.css';

//assets
import bell from './assets/bell.svg';
import menu from './assets/menu.svg';

function NavbarComponent(props) {
  return (
    <nav className={styles.nav}>
      <h2 className={styles.logo}>Mango</h2>
      <div>
        <img src={bell} alt="Notificaciones" />
        <a id="menu" href="#">
          <img src={menu} alt="Menu" />
        </a>
      </div>
      <div className={styles.items_nav}>
        <ul className={styles.menu}>
          <li className={styles.menu_li}>
            <a className={styles.menu_li_a} href="">Acerca del proyecto</a>
          </li>
          <li className={styles.menu_li}>
            <a className={styles.menu_li_a} href="">Nueva Reunión</a>
          </li>
          <li className={styles.menu_li}>
            <a className={styles.menu_li_a} href="">Mi perfil</a>
          </li>
          <li className={styles.menu_li}>
            <a className={styles.menu_li_a} href="">Mis reuniones</a>
          </li>
          <li className={styles.menu_li}>
            <button className={styles.menu_li_button}>Log Out</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export { NavbarComponent };
