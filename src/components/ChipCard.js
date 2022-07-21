import React from "react";
import {Chip} from "@mui/material";

function ChipCard({label,selectedGenre, setSelectedGenre}){
    function handleClick(label){
        setSelectedGenre(label);
    };

    return <Chip 
    className="genre-chip"
    label={label} 
    color="success"
    variant={selectedGenre===label ? null : "outlined" }
    onClick={()=>{handleClick(label)}}/>
}

export default ChipCard;