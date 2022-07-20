import React ,{useState} from "react";
import {Box} from "@mui/material";
import Hero from "../components/Hero";
import SearchMovies from "../components/SearchMovies";
import Navbar from "../components/Navbar";


function Home(){
    
    return <Box>
        <Navbar/>
        <Hero/>
        <SearchMovies/>
    </Box>
}

export default Home;