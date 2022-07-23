import React from "react";
import {Stack, Typography} from "@mui/material";
import MovieIcon from '@mui/icons-material/Movie';

function Footer(){
    return <Stack bgcolor="#fff" height="120px" mt="50px"  alignItems="center" justifyContent="center">
        <MovieIcon/>
        <Typography variant="body1" mb="10px">MovieMania</Typography>
        <Typography variant="h6">A build by Akhil Panwar</Typography>
    </Stack>
}

export default Footer;