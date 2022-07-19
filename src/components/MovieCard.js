import React from "react";
import {Box, Stack, Typography, Chip} from "@mui/material";
import GradeIcon from '@mui/icons-material/Grade';

function MovieCard(){
    return(<Stack marginLeft="200px" className="movie-card-container" 
            sx={{width:"270px",  alignItems:"center", justifyContent:"center", backgroundColor:"#fff"}}>
            <img className="movie-thumbnail" src="https://image.tmdb.org/t/p/w300/c0p6YAhrl5tLNqXydVUotJiEufR.jpg" alt="movie-thumbnail"/>
            <Typography variant="h6" m="auto" mb="5px" fontWeight="500">The Wedding Ringer</Typography>
            <Stack direction="row" mb="5px" width="100%" sx={{ alignItems:"center",  justifyContent:"space-between", paddingBlock:"3px", paddingInline:"5px"}} >
            <Chip label="Action"/>
            <Chip label="2022"/>
            </Stack>
            <Stack direction="row"  mb="10px" width="100%" sx={{ alignItems:"center",  justifyContent:"space-between", paddingBlock:"3px", paddingInline:"5px"}}>
            <Chip  label="rating 9"/>
            <Chip label="USA"/>
            </Stack>
    </Stack> 
    );
}

export default MovieCard;

