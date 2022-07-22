import React from "react";
import {Chip} from "@mui/material";

function ChipCard({label,selectedGenre, setSelectedGenre, setSelectedYear}){
    function handleClick(label){
        setSelectedGenre(label);
        setSelectedYear("");
    };

    return <Chip 
    className="genre-chip"
    label={label} 
    color="success"
    variant={selectedGenre===label ? null : "outlined" }
    onClick={()=>{handleClick(label)}}/>
}

export default ChipCard;