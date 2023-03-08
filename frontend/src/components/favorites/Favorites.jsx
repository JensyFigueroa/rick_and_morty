import { useDispatch, useSelector } from "react-redux";
import { orderCards, filterCards } from "../../redux/actions/index";
import Card from "../card/Card"
import styles from './Favorites.module.css';

export default function Favorites(props) {
    const dispatch = useDispatch()
    const myFavorites = useSelector((state)=>state.myFavorites);

    return <div style={{position:'relative', top:'100px'}}>
        <select onChange={(e)=>dispatch(orderCards(e.target.value))} style={{height:'40px', marginRight:'20px'}} >
            {['Ascendente', 'Descendente'].map((e, i)=> <option value={e} key={i}>{e}</option> )}
        </select>
        <select onChange={(e)=>dispatch(filterCards(e.target.value))} style={{height:'40px'}}>
            {['Male', 'Female', 'Unknow', 'Genderless'].map((e, i)=> <option value={e} key={i}>{e}</option> )}
        </select>
        <div className={styles.favorites}>
            {myFavorites.length === 0 ? (
                <p>Agregue personajes a favorites</p>
            ) : (
                myFavorites.map((e) =>
                    <Card
                        id={e.id}
                        name={e.name}
                        species={e.species}
                        gender={e.gender}
                        image={e.image}
                        // onClose={()=> alert('Emulamos que se cierra la card')} 
                        //onClose={() => props.onClose(e.id)}
                        key={e.id} />

                ))}
        </div>
    </div>
}

// export function mapStateToProps(state){
//     return {
//         myFavorites: state.myFavorites
//     }
// }

// export default connect(mapStateToProps)(Favorites)

