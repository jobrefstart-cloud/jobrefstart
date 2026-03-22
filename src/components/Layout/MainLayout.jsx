import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './UI/UIAfterLogin/CommonUI/Header'
import Footer from './UI/UIAfterLogin/CommonUI/Footer'

const MainLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainLayout