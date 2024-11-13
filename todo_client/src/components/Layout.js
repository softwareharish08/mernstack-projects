import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'
import Alert from './Alert'


const Layout = () => {
  
  return (
    <div>
      <Navbar/>
      <Alert/>
      <Outlet/>
      <Footer/> 
    </div>
  )
}

export default Layout
