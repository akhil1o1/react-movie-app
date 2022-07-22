import React from "react";
import {Box, Typography, Stack} from "@mui/material";
import MovieCard from "./MovieCard";
import {nanoid} from "nanoid";


function MoviesSection({Movies}) {
    return(<Box marginTop="50px" textAlign="center">
    <Typography variant="h4" fontWeight="700" m="50px">Showing movies</Typography>
        <Stack direction="row" sx={{flexWrap:"wrap", gap:"20px", alignItems:"center", justifyContent:"space-around", padding:"50px"}}>
            {Movies.length && Movies.map((item)=>(
                <MovieCard 
                    key={nanoid()}
                    id={item._id}
                    image={item.image}
                    year={item.year}
                    genre={item.genres[0].name}
                    rating={item.rating}
                    title={item.titleOriginal}
                    country={item.countries[0].name}
                />
            ))}
        </Stack>
    </Box>)
}

export default MoviesSection;