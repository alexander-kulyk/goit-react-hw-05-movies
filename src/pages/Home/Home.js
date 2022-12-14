import { getTrendingMovies } from "API/fetchMovies"
import { ListTrandMovies } from "components/ListTrandMovies/ListTrandMovies"
import { useState, useEffect } from "react";
import { Title } from "./Home.styled"



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
      
    }, []);

    return(
        <>
            <Title>Trending today</Title>
            <ListTrandMovies movies ={movies}/>
        </>
    )
}