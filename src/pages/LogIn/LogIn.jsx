import React from 'react';
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent';
import { Input } from '../../components/Input/Input';
import styles from './LogIn.module.css'

import mangoimage from '../../assets/images/mango.svg'

export function LogIn() {
  return (
    <div className={styles.signin}>
      <header className={styles.header}>Mango</header>
      <section className={styles.mangosection}>
        <img src={mangoimage} alt="mango" className={styles.mangoimage}/>
        <h5 className={styles.mangotitle}>MANGO</h5>
      </section>
      <form className={styles.formsection}>
        <h2 className={styles.formtitle}>¡Bienvenidx!</h2>
        <h3 className={styles.formsubtitle}>Ingresa a tu cuenta</h3>
        <Input placeholder="Correo electrónico"/>
        <Input placeholder="Contraseña"/>
        <a href="/forgetpass">
          <h4 className={styles.forgetpass}>Olvidaste tu contraseña?</h4>
        </a>
        <a href="/" className={styles.tologin}>
          <ButtonComponent name="Log in"/>
        </a>
        <h4 className={styles.haveacc}>
          ¿No tenés cuenta?  
          <a href="/signin">
            <h5 className={styles.createacc}>
              Crear cuenta
            </h5>
          </a>
        </h4>
      </form>
    </div>
  );
}