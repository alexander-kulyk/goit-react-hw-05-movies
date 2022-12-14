import { getReviewsMovies } from "API/fetchMovies";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ReviewsList,  ReviewsItems, Title, Text } from "./Reviews.styled";



export const Reviews = () => {
    
    const { movieId } = useParams();
    const [ reviews, setReviews ] = useState(null);


    useEffect(() => {
        const getReviews = async id =>{
            try {

               const resp = await getReviewsMovies(id);
               const data = resp.data.results;
               setReviews(data);

                
            } catch (error) {
                
            }
        }

        getReviews(movieId)
      
    }, [movieId]);

    if (reviews === null) {
        return;
        
    }
    
    
    return(
        <>
            {reviews.length > 0
                ?   <ReviewsList>
                        {reviews.map(({author,content, id}) =>(
                            <ReviewsItems key={id}>
                                <Title>{author}</Title>
                                <Text>{content}</Text>
                            </ReviewsItems>))}
                    </ReviewsList>
                : <p>No reviews</p>
            
            }
        </>
        
    )
}
