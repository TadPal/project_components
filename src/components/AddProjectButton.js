import { useDispatch } from "react-redux";
import { addProject } from "../features/projectsSlice"
import {v1 as uuid} from "uuid";
import { changeProjectDisplay } from "../features/displaySlice";

/**
 * A button component used to add a new project to the store.
 * @param {Object} project - The project object to add.
 * 
 * @returns {JSX.Element} - Bootstrap button
 */
export const AddProjectButton = ({ project }) => {
    const dispatch = useDispatch()
    const newProject = project

    /**
     * Event handler that adds a unique id to the newProject object, logs it to the console,
     * and dispatches an action to add the project to the store.
     */
    const OnAddClick = () => {
        newProject["id"] = uuid(); // Add a unique id to the newProject object
        newProject["lastchange"] = new Date().toISOString();
        console.log(newProject)
        dispatch(addProject(newProject)) // Dispatch an action to add the new project to the store
    }

    return (
        // A button element that triggers the OnAddClick event handler and dispatches an action to change the form state.
        <>
            <button type="submit" className="btn btn-success mx-1" onClick={() => {OnAddClick(); dispatch(changeProjectDisplay())}}>Add</button>
        </>
    )
}
