import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import TrailerCard from "./TrailerCard";

function MovieTrailers() {
    return <Box p="30px">
        <Typography variant="h4" pt="40px" pb="50px" fontWeight="700" m="auto">Watch Fast and Furious 6 movie trailers</Typography>
        <TrailerCard/>
    </Box>
}

export default MovieTrailers;