import { Outlet, useParams } from "react-router-dom"


export const Movies = () =>{
    const params = useParams()
    console.log(params)
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


