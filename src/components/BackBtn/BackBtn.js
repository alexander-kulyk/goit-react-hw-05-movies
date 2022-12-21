import { ButtonBack } from "./BackBtn.styled"



export const BackBtn = ({location}) =>{
    return(
        <div>
            <ButtonBack  to={location} >Go Back</ButtonBack>
        </div>
    )
}


