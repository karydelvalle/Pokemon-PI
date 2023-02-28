import React from 'react'
import styles from './css/Home.module.css'
import { Card } from '../Components/Card'
import { Loader } from '../Components/Loader'
import { Link } from 'react-router-dom'
import { Pagination } from '../Components/Pagination'
import { NavBar } from '../Components/NavBar'
import { getPokemonFront, getTypes } from '../redux/action'
import { useState, useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux'


export const Home = () => {



const dispatch = useDispatch()
const pokemons = useSelector(state => state.pokemons)
const types = useSelector(state => state.types)
const loader = useSelector(state => state.loader)
const pokemonsCopy = useSelector(state => state.pokemonsCopy)


const [currentPage, setCurrentPage] = useState(1);
const [cardPerPage, setCardPerPage] = useState(12);
const lastIndex = currentPage * cardPerPage;
const firstIndex = lastIndex - cardPerPage;
const filterPokemons = Array.isArray(pokemons)? pokemons.slice(firstIndex, lastIndex): 1




useEffect(() => {

  dispatch(getTypes())
  dispatch(getPokemonFront())
  
}, [])


  return (
    <div className = {styles.contgral}>
      <div className= {styles.NavPag}>  
      <NavBar setCurrentPage={setCurrentPage}/> 
      <div className={styles.pagination}>
         <Pagination totalCards={pokemons.length} cardPerPage={cardPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      </div>  
      
          
      </div>
      { loader? <Loader/> :
      
      <div className = {styles.homecontainer}>
        <div className={styles.cardscontainer}>

           {Array.isArray(filterPokemons)? filterPokemons.map(el => {
              return (
                <Link to = {`/details/${el.id}`} key = {el.id}>
                <div key={el.id} className={styles.card}>
                <Card
                    image={el.image}
                    name={el.name}
                    attack={el.attack}
                    types={el.types?.map(types => types)}/>
                </div>
                </Link>
            )

           }): (<div className= {styles.notresults}> 
           
                </div>)
         }
        </div>
      </div>
      
      }
        
      
    </div>

  )
}



 