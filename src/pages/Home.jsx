import React from 'react';
import { CardMeeting } from '../components/CardMeeting/CardMeeting'

export function Home() {
  return (
    <>
      <p>Hola mango!</p>
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
    </>
  );
}
