import { Box } from '@mui/material'
import Header from 'components/Header'
import Main from 'pages/Main'
import Profile from 'pages/Profile'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Box>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Box>
  )
}

export default App
