import React from 'react';
import { LinkComponent } from '../components/LinkComponent/LinkComponent';

export function Home() {
  return (<>
    <p>Hola mango!</p>
    <LinkComponent
      href="/login"
      text="Login"
    />
  </>);
}
