import React from 'react'
import styles from './css/Loader.module.css'

import { Vortex } from 'react-loader-spinner'

export const Loader = () => {
  return (
    <div className = {styles.containerloader}>
      <div className={styles.vortex}>

      <Vortex
       visible={true}
       height="250"
       width="250"
       ariaLabel="vortex-loading"
       wrapperStyle={{}}
       wrapperClass="vortex-wrapper"
       colors={['blue', 'yellow', 'yellow', 'blue', 'blue', 'yellow']}
      
      />

      </div>
    </div>
  )
}