import React from "react";
import {Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";

function Navbar(){
    <Stack direction="row" spacing={2} justifyContent="none" sx={{gap:{
        sm:"122px", xs:"40px"}, mt:{sm:"32px", xs:"20px"}, px:"20px"}}>
        <Link to="/" style={{textDecoration:"none", color:"#fff", borderBottom:"3px solid #61569d"}}>
        <Typography variant="h3">Home</Typography>
        </Link>
        </Stack>
    
}

export default Navbar;