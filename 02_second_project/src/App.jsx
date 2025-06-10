import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  let newArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-2xl'>Hello World</h1>
      <br></br>

      <Cards 
          userName = "India Gate" 
          img = "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text = "The India Gate is a war memorial located near the Rajpath (officially called Kartavya path) on the eastern edge of the ceremonial axis of New Delhi."
      />
      <br />
      <Cards 
          userName = "Red Fort"
          img = "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text = "The Red Fort, also known as Lal Qila, is a historical fort located in Old Delhi, India. It was built by Mughal Emperor Shah Jahan in the 17th century and served as the main residence of the Mughal Emperors"
      />
        

        
    </>
  )
}

export default App
