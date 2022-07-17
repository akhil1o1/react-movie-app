import React ,{useState} from "react";
import {Box} from "@mui/material";
import Hero from "../components/Hero";
import SearchMovies from "../components/SearchMovies";


function Home(){
    return <Box>
        <Hero/>
        <SearchMovies/>
    </Box>
}

export default Home;