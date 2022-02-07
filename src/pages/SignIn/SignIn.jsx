import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent';
import { Input } from '../../components/Input/Input';
import styles from './SignIn.module.css'

import mangoimage from '../../assets/images/mango.svg'
import eye from '../../assets/images/showpassword.svg'
import eyeSlash from '../../assets/images/showpass.svg'

export function SignIn() {
  const [showPass, setShowPass] = useState("password")

  function togglePass() {
    if (showPass === 'password') {
      setShowPass('')
    }
    else {
      setShowPass('password')
    }
  }
  return (
    <div className={styles.signin}>
      <header className={styles.header}>Mango</header>
      <section className={styles.mangosection}>
        <img src={mangoimage} alt="mango" className={styles.mangoimage}/>
        <h5 className={styles.mangotitle}>MANGO</h5>
      </section>
      <form className={styles.formsection}>
        <ul>
          <h2 className={styles.formtitle}>Bienvenidx a Mango</h2>
          <li className={styles.formdata}>
            <h3 className={styles.datatitle}>Nombre y apellido</h3>
            <Input bigger/>
          </li>
          <li className={styles.formdata}>
            <h3 className={styles.datatitle}>Correo electrónico</h3>
            <Input bigger/>
          </li>
          <li className={styles.formdata}>
            <h3 className={styles.datatitle}>Contraseña</h3>
            
            <Input bigger typeName={showPass} />
          </li>
          
          <li className={styles.formdata}>
            <h3 className={styles.datatitle}>Ciudad, País</h3>
            <Input bigger />
          </li>
        </ul>
        <picture className={styles.passVisibility}>
            <img src={eye} alt="showpass" onClick={togglePass} />
            <img src={eyeSlash} alt="showpass" className={styles.eye} onClick={togglePass} />
        </picture>
        <a className={styles.button} href="/">
          <ButtonComponent name="Registrate"/>
        </a>
        <h4 className={styles.haveacc}>
          Ya tenés una cuenta?  
          <Link to="/login">
            <h5 className={styles.createacc}>
              Login
            </h5> 
          </Link>
        </h4>
        
      </form>
    </div>
  );
}

