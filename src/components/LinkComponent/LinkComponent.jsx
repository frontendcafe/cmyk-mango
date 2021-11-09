import React from 'react';
import { Link } from 'react-router-dom';

import styles from './LinkComponent.module.css';

function LinkComponent (props) {
    return(
        <Link 
            className={styles.link}
            to={props.to} 
            target={props.target || '_self'}
        >
            {props.text}
        </Link>
    );
}
export { LinkComponent };