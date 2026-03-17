import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import UpdateItem from './pages/UpdateItem'
import AddItem from './pages/AddItem'
import './App.css'

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/wishlist" element={ <Wishlist /> } />
        <Route path="/edititem" element={ <UpdateItem /> } />
        <Route path="/additem" element={ <AddItem /> } />
      </Routes>
    </>
  )
}

export default App
