import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Home from './pages/Home'
import Careers from './pages/Careers'
import UserList from './pages/UserList';
import AddUser from './pages/AddUser';
import DeleteUser from './pages/DeleteUser';

const App = () => {

  return (
    <>
      <h1>Welcome to our Single Page App!</h1>
      <Nav />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/viewusers" element={ <UserList />} />
        <Route path="/adduser" element={ <AddUser />} />
        <Route path="/deleteuser" element={ <DeleteUser />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
