import React  from "react";
import {Typography, Stack} from "@mui/material";


function MovieGenreCard(props){
    return <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
        backgroundColor:"#fff",
        borderBottomLeftRadius:"20px",
        width:"270px",
        height:"280px",
        cursor:"pointer",
        gap:"47px",
        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"
    }}>
        <Typography variant="h6">{props.genre}</Typography>
    </Stack>
}

export default MovieGenreCard;