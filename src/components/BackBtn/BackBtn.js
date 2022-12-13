import { ButtonBack, Container } from "./BackBtn.styled"



export const BackBtn = ({location}) =>{
    console.log(location)
    return(
        <Container>
            <ButtonBack  to={location.state?.from ?? "/"} >Go Back</ButtonBack>

        </Container>
    )
}


