import React from "react";
import {Box, Stack, Typography} from "@mui/material";
import TrailerCard from "./TrailerCard";
import {nanoid} from "nanoid";

function MovieTrailers({movieTrailerData}) {


  
    // console.log(movieTrailerData);
    return <Box p="30px">
        <Typography variant="h4" pt="40px" pb="50px" fontWeight="700" m="auto">{`Watch ${movieTrailerData[0].title}`}
        </Typography>
        <Stack direction="row" justifyContent="space-between">
        {(movieTrailerData.slice(0, 3)).map((trailer)=>(
            <TrailerCard trailer={trailer}/>
        ))}
        </Stack>
    </Box>
}

export default MovieTrailers;