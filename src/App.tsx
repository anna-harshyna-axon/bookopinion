import { Box } from '@mui/material'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Login from 'pages/Login'
import Main from 'pages/Main'
import Profile from 'pages/Profile'
import FictionSection from 'pages/sections/Fiction'
import SelfDevSection from 'pages/sections/SelfDev'
import TechnicalSection from 'pages/sections/Tech'
import Signup from 'pages/Signup'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/self-development" element={<SelfDevSection />} />
        <Route path="/technical" element={<TechnicalSection />} />
        <Route path="/fiction" element={<FictionSection />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
