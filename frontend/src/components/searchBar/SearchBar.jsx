import { useState } from 'react';
import styles from '../searchBar/SearchBar.module.css'

export default function SearchBar(props) {

   const [character, setCharacter] = useState(0);

   const handleSearchChange = (e) => {
      let { value } = e.target;
      
      if (value){
         setCharacter(value);
      }
   };

   return (
      <div>

      <div className={styles.searchBox}>
         <button className={styles.btnSearch}><i class="fa-solid fa-magnifying-glass"></i></button>
         <input type="text" className={styles.inputSearch} placeholder="N° de ID..." onChange={handleSearchChange}/>
         <button className={styles.btnSearchBar} //onClick={props.onSearch}
            onClick={() => props.onSearch(character)} 
         >Agregar</button>
         <button className={styles.btnSearchBar}
            onClick={props.random} 
         >Random</button>
      </div>
      </div>
   );
}
