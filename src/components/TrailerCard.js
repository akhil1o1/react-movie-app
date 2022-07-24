import React from "react";
import {Box, Stack, Typography, Chip} from "@mui/material";

function TrailerCard({trailer}) {
    
    const{thumbnail, ago, author, views, title,  url, description} = trailer;

    return <Box className="trailer-card" p="10px" backgroundColor="#fff" width="25%">
        <Stack>
        <a
        className="movie-trailer-link"
        href={url}
        target="_blank"
        rel="noreferrer">
            <img className="movie-trailer-thumbnail" src={thumbnail} alt="movie-trailer"/>
        <Typography pt="10px" variant="body1" fontWeight="700" >
            {title}
        </Typography>
        <Stack paddingBlock="10px" direction="row" justifyContent="space-between" gap="10px" flexWrap="wrap">
        <Chip label={`views: ${views}`} />
        <Chip label={`ago: ${ago}`}/>
        </Stack>
        <Typography variant="subtitle2">{`YT: ${author.name}`}</Typography>
        <Typography variant="body2" pb="20px">
        {description}
        </Typography>
        </a>
        </Stack>
    </Box>
}

export default TrailerCard;

