import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Kirish from './components/kirish' 
import Kirish2 from './components/kirish2'
import Instagram from './components/instagramm/instagram' 
import Header from './components/movies/foteer_header/header/Header'
import Movies from './Amaliyot/movies'
import Movies2 from './Amaliyot/movies2'
import Home from './components/movies/home'
import Todo from './components/todo/todo'
import Restaurant from './restaurant/restaurant'
import Footer from './components/movies/foteer_header/footer/Footer'
import Homeoff from './components/movies/homeoff'
import Upcoming from './components/movies/upcoming/upcoming'
import Upcomingoff from './components/movies/upcoming/upcomingoff'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/footer' element={<Footer/>} />
      <Route path='/header' element={<Header/>}/>
      <Route path='/homeoff/:id' element={<Homeoff/>}/>
      <Route path='/upcoming' element={<Upcoming/>}/>
      <Route path='/upcomingoff/:id' element={<Upcomingoff/>}/>
    </Routes>
  </BrowserRouter>
  )
}
export default App





