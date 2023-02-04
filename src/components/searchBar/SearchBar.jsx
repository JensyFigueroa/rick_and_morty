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
         <input className={styles.searchInput} type='search' placeholder='Introduzce un N° de ID'  onChange={handleSearchChange}/>
         <button className={styles.btnSearchBar} //onClick={props.onSearch}
            onClick={() => props.onSearch(character)} 
         >Agregar</button>
          <button className={styles.btnSearchBar}
            onClick={props.random} 
         >Random</button>
      </div>
   );
}
