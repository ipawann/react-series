import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

const Todos = () => {
  const todos = useSelector( (state) => state.todos) // useSelector have access of all the states of store in a callback
  const dispatch = useDispatch()
  return (
    <>
      <div className='text-white mt-2.5 mb-3 text-xl'>Todos</div>
      { todos.map( (todo) =>(
        <li key={todo.id} className='flex justify-between items-center bg-gray-800 p-2 rounded mb-2 text-white text-xl'>
          {todo.text}
          <button 
          onClick={ () => dispatch(removeTodo(todo.id))}
          className='text-white bg-red-600 border-0 py-1 px-2 hover:bg-red-700 rounded text-lg focus:outline-none'>X</button>
        </li>
      ))}
    </>
  )
}

export default Todos