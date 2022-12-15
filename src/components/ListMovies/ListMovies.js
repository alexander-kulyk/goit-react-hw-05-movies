import PropTypes from 'prop-types';
import {  useLocation } from "react-router-dom"
import { Item, LinkItemMovie, List } from "./ListMovies.styled"


const ListMovies  = ({movies}) =>{
    const  location = useLocation();
    
    return(
        <List>
            {movies.map(({id, title}) =>(
                <Item key={id}>
                    <LinkItemMovie to={`/movies/${id}`} state = {{from: location}}>{title ?? 'no title'}</LinkItemMovie>
                </Item>))}
        </List>
    )
}

export default ListMovies;


ListMovies.propTypes ={
    movies: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string,
          })
    ),
}