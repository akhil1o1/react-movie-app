import React, {useState, useEffect} from "react";
import {Box} from "@mui/material";
import {useParams} from "react-router-dom";
import MovieTrailers from "../components/MovieTrailers";
import Details from "../components/Details";
import {fetchData, options} from "../utils/fetchData";
import {TailSpin} from "react-loader-spinner";

function MovieDetails() {
    
    const [movieDetailData, setMovieDetailData] = useState("");
    const [movieTrailerData, setMovieTrailerData] = useState([]);
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
   

    // console.log(id);
    console.log(movieDetailData);
    console.log(movieTrailerData);

   

    useEffect(()=>{
            const fetchMovieData = async ()=> {

            const detailData = await fetchData(`https://movies-app1.p.rapidapi.com/api/movie/${id}`, options);
            setMovieDetailData(detailData.result);

            const trailerData = await fetchData(`https://movies-app1.p.rapidapi.com/api/trailers/${id}`, options);
            setMovieTrailerData(trailerData.result);

            setLoading(false);
    }
    fetchMovieData();

    window.scrollTo({top:0, left: 0, behavior: 'smooth'});
   
    },[id]);

    
    
    return loading===false ? (<Box>
        <Details
            movieDetailData={movieDetailData}
        />
        <MovieTrailers 
            movieTrailerData={movieTrailerData}
        />
    </Box>) : <Box width="100%" height="100vh" display="flex" alignItems="center" justifyContent="center">
     <TailSpin color="#000000" height={80} width={80} />
     </Box>
    
}

export default MovieDetails;