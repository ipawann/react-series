import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice.js';

export default store = configureStore({
    reducer : todoReducer
})