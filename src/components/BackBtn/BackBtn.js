import { ButtonBack } from "./BackBtn.styled"



export const BackBtn = ({location}) =>{
    console.log(location)
    return(
        <ButtonBack  to={location.state?.from} >Go Back</ButtonBack>
    )
}


