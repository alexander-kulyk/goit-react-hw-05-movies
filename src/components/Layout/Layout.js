import { Outlet } from "react-router-dom"
import { Heder, Nav, NavItem, NavItemLink, NavList } from "./Layout.styled"



export const Layout = () =>{
    return(
    <>
        <Heder>
            <Nav>
                <NavList>
                    <NavItem>
                        <NavItemLink to='/'>Home</NavItemLink>
                    </NavItem>
                    <NavItem>
                        <NavItemLink  to='movies'>Movies</NavItemLink>    
                    </NavItem>

                </NavList>
            </Nav>
        </Heder>
        <Outlet/>
        
    </>
    )
}