import React from "react";
import {Box, Stack, Typography, IconButton} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function PageNavigation({page, setPage}) {

  function nextPage(){
    setPage((prevValue)=>{
        return prevValue+1;
    })
}

function prevPage(){
    setPage((prevValue)=>{
        return prevValue-1;
    })
}
  console.log(page);
  return <Box  mt="30px">
    <Stack direction="row" sx={{gap:"20px", p:"5px", width:"30%", marginBlock:"10px", alignItems:"center", justifyContent:"center", marginInline:"auto"}}>

    {page===1 ? (<IconButton aria-label="delete" disabled  size="large" onClick={prevPage}>
  <ArrowBackIcon fontSize="inherit" className="arrow-icon"/>
  </IconButton>) 
: (<IconButton aria-label="delete" size="large" onClick={prevPage}>
  <ArrowBackIcon fontSize="inherit" className="arrow-icon"/>
  </IconButton>)
  }
  
    <Box value={page} className="page-number" sx={{display:"flex", height:"50px", width:"60px", borderRadius:"10px", backgroundColor:"#fff", alignItems:"center", justifyContent:"center"}}><Typography variant="h6" >{page}</Typography></Box>

    <IconButton aria-label="delete" size="large" onClick={nextPage}>
  <ArrowForwardIcon fontSize="inherit" className="arrow-icon"/>
</IconButton>
    </Stack>
  </Box>
}


export default PageNavigation;
