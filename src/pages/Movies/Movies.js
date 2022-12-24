import { toast } from 'react-toastify';

import { getSearchMovie } from "API/fetchMovies";
import { SearchBox } from "components/SearchBox/SearchBox"
import { useState, useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import ListMovies from '../../components/ListMovies/ListMovies';
import { Loader } from 'components/Loader/Loader';

import 'react-toastify/dist/ReactToastify.css';
import Container from 'components/Container/Conteiner.styled';


const Movies = () =>{

    const [searchParams, setSearchParams] = useSearchParams();
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(false);

    const filterParam = searchParams.get('query') ?? '';

    //const ListMovies = lazy(()=> import('../../components/ListMovies/ListMovies'))




    useEffect(() => {

        if (filterParam === '') {
            return
        }

      const getMovies = async filterParam  =>{

            try {
                setLoader(true)
                const resp = await getSearchMovie(filterParam);
                const data = resp.data.results;

                setData(data);

                if (data.length === 0) {
                    throw new Error('Not a valid word');
                }
            } catch (error) {
                toast(error.message, {
                    position: toast.POSITION.BOTTOM_CENTER
                })
            }finally{
                setLoader(false)
            }
        }

      getMovies(filterParam);
      
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
        <Container
            display = 'flex'
            flexDirection ='column'
            justifyContent='center'
            alignItems='center'

            margin = '50px'
        >
            <SearchBox 
                handleChangeInput =  {handleChangeInput}
                handleSubmit = {handleSubmit}
            />
           {loader ? <Loader/> : <ListMovies movies = {data}/>}
        </Container>
    )
};




export default Movies;


