import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from './components/HomePage'
import CustomizationPage from './components/CustomizationPage'
import GlobalStyle from './components/GlobalStyles'

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customize" element={<CustomizationPage />} />
      </Routes>
    </Router>
  )
}

export default App
