import { getCredits } from "API/fetchMovies";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { ActorName, ActorProfile, ItemActors, ListActors } from "./Cast.styled";
// import pictures from '../../picture/no-Image.png';





export  const Cast = () =>{

    const {movieId} = useParams();
    const [cast, setCast] = useState(null);
    console.log(movieId)

    


    useEffect(() => {
      const getCast = async movieId =>{

        try {
            
           const resp = await getCredits(movieId);
           const data = resp.data.cast;
           console.log(data)
           setCast(data)
        } catch (error) {
            
        }

      }
      getCast(movieId)
    }, [movieId])
    
    if (cast === null) {
      return;
    }




    return(

        <ListActors>
            { cast.map(({id, original_name, profile_path }) => (
                <ItemActors key={id}>
                  <ActorProfile src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={original_name}/>
                  <ActorName>{original_name}</ActorName>
                </ItemActors>
            ))}

        </ListActors>

    )
}