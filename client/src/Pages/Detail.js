import React from 'react'
import styles from './css/Detail.module.css'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { FaWpforms } from 'react-icons/fa'
import { getTypes, getById, resetDetail} from '../redux/action'
import { useSelector, useDispatch}  from 'react-redux'
import { useEffect } from 'react'



export const Detail = (props) => {

  const dispatch = useDispatch()
  const {id} = useParams()
  const pokemondetails = useSelector(state => state.pokemondetails)

  console.log(pokemondetails, 'detalles')

  useEffect(() => {
    dispatch(resetDetail())
    dispatch(getById(id)) 
  }, [id])

  return (
    <div className={styles.containerdetail}>
      <div className = {styles.navlinks}>
        <Link  className = {styles.linkhome}to='/home'>
        <p className = {styles.linkshome}>VoLvEr</p>
        </Link>

        <p className = {styles.linksdetails}>DeTaIls</p>

        <Link  className = {styles.linkhome}to='/created'>
        <p className = {styles.linkscreate}>CrEaR</p>
        </Link>

      </div>

      <div className= {styles.infodetails}>
        <div className = {styles.contentinfo}> 
        <h1 className={styles.name}>{pokemondetails.name}</h1>
        <h2 className={styles.ratios}>Hp: {pokemondetails.hp}</h2>
        <h2 className = {styles.ratios}> Attack: {pokemondetails.attack}</h2>
        <h2 className={styles.ratios}>Defense: {pokemondetails.defense}</h2>
        <h2 className = {styles.ratios}> Speed: {pokemondetails.speed}</h2>
        <h2 className={styles.ratios}> Height: {pokemondetails.height}</h2>
        <h2 className={styles.ratios}> Weight: {pokemondetails.weight}</h2>
        <h2 className={styles.ratios}> Types: {pokemondetails.types?.map(el => el)}</h2>
        </div>

        <div className = {styles.contenimg}>
        <img className = {styles.img} src = {pokemondetails.image} alt = ''/>
        </div>
        </div>
        
        



    </div>
  )
}
