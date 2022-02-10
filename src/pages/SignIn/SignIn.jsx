import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent';
import { Input } from '../../components/Input/Input';
import styles from './SignIn.module.css';

import mangoimage from '../../assets/images/mango.svg';
import eye from '../../assets/images/showpassword.svg';
import eyeSlash from '../../assets/images/showpass.svg';
import { useToast } from '@chakra-ui/react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../firebase/firebaseConfig';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export function SignIn() {
  const [showPass, setShowPass] = useState('password');
  const [newUser, setNewUser] = useState({
    name: '',
    lastName: '',
    password: '',
    email: '',
    countryAndCity: '',
    uuid: '',
  });

  const { push } = useHistory();
  const toast = useToast();
  function togglePass() {
    if (showPass === 'password') {
      setShowPass('');
    } else {
      setShowPass('password');
    }
  }
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(newUser);
    if (
      !newUser.name ||
      !newUser.lastName ||
      !newUser.password ||
      !newUser.email
      //|| !newUser.countryAndCity
    ) {
      return toast({
        title: `Complete los campos`,
        status: 'error',
        duration: 1500,
        isClosable: false,
      });
    }
    console.log(newUser);
    createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setNewUser({ ...newUser, uuid: user.uuid });
        console.log(user);
        updateProfile(auth.currentUser, {
          displayName: newUser.name + ' ' + newUser.lastName,
          photoURL: '',
        })
          .then(() => {
            toast({
              title: 'Registered',
              status: 'success',
              duration: 1500,
              isClosable: false,
            });
            push('/');
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        return toast({
          title: `${err}`,
          status: 'error',
          duration: 1500,
          isClosable: false,
        });
      });
  };
  const handlerChngInput = (e) => {
    // console.log(e.target.value);
    let {
      target: { value, name },
    } = e;
    e.target.value = value.trim().replaceAll(/\s/g, '');
    setNewUser({ ...newUser, [name]: e.target.value });
    console.log(newUser[name]);
  };
  return (
    <div className={styles.signin}>
      <header className={styles.header}>Mango</header>
      <section className={styles.mangosection}>
        <img src={mangoimage} alt="mango" className={styles.mangoimage} />
        <h5 className={styles.mangotitle}>MANGO</h5>
      </section>
      <form className={styles.formsection} onSubmit={handlerSubmit}>
        <ul>
          <h2 className={styles.formtitle}>Bienvenidx a Mango</h2>
          <li className={styles.formdata}>
            <h3 className={styles.datatitle}>Nombre</h3>
            <Input bigger name="name" handler={handlerChngInput} />
          </li>
          <li className={styles.formdata}>
            <h3 className={styles.datatitle}>Apellido</h3>
            <Input bigger name="lastName" handler={handlerChngInput} />
          </li>
          <li className={styles.formdata}>
            <h3 className={styles.datatitle}>Correo electrónico</h3>
            <Input bigger name="email" handler={handlerChngInput} />
          </li>
          <li className={styles.formdata}>
            <h3 className={styles.datatitle}>Contraseña</h3>

            <Input
              bigger
              name="password"
              typeName={showPass}
              handler={handlerChngInput}
            />
          </li>

          <li className={styles.formdata}>
            <h3 className={styles.datatitle}>Ciudad, País</h3>
            <Input bigger name="country" />
          </li>
        </ul>
        <picture className={styles.passVisibility}>
          <img src={eye} alt="showpass" onClick={togglePass} />
          <img
            src={eyeSlash}
            alt="showpass"
            className={styles.eye}
            onClick={togglePass}
          />
        </picture>
        <a className={styles.button} href="/">
          <ButtonComponent name="Registrate" />
        </a>
        <h4 className={styles.haveacc}>
          Ya tenés una cuenta?
          <Link to="/login">
            <h5 className={styles.createacc}>Login</h5>
          </Link>
        </h4>
      </form>
    </div>
  );
}
