import React from "react";
import {Box, Stack, Typography, IconButton} from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function PageNavigation() {
  return <Box  mt="30px">
    <Stack direction="row" sx={{gap:"20px", p:"5px", width:"30%", marginBlock:"10px", alignItems:"center", justifyContent:"center", marginInline:"auto"}}>
    <IconButton aria-label="delete" size="large">
  <ArrowCircleLeftIcon fontSize="inherit"/>
</IconButton>
    <Box sx={{height:"50px", width:"60px", borderRadius:"10px", backgroundColor:"#fff"}}></Box>
    <IconButton aria-label="delete" size="large">
  <ArrowCircleRightIcon fontSize="inherit"/>
</IconButton>
    </Stack>
  </Box>
}


export default PageNavigation;
