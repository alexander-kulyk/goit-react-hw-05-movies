import styled from "styled-components";
import { Link } from "react-router-dom"

export const List = styled.ul`
  display: flex;
  flex-direction: column;

  align-items: center;
`;

export const Item = styled.li`
    margin: 5px;
   list-style: none
`;


export const LinkItemMovie = styled(Link)`
   text-decoration: none;
   color: rgb(4, 120, 128);

   :hover{
    background-color:rgb(4, 120, 128);
    color: white;
   }
`;