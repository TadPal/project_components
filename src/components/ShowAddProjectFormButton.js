import { useState } from "react";
import { useSelector } from "react-redux"
import { AddProjectButton } from "./AddProjectButton";
import { changeFormState } from "../features/projectsAddFormSlice";
import { useDispatch } from "react-redux";

/**
 * A button that toggles the visibility of the "Add Project" form.
 * 
 * @returns {JSX.Element} - Button component
 */
export const ShowAddProjectFormButton = () => {
    const formVisibilityState = useSelector((state) => state.projectsAddForm) // Selects the current visibility state of the "Add Project" form.
    const dispatch = useDispatch()

    // If the form is not visible, return a button that, when clicked, changes the form's visibility state.
    if (formVisibilityState === false) {
        return (
            <div className="container mt-4">
                <button className="btn btn-sm btn-success" onClick={() => {dispatch(changeFormState())}}>Add Project</button>
            </div>
        )
    }
    // If the form is visible, return the "Add Project" form.
    else {
        return (
            <AddProjectForm />
        )
    }
}

/**
 * A form for adding a new project.
 * 
 * @returns {JSX.Element} - Form component
 */
const AddProjectForm = () => {
    const [name, setName] = useState("Name") // The name of the new project.
    const [description, setDescription] = useState("Description") // The description of the new project.
    const [manager, setManager] = useState("Manager") // The manager of the new project.
    const [budget, setBudget] = useState(0) // The budget of the new project.
    const [submissionDate, setSubmissionDate] = useState("2023-01-01") // The submission date of the new project.

    const dispatch = useDispatch()

    // Creates a new project object with the current state values.
    const newProject = {
        id: "", 
        name: name, 
        description:description, 
        manager: manager,
        budget: budget,
        submissionDate: submissionDate
    }

    // Resets the state values to their default values.
    const resetProject = () => {
        setName("Name")
        setDescription("Description")
        setManager("Manager")
        setBudget(0)
        setSubmissionDate("2023-01-01")
    }

    return(
        <div className="container">
                    <h2 className="m-4" style={{textAlign: "left"}}>Add Project</h2>
                    <div className="form-group mb-4" style={{textAlign: "left"}}>
                        <label>Project name</label>
                        <input id="93094cda-f22d-11ed-a05b-0242ac120003" className="form-control" type="text" placeholder="Enter project name" onChange={(e) => {setName(e.target.value)}}/>
                    </div>
                    <div className="form-group mb-4" style={{textAlign: "left"}}>
                        <label>Description</label>
                        <input id="93094f32-f22d-11ed-a05b-0242ac120003" className="form-control" type="text" placeholder="Enter description" onChange={(e) => {setDescription(e.target.value)}}/>
                    </div>
                    <div className="form-group mb-4" style={{textAlign: "left"}}>
                        <label>Project manager</label>
                        <input id="93095072-f22d-11ed-a05b-0242ac120003" className="form-control" type="text" placeholder="Enter manager" onChange={(e) => {setManager(e.target.value)}}/>
                    </div>
                    <div className="form-group mb-4" style={{textAlign: "left"}}>
                        <label>Budget</label>
                        <input id="9309553ba-f22d-11ed-a05b-0242ac120003" className="form-control" type="number" placeholder="Enter budget" onChange={(e) => {setBudget(e.target.value)}}/>
                    </div>
                    <div className="form-group mb-4" style={{textAlign: "left"}}>
                        <label>Budget</label>
                        <input id="9309552c-f22d-11ed-a05b-0242ac120003" className="form-control" type="date" placeholder="Enter manager" onChange={(e) => {setSubmissionDate(e.target.value)}}/>
                    </div>
                    <div className="form-group mb-4" style={{textAlign: "right"}}>
                        <button className="btn btn-warning mx-1" onClick={() => {resetProject(); dispatch(changeFormState())}}>Cancel</button>
                        <AddProjectButton project={ newProject } />
                    </div>
            </div>
    )
}