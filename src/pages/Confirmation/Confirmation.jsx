import { useState, React}  from 'react'
import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { ButtonComponent } from '../../components/ButtonComponent/ButtonComponent'
import styles from './Confirmation.module.css'

import arrow from '../../assets/images/arrow-orange.svg'
import line from '../../assets/images/line.svg'
import share from '../../assets/images/share.svg'
import notifications from '../../assets/images/notifications.svg'
import threelines from '../../assets/images/threelines.svg'
import backicon from '../../assets/images/backicon.svg'

export function Confirmation() {
  const [inputList, setinputList] = useState([
    {id: nanoid()},
    {id: nanoid()},
    {id: nanoid()}
  ]);

  function addInputList() {
    setinputList([
      ...inputList,
      {
        id: nanoid(),
      }
    ])
  }

  const generatedLink = "https://www.figma.com/file/cv13MX..."
  return (
    <div className={styles.confirmation}>
      <header className={styles.header}>
        <h1 className={styles.headertitle}>
          Mango
        </h1>
        <div className={styles.headericons}>
          <img src={notifications} alt="notifications" className={styles.headericon}/>
          <img src={threelines} alt="threelines" className={styles.headericon}/>
        </div>
        <div className={styles.headerlink}>
          <h3>
            <Link>
              Nueva Reunión
            </Link>
          </h3>
          <h3>
            <Link>
              Mi perfil
            </Link>
          </h3>
          <h3 className={styles.dashed}>
            <Link>
              Mis reuniones
            </Link>
          </h3>
          <h3 className={styles.logout}>
            <Link>
              Log out
            </Link>
          </h3>
        </div>
      </header>
      <Link>
        <div className={styles.back}>
          <img src={backicon} alt="back" className={styles.backicon}/>
          <h4 className={styles.backtext}>Atrás</h4>
        </div>
      </Link>
      <h2 className={styles.title}>¡Tu invitación está lista!</h2>
      <section className={styles.section}>
        <div className={styles.jam}>
          <h4 className={styles.jamtitle}>Diseño</h4>
          <div className={styles.jaminfo}>
            <div>
              <h5 className={styles.jamtext}>Lluvia de ideas para Luxi</h5>
              <h5 className={styles.jamtext}>Duración: 1.5 hrs aprox.</h5>
            </div>
            <img src={line} className={styles.line} alt="line" />
            <div>
              <h5 className={styles.jamtext}>Observaciones: 
                <h5>Por zoom</h5>
              </h5>
            </div>
            <div>
              <h4 className={styles.jamdate}>17 de septiembre</h4>
            </div>
            <Link>
              <img src={arrow} alt="arrow" />
            </Link>
          </div>
        </div>
      </section>
      <h2 className={styles.subtitle}>Puedes copiar el link o enviarla por mail</h2>
      <div className={styles.form}>
        <section className={styles.copyNShare}>
        <h3 className={styles.camp}>Link:</h3>
        <input type="text" className={styles.linkinput} placeholder={generatedLink} readOnly onClick={() =>  navigator.clipboard.writeText(generatedLink)}>
          
        </input>
        <img src={share} alt="share" className={styles.shareicon} />
        <h3 className={styles.camp}>Mail</h3>
        {
          inputList.map(() => (
            <input type="text" className={styles.input} />
          ))
        }
        </section>
        <div>
          <Link to="/home">
            <ButtonComponent name="Registrate"></ButtonComponent>
          </Link>
        </div>
      </div>
      <button className={styles.plusbutton} onClick={addInputList}>+</button>
    </div>
  )
}

