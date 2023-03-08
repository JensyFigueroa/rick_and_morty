import styles from '../error/Error.module.css'
import error404 from '../error/img/error404.png'
export default function Error(){
    return(
        <div>
            <h1 className={styles.h1Error}>Oops...</h1>
            <h3 className={styles.error}>404 -  Page not found</h3>
            <p className={styles.error}>The page you are looking for migth have been removed had its nam change or is temporarity unavailable.</p>

            <img src={error404} alt="" className={styles.imgError}/>
        </div>
    )
}