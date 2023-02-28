import React from 'react'
import styles from './css/SearchBar.module.css'
import { AiOutlineClose } from 'react-icons/ai'
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getByName, getPokemonFront} from '../redux/action'

export const SearchBar = (setCurrentPage) => {

    const dispatch = useDispatch()
    const [name, setName] = useState('')
 
    function handleInputOnChange (e) {
      e.preventDefault()
      setName(e.target.value)
      console.log(e.target.value, 'value')
    }

    function handleButonSubmit(e) {
      e.preventDefault()
        dispatch(getByName(name))
        setName('');
       
        
      
    }

    function handleButonReset(e) {
      e.preventDefault()
      dispatch(getPokemonFront())
     
      
   
  }



  return (


    <form onSubmit = {e => handleButonSubmit(e)} >
    <div className= {styles.search}>

    <div>
        <button 
        className={styles.btn}
        type = 'submit'>
        <AiOutlineSearch/>
        </button>
      </div>
     
      <div>
       <input 
        className = {styles.input}
        type="text" 
        value= {name}
        onChange={ e => handleInputOnChange(e)}
        placeholder = 'Search...'
        />
      </div>

      <div>
        <button 
        className={styles.btnreset}
        type = 'reset'
        onClick = { e => handleButonReset(e)}
        ><AiOutlineClose/>
        </button>
      </div>

     

    </div>

    </form>
  )
}