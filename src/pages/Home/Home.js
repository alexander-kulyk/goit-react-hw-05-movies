import { getTrendingMovies } from "API/fetchMovies"
import ListMovies  from "components/ListMovies/ListMovies"
import { useState, useEffect, Suspense } from "react";
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
            <Suspense fallback={<div>...Loading</div>}>
                <ListMovies movies ={movies}/>
            </Suspense>
        </>
    )
}


export default Home;