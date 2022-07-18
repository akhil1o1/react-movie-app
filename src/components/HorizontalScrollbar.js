import React, {useContext} from "react";
import {Box, Typography, Stack} from "@mui/material";
import MovieGenreCard from "./MovieGenreCard";
import {ScrollMenu, VisibilityContext} from "react-horizontal-scrolling-menu";
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';


const LeftArrow = () => {
    const { scrollPrev } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollPrev()} className="right-arrow">
        <img src={LeftArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  
  const RightArrow = () => {
    const { scrollNext } = useContext(VisibilityContext);
  
    return (
      <Typography onClick={() => scrollNext()} className="left-arrow">
        <img src={RightArrowIcon} alt="right-arrow" />
      </Typography>
    );
  };
  


function HorizontalScrollBar({movieGenres}){
    console.log(movieGenres);
    return  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
   {movieGenres.map((item)=>{
             return <Box 
             key={item.id||item}
            m="0 40px"
             >
             <MovieGenreCard genre={item.name}/>
             </Box>
        })}
        </ScrollMenu>
        
}

export default HorizontalScrollBar;
