import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import ScrollToTop from "react-scroll-to-top";

function Layout() {
  return <>
     <Header/>
     <Outlet/>
     <ScrollToTop smooth height='20' width='20' className='flex items-center justify-center'/>
     <Footer/>
  </>
}

export default Layout
