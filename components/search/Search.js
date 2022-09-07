import { SearchIcon } from '../../utils/icons/Icons';
import Button from '../ui/button/Button';
import Input from '../ui/input/Input';
import styles from './Search.module.scss';

const Search = function () {
  return (
    <div className={styles.searchbar}>
      <Input
        className={styles.searchbar__input}
        type='text'
        name='search'
        placeholder='Search'
      />
      <Button className={styles.searchbar__button} type='submit'>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
