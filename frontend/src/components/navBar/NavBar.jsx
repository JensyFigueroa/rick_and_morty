import styles from '../navBar/NavBar.module.css'
import SearchBar from "../searchBar/SearchBar.jsx";
import { NavLink, Link } from 'react-router-dom';


export default function NavBar(props) {

    return (
            <div className={styles.navBar}>
                <Link to={'/home'} className={styles.linkTitle}><h1 className={styles.title}>Rick & Morty</h1></Link>
                <div className={styles.menu}>
                    <NavLink to='/home' className={({ isActive }) => (isActive ? 'active' : 'link')}>Home</NavLink>
                    <NavLink to='/favorites' className={({ isActive }) => (isActive ? 'active' : 'link')}>Favorites</NavLink>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'link')}>About</NavLink>
                </div>

                <SearchBar onSearch={props.onSearch} random={props.random} />
                <button className={styles.btnLogOut} onClick={props.logOut}>LogOut <i class="fa-solid fa-right-from-bracket"></i></button>
            </div>
    )
}