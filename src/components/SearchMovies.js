import React, {useState, useEffect} from "react";
import {Box, Stack, Typography, Divider} from "@mui/material";
import ChipCard from "./ChipCard";
import {options, fetchData, movieOptions} from "../utils/fetchData";
import {nanoid} from "nanoid";
import SelectYear from "./SelectYear";
import MoviesSection from "./MoviesSection";



function SearchMovies(){

    const [Movies, SetMovies] = useState("");
    const [movieGenres, setMovieGenre] = useState([]);
    const [releaseYears, setReleaseYears] = useState([]);

    console.log(Movies);

    


    useEffect(()=>{
        const fetchMovies = async () =>{
            const moviesData = await fetchData(`https://movies-app1.p.rapidapi.com/api/movies?sort=year`, options);
            SetMovies(moviesData.results);
            console.log(moviesData.results);
        }
        fetchMovies();

        const fetchReleaseYears = async () =>{
            const releaseYearsData = await fetchData(`https://movies-app1.p.rapidapi.com/api/years`, options);

            setReleaseYears(releaseYearsData.results);
            console.log(releaseYearsData);
        }
        fetchReleaseYears();

        const fetchMovieGenres = async () =>{
            const movieGenresData = await fetchData("https://movies-app1.p.rapidapi.com/api/genres", options);

            setMovieGenre([...movieGenresData.results]);
            console.log(movieGenresData);
        } 
        fetchMovieGenres();

        console.log("useEffect ran");
    },[]);



    return (<Box><Stack direction="row" alignItems="center" justifyContent="center" 
    sx={{paddingInline:"10%", pt:"40px", pb:"60px", gap:"20px", backgroundColor:"#fff"}}
    divider={<Divider orientation="vertical" flexItem />}>  
    <Box>  
    <Typography variant="h4" fontWeight="700">Search some of the best movies by Genre</Typography>
    <Stack direction="row" flexWrap="wrap" gap="10px" mt="20px">
        {movieGenres.length>0 && movieGenres.map((item)=>(
            <ChipCard key={nanoid()} label={item.name}/>
        ))}
    </Stack>
    </Box>
    <Stack alignItems="center" justifyContent="center" >
    <Typography variant="h6" fontWeight="700" mb="10px">Search movies by release year</Typography>
    <SelectYear releaseYears={releaseYears}/>
    </Stack>
    </Stack>
    <MoviesSection Movies={Movies}/>
    </Box>)
}

export default SearchMovies;