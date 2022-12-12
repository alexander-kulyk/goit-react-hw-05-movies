import axios from "axios";


const KEY = '40e04535baed299e0a9efd3cd3e21164';
const BASE_URL = 'https://api.themoviedb.org/3/'



export const getTrendingMovies = async () =>{
    return await axios.get(`${BASE_URL}trending/all/day?api_key=${KEY}&page=1`)
};


export const getMovieById = async id =>{
    return await axios.get(`${BASE_URL}movie/${id}?api_key=${KEY}`)
};


 