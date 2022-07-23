import React from "react";
import {Box, Stack, Typography, Chip} from "@mui/material";

function Details({movieDetailData}) {
    
    const{image, titleOriginal, countries, genres, rating, release, description} = movieDetailData;

    return <Stack direction="row" width="100%" sx={{backgroundColor:"#fff"}}>
        <img className="movie-poster" src={image} alt="movie-poster"/>
        <Stack p="50px" sx={{width:"60%"}}>
        <Typography variant="h2" fontWeight="700">
           {titleOriginal}
        </Typography>
        <Box pt="30px" sx={{display:"flex", gap:"30px"}}>
        <Chip label={<Typography variant="h6" fontWeight="700">{`rating : ${rating}`}</Typography>} />
        <Chip label={<Typography variant="h6" fontWeight="700">{`release: ${release}`}</Typography>} />
        </Box>
        <Typography variant="h6" pt="30px">
        {description.length>600 ? description.substring(0, 601) : description}
        </Typography>
        <Box pt="30px" sx={{display:"flex", gap:"30px"}}>
        <Chip label={<Typography variant="h6" fontWeight="700">{`genre : ${genres[0].name}`}</Typography>} />
        <Chip label={<Typography variant="h6" fontWeight="700">{`origin : ${countries[0].name}`}</Typography>} />
        </Box>
    </Stack>
</Stack>
}

export default Details;