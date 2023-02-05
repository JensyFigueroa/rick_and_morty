import photoPerfil from './img/photo-Perfil.png'
import styles from './About.module.css'
import styled from 'styled-components'

const DivAbout = styled.div`
   display: flex;
   flex-direction: column;
`


export default function About () {
    return (<DivAbout>
            <h1>About me</h1>
            <div className={styles.about}>
                <img src={photoPerfil} alt="" />
                <p>Soy Jensy Figueroa, me encuentro realizado el BootCamp de Full Stack Development en Henry  y esta App es del 2do. Módulo de Front-End.</p>
            </div>

            <h1>About App</h1>  
            <div className={styles.about}>
                <p>Es un App sobre los personajes del programa de Rick & Morty, se realizo en React, utilizando la documenación la API que se encuentra el sitio Web </p>
            </div> 
        
            
            
        </DivAbout>)
}