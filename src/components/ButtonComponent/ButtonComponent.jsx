import React from 'react';

import styles from './Button.module.css';

const ButtonComponent = ({ name, handle }) => {
  return (
    <button onClick={handle} className={styles.button}>
      {name}
    </button>
  );
};

export { ButtonComponent };
