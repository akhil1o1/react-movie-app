import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import {Box} from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins', `sans-serif`,
      ].join(','),
    },
  });
  

function App (){

    return <ThemeProvider theme={theme}><Box>
        <Hero/>
    </Box>
    </ThemeProvider>
}


export default App;