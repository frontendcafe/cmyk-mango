import React from 'react';

import styles from './Message.module.css';

function Message (props) {
    return <div className={styles["note"]}>
        {props.children}
    </div>
}

export { Message };