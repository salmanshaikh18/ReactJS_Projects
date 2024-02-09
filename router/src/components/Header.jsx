import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-gray-500 h-20 text-[white] text-center flex justify-center items-center'>
      <nav>
        <ul className='flex gap-10'>
          <li className='cursor-pointer'>
            <NavLink to="/"
              className={({ isActive }) => (
                `${isActive ? 'text-orange-700' : 'text-white'}`
              )}
            >Home</NavLink>
          </li>
          <li className='cursor-pointer'>
            <NavLink to="/about"
              className={({ isActive }) =>
                `${isActive ? 'text-orange-700' : 'text-white'}`
              }
            >About</NavLink>
          </li>
          <li className='cursor-pointer'>
            <NavLink to="contact"
              className={({ isActive }) =>
                `
          ${isActive ? 'text-orange-700' : 'text-grey-700'} duration-200 ease`
              }
            >Contact</NavLink>
          </li>
          <li className='cursor-pointer'>
            <NavLink to="/user/Salman"
              className={({isActive}) => (
                `${isActive ? 'text-orange-700' : 'text-white'}`
              )}
            >User</NavLink>
          </li>
          <li className='cursor-pointer'>
            <NavLink to="/github"
            className={({isActive}) => (
              `${isActive ? 'text-orange-700' : 'text-white'}`
            )}
            >GitHub</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header