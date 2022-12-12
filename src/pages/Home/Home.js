import { getTrendingMovies } from "API/fetchMovies"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ItemTrandMovies, ListTrandMovies, Title } from "./Home.styled"

export const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () =>{
            
            try {
    
                const resp = await getTrendingMovies()
                const data = resp.data.results;
                setMovies(data)
                 
             } catch (error) {
                 
            }
        }
        getMovies()
      
    }, [])
    

    


    return(
        <>
            <Title>Trending today</Title>
            <ListTrandMovies>
                {movies.map(movie =>(
                <ItemTrandMovies key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>{movie.title ?? 'no title'}</Link>
                </ItemTrandMovies>))}
                
            </ListTrandMovies>
        </>
    )
}