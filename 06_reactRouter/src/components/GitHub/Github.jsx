import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState()
    // useEffect(() => {
    // fetch('https://api.github.com/users/ipawann')
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data);
    //     setData(data)
    // })
      
    // }, [])
    console.log(data)
    
  return (
    <div className='text-center m-10 bg-gray-600 text-white p-10 text-3xl'>
        GitHub Followers : {data.followers}
        <br/>
        GitHub Username : {data.login}
        <img src={data.avatar_url} alt="github_avatar" width={250} />
    </div>
  )
}

export default Github

export const GithubLoaderInfo = async () => {
    const response = await fetch('https://api.github.com/users/ipawann')
    return response.json()
}