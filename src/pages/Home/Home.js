import { toast } from 'react-toastify';

import { getTrendingMovies } from "API/fetchMovies"
import ListMovies  from "components/ListMovies/ListMovies"
import { useState, useEffect } from "react";
import { Title } from "./Home.styled";

import 'react-toastify/dist/ReactToastify.css';



const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () =>{
            
            try {
    
                const resp = await getTrendingMovies()
                const data = resp.data.results;
                setMovies(data)

                if (data.length === 0) {
                    throw new Error('something is wrong! try again');
                }
                 
             } catch (error) {
                toast(error.message, {
                    position: toast.POSITION.BOTTOM_CENTER
                })
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
};


export default Home;