import React from 'react';
import { LinkComponent } from '../components/LinkComponent/LinkComponent';
import { CardMeeting } from '../components/CardMeeting/CardMeeting'

export function Home() {
  return (
    <>
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
    </>
  );
}
