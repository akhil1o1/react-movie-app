import React, {useState, useEffect} from "react";
import {Box, Stack, Typography, Divider} from "@mui/material";
import {options, fetchData} from "../utils/fetchData";
import SelectYear from "./SelectYear";
import MoviesSection from "./MoviesSection";
import PageNavigation from "./PageNavigation";
import MovieGenres from "./MovieGenres";



function SearchMovies(){

    
    const [movieGenresList, setMovieGenresList] = useState([]);
    const [releaseYears, setReleaseYears] = useState([]);
    const [Movies, SetMovies] = useState("");
    const [page, setPage] = useState(1);
    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    console.log(`selected year is ${selectedYear}`);
    console.log(`selected genre is ${selectedGenre}`);

    useEffect(()=>{

        const fetchMovies = async () =>{
            let moviesData;

            if(selectedGenre==="" && selectedYear===""){
                moviesData = await fetchData(`https://movies-app1.p.rapidapi.com/api/movies?page=${page}`, options);
                SetMovies(moviesData.results);
                console.log(moviesData.results);
            }else if(selectedGenre!=="" && selectedYear===""){
                moviesData = await fetchData(`https://movies-app1.p.rapidapi.com/api/movies?genres=${selectedGenre}`, options);
                SetMovies(moviesData.results);
                console.log(moviesData.results);
            }else if(selectedYear!=="" && selectedGenre===""){
                moviesData = await fetchData(`https://movies-app1.p.rapidapi.com/api/movies?year=${selectedYear}`, options);
                SetMovies(moviesData.results);
                console.log(moviesData.results);
            }
        }
        fetchMovies();
        console.log("use effect ran");
        window.scrollTo({top: 500, left: 0, behavior: 'smooth'});
    },[page, selectedGenre, selectedYear]);


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
    <MovieGenres 
    movieGenresList={movieGenresList} 
    selectedGenre={selectedGenre} 
    setSelectedGenre={setSelectedGenre}
    setSelectedYear={setSelectedYear}
    />
    <Stack alignItems="center" justifyContent="center" >
    <Typography variant="h6" fontWeight="700" mb="10px">Or Search movies by release year</Typography>
    <SelectYear 
    releaseYears={releaseYears} 
    selectedYear={selectedYear} 
    setSelectedYear={setSelectedYear}
    setSelectedGenre={setSelectedGenre}
    />
    </Stack>
    </Stack>
    <MoviesSection Movies={Movies} />
    <PageNavigation page={page} setPage={setPage} />
    </Box>)
}

export default SearchMovies;