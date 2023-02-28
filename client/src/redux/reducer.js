import {
    GET_POKEMONS,
    SET_LOADER,
    GET_TYPES,
    GET_BYNAME,
    GET_ID,
    RESET_DETAIL,
    ORDER_BY,
    FILTER_BY_CREATED,
    FILTER_BY_TYPES,
    POST_CREATED
    
} from './types'



const inicialState = {
pokemons : [],
pokemonsCopy: [],
filters: [],
pokemondetails : {},
types : [], 
loader: false


}

function rootReducer ( state = inicialState, action) {

    switch (action.type) {

        case SET_LOADER:
            return {
                ...state,
                loader: true
            }


        case GET_POKEMONS:
        return {
            ...state,          
            pokemons : action.payload,
            pokemonsCopy: action.payload,
            filters: action.payload,
            loader: false, 
        }

        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }

        case GET_BYNAME:

            return {
                ...state,      
                pokemons: action.payload,
                filters: action.payload,
                
            }

        case GET_ID:  
        console.log(action.payload, 'action')            
            return{
                ...state,
                pokemondetails: action.payload,
                loader: false
            }

        case RESET_DETAIL:
            return {
                ...state,
                pokemondetails: {}
            }
        
        case ORDER_BY:
            if(action.payload === 'asc'){
                return{
                    ...state,
                    pokemons: state.filters.slice().sort((a,b) => {
                        if(a.name.toLowerCase().trim() > b.name.toLowerCase().trim() )return 1
                        if(a.name.toLowerCase().trim() < b.name.toLowerCase().trim() )return -1
                        return 0;
                    }),
                } 
            } else if (action.payload === 'desc'){
                return {
                    ...state,
                    pokemons: state.filters.slice().sort((a,b) => {
                        if(a.name.toLowerCase().trim() > b.name.toLowerCase().trim() )return -1
                        if(a.name.toLowerCase().trim() < b.name.toLowerCase().trim() )return 1
                        return 0;
                    }),
                }
            } else if (action.payload === 'atk-asc') {
                    return {
                        ...state,
                        pokemons: state.filters.slice().sort((a,b) => a.attack - b.attack)
                    }

            } else if (action.payload === 'atk-desc') {
                return {
                    ...state,
                    pokemons: state.filters.slice().sort((a,b) => b.attack - a.attack)
                }
            } else {
                return {
                    
                    ...state,
                    pokemons: state.filters
                }
            }

            case FILTER_BY_CREATED:
                const pokemonsCreated = state.pokemonsCopy?.filter(el => el.createdDb) 
                return {
                    ...state,
                    pokemons: pokemonsCreated,
                    filters: pokemonsCreated
                    
                }  

            case FILTER_BY_TYPES:
                const pokemonsTypes = action.payload === 'Filter by:' ? 
                state.pokemonsCopy : state.pokemonsCopy.filter(el => el.types.includes(action.payload))
                return {
                    ...state,
                    pokemons : pokemonsTypes,
                    filters : pokemonsTypes
                    
                    
                    
                }

                case POST_CREATED: 
                return {
                  ...state
                }

    default :
    return state

    }

}



export default rootReducer