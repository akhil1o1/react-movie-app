import React, {useState, useEffect} from "react";
import {Box, Stack, Typography, Divider} from "@mui/material";
import {options, fetchData, movieOptions} from "../utils/fetchData";
import SelectYear from "./SelectYear";
import MoviesSection from "./MoviesSection";
import PageNavigation from "./PageNavigation";
import MovieGenres from "./MovieGenres";



function SearchMovies(){

    const [Movies, SetMovies] = useState("");
    const [movieGenresList, setMovieGenresList] = useState([]);
    const [releaseYears, setReleaseYears] = useState([]);
    const [page, setPage] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState([]);
    const [selectedYear, setSelectedYear] = useState("");

    

    useEffect(()=>{
        const fetchMovies = async () =>{
            const moviesData = await fetchData(`https://movies-app1.p.rapidapi.com/api/movies?page=${page}`, options);
            SetMovies(moviesData.results);
            console.log(moviesData.results);
        }
        fetchMovies();
        window.scrollTo({top: 500, left: 0, behavior: 'smooth'});
    },[page]);


    useEffect(()=>{
        
        const fetchReleaseYears = async () =>{
            const releaseYearsData = await fetchData(`https://movies-app1.p.rapidapi.com/api/years`, options);

            setReleaseYears(releaseYearsData.results);
            console.log(releaseYearsData);
        }
        fetchReleaseYears();

        const fetchMovieGenres = async () =>{
            const movieGenresData = await fetchData("https://movies-app1.p.rapidapi.com/api/genres", options);

            setMovieGenresList([...movieGenresData.results]);
            console.log(movieGenresData);
        } 
        fetchMovieGenres();

    window.scrollTo({top: 500, left: 0, behavior: 'smooth'});

        console.log("useEffect ran");
    },[]);



    return (<Box><Stack direction="row" alignItems="center" justifyContent="center" 
    sx={{paddingInline:"10%", pt:"40px", pb:"60px", gap:"20px", backgroundColor:"#fff"}}
    divider={<Divider orientation="vertical" flexItem />}>  
    <MovieGenres movieGenresList={movieGenresList}/>
    <Stack alignItems="center" justifyContent="center" >
    <Typography variant="h6" fontWeight="700" mb="10px">Search movies by release year</Typography>
    <SelectYear releaseYears={releaseYears}/>
    </Stack>
    </Stack>
    <MoviesSection Movies={Movies} />
    <PageNavigation page={page} setPage={setPage} />
    </Box>)
}

export default SearchMovies;