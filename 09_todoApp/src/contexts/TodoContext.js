import { createContext, useContext } from "react";

//create context
export const TodoContext = createContext({
    todos : [
        { id: 1 , todo: "Todo Msg", completed: false}
    ], // [ { id: 1 , todo: "drink tea", completed: false}, {}, {}] each object is todo
    addTodo : (todo) => {},
    updateTodo : (id, todo) => {},
    deleteTodo : (id) => {},
    toggleComplete : (id) => {}
})


//create custom hook to use the context
export const useTodo = () =>{
    return useContext(TodoContext)
}

//export provider
export const TodoProvider = TodoContext.Provider