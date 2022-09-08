import Link from 'next/link';
import { EditIcon, ThrashIcon } from '../../utils/icons/Icons';
import Button from '../ui/button/Button';
import styles from './Table.module.scss';
import Image from 'next/image';

const Table = function (props) {
  return (
    <table className={styles.table}>
      <thead className={styles.table__header}>
        <tr>
          {props.fields.map((field, i) => (
            <th key={i}>{field}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, i) => (
          <tr key={item.id}>
            {item.map((field) => (
              <td key={field.id}>
                {field.image ? (
                  <Image src={field.image} alt={field.title} />
                ) : (
                  <i>{field.value}</i>
                )}
              </td>
            ))}
            {props.actions && (
              <td className={styles.table__action}>
                <Link href='edit' className={styles.table__link}>
                  <EditIcon />
                </Link>
                <Button className={styles.table__button}>
                  <ThrashIcon />
                </Button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
