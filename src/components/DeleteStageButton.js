import { Trash } from "react-bootstrap-icons"
import { useState } from "react"
// import { useDispatch } from "react-redux";


export const DeleteStageButton = ({ stageId }) => {
    // const dispatch = useDispatch()
    const [deleteVisibility, setDeleteVisibility] = useState(false)

    if(deleteVisibility === false)
    {
        return(
            <button className="btn btn-danger btn-sm" onClick={() => {setDeleteVisibility(!deleteVisibility)}}><Trash/></button>
        )
    }
    else
    {
        return(
            <div>
                <button className="btn btn-outline-danger btn-sm" onClick={() => {setDeleteVisibility(!deleteVisibility)}}>Cancel</button>
                <button className="btn btn-outline-danger btn-sm" onClick={() => {/*Funkce co smaže stage*/}}><Trash/></button>
            </div>   
        )
    }
}