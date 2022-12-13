import { getMovieById } from "API/fetchMovies";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Img, PrimaryTitle, SecondTitle, Span, Text } from "./MovieDetails.styled";





export const MovieDetails = () =>{
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(false)

    useEffect(() => {
        const getMovie = async movieId =>{
            
            try {

                const resp = await getMovieById(movieId);
                const data = resp.data;
                console.log(data)
                setMovie(data)
                
            } catch (error) {
                setError(true)
                
            }
        }

        getMovie(Number(movieId))
      
    }, [movieId])

    if (error ) {
        return(
            <PrimaryTitle>Something is wrong! Try another movie</PrimaryTitle>
        )
        
    }

    if (movie === null) {
        return;
        
    };

 
    const { 
        backdrop_path,
        genres, 
        title, 
        release_date, 
        overview 
    } = movie

    const releaseYear = release_date?.split('-')
    
    

    return(
        
        <div>
            <Img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title}/>
            <PrimaryTitle>{title}<Span>({releaseYear[0]})</Span></PrimaryTitle>
            <SecondTitle>Overview</SecondTitle>
            <Text>{overview}</Text>
            <SecondTitle>Genres</SecondTitle>
            <Text>{genres.map(item => item.name).join(', ')}</Text>
            
        </div>
    )
}