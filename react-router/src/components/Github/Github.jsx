import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {

  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/salmanshaikh18')
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log(data)
  //     setData(data)
  //   })
  // }, [])

  const data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-500 p-4 text-3xl flex items-center justify-center'>Github UserName: {data.name}
    <img className='h-20' src={data.avatar_url} alt="" />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/salmanshaikh18')
  return response.json()
}