import React from "react";
import {Box, Stack, Typography, Chip} from "@mui/material";
import {Link} from "react-router-dom";
 
function MovieCard(props){
    const {image, title, genre, year, rating, country, id} = props;

    return(<Link className="movie-card-link" to={`/movie/${id}`}>
    <Box className="movie-card-container" 
            sx={{width:"270px", minHeight:"520px",  backgroundColor:"#fff"}}>
            <img className="movie-thumbnail" src={image} alt="movie-thumbnail"/>
            <Typography variant="h6" m="auto" mb="5px" fontWeight="500">
            {title.length>20 ?  `${title.substring(0, 20)}...` : title}
            </Typography>
            <Stack direction="row" mb="5px" width="100%" sx={{ alignItems:"center",  justifyContent:"space-between", paddingBlock:"3px", paddingInline:"5px"}} >
            <Chip className="movie-card-chip" 
            label={genre.length>13 ? `${genre.substring(0,14)}...` : `Genre: ${genre}`}/>
            <Chip className="movie-card-chip" label={`Year: ${year}`}/>
            </Stack>
            <Stack direction="row"  mb="5px" width="100%" sx={{ alignItems:"center",  justifyContent:"space-between", paddingBlock:"3px", paddingInline:"5px"}}>
            <Chip className="movie-card-chip" label={`Rating: ${rating}`}/>
            <Chip className="movie-card-chip" 
            label={country.length>8 ? `${country.substring(0,9)}...` : `Origin: ${country}`}/>
            </Stack>
    </Box> 
    </Link>
    );
}

export default MovieCard;

