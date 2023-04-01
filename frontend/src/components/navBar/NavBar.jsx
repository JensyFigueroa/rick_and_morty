import styles from '../navBar/NavBar.module.css'
import SearchBar from "../searchBar/SearchBar.jsx";
import { NavLink, Link, useLocation } from 'react-router-dom';


export default function NavBar(props) {
    // console.log(props)

    const location = useLocation()

    return (
        <div className={styles.navBarGrid}>
            <div>
                <Link to={'/home'} className={styles.linkTitle}><h1 className={styles.title}>Rick & Morty</h1></Link>
            </div>
            <div className={styles.gridItemMenu}>
                <NavLink to='/home' className={({ isActive }) => (isActive ? 'active' : 'link')}>Home</NavLink>
                <NavLink to='/favorites' className={({ isActive }) => (isActive ? 'active' : 'link')}>Favorites</NavLink>
                <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : 'link')}>About</NavLink>
            </div>

            <div>
                {location.pathname === '/about' || location.pathname !== '/favorites' &&
                    <SearchBar onSearch={props.onSearch} random={props.random} />
                }
            </div>

            <div>
                <button className={styles.btnLogOut} onClick={props.logOut}>LogOut <i className="fa-solid fa-right-from-bracket"></i></button>
            </div>
        </div>
    )
}