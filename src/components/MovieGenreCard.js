import React, {useContext} from "react";
import {Box, Typography} from "@mui/material";


function MovieGenreCard(props){
    return <Box width="100px" height="100px" sx={{border:"1px solid grey"}}>
        <Typography variant="body1">{props.genre}</Typography>
    </Box>
}

export default MovieGenreCard;