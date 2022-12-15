import { toast } from 'react-toastify';

import { getSearchMovie } from "API/fetchMovies";
//import { ListMovies } from "components/ListMovies/ListMovies";
import { SearchBox } from "components/SearchBox/SearchBox"
import { useState, useEffect, Suspense, lazy } from "react";
import { useSearchParams } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';

const Movies = () =>{

    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState('');
    const [data, setData] = useState([])
    const filterParam = searchParams.get('query') ?? '';

    const ListMovies = lazy(()=> import('../../components/ListMovies/ListMovies'))




    useEffect(() => {

        if (filterParam === '') {
            return
        }

      const getMovies = async query  =>{
            try {
                const resp = await getSearchMovie(query);
                const data = resp.data.results;

                setData(data);

                if (data.length === 0) {
                    throw new Error('Not a valid word');
                }
            } catch (error) {
                toast(error.message, {
                    position: toast.POSITION.BOTTOM_CENTER
                })
            }
        }

      getMovies(filterParam)
    }, [filterParam])
    



    const handleChangeInput = value =>{
        setQuery(value);
        
    };

    const handleSubmit = () =>{
        if (query === '') {
            toast('Write something', {
                position: toast.POSITION.BOTTOM_CENTER
            });
            
        }
        setSearchParams(query !== '' ? {query} : {});

        
    }

    return(
        <div>
            <SearchBox 
            handleChangeInput =  {handleChangeInput}
            handleSubmit = {handleSubmit}
            />
           <Suspense fallback ={null}>
                <ListMovies movies = {data}/>
           </Suspense>

        </div>
    )
};




export default Movies;


