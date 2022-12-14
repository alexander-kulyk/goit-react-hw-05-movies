import { Link, useLocation } from "react-router-dom"
import { Item, List } from "./ListMovies.styled"


const ListMovies  = ({movies}) =>{
    const  location = useLocation()
    return(
        <List>
            {movies.map(movie =>(
                <Item key={movie.id}>
                    <Link to={`/movies/${movie.id}`} state = {{from: location}}>{movie.title ?? 'no title'}</Link>
                </Item>))}
        </List>
    )
}

export default ListMovies;