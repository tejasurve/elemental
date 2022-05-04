import React from 'react'
import Navbar from './components/Navbar'

import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import MainBody from './components/MainBody'
const App = () => {
  return (
    <Router>
      <Navbar  />
      <Routes>
        <Route path='/elemental' element={<MainBody />} />
        <Route path='/shop' />
        <Route path='/aboutus' />
        <Route path='/myworkbooks'  />
      </Routes>
    </Router>
  )
}

export default App