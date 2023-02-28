import React from 'react'
import styles from './css/Pagination.module.css'
import { MdArrowBack } from 'react-icons/md'
import { IoMdArrowForward } from 'react-icons/io'



export const Pagination = ({totalCards, cardPerPage, setCurrentPage, currentPage}) => {

  let totalPages = []

  for( let i = 1 ; i < Math.ceil( totalCards / cardPerPage) + 1; i++){
    totalPages.push(i)
   
   
  }

  

 


return (
    <div className = {styles.container_pagin}>

        <div className = {styles.pagination}>
        <div className = {styles.back}>
            <MdArrowBack 
            className={styles.der}
            onClick = {currentPage > 1 ? () => setCurrentPage(currentPage-1): () => setCurrentPage(currentPage)}
            
            />
            
        </div>
        <div>
            {
              totalPages.map((el, index) => {
                return <button 
                className= {styles.btnPagination} 
                key = { index }
                onClick = {() => setCurrentPage(el)}
                >{el}
                </button>})
            }
        </div>
        <div className = {styles.next}>
            <IoMdArrowForward 
            className={styles.izq}
            onClick = {currentPage < 6 ? () => setCurrentPage(currentPage + 1): () => setCurrentPage(currentPage)}
            />
        </div>
    </div>
    </div>
  )
}