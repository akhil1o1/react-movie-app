import React, {useState, useEffect} from "react";
import {Box, Stack, Typography, Divider} from "@mui/material";
import ChipCard from "./ChipCard";
import {options, fetchData} from "../utils/fetchData";
import {nanoid} from "nanoid";
import SelectYear from "./SelectYear";



function SearchMovies(){

    const [Movies, SetMovies] = useState("");
    const [movieGenres, setMovieGenre] = useState([]);
    const [releaseYears, setReleaseYears] = useState([]);

    console.log(releaseYears);

    


    useEffect(()=>{
        // const fetchMovies = async () =>{
        //     const moviesData = await fetchData(`https://movies-app1.p.rapidapi.com/api/movies`, options);
        //     SetMovies(moviesData.results);
        //     console.log(moviesData.results);
        // }
        // fetchMovies();

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

    return (<Stack direction="row" alignItems="center" justifyContent="center" sx={{paddingInline:"10%", mt:"40px", gap:"20px"}}divider={<Divider orientation="vertical" flexItem />}>  
    <Box>  
    <Typography variant="h4" fontWeight="700">Search some of the best movies by Genre</Typography>
    <Stack direction="row" flexWrap="wrap" gap="10px" mt="20px">
        {movieGenres.length>0 && movieGenres.map((item)=>(
            <ChipCard key={nanoid()} label={item.name}/>
        ))}
    </Stack>
    </Box>
    <Stack alignItems="center" justifyContent="center" mb="70px">
    <Typography variant="h6" fontWeight="700" mb="10px">Search movies by release year</Typography>
    <SelectYear releaseYears={releaseYears}/>
    </Stack>
    </Stack>)
}

export default SearchMovies;