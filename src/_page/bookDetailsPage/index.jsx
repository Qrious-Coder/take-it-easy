import React from 'react';
import styles from './styles.module.css'
import { useLocation, Link } from 'react-router-dom';

const BookDetailPage = ( {booklist} ) => {
  const location = useLocation()
  const { id } = location.state

  console.log('booklist on bookdetail', booklist, id)
  return (
    <div>
      <div>Book ID: {id}</div>
      <div>
        {booklist?.map( (book) => {
          return book.id === id && <>
            <div>
              <h1>{ book.title }</h1>
              <p>{ book.brief }</p>    
            </div>
            <div className={ styles.btnGroup }>
              <Link to={`/book/details/${book.id}/edit`}> Edit </Link>
            </div>      
          </>
        })}
      </div>
    </div>

  )
}

export default BookDetailPage