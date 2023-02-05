import styles from '../navBar/NavBar.module.css'
import SearchBar from "../searchBar/SearchBar.jsx";
import { Link } from 'react-router-dom';

export default function Nav (props)  {
    return(
        <div className={styles.navBar}>
            <Link to={'/'}><h1 className={styles.title}>Rick & Morty</h1></Link>
            <div>
                <Link to={'/home'} className={styles.link}>Home</Link>
                <Link to={'/about'} className={styles.link}>About</Link>
            </div>
            
            
            <SearchBar onSearch={props.onSearch} random = {props.random}/>
        </div>
    )
}