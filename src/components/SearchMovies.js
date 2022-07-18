import React, {useState, useEffect} from "react";
import {Stack, Typography, TextField, Button} from "@mui/material";
import HorizontalScrollbar from "../components/HorizontalScrollbar";
import {options, fetchData} from "../utils/fetchData";

function SearchMovies(){

    const [search, setSearch] = useState("");
    const [movieGenres, setMovieGenre] = useState([]);

    console.log(movieGenres);

    useEffect(()=>{
        const fetchMovieGenres = async () =>{
            const movieGenresData = await fetchData("https://movies-app1.p.rapidapi.com/api/genres", options);

            setMovieGenre([...movieGenresData.results]);
            console.log(movieGenresData);
        } 
        fetchMovieGenres();
    },[]);

    return (<Stack alignItems="center" justifyContent="center" sx={{paddingInline:"10%"}}>
    <Typography variant="h4" fontWeight="700" p="30px">Search some of the best movies by Name</Typography>
    <Stack direction="row" height="55px">
    <TextField type="text" label="Enter movie name"  sx={{paddingBottom:"30px", width:{lg:"700px", xs:"350px"}}} />
    <Button variant="contained" color="success">Search</Button>
    </Stack>
    <HorizontalScrollbar movieGenres={movieGenres}/>
    </Stack>)
}

export default SearchMovies;