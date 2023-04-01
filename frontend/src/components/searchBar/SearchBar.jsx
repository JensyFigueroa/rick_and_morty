import { useState } from 'react';
import styles from '../searchBar/SearchBar.module.css'

export default function SearchBar(props) {

   const [character, setCharacter] = useState(0);

   const handleSearchChange = (e) => {
      let { value } = e.target;

      if (value) {
         setCharacter(value);
      }
      
   };

   return (
      <div className={styles.searchBox}>
         <button className={styles.btnSearch} onClick={() => props.onSearch(character)}><i className="fa-solid fa-magnifying-glass"></i></button>
         <input type="text" className={styles.inputSearch} placeholder="Introduce Chararter ID..." onChange={handleSearchChange}/>
         {/* <button className={styles.btnSearchBar} //onClick={props.onSearch}
            onClick={() => props.onSearch(character)} 
         >Agregar</button> */}
         <button className={styles.btnSearchBar}
            onClick={props.random}
         >Random</button>
      </div>
   );
}



