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
import newmeet from '../../assets/images/newmeet.svg'
import user from '../../assets/images/user.svg'
import users from '../../assets/images/users.svg'

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

  const [isNotConfirmed, setIsNotConfirmed] = useState(true)

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
      {
        isNotConfirmed
        ? 
        <div>
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
                  <h5 className={styles.jamtextmovile}>Observaciones: 
                    <h5>Por zoom</h5>
                  </h5>
                  <h5 className={styles.jamtextdesktop}>Duración: 1.5 hrs aprox.</h5>
                </div>
                <img src={line} className={styles.line} alt="line" />
                <div>
                  <h5 className={styles.jamtextdesktop}>Observaciones: 
                    <h5>Por zoom</h5>
                  </h5>
                </div>
                <div>
                  <h4 className={styles.jamdate}>17 de septiembre</h4>
                  <h5 className={styles.jamtextmovile}>Duración: 1.5 hrs aprox.</h5>
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
            <div onClick={() =>  setIsNotConfirmed(false)}>
              <ButtonComponent name="Enviar"></ButtonComponent>
            </div>
          </div>
          <button className={styles.plusbutton} onClick={addInputList}>+</button>
          <section className={styles.navbar}>
            <Link>
              <div className={styles.navbarcamp}>
                <img src={newmeet} alt="" />
                <h3>Nueva reunión</h3>
              </div>
            </Link>
            <Link>
              <div className={styles.navbarcamp}>
                <img src={user} alt="" />
                <h3>Perfil</h3>
              </div>
            </Link>
            <Link>
              <div className={styles.navbarcamp}>
                <img src={users} alt="" />
                <h3>Mis reuniones</h3>
              </div>
            </Link>
          </section>
        </div>
        :
        <div className={styles.confirmed}>
          <main className={styles.confirmedmain}>
            <h2 className={styles.confirmedtitle}>¡LISTO!</h2>
            <section className={styles.confirmedsection}>
              <h3 className={styles.confirmedtext}>
                                Ahora tus invitados tienen que elegir el mejor horario. Podés ver las votaciones en <h3 className={styles.confirmedtextorange}>“Mis reuniones”</h3>
              </h3>
            </section>
            <div className={styles.confirmedbuttoncontainer}>
              <Link>
                <ButtonComponent name="Mis reuniones"></ButtonComponent>
              </Link>
            </div>
          </main>
          <section className={styles.navbar}>
            <Link>
              <div className={styles.navbarcamp}>
                <img src={newmeet} alt="" />
                <h3>Nueva reunión</h3>
              </div>
            </Link>
            <Link>
              <div className={styles.navbarcamp}>
                <img src={user} alt="" />
                <h3>Perfil</h3>
              </div>
            </Link>
            <Link>
              <div className={styles.navbarcamp}>
                <img src={users} alt="" />
                <h3>Mis reuniones</h3>
              </div>
            </Link>
          </section>
        </div>
      }
    </div>
  )
}

