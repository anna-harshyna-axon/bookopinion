import { Box } from '@mui/material'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Login from 'pages/Login'
import Main from 'pages/Main'
import Profile from 'pages/Profile'
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
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
