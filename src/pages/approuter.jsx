import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './home'
import About from './about'
import Contact from './contact'
import Cart from './cart'
import Header from './header'


function Layout(){
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default function Approuter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout /> }>
            <Route index  element={<Home />}/>
            <Route path='/about'  element={<About />}/>
            <Route path='/contact'  element={<Contact />}/>
            <Route path='/cart'  element={<Cart />}/>
            
        </Route>
      </Routes>
    </div>
  )
}
