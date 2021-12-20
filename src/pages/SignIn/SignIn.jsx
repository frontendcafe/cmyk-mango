import React from 'react';
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent';
import { Input } from '../../components/Input/Input';
import styles from './SignIn.module.css'

import mangoimage from '../../assets/images/mango.svg'

export function SignIn() {
  return (
    <div className={styles.signin}>
      <header className={styles.header}>Mango</header>
      <section className={styles.mangosection}>
        <img src={mangoimage} alt="mango" className={styles.mangoimage}/>
        <h5 className={styles.mangotitle}>MANGO</h5>
      </section>
      <form className={styles.formsection}>
        <div>
          <h2 className={styles.formtitle}>Bienvenidx a Mango</h2>
          <h3 className={styles.formdata}>Nombre y apellido</h3>
          <Input/>
          <h3 className={styles.formdata}>Correo electrónico</h3>
          <Input/>
          <h3 className={styles.formdata}>Contraseña</h3>
          <Input/>
          <h3 className={styles.formdata}>Ciudad, País</h3>
          <Input/>
        </div>
          <a className={styles.button} href="/">
            <ButtonComponent name="Registrate"/>
          </a>
        <h4 className={styles.haveacc}>
          Ya tenés una cuenta?  
          <a href="/login">
            <h5 className={styles.createacc}>
              Login
            </h5> 
          </a>
        </h4>
        
      </form>
    </div>
  );
}

