import styles from './Tag.module.scss';

const Tag = function (props) {
  return (
    <div className={styles.tag} style={{ backgroundColor: props.tagBg }}>
      <p className={styles.tag__text} style={{ color: props.tagColor }}>
        {props.tag}
      </p>
    </div>
  );
};

export default Tag;
