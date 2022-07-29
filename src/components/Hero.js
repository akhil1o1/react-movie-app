import React from "react";
import {Paper, Typography} from "@mui/material";

function Hero(){
    return <Paper className="hero" sx={{height:{lg:"50vh", xs:"40vh"}, display:"flex", flexDirection:"column", justifyContent:"center" ,alignItems:"center", pt:"40px"}} variant="outlined" square>
        <Typography variant="h1" fontWeight="700" color="#fff"
        sx={{fontSize:{lg:"80px", xs:"50px"}}}>MovieMania</Typography><br/>
        <Typography variant="h5" fontWeight="700" color="#fff"
        sx={{fontSize:{lg:"25px", xs:"18px"}, textAlign:"center"}}>Search and find information about movies.</Typography>
    </Paper>
}

export default Hero;