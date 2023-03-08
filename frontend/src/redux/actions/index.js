export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const RESET = 'RESET'

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