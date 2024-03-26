// import { v4 as uuidv4 } from 'uuid';
import {createSlice} from '@reduxjs/toolkit'
 const initialBooks={
    books: [
    {
        // id:uuidv4(),
        id:1,
        Authour: 'Aminul Islam',
        booksName: ' Love Bangladesh'
      },
      {
        // id: uuidv4(),
        id: 2,
        Authour: 'Ariful Islam',
        booksName: 'I Love Bangladesh'
      }
]}

export const BookSlice= createSlice({
name: 'Show_Books',
initialState: initialBooks,
reducers:{
    showBooks: (state)=>state,
    AddBooks: (state, action)=>{
        state.books.push(action.payload)
    },
    EditBooks: (state, action) => {
      const { id, author, BookName } = action.payload;
      const isExit = state.books.filter(book => book.id === id);
      if (isExit) {
          isExit[0].Authour = author;
          isExit[0].booksName = BookName;
      }
  },  
    DeleteBook:(state,action)=>{
      const id =action.payload.id;
      state.books= state.books.filter(book=>book.id !==id)
    }
}
})
export const {showBooks, AddBooks,EditBooks,DeleteBook}=BookSlice.actions;
export default BookSlice.reducer;