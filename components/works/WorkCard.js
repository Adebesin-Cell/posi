import styles from './WorkCard.module.scss';
import Image from 'next/image';

const WorkCard = function (props) {
  return (
    <li className={styles.card}>
      <Image
        src={props.image}
        alt={props.title}
        className={styles.card__image}
      />
      <div className={styles.card__overlay}>
        <div className={styles.card__info}>&nbsp;</div>
      </div>
    </li>
  );
};

export default WorkCard;
