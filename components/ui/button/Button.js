import styles from './Button.module.scss';

const Button = function (props) {
  const classes = `${styles.button} ${props.className}`;

  return (
    <button {...props} className={classes}>
      {props.children}
    </button>
  );
};

export default Button;
