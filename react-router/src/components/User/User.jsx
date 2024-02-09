import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
  const {userid} = useParams()
  return (
    <div className='text-[salmon] text-2xl p-5 text-center'>User: {userid}</div>
  )
}

export default User