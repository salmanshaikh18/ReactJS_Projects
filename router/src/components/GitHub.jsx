import React from 'react'
import { useLoaderData } from 'react-router-dom'

const GitHub = () => {
  const data = useLoaderData()
  return (
    <div className='h-[73.5vh] bg-green-300 flex justify-center items-center text-red-500 text-2x'>GitHub UserName: {data.name} <img className='h-10' src={data.avatar_url} alt="" /></div>
  )
}

export default GitHub