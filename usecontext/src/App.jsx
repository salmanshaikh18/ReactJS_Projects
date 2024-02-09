import React from 'react'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (
    <UserContextProvider>
      <h1 className='text-center p-2 text-2xl text-white bg-green-500'>Theme Swicher</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App