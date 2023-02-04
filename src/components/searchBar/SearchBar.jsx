import styles from '../searchBar/SearchBar.module.css'

export default function SearchBar(props) {
   return (
      <div>
         <input className={styles.searchInput} type='search' placeholder='Search' />
         <button className={styles.btnSearchBar} onClick={props.onSearch}>Agregar</button>
      </div>
   );
}
