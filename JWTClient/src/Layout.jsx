


import React from 'react'
import TopNav from './Component/TopNav'
import { Outlet } from 'react-router-dom'
import Footer from './Component/Footer'

function Layout() {
  return (
    <>
    <TopNav/>
    <main style={{margin:"50px"}}><Outlet/></main>
    <Footer/>
    </>
  )
}

export default Layout