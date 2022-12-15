import { getCredits } from "API/fetchMovies";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { ActorName, ActorProfile, ItemActors, ListActors } from "./Cast.styled";
import picture from '../../picture/no-image.jpg';
import { Message } from "components/Reviews/Reviews.styled";



const Cast = () =>{

    const {movieId} = useParams();
    const [cast, setCast] = useState(null);
    console.log(movieId)

    


    useEffect(() => {
      const getCast = async movieId =>{

        try {
            
           const resp = await getCredits(movieId);
           const data = resp.data.cast;
           setCast(data);

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
            {cast.length > 0 
              ? cast.map(({id, original_name, profile_path }) => {
              
                let image
                  profile_path !== null
                    ? image = `https://image.tmdb.org/t/p/w500${ profile_path }`
                    : image  = picture;

               return <ItemActors key={id}>
                  <ActorProfile src={image} alt={original_name}/>
                  <ActorName>{original_name}</ActorName>
                </ItemActors>})
              : <Message>No Cast</Message>
            }
        </ListActors>

    )
}



export default Cast;