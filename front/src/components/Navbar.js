import React from 'react'

const Navbar = () => {
  return (
    <header className="max-w-lg m-auto border-b border-gray-300 flex justify-between mt-4 pb-2">
    <h2 className='ml-20'>Notes App</h2>
    <ul className="flex justify-evenly pr-3">
      <li className="mr-4">Welcome</li>
      <li>SignIn</li>
    </ul>
  </header>
  )
}

export default Navbar