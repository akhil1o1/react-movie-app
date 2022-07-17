import React from "react";
import {Stack, Typography, TextField, Button} from "@mui/material";
import HorizontalScrollbar from "../components/HorizontalScrollbar";

function SearchMovies(){


    return <Stack alignItems="center" justifyConten="center" sx={{paddingInline:"10%"}}>
    <Typography variant="h4" fontWeight="700" p="30px">Search Movies by Name</Typography>
    <Stack direction="row" height="55px">
    <TextField type="text" label="Enter movie name"  sx={{paddingBottom:"30px", width:{lg:"700px", xs:"350px"}}} />
    <Button variant="contained" color="success">Search</Button>
    </Stack>
    {/* <HorizontalScrollbar/> */}
    </Stack>
    
    
}

export default SearchMovies;