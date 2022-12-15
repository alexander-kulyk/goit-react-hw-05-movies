import { Loader } from "components/Loader/Loader"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Heder, Nav, NavItem, NavItemLink, NavList } from "./Layout.styled"



 const Layout = () =>{
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
       <Suspense fallback={<Loader/>}>
            <Outlet/>
       </Suspense>
        
    </>
    )
}
export default Layout;