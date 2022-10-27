import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";
import {useSelector, useDispatch } from 'react-redux';
import {fetchBooklist} from './_actions';
import BooklistPage from './_page/bookListPage'
import AddBook from './_component/addBook/AddBook';
import EditBookPage from './_page/editBookPage';
import BookDetailPage from './_page/bookDetailsPage';
import axios from 'axios';
import React, { useEffect } from 'react';
import MyProfile from './_page/myProfile';
import LoginPage from './_page/loginPage';
import RegisPage from './_page/registerPage';

function App() {
  return (
      <div className="App"> 
        <Navigation />
        <div className="container">
          <Main />
        </div>      
      </div>
  );
}

const Navigation = () => {
  return (
    <nav className='nav'>
      <ul className='nav-list'>
        <li className='nav-item'>
          <NavLink to="/books" className={navData => (navData.isActive ? "active" : null)}>All books</NavLink>
          </li>
        <li>
          <NavLink to="/about" className={navData => (navData.isActive ? "active" : null)}>About</NavLink>
        </li>
      </ul>
    </nav>
  )
}

const Main = () => {
  const booklist = useSelector( state => state.books);
  const dispatch = useDispatch();
  console.log(booklist)
  
  useEffect(function(){
    axios.get(`http://localhost:5000/books`)
      .then((res) => {
        dispatch(fetchBooklist(res))
      })
      .catch( err => console.log(`error`, err))
  }
  , [dispatch])

  return (
    <>
    <h1>Book Home</h1>
    <Routes>
      <Route exact path="/" element={<h1>HOMEPAGE</h1>}></Route>
      {/* <Route exact path="/" element={<h1>HOMEPAGE</h1>}></Route> */}
      <Route exact path="/login" element={<LoginPage />}></Route>
      <Route exact path="/register" element={<RegisPage />}></Route>

      <Route exact path="/books" element={<BooklistPage booklist={booklist} />}></Route>
      <Route exact path="/books/add" element={<AddBook />}></Route>
      <Route exact path="/books/details/:_id" element={<BookDetailPage booklist={booklist} />}></Route>
      <Route exact path="book/details/:_id/edit" element={<EditBookPage />}></Route>

      <Route exact path="/profile" element={<MyProfile />}></Route>
    </Routes>
    </>

  )
}

export default App;
