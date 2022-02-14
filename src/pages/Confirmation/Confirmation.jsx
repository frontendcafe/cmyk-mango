import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import styles from './Confirmation.module.css'

export function Confirmation() {

  return (
    <div className={styles.confirmation}>
      <header className={styles.header}>Mango</header>
      <h2 className={styles.title}>¡Tu invitación está lista!</h2>
      <section className={styles.jam}>
        <div>
          <h4>Diseño</h4>
          <h5>Lluvia de ideas para Luxi</h5>
          <h5>Duración: 1.5 hrs aprox.</h5>
        </div>
        <div>
          <h5>Observaciones: Por zoom</h5>
        </div>
        <div>
          <h4>17 de septiembre</h4>
        </div>
      </section>
    </div>
  )
}

