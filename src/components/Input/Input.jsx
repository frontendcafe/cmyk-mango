import React from 'react';

import styles from './Input.module.css';

function Input(props) {
  return (
    <label className={styles.label}>
      {props.text}
      <input type={props.typeName} className={styles.input} />
    </label>
  );
}

export { Input };