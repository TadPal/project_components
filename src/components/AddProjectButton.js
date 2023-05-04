import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../features/projectsSlice"
import {v1 as uuid} from "uuid";

export const AddProjectButton = () => {
    const dispatch = useDispatch()
    const [name, setName] = useState("")

    const newProject = {
        id: "", 
        name:"Name", 
        description:"Description", 
        manager: "Manager",
        budget:"0",
        submissionDate: "01/01/2000"
    }
    
    const OnClick = (props) => {
        newProject["name"] = props.name;
        newProject["id"] = uuid();
        console.log(newProject)
        dispatch(add(newProject))
    }

    return (
        <div className="input-group my-3">
            <input className="form-control" type="text" placeholder="Enter project name" onChange={(e) => {setName(e.target.value)}}/>
            <button className="btn btn-success" onClick={() => OnClick({name})}>Add Project</button>
        </div>
    )
}