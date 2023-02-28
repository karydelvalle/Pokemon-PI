
import axios from 'axios'

import {
    GET_POKEMONS,
    GET_TYPES,
    GET_BYNAME,
    GET_ID,
    RESET_DETAIL,
    SET_LOADER,
    ORDER_BY,
    FILTER_BY_CREATED,
    FILTER_BY_TYPES,
    POST_CREATED
    
    
} from './types'



export const getPokemonFront = () => dispatch => {
  dispatch({type: SET_LOADER})
    fetch(`http://localhost:3001/pokemons`)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: GET_POKEMONS,
        payload: data
      })
    })
  
}

  export const getTypes = () => dispatch => {
    fetch('http://localhost:3001/types')
    .then((res) => res.json())
    .then(data =>  {
     dispatch({
      type: GET_TYPES,
      payload: data
     })
    })
  }

  export const getByName = (name) => dispatch => {
    fetch(`http://localhost:3001/pokemons/?name=${name}`)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: GET_BYNAME,
        payload: data
      })
    })
  }


  export const getById = (id) => dispatch => {
    dispatch({type: SET_LOADER})
    fetch (`http://localhost:3001/pokemons/${id}`)
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: GET_ID,
        payload: data
      })
    })

  }

  export const resetDetail = () => {
    return {
      type: RESET_DETAIL,
      
    }
  }

export const postCreated = (payload) =>{
  return async dispatch => {
    const data = await axios.post('http://localhost:3001/pokemons', payload)
    console.log(data , 'metodo post')
    return data
  }
}

  export const orderPokemons = (payload) => {
    return {
      type: ORDER_BY,
      payload
    }
}

export const filterByCreated = ( payload ) => {
  return {
    type: FILTER_BY_CREATED,
    payload
  }
}

export const filterByTypes = ( payload ) => {
  return {
    type: FILTER_BY_TYPES,
    payload
  }
}




