import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {id} = useParams()
  return (
    <div className='bg-amber-100 '>
    <h1 className='text-6xl'>User : {id}</h1>
    <h4 className='text-red-500 underline bg-amber-300'>Please enter id in url</h4>
    </div>
  )
}

export default User