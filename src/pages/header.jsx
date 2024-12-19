import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <div className='flex gap-5 justify-center bg-slate-100 p-4 text-[17px] font-bold'>
      <Link to="/" >Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/cart">cart</Link>
      </div>
    </div>
  )
}
