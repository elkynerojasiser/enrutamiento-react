import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavbarApp } from './components/NavbarApp'
import { HomePage } from './routes/HomePage'
import { AboutPage } from './routes/AboutPage'
export const App = () => {
  return (
    <>
      <NavbarApp/>

      <Routes>
        <Route path="/" element={<HomePage></HomePage>} ></Route>
        <Route path='/about' element={<AboutPage></AboutPage>}></Route>
      </Routes>
    </>
  )
}
