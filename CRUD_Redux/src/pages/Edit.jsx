import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { EditBooks } from './using_Tollkit/BookSllice'

function Edit() {
    const location= useLocation()
    console.log(location)
    const [id, setId]=useState(location.state.id)
    const [author, setAuthor]=useState(location.state.Authour)
    const [BookName, setBook]=useState(location.state.booksName)

    const dispatch= useDispatch()
    const navigate=useNavigate()
    const handleEditBook =(e)=>{
        e.preventDefault()
        
        dispatch(EditBooks({id,author,BookName}))
        navigate('/show-books')
    }
    const handleBookName=(e)=>{
        setBook(e.target.value)
    }
    const handleBookAuthor = (e) => {
        setAuthor(e.target.value)
    }
    
  return (
    <div>
        <h1  style={{textAlign:"center", padding:"10px",margin:"10px"}}>Edit Book</h1>

        <form onSubmit={handleEditBook}>
  <div className="row">
    <div className="col-25">
      <label htmlFor="fname">Book Name</label>
    </div>
    <div className="col-75">
      <input type="text" id="fname" name="firstname" placeholder="Write Your Fevorite Book Name.."value={BookName} onChange={handleBookName} />
    </div>
  </div>
  <div className="row">
    <div className="col-25">
      <label htmlFor="lname">Author Name</label>
    </div>
    <div className="col-75">
      <input type="text" id="lname" name="lastname" placeholder="Write The Book Author Name.." value={author} onChange={handleBookAuthor} />
    </div>
  </div>
      <button type='submit' className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default Edit
