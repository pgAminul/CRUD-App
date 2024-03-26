import React, { useState } from 'react'
import './pages_Style/addBooks.css'
import { useDispatch, useSelector } from 'react-redux';
import { AddBooks } from './using_Tollkit/BookSllice';
import { useNavigate } from 'react-router-dom';

function addBook() {
  const [addName, SetAddName] =useState('');
  const [author, SetAuthor] =useState('');
  const id =useSelector((state)=> state.BookReducer.books.length)
  const dispatch =useDispatch()
  const navigate =useNavigate()


  const handleFromAddBook=(e)=>{
    e.preventDefault();
    const book= {id: id+1, booksName:addName, Authour:author}
    dispatch(AddBooks(book))
    navigate('/show-books', {replace:true})
  }
  const handleAddBook=(event)=>{
    SetAddName(event.target.value)
  }
  const handleAuthor =(e)=>{
    SetAuthor(e.target.value)
  }
    return (
   
<div className="container">
  <h2 className='AddBookTitle'>Add Your Fevorite Books With Book Author Name</h2>
  <form onSubmit={handleFromAddBook}>
  <div className="row">
    <div className="col-25">
      <label htmlFor="fname">Book Name</label>
    </div>
    <div className="col-75">
      <input type="text" id="fname" name="firstname" placeholder="Write Your Fevorite Book Name.."value={addName} onChange={handleAddBook} required/>
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label htmlFor="lname">Author Name</label>
    </div>
    <div className="col-75">
      <input type="text" id="lname" name="lastname" placeholder="Write The Book Author Name.." value={author} onChange={handleAuthor} required/>
    </div>
  </div>
      <button type='submit' className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default addBook
