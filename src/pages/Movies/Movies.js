import { Outlet } from "react-router-dom"


export const Movies = () =>{
    return(
        <>
            <form>
                <input
                type='text'
                />
                <button type="submit">Submit</button>
            </form>
        
        <Outlet/>
        </>
    )
}


