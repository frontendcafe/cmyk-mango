import React from 'react';

import { Message } from '../components/Message/Message';

export function Home() {
  return (
    <>
      <p>Hola mango!</p>
      <Message>
        <p> Ahora tus invitades tienen que elegir el mejor horario. Podés ver las votaciones en <span>“Mis reuniones”</span></p>
      </Message>
    </>
  );
}
