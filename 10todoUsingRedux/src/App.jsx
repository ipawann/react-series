import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import { Provider } from 'react-redux'
import store from './app/store.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Provider store={store}>
      <div className='text-white text-4xl mt-7'>Todo Using Redux Toolkit</div>
      <AddTodo />
    </Provider>
  )
}

export default App
