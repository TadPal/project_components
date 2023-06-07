import { Trash } from "react-bootstrap-icons"
import { useState } from "react"
import { MilestoneDeleteAsync }   from "../actions/MilestoneAsyncDeleter"

export const DeleteStageButton = ({ stageId }) => {
    const [deleteVisibility, setDeleteVisibility] = useState(false)

    if(deleteVisibility === false)
    {
        return(
            <button className="btn btn-danger btn-sm mx-1" onClick={() => {setDeleteVisibility(!deleteVisibility)}}><Trash/></button>
        )
    }
    else
    {
        return(
            <div className="container">
                <button className="btn btn-outline-danger btn-sm m-1" onClick={() => {setDeleteVisibility(!deleteVisibility)}}>Cancel</button>
                <button className="btn btn-danger btn-sm m-1" onClick={() => {MilestoneDeleteAsync(stageId)}}>Delete</button>
            </div>   
        )
    }
}