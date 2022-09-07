import Image from 'next/image';
import styles from './Avatar.module.scss';
import AvatarImage from '../../assets/images/avatar.png';

const Avatar = function (props) {
  return (
    <div className={props.className}>
      <Image
        src={AvatarImage}
        className={styles.avatar__image}
        alt='Adekanmbi Ayomiposi Image'
      ></Image>
      <div className={styles.avatar__overlay}>&nbsp;</div>
    </div>
  );
};

export default Avatar;
