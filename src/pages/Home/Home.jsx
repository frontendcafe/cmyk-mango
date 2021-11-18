import React from 'react';
import { NavbarComponent } from '../../components/NavbarComponent/NavbarComponent';
import { LinkComponent } from '../../components/LinkComponent/LinkComponent';
import { CardMeeting } from '../../components/CardMeeting/CardMeeting'
import { Message } from '../../components/Message/Message';
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent'
import { Input } from '../../components/Input/Input';

import { MobileNavbar } from '../../components/MobileNavbar/MobileNavbar';

import styles from './Home.module.css';

export function Home() {
  return (
    <>
      <NavbarComponent />

      <LinkComponent
        to="/login"
        text="Login"
      />
      <CardMeeting 
        dateTime="17 - septiembre, 2021"
        title="Reunión de ideas"
        description="Discutir las ideas del proyecto"
        observations="Por zoom"
        duration="2hrs aprox."
        votes="2"
        voteUrl=""
        detailsUrl=""
      />
      <Message>
        <p> Ahora tus invitades tienen que elegir el mejor horario. Podés ver las votaciones en <span>“Mis reuniones”</span></p>
      </Message>
      
      <ButtonComponent name="Prueba" />

      <Input />

      <MobileNavbar className={styles["sticky"]}/>
    </>
  );
}
