import { useParams } from "react-router-dom"


export const Movies = () =>{
    const params = useParams()
    console.log(params)
    return(
        <div>
            <form>
                <input
                type='text'
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


