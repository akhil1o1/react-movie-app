import React from "react";
import {Chip} from "@mui/material";

function ChipCard(props){
    return <Chip label={props.label} color="success" />
}

export default ChipCard;