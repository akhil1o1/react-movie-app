import React from "react";
import {Box, Stack, Typography, Chip} from "@mui/material";

function TrailerCard() {
    return <Box className="trailer-card" p="10px" backgroundColor="#fff" width="25%">
        <Stack>
        <a
        className="movie-trailer-link"
        href="https://youtube.com/watch?v=-1dsRyrHCik"
        target="_blank"
        rel="noreferrer">
            <img className="movie-trailer-thumbnail" src="https://i.ytimg.com/vi/-1dsRyrHCik/hq720.jpg" alt="movie-trailer"/>
        
        <Typography pt="10px" variant="body1" fontWeight="700" >
            Fast and Furious 6 trailer
        </Typography>
        <Stack paddingBlock="10px" direction="row" justifyContent="space-between">
        <Chip label="views: 29630" />
        <Chip label="ago: 9 years ago" />
        </Stack>
        <Typography variant="subtitle2">YT- Movieclub</Typography>
        <Typography variant="body2" pb="20px">
        Studio: Universal Pictures Release: June 20, 2013 Director: Juan José Campanella Writer: Juan José Campanella, Roberto ...
        </Typography>
        </a>
        </Stack>
    </Box>
}

export default TrailerCard;

