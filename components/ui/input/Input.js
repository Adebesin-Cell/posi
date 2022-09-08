/* eslint-disable react/display-name */
import React from 'react';
import styles from './Input.module.scss';

const Input = React.forwardRef((props, ref) => {
  const classes = `${styles.input} ${props.className} `;

  return <input ref={ref} {...props} className={classes} />;
});

export default Input;
