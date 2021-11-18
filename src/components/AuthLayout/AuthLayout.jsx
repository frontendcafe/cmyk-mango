import React from 'react';

import styles from './AuthLayout.module.css';
import logotipo from '../../assets/images/logotipo.png'

function AuthLayout() {
    return(
        <main className={ styles["welcome"] }>
            <div className={`${styles.container} ${styles.brand}`}>
                <img className={ styles["img-logo"] } src={logotipo} alt="logotipo" />
                <h2 className={ styles["name"] }>MANGO</h2>
            </div>
            <div className={ styles["session"] }></div>
        </main>
    );
}

export { AuthLayout };