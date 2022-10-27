import React, { useState } from 'react';
import styles from './styles.module.css'
import { useDispatch } from 'react-redux';

const AddBook = () => {
  const initState = { title: '', review: ''};
  const [newBook, addNewBook] = useState(initState );
  // const dispatch = useDispatch();
  const handleTitleInput = (e) => {
    addNewBook({...newBook, review: e.target.value})
  } 

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const handleCancel = () => {
    // props.history.push('/')
  }

  return (
    <div>
      <h1>Add new book</h1>
      <form onSubmit={ handleSubmit}>       
        <input
          className='form-control' 
          name='title'
          type='text' 
          placeholder='title'
          onChange={ (e) => addNewBook({...newBook, title: e.target.value}) }
          // required value={ book.title}
        />
        <textarea 
          className='form-control' 
          name='content'
          row='50'
          type='text' 
          placeholder='write your book review here...'
          // onChange={ (e) => }
          // required value={ book.title}
        />
        <div className='style.btnGroup'>
          <input type='submit' value='submit' />
          <button type="button"
            onClick={ handleCancel }
            className={ styles.btn }
          >Cancel</button>
        </div>
      </form>
      <h2>Output</h2>
      <p>{ newBook.title }</p>
      <p>{ newBook.review }</p>
    </div>
  )
}

export default AddBook