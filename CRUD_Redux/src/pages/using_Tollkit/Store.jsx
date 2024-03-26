import { configureStore } from "@reduxjs/toolkit";
import BookReducer from './BookSllice'

const store = configureStore({
    reducer:{
    BookReducer: BookReducer
    }
})

export default store;