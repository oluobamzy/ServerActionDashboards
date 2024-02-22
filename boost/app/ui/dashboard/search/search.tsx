import styles from './search.module.css';
import { MdSearch } from 'react-icons/md';

 const Search = ({placeholder, className}:{placeholder:string, className:string}) => {
  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  )
}
export default Search