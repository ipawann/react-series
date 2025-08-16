import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = {
  todos : [{id : 1, text : "hello world"}]    
}

// reducer -> functionality . it takes property or functions
export const todoSlice = createSlice({
    name : "todos",
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload
            }
            state.todos.push(todo);
        },
        removeTodo : (state,action) => {
            const {id} = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== id);

            // state.todos = state.todos.filter( (todo) => todo.id !== action.payload);
        },
    
    }
})
// state -> gives the access the values present in current state
// action -> gives the access to the dispatched action / values which we currently have as payload or input
// payload -> it is noting but an object which contains the data we want to send with the action.



// export all the functionalities
export const {addTodo, removeTodo} = todoSlice.actions;

// export the reducer
const todoReducer = todoSlice.reducer;
export default todoReducer;
