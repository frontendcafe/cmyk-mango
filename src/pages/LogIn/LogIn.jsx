import React, { useState } from 'react';
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent';
import { Input } from '../../components/Input/Input';
import { auth } from '../../firebase/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styles from './LogIn.module.css';
import { useHistory } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

import mangoimage from '../../assets/images/mango.svg';

export function LogIn() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { push } = useHistory();

  const toast = useToast();

  const handleChangeEmail = (e) => {
    const {
      target: { value },
    } = e;
    setCredentials({
      ...credentials,
      email: value,
    });
  };

  const handleChangePassword = (e) => {
    const {
      target: { value },
    } = e;
    setCredentials({
      ...credentials,
      password: value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    if (password.length < 6) {
      console.log('no');
      return null;
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          push('/');
          toast({
            title: 'Logged',
            status: 'success',
            duration: 2000,
            isClosable: false,
          });
        })
        .catch((err) => {
          const error = err
            .toString()
            .replace('FirebaseError: Firebase: Error ', '');
          console.log(error, err);
          toast({
            title: `Credentials Error: ${error}`,
            status: 'error',
            duration: 2000,
            isClosable: false,
          });
        });
    }
  };

  return (
    <div className={styles.signin}>
      <header className={styles.header}>Mango</header>
      <section className={styles.mangosection}>
        <img src={mangoimage} alt="mango" className={styles.mangoimage} />
        <h5 className={styles.mangotitle}>MANGO</h5>
      </section>
      <form className={styles.formsection}>
        <h2 className={styles.formtitle}>¡Bienvenidx!</h2>
        <h3 className={styles.formsubtitle}>Ingresa a tu cuenta</h3>
        <Input
          typeName="email"
          handle={handleChangeEmail}
          placeholder="Correo electrónico"
        />
        <Input
          typeName="password"
          handle={handleChangePassword}
          placeholder="Contraseña"
        />
        <a href="/forgetpass">
          <h4 className={styles.forgetpass}>Olvidaste tu contraseña?</h4>
        </a>
        <ButtonComponent handle={handleLogin} name="Log in" />

        <h4 className={styles.haveacc}>
          {console.log(credentials)}
          ¿No tenés cuenta?
          <a href="/signin">
            {console.log(process.env.REACT_APP_FIREBASE_APIKEY)}
            <h5 className={styles.createacc}>Crear cuenta</h5>
          </a>
        </h4>
      </form>
    </div>
  );
}
