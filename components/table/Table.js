import styles from './Table.module.scss';

const Table = function (props) {
  return (
    <table className={styles.table}>
      <thead className={styles.table__header}>
        <tr>
          {props.fields.map((field, i) => (
            <th key={i}>{field.name}</th>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default Table;
