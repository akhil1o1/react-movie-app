import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import TrailerCard from "./TrailerCard";

function MovieTrailer() {
    return <Box p="30px">
        <Typography variant="h4" paddingBlock="30px" fontWeight="700" m="auto">Watch Fast and Furious 6 movie trailers</Typography>
        <TrailerCard/>
    </Box>
}

export default MovieTrailer;