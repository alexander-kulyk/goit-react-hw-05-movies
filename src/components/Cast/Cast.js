import { getCredits } from "API/fetchMovies";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { ActorName, ActorProfile, ItemActors, ListActors } from "./Cast.styled";
import picture from '../../picture/no-image.jpg';



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
            { cast.map(({id, original_name, profile_path }) => {

                let profile
                  profile_path !== null
                    ? profile = `https://image.tmdb.org/t/p/w500${ profile_path }`
                    : profile  = picture;

               return <ItemActors key={id}>
                  <ActorProfile src={profile} alt={original_name}/>
                  <ActorName>{original_name}</ActorName>
                </ItemActors>
          })}

        </ListActors>

    )
}
