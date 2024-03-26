import React from 'react'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from '../pages/Home'
import AddBook from '../pages/addBook';
import ShowBooks from '../pages/ShowBooks';
import Navbar from './navbar';
import Error from '../pages/error';
import Edit from '../pages/Edit';
function Layout() {
  return (
      <BrowserRouter>
    <Navbar/>

      <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/add-book' element={<AddBook/>} />
    <Route path='/edit-book' element={<Edit/>} />
    <Route path='/show-books' element={<ShowBooks/>} />
    <Route path='*' element={<Error/>} />
      </Routes>
      </BrowserRouter>
  )
}



export default Layout
