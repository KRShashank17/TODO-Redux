import {configureStore} from  '@reduxjs/toolkit'
import todoReducer from '../features/todoSlice' // includes todoSlice.actions and reducer

export const store = configureStore({
    reducer : todoReducer
})