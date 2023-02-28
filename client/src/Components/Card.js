import React from 'react'
import styles from './css/Card.module.css'



export function Card(props) {

    return (
        <div className = {styles.container}>
            
            <div className = {styles.cardBox}>
                <div className = {styles.front}>
                    <div>
                    <img src =  {props.image} alt = '' className={styles.imgfront} />
                    <p className={styles.namefront}>{props.name}</p>
                    </div>
                </div>
                <div className = {styles.back}>
                    <div className= {styles.logopokemon}></div>
                    <div className={styles.titleback}>
                    <p className = {styles.titleattack}> Attack: {props.attack}</p>                   
                    </div>
                    <p className={styles.titleback}>{props.types.join(',  ')}</p>
                </div>
            </div>
            

            
        </div>
    )
}


