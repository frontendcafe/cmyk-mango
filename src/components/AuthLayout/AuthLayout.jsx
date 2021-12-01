import React from 'react';

import styles from './AuthLayout.module.css';
import logotipo from '../../assets/images/logotipo.png'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function AuthLayout() {
    const {push} = useHistory()
    return(
        <main className={ styles["welcome"] }>
            <div className={`${styles.container} ${styles.brand}`}>
                <img className={ styles["img-logo"] } src={logotipo} alt="logotipo" />
                <h2 className={ styles["name"] }>MANGO</h2>
            </div>
            <div className={ styles["session"] }>
                <h1 className={ styles["title"] }>Organiza tus reuniones de una manera facil y rapida</h1>
                <button onClick={() => push('/login')} className={ `${styles.btn} ${styles.btnLogin}`}>INICIAR SESION</button>
                <button onClick={() => push('/register')} className={ `${styles.btn} ${styles.btnRegister}`}>REGISTRARSE</button>
            </div>
        </main>
    );
}

export { AuthLayout };