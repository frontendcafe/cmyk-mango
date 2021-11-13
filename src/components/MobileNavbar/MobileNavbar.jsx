import React from 'react';
import { Link } from 'react-router-dom';

import styles from './MobileNavbar.module.css';
import newMeeting from '../../assets/images/new-meeting.svg';
import profile from '../../assets/images/profile.svg';
import myMeetings from '../../assets/images/my-meetings.svg';

function MobileNavbar() {
    return(
        <footer>
            <div className={ styles["icons-footer"] }>
                <Link 
                    className={ styles["navbar-button"] }
                    to=""
                    target=""
                >
                    <div>
                        <img src={newMeeting} alt="Nueva reunión"/>
                        <p>Nueva reunión</p>
                    </div>
                </Link>
                <Link 
                    className={ styles["navbar-button"] }
                    to=""
                    target=""
                >
                    <div>
                        <img src={profile} alt="Perfil"/>
                        <p>Perfil</p>
                    </div>
                </Link>
                <Link 
                    className={ styles["navbar-button"] }
                    to=""
                    target=""
                >
                    <div>
                        <img src={myMeetings} alt="Mis reuniones"/>
                        <p>Mis reuniones</p>
                    </div>
                </Link>
            </div>
        </footer>
    );
}

export { MobileNavbar };