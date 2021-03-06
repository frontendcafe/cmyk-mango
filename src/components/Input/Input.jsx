import React from 'react';

import styles from './Input.module.css';

function Input(props) {
  return (
    <label className={styles.label}>
      {props.text}
      <input
        type={props.typeName}
        placeholder={props.placeholder}
        className={`${styles.input} ${props.bigger ? `${styles.bigger}` : ''}`}
        onChange={props.handler}
        name={props.name}
      />
    </label>
  );
}

export { Input };
