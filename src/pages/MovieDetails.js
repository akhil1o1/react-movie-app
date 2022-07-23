import React, {useState, useEffect} from "react";
import {Box} from "@mui/material";
import {useParams} from "react-router-dom";
import MovieTrailers from "../components/MovieTrailers";
import Details from "../components/Details";
import {fetchData, options} from "../utils/fetchData";

function MovieDetails() {
    const [movieDetailData, setMovieDetailData] = useState("");
    const [movieTrailerData, setMovieTrailerData] = useState([]);
    const {id} = useParams();

    // console.log(movieDetailData);
    // console.log(movieTrailerData);

    useEffect(()=>{
        // const fetchMovieDetailData= async ()=> {
        //     const detailData = await fetchData(`https://movies-app1.p.rapidapi.com/api/movie/${id}`, options);
        //     setMovieDetailData(detailData.result);
        // }
        // fetchMovieDetailData();

     

        // const fetchMovieTrailerData= async ()=> {
        //     const trailerData = await fetchData(`https://movies-app1.p.rapidapi.com/api/trailers/${id}`, options);
        //     setMovieTrailerData(trailerData.result);
        // }
        // fetchMovieTrailerData();

        console.log("use effect ran");
    
    },[id])
    
    return<Box>
        <Details
            movieDetailData={movieDetailData}
        />
        <MovieTrailers/>
    </Box>
}

export default MovieDetails;