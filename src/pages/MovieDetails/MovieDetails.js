import { getMovieById } from "API/fetchMovies";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";





export const MovieDetails = () =>{
    const {movieId} = useParams();
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        const getMovie = async movieId =>{
            
            try {

                const resp = await getMovieById(movieId);
                const data = resp.data;
                setMovie(data)
                
            } catch (error) {
                
            }
        }

        getMovie(Number(movieId))
      
    }, [movieId])
    


    return(
        <div>{movie.id}</div>
    )
}