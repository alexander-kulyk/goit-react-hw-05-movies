import { Link, useLocation } from "react-router-dom"
import { ItemMovies, ListMovies } from "./ListTrandMovies.styled"


export const ListTrandMovies  = ({movies}) =>{
    const  location = useLocation()
    return(
        <ListMovies>
            {movies.map(movie =>(
                <ItemMovies key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state = {{from: location}}>{movie.title ?? 'no title'}</Link>
                </ItemMovies>))}
        </ListMovies>
    )
}