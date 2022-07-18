import React, {useContext} from "react";
import {Box, Typography, Stack} from "@mui/material";
import MovieGenreCard from "./MovieGenreCard";
import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';


function HorizontalScrollBar({movieGenres}){
    console.log(movieGenres);
    return  <Stack direction="row" gap="20px" flexWrap="wrap" alignItems="center" justifyContent="center">
        {movieGenres.map((item)=>{
            return <MovieGenreCard genre={item.name}/>
        })}
        </Stack>
}

export default HorizontalScrollBar;
