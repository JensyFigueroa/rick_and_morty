import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from '../detail/Details.module.css'

export default function Details() {
    const [character, setCharacter] = useState({
        name: '',
        status: '',
        species: '',
        gender: '',
        origin: '',
        image: ''
    })

    const { detailId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        // fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                // console.log(char)
                if (char.name) {
                    // setCharacter(char);
                    setCharacter({
                        name: char.name,
                        status: char.status,
                        species: char.species,
                        gender: char.gender,
                        origin: char.origin,
                        image: char.image
                    });
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);


    return (
        <div>
            <div className={styles.details}>
                <div>
                    <h1>{character.name}</h1>
                    <h3 className={styles.field}>Status: &nbsp;<span className={styles.data}>{character.status}</span></h3>
                    <h3 className={styles.field}>Specie: &nbsp;<span className={styles.data}>{character.species}</span></h3>
                    <h3 className={styles.field}>Gender: &nbsp;<span className={styles.data}>{character.gender}</span></h3>
                    <h3 className={styles.field}>Origin: &nbsp;<span className={styles.data}>{character.origin}</span></h3>
                </div>
                <div><img src={character.image} alt={character.name} className={styles.image} /></div>
            </div>
            <button className={styles.btn} onClick={()=> navigate('/home')}>Back to Home</button>
        </div>
    )
}