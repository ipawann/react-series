import UserContextProvider from './Context/userContextProvider.jsx'
import './App.css'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'

function App() {

  return (
    < UserContextProvider>
      <h1 className=' text-amber-200'>Context API</h1>
      <Login />
      <Profile />
    </ UserContextProvider>
  )
}

export default App
