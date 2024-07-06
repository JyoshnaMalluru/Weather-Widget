// import { useState } from 'react'
//import './App.css'
// import Button from '@mui/material/Button';
// import DeleteIcon from '@mui/icons-material/Delete';
// import Alert from '@mui/material/Alert';
// function App() {
//   let handleClick = () => {
//     console.log("button was clicked");
//   }
//   return (
//     <>
//      <h1>Material UI Demo</h1>
//      <Button variant="contained" startIcon={<DeleteIcon />}>
//         Delete
//       </Button>
//      <Button variant="contained" onClick={handleClick}>Click Me!</Button>
//      <Button variant="contained" onClick={handleClick} color='error' size='small'>Click Me2!</Button>
//      <Alert severity="success">This is a success Alert.</Alert>
//      </>
//    )
//  }
//  export default App

import WeatherApp from "./WeatherApp"

function App() {
  return (
    <> 
      <WeatherApp/>
    </>
  )
}
export default App