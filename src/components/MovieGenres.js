import React from "react";
import {Typography, Stack, Box} from "@mui/material";
import ChipCard from "./ChipCard";
import {nanoid} from "nanoid";


function MovieGenres({movieGenresList}){
    return  <Box>  
    <Typography variant="h4" fontWeight="700">Search some of the best movies by Genre</Typography>
    <Stack direction="row" flexWrap="wrap" gap="10px" mt="20px">
        {movieGenresList.length>0 && movieGenresList.map((item)=>(
            <ChipCard key={nanoid()} label={item.name}/>
        ))}
    </Stack>
    </Box>
}

export default MovieGenres;