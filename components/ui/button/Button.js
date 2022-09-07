import styles from './Button.module.scss';

const Button = function (props) {
  const classes = `${styles.button} ${props.className}`;

  return (
    <button className={classes} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
