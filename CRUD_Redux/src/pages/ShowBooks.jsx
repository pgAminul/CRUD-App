import React from 'react'
import './pages_Style/ShowBooks.css'
import { useDispatch, useSelector } from 'react-redux';
import { DeleteBook } from './using_Tollkit/BookSllice';
import { Link } from 'react-router-dom';
function ShowBooks() {
  
  const books=useSelector((state)=> state.BookReducer.books)
  const dispatch=useDispatch()
  const handleDelete=(id)=>{
    dispatch(DeleteBook({id}))
  }
  return (
    <div className="ShowBooksPage">
      <h2 className='ListOfBook'>List Of All Famouse Books in The World</h2>
       
    <table>
    <thead>
    <tr className='thead'>
        <th>Books Id</th>
        <th>Author Name</th>
        <th>Books Name</th>
        <th>Action</th>
      </tr>
    </thead>
    
    <tbody>
    {
      books && books.map((book)=>{
        const {id, Authour, booksName}=book;
        return(
          <tr key={id}>
            <td>{id}</td>
            <td>{Authour}</td>
            <td>{booksName}</td>
            <td>
              <Link to={'/edit-book'} state={{id,Authour,booksName}}>
              <button className='edit'>Edit</button>
              </Link>
              <button onClick={()=>{handleDelete(id)}} className='delete'>Delete</button>
            </td>
          </tr>
          )
      })
    }
    </tbody>

    </table>
    </div>
  )
}

export default ShowBooks
