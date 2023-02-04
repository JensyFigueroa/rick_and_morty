import styles from '../navBar/NavBar.module.css'
import SearchBar from "../searchBar/SearchBar.jsx";

export default function Nav (props)  {
    return(
        <div className={styles.navBar}>
            <h1 className={styles.title}>Rick & Morty</h1>
            <SearchBar onSearch={props.onSearch} random = {props.random}/>
        </div>
    )
}