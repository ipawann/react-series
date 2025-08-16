import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice.js'

const AddTodo = () => {

  const [input, setInput] = React.useState('')
  const dispatch = useDispatch()
  const addTodoHandler = (e) =>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('') // Clear input after adding todo
  }


  return (
    <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>
        <input 
        type='text'
        className='bg-gray-700 rounded border border-gray-600 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-800 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' 
        placeholder='Write a Todo'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button
        type='submit'
        className=' text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'
        >Add Todo</button>
    </form>
  )
}

export default AddTodo