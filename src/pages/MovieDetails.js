import React, {useState, useEffect} from "react";
import {Box, Typography, Stack, Chip} from "@mui/material";
import {useParams} from "react-router-dom";
import MovieTrailer from "../components/MovieTrailer";
import Details from "../components/Details";

function MovieDetails() {
    const {id} = useParams();
    
    return<Box>
        <Details/>
        <MovieTrailer/>
    </Box>
}

export default MovieDetails;