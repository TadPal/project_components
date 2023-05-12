import { useDispatch } from "react-redux";
import { addProject } from "../features/projectsSlice"
import {v1 as uuid} from "uuid";
import { changeFormState } from "../features/projectsAddFormSlice";

export const AddProjectButton = ({ project }) => {
    const dispatch = useDispatch()
    
    const newProject = project

    const OnAddClick = () => {
        newProject["id"] = uuid();
        console.log(newProject)
        dispatch(addProject(newProject))
    }

    return (
        <button type="submit" className="btn btn-success mx-1" onClick={() => {OnAddClick(); dispatch(changeFormState())}}>Add</button>
    )
}