
import { toast } from 'react-toastify';
import { getMovieById } from "API/fetchMovies";
import { BackBtn } from "components/BackBtn/BackBtn";
import { Loader } from "components/Loader/Loader";
import { useState, useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { AddList, Img, ItemAddList, PrimaryTitle, SecondTitle, Span, Text } from "./MovieDetails.styled";

import 'react-toastify/dist/ReactToastify.css';
import Container from 'components/Container/Conteiner.styled';
import { NavItemLink } from 'components/Layout/Layout.styled';






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
                toast(error.message, {
                    position: toast.POSITION.BOTTOM_CENTER
                })
                
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
        overview,
        vote_average
    } = movie

    const releaseYear = release_date?.split('-')
    
    
    return(
        <Container>
            {loader 
                ? <Loader/> 
                : <Container>
                        <Container
                            display="flex"
                            >
                            <Container 
                                display="flex"
                                justifyContent='center'
                                alignItems='center'
                                margin= '15px'
                            >
                                <BackBtn type="button" location ={location}/>
                                <Img src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} alt={title}/>
                            </Container>
                            <div>
                                <PrimaryTitle>{title}<Span>({releaseYear[0]})</Span></PrimaryTitle>
                                <SecondTitle>Score: <span>{vote_average.toFixed(1)}</span></SecondTitle>
                                <SecondTitle>Overview</SecondTitle>
                                <Text>{overview}</Text>
                                <SecondTitle>Genres</SecondTitle>
                                <Text>{genres.map(item => item.name).join(', ')}</Text>
                            </div>
                        </Container>
                        <Container
                            marginLeft='20px'
                            bg='rgb(4,120,128, 0.2)'
                        >
                            <Text>Additional information</Text>
                            <div>
                                <AddList>
                                    <ItemAddList><NavItemLink to={'cast'}>Cast</NavItemLink></ItemAddList>
                                    <ItemAddList><NavItemLink to={'reviews'}>Reviews</NavItemLink></ItemAddList>
                                </AddList>
                                <Outlet/>
                            </div>

                        </Container>
                
                    </Container>
            }
            
        </Container>
    )
}