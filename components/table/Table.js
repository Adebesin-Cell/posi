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
            <th key={field}>{field}</th>
          ))}
          {props.actions && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {props.data.map((item, i) => (
          <tr key={item.id}>
            {item.map((field, i) => (
              <td key={i}>
                {field.image ? (
                  <Image src={field.image} alt={field.title} />
                ) : (
                  <i>{field.value}</i>
                )}
              </td>
            ))}
            {props.actions && (
              <td>
                <div className={styles.table__action}>
                  <Link href='edit' className={styles.table__link} title='Edit'>
                    <a title='Edit' className={styles.table__link} name='Edit'>
                      <EditIcon />
                    </a>
                  </Link>
                  <Button
                    className={styles.table__button}
                    title='Delete'
                    name='Delete'
                  >
                    <ThrashIcon />
                  </Button>
                </div>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
