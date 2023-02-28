import React from 'react'
import styles from './css/LandingPage.module.css'
import { Link } from 'react-router-dom'

export const LandingPage = () => {
  return (
    <div className = {styles.background}>
     
      
      <div className={styles.content}>
        
        <Link to = '/home'  >
        
        <div className={styles.start}></div>
        <div className={styles.ball}></div>
        
        </Link>
      </div>


    </div>
  )
}
