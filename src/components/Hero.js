import React from "react";
import {Paper, Typography} from "@mui/material";

function Hero(){
    return <Paper className="hero" sx={{height:"50vh", display:"flex", flexDirection:"column", justifyContent:"center" ,alignItems:"center"}} variant="outlined" square>
        <Typography variant="h1" fontSize="80px" fontWeight="700" color="#fff">MovieMania</Typography><br/>
        <Typography variant="h5" mt="0" fontWeight="700" fontSize="25px" color="#fff">Search and find information about movies.</Typography>
    </Paper>
}

export default Hero;