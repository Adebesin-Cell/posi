import styles from './Input.module.scss';

const Input = function (props) {
  const classes = `${styles.input} ${props.className} `;

  return <input {...props} className={classes} />;
};

export default Input;
