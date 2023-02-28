import React from 'react'
import styles from './css/NavBar.module.css'
import { Link } from 'react-router-dom'
import { SearchBar } from '../Components/SearchBar'
import { Filters } from './Filters'
import { getPokemonFront, getTypes } from '../redux/action'
import { useDispatch } from 'react-redux'




export const NavBar = ({setCurrentPage}) => {

  const dispatch = useDispatch()

  function handleReset(e){
    e.preventDefault()
    dispatch(getTypes())
    dispatch(getPokemonFront())
    
  }

  return (
    <div className = {styles.linksNav}>

    <nav className = {styles.navbar}>
       
      <button className = {styles.reset} onClick = {handleReset}>ReSet</button>
      <SearchBar setCurrentPage = { setCurrentPage } />
      <Filters setCurrentPage = { setCurrentPage }/>
 
      
      <Link className = {styles.link} to = '/created'>
          <p className = {styles.linklanding}>CrEaR</p>
      </Link>

    </nav>
    </div>
  )
}