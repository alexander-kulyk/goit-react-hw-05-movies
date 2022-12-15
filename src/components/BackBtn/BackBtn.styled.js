import { Link } from "react-router-dom";
import styled from "styled-components";



export const ButtonBack = styled(Link)`
  position: absolute;
  top: 10%;


  
  border-radius: 5px;
  padding: 5px;
  background-color: rgb(4,120,128);
  color: white;

  text-decoration: none;

  :hover{
    transform: scale(1.1)
  }
`;

