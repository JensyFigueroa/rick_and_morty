import photoPerfil from './img/photo-Perfil.png'
import styles from './About.module.css'


export default function About() {
    return (
    <div className={styles.about}>
        <h1>About me</h1>
        <div>
            <img src={photoPerfil} alt="" />
            <p>Mi nombre es Jensy Figueroa, me encuentro realizado el BootCamp de Full Stack Development en Henry  y esta App es del 2do. Módulo de Front-End.</p>
        </div>

        <h1>About App</h1>
        <div>
            <p>Es un App sobre los personajes del programa de Rick & Morty, se realizo en React, utilizando la documenación la API que se encuentra el sitio Web </p>
        </div>
    </div>)
}