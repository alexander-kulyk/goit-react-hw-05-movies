import { getMovieById } from "API/fetchMovies";
import { BackBtn } from "components/BackBtn/BackBtn";
import { Loader } from "components/Loader/Loader";
import { useState, useEffect } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { AddList, Img, ItemAddList, PrimaryTitle, SecondTitle, Span, Text } from "./MovieDetails.styled";





export const MovieDetails = () =>{
    const {movieId} = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState(false);
    const [loader, setLoader] = useState(false);

    const location = useLocation();
   
    useEffect(() => {

        setLoader(true);
        
        const getMovie = async movieId =>{
            
            try {
                

                const resp = await getMovieById(movieId);
                const data = resp.data;
            
                setMovie(data)
                
            } catch (error) {
                setError(true)
                
            }finally{
              setLoader(false)
            }
        }

        getMovie(Number(movieId))
      
    }, [ movieId])

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
            {loader 
                ? <Loader/> 
                : <div>
                        <div>
                            <BackBtn type="button" location ={location}/>
                            <Img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title}/>
                        </div>
                        <div>
                            <PrimaryTitle>{title}<Span>({releaseYear[0]})</Span></PrimaryTitle>
                            <SecondTitle>Overview</SecondTitle>
                            <Text>{overview}</Text>
                            <SecondTitle>Genres</SecondTitle>
                            <Text>{genres.map(item => item.name).join(', ')}</Text>
                        </div>
                        <div>
                            <Text>Additional information</Text>
                            <div>
                                <AddList>
                                    <ItemAddList><Link to={'cast'}>Cast</Link></ItemAddList>
                                    <ItemAddList><Link to={'reviews'}>Reviews</Link></ItemAddList>
                                </AddList>
                                <Outlet/>
                            </div>

                        </div>
                
                    </div>
            }
            
        </div>
    )
}