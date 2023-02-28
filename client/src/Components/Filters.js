import React from 'react'
import styles from './css/Filters.module.css'
import { TiArrowUpOutline } from 'react-icons/ti'
import { TiArrowDownOutline } from 'react-icons/ti'
import { useDispatch, useSelector } from 'react-redux'
import {orderPokemons, filterByCreated, filterByTypes } from '../redux/action'





export const Filters = ({setCurrentPage}) => {

  const types = useSelector(state => state.types)
  const dispatch = useDispatch()

  function handledOrderAZ (e) {
    e.preventDefault()
    dispatch(orderPokemons(e.target.value))
    setCurrentPage(1)
  }

  function handledOrderZA (e) {
    e.preventDefault()
    dispatch(orderPokemons(e.target.value))
    setCurrentPage(1)
  }

  function handledOrderAttackAsc (e) {
    e.preventDefault()
    dispatch(orderPokemons(e.target.value))
    setCurrentPage(1)
  }

  function handledOrderAttackDesc (e) {
    e.preventDefault()
    dispatch(orderPokemons(e.target.value))
    setCurrentPage(1)
  }

  function handledSelect (e){
    e.preventDefault()
    if(e.target.value === 'createdInDb' ){
      dispatch(filterByCreated(e.target.value))
      setCurrentPage(1)
    }else{
      dispatch(filterByTypes(e.target.value))
      setCurrentPage(1)
    }


  }

  return (
    <div className={styles.containerfilters}>
        <div>
        <button  onClick = {e => handledOrderAZ(e)} className= {styles.order} value = 'asc' >ORDER A-Z <TiArrowUpOutline className={styles.icon}/></button>
        <button  onClick = {e => handledOrderZA(e)} className= {styles.order} value = 'desc' >ORDER Z-A <TiArrowDownOutline className={styles.icon}/></button>
        <button  onClick = {e => handledOrderAttackAsc(e)}className= {styles.order} value = 'atk-asc' >ORDER ATK<TiArrowUpOutline className={styles.icon}/></button>
        <button  onClick = {e=> handledOrderAttackDesc(e)}className= {styles.order} value = 'atk-desc' >ORDER ATK<TiArrowDownOutline className={styles.icon}/></button>
        </div>

        <div>
          <select onChange = {e => handledSelect(e)} className = {styles.selects}>
            <option>Filter by:</option>
          <optgroup label='Db-Pokemons'>
            <option value='createdInDb'>Creados</option>
          </optgroup>
          <optgroup label = 'Types'>
            {types?.map((el, index) =>
              <option
              key = {index}
              value= {el}
              >{el}</option>)}
          </optgroup>

          </select>
        </div>

      




    </div>
  )
}
