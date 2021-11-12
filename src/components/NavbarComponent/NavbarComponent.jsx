import React from 'react';
import { Link } from 'react-router-dom';
import { MangoContext } from '../MangoContext/MangoContext';

//styles
import styles from './NavbarComponent.module.css';

//assets
import bell from './assets/bell.svg';
import menu from './assets/menu.svg';


function NavbarComponent() {

  const {
    openMenu,
    setOpenMenu,
  } = React.useContext(MangoContext);

  const onClickButton = () => {
    setOpenMenu(prevState => !prevState);
  };

  return (
    <>
      <header className={`${styles.container} ${styles.header}`}>
        <h2 className={styles.logo}>MANGO</h2>
        <div className={`${styles["icons-nav"]}`}>
          <Link to=""
            ><img src={bell} alt="Notificaciones"
          /></Link>
          <Link to="" onClick={onClickButton}><img src={menu} alt="Menu" /></Link>
        </div>
      </header>
      {/* <!-- Nav --> */}

      {/* //La doble negación es para afirmar que no sólo exista, sino que sea true */}
      {!!openMenu && (
        <nav className={styles.nav}>
          <ul className={styles.menu}>
            <li><Link to="">Acerca del proyecto</Link></li>
            <li><Link to="">Nueva Reunión</Link></li>
            <li><Link to="">Mi perfil</Link></li>
            <li><Link to="">Mis reuniones</Link></li>
            <li><button>Log Out</button></li>
          </ul>
        </nav>
      )}
    </>
  );
}
export { NavbarComponent };
