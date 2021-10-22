import React from 'react';

import styles from './MobileNavbar.module.css';
import newMeeting from '../../assets/images/my-meetings.svg';
import perfil from '../../assets/images/perfil.svg';
import myMeetings from '../../assets/images/my-meetings.svg';

function MobileNavbar() {
    return(
        <div className={ styles["footer"] }>
            <div className={ styles["icons-footer" ]}>
                <div>
                    <a id="new-meeting" href="">
                        <img src={newMeeting} alt="Nueva reunión"/>
                    </a>
                    <p>Nueva reunión</p>
                </div>
                <div>
                    <a id="perfil" href="">
                        <img src={perfil} alt="Perfil"/>
                    </a>
                    <p>Perfil</p>
                </div>
                <div>
                    <a id="my-meetings" href="">
                        <img src={myMeetings} alt="Mis reuniones"/>
                    </a>
                    <p>Mis reuniones</p>
                </div>
            </div>
        </div>
    );
}

export { MobileNavbar };