
import { Link } from 'react-router-dom';
import styles from './styles.module.css'

const BooklistPage = ({booklist}) => {
  return (
    <div>
      <div>
        <Link to="/books/add" className={ styles.addBtn}> Add new book</Link>
      </div>
        You may like:
        {booklist.map(( book) =>{
          return(
            <div  key={ book.id } className={ styles.bookCtn }>
              <div>
                <h2>{ book.title }</h2>
                <p>{ book.brief }</p>
                <p>Like: { book.like }</p>
                <p>Comment: { book.comNum }</p>
              </div>
              <div className='btn-group'>
                <Link to={ `/books/details/${book.id}`} state={{ id: book.id }}>More detail</Link>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default BooklistPage