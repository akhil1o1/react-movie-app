import React from "react";
import {Box, Stack, Typography, Chip} from "@mui/material";

function MovieCard({image, title, genre, year, rating, country}){
    return(<Stack className="movie-card-container" 
            sx={{width:"270px", height:"550px",  alignItems:"center", justifyContent:"center", backgroundColor:"#fff"}}>
            <img className="movie-thumbnail" src={image} alt="movie-thumbnail"/>
            <Typography variant="h6" m="auto" mb="5px" fontWeight="500">
            {title.length>20 ?  `${title.substring(0, 20)}...` : title}
            </Typography>
            <Stack direction="row" mb="5px" width="100%" sx={{ alignItems:"center",  justifyContent:"space-between", paddingBlock:"3px", paddingInline:"5px"}} >
            <Chip className="movie-card-chip" label={`Genre: ${genre}`}/>
            <Chip className="movie-card-chip" label={`Year: ${year}`}/>
            </Stack>
            <Stack direction="row"  mb="10px" width="100%" sx={{ alignItems:"center",  justifyContent:"space-between", paddingBlock:"3px", paddingInline:"5px"}}>
            <Chip className="movie-card-chip" label={`Rating: ${rating}`}/>
            <Chip className="movie-card-chip" label={`Origin: ${country}`}/>
            </Stack>
    </Stack> 
    );
}

export default MovieCard;

