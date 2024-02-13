import React from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div className='h-screen w-screen bg-zinc-900 text-zinc-200'>
      <h1 className='text-center text-2xl font-semibold p-3'>Redux Toolkit</h1>
      <AddTodo />
      <Todos />
    </div>
  )
}

export default App