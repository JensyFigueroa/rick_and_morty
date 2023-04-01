export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const RESET = 'RESET';
export const GET_FAVS = 'GET_FAVS';
export const LOGIN = 'LOGIN';

/* ****** Se comenta porque se agrega cosas que vienen del BACKEN ******** */
// export const addFav = (character) =>{
//     return{
//         type: ADD_FAV,
//         payload: character
//     }
// }

// export const removeFav = (id) => {
//     return {
//         type: REMOVE_FAV,
//         payload: id
//     }
// }

/* Se agrega nueva funcionalidad que viene del BACKEND */
export const addFav = (character, idUser) =>{
    return async function (dispatch){
        try {
            //const data = 
            const data = await fetch(`http://localhost:3001/rickandmorty/favorites?idUser=${idUser}`, {
                method: 'POST', 
                body: JSON.stringify(character),
                headers: {"Content-type":"application/json, charset=utf-8"}
            })
            .then((response) => response.json())
            // .then((data) => 
            if(data)
             dispatch({type: ADD_FAV, payload: character})
            //  )
             
        } catch (error) {
            console.log(error);
        }


        // try {
        //     const response = await axios.post('http://localhost:3001/rickandmorty/favorites',character)
        //     dispatch({type: ADD_FAV, payload: response.data})
        // } catch (error) {
        //     console.log(error);
        // }
    }
}

export const removeFav = (id, idUser) => {
    return async function (dispatch){
        try {
            const data = await fetch(`http://localhost:3001/rickandmorty/favorites/${id}?idUser=${idUser}`,{
            method: 'DELETE',
        })
        .then((response) => response.json())
        // .then((data) => {
            if (data.success) {
                dispatch({
                    type: REMOVE_FAV,
                    payload: id
                })
            }
        // } )
        } catch (error) {
            console.log(error);
        }   
        
        //Another way
        // try {
        //     const response = await axios.post(`http://localhost:3001/favorites/${id}`,id)
        //     dispatch({type: REMOVE_FAV, payload: response.data.id})
        // } catch (error) {
        //     console.log(error);
        // }
    }

}

export const filterCards = (status) => {
    return {
        type: FILTER,
        payload: status
    }
}

export const orderCards = (id) =>{
    return{
        type: ORDER,
        payload: id
    }
}

export const reset = () =>{
    return{
        type: RESET
    }
}

export const getFavorites = (idUser) =>{
    return async function (dispatch) {
        try {
            const data = await fetch(`http://localhost:3001/favorites/favorites?idUser=${idUser}`)
            .then((response) => response.json())
            if(data) dispatch({type: GET_FAVS, payload:data})
        } catch (error) {
            console.log(error);
        }
    }
}

export function login(email, password){
    return async function (dispatch){
        try {
            const obj = await fetch(`http://localhost:3001/login?email=${email}&password=${password}`)
            .then((response) => response.json());

            if(obj.access) dispatch({type:'LOGIN', payload:obj.id})
        } catch (error) {
            console.log(error)
        }
    } 
}