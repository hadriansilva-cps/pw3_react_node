import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import ResponsiveAppBar from './Navbar/NavBar';
import './App.css'
import Typography from '@mui/material/Typography';

function App() {
  return (
    <>
      <div>
        <ResponsiveAppBar />
        <Box sx={{ width: '90%', maxWidth: 500 }}>
          <Typography variant="h4" gutterBottom>
            Minha página em React
          </Typography>
          <Button variant="contained">Hello world</Button>
        </Box>
      </div>
    </>
  )
}

export default App
