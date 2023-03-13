export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const RESET = 'RESET';

/* ****** Se comenta porque se agrega cosas que vienen del BACKEN ******** */
export const addFav = (character) =>{
    return{
        type: ADD_FAV,
        payload: character
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

/* Se agrega nueva funcionalidad que viene del BACKEND */
/* export const addFav = (character) =>{
    return async function (dispatch){
        try {
            await fetch ('http://localhost:3001/fav', {
                method: 'POST',
                body: JSON.stringify(character),
                headers: {"Content-type":"application/json; charset=UFT-8"}
            })
            .then((response) => response.json())
            .then((data) => dispatch({
                type: ADD_FAV,
                payload: data,
            }) )
        } catch (error) {
            console.log(error);
        }
    }
}

export const removeFav = (id) => {
    return async function (dispatch){
        try {
            await fetch(`http://localhost:3001/fav/${id}`,{
            method: 'DELETE',
        })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                dispatch({
                    type: REMOVE_FAV,
                    payload: id
                })
            }
        } )
        } catch (error) {
            console.log(error);
        }
        
    }
} */


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