import { ADD_FAV, REMOVE_FAV, FILTER, ORDER, RESET, GET_FAVS } from '../actions';

const inicialState = {
    myFavorites:[],
    allCharacters:[]
}

export default function rootReducer (state = inicialState, action){
    switch (action.type) {
        case ADD_FAV: 
        console.log(action.payload)
            const addFav = [...state.allCharacters, action.payload];
            return{
            ...state, 
            // myFavorites:[...state.myFavorites, action.payload],
            myFavorites:[...addFav],
            allCharacters:[...addFav]
            }

        case REMOVE_FAV: 
        const deleteFav = state.allCharacters.filter(e => e.id !== action.payload);
        return{
            ...state, 
            myFavorites:[...deleteFav],
            allCharacters:[...deleteFav]
        }

        case FILTER: 
            return {
            ...state,
            myFavorites: state.allCharacters.filter(e => e.gender === action.payload)
        }

        case ORDER: 
            let orderFav;
            if (action.payload === 'Ascendente') {
                orderFav = state.myFavorites.sort((a,b) => a.id < b.id ? 1 : -1)
            } else {
                orderFav = state.myFavorites.sort((a,b) => a.id > b.id ? 1 : -1)
            }
        return{
            ...state,
            myFavorites: [...orderFav]
        }

        case RESET: return{
            ...state,
            myFavorites: state.allCharacters
        }

        case GET_FAVS: return {
            ...state,
            myFavorites:[...action.payload],
            allCharacters:[...action.payload    ]
        }
    
        default: return state 
    }
}