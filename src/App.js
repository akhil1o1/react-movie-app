import React from "react";
import { Route, Routes } from "react-router-dom";
import {Box} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";

const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins', `sans-serif`,
      ].join(','),
    },
  });
  

function App (){

    return <ThemeProvider theme={theme}><Box>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/> 
            {/* <Route path="/movie/:id" element={<MovieDetails/>}/> */}
        </Routes>
        
    </Box>
    </ThemeProvider>
}


export default App;