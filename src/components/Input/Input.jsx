import React from 'react';

import styles from './Input.module.css';

function Input(props) {
  return (
    <label className={styles.label}>
      {props.text}
      <input
        onChange={props.handle}
        type={props.typeName}
        placeholder={props.placeholder}
        className={styles.input}
      />
    </label>
  );
}

export { Input };
