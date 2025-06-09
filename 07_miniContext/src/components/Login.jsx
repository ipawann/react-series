import React, {useContext, useState} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [ password, setPassword] = useState('')

    const {setUser} = useContext(UserContext) //setUser is a variable which is present in userContext file 

    //sending the data to userContext
    const handleSubmit = (e) =>{
        e.preventDefault()
        setUser(username)
        
    }


  return (
    <div>
        <h2>Login : </h2>
        <input 
            type="text"
            value={username}
            onChange={ (e) => setUsername(e.target.value)} 
            placeholder='enter username' 
        />
        <input 
            type="password" 
            value={password}
            onChange={ (e) => setPassword(e.target.value)}
            placeholder='enter password' 
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login