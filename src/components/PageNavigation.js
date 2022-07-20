import React from "react";
import {Box, Stack, Typography, IconButton} from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

function PageNavigation({page, prevPage, nextPage}) {
  console.log(page);
  return <Box  mt="30px">
    <Stack direction="row" sx={{gap:"20px", p:"5px", width:"30%", marginBlock:"10px", alignItems:"center", justifyContent:"center", marginInline:"auto"}}>
    <IconButton aria-label="delete" size="large" onClick={prevPage}>
  <ArrowCircleLeftIcon fontSize="inherit" className="arrow-icon"/>
</IconButton>
    <Box value={page} className="page-number" sx={{display:"flex", height:"50px", width:"60px", borderRadius:"10px", backgroundColor:"#fff", alignItems:"center", justifyContent:"center"}}><Typography variant="body1">{page}</Typography></Box>
    <IconButton aria-label="delete" size="large" onClick={nextPage}>
  <ArrowCircleRightIcon fontSize="inherit" className="arrow-icon"/>
</IconButton>
    </Stack>
  </Box>
}


export default PageNavigation;
