import React from 'react';

import styles from './Input.module.css';

function Input(props) {
  return (
    <div>
      <label className={styles.label}>
        {props.text}
        <input type={props.types} className={styles.input} />
      </label>
    </div>
  );
}

export { Input };
