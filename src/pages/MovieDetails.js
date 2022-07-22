import React, {useState, useEffect} from "react";
import {Box, Typography, Stack} from "@mui/material";
import {useParams} from "react-router-dom";

function MovieDetails() {
    const {id} = useParams();
    
    return <Box>
        <Typography variant="h1">welcome to movie details {id}</Typography>
    </Box>
}

export default MovieDetails;