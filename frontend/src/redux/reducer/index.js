import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET, GET_FAVS, LOG_IN, LOG_OUT } from '../actions';

const inicialState = {
    idUser: 0,
    access: false,
    myFavorites: [],
    allCharacters: []
}

export default function rootReducer(state = inicialState, action) {
    switch (action.type) {
        case ADD_FAV:
            const addFav = [...state.allCharacters, action.payload];
            return {
                ...state,
                // myFavorites:[...state.myFavorites, action.payload],
                myFavorites: [...addFav],
                allCharacters: [...addFav]
            }

        case REMOVE_FAV:
            const deleteFav = state.allCharacters.filter(e => e.id !== action.payload);
            return {
                ...state,
                myFavorites: [...deleteFav],
                allCharacters: [...deleteFav]
            }

        case FILTER:
            let filterFav;
            if (action.payload === 'Select Option') {
                filterFav = state.allCharacters
            } else {
                filterFav = state.allCharacters.filter(e => e.gender.toLowerCase() === action.payload.toLowerCase())
            }
            return {
                ...state,
                myFavorites: filterFav
            }

        case ORDER:
            let orderFav;
            if (action.payload === 'Ascendente') {
                orderFav = state.myFavorites.sort((a, b) => a.id < b.id ? 1 : -1)
            }
            if (action.payload === 'Descendente') {
                orderFav = state.myFavorites.sort((a, b) => a.id > b.id ? 1 : -1)
            }
            if (action.payload === 'Select Option') {
                orderFav = state.allCharacters
            }

            return {
                ...state,
                myFavorites: [...orderFav]
            }

        // case RESET: return{
        //     ...state,
        //     myFavorites: state.allCharacters
        // }

        case GET_FAVS: return {
            ...state,
            myFavorites: [...action.payload],
            allCharacters: [...action.payload]
        }

        case LOG_IN: return {
            ...state,
            idUser: action.payload.id,
            access: action.payload.access
        }
        case LOG_OUT:
            console.log('reducer', action.payload)
            return {
                ...state,
                idUser: 0,
                access: action.payload
            }

        default: return state
    }
}