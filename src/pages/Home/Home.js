import { getTrendingMovies } from "API/fetchMovies"
import { ListMovies } from "components/ListMovies/ListMovies"
import { useState, useEffect } from "react";
import { Title } from "./Home.styled"



const Home = () => {

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
      
    }, []);

    return(
        <>
            <Title>Trending today</Title>
            <ListMovies movies ={movies}/>
        </>
    )
}


export default Home;