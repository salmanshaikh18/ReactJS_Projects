import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userid} = useParams()
  return (
    <div className='h-[73.5vh] bg-green-300 flex justify-center items-center text-red-500 text-2x'>User: {userid}</div>
  )
}

export default User