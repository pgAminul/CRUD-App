import React from 'react'
import { Link } from 'react-router-dom'
import '../Layout/style/nav.css'
function navbar() {
  return (  
   <nav className='nav'>
    <Link to={'/'} className='Link'> Home</Link>
   <Link to={'/add-book'} className='Link'> Add Book</Link>
   <Link to={'/show-books'} className='Link'> Show Books</Link>
   </nav>
  )
}

export default navbar
