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
    const [projectType, setProjectType] = useState("ProjectType") // The description of the new project.
    const [startDate, setStartDate] = useState("2023-01-01T00:00:00") // The manager of the new project.
    const [endDate, setEndDate] = useState("2025-12-31T23:59:59") // The budget of the new project.

    const dispatch = useDispatch()

    // Creates a new project object with the current state values.
    const newProject = {
        name: name, 
        projectType: { name: projectType },
        team: { name: "Uni", id: "2d9dcd22-a4a2-11ed-b9df-0242ac120003"},
        startdate: startDate,
        enddate: endDate,
        milestones: []
    }

    // Resets the state values to their default values.
    const resetProject = () => {
        setName("Name")
        setProjectType("ProjectType")
        setStartDate("2023-01-01T00:00:00")
        setEndDate("2025-12-31T23:59:59")
    }

    return(
        <div className="container">
                    <h2 className="m-4" style={{textAlign: "left"}}>Add Project</h2>
                    <div className="form-group mb-4" style={{textAlign: "left"}}>
                        <label>Project name</label>
                        <input id="93094cda-f22d-11ed-a05b-0242ac120003" className="form-control" type="text" placeholder="Enter project name" onChange={(e) => {setName(e.target.value)}}/>
                    </div>
                    <div className="form-group mb-4" style={{textAlign: "left"}}>
                        <label>Projet type</label>
                        <input id="93094f32-f22d-11ed-a05b-0242ac120003" className="form-control" type="text" placeholder="Enter description" onChange={(e) => {setProjectType(e.target.value)}}/>
                    </div>
                    <div className="form-group mb-4" style={{textAlign: "left"}}>
                        <label>Start date</label>
                        <input id="93095072-f22d-11ed-a05b-0242ac120003" className="form-control" type="date" placeholder="Enter manager" onChange={(e) => {setStartDate(e.target.value)}}/>
                    </div>
                    <div className="form-group mb-4" style={{textAlign: "left"}}>
                        <label>End date</label>
                        <input id="9309553ba-f22d-11ed-a05b-0242ac120003" className="form-control" type="date" placeholder="Enter budget" onChange={(e) => {setEndDate(e.target.value)}}/>
                    </div>
                    <div className="form-group mb-4" style={{textAlign: "right"}}>
                        <button className="btn btn-warning mx-1" onClick={() => {resetProject(); dispatch(changeFormState())}}>Cancel</button>
                        <AddProjectButton project={ newProject } />
                    </div>
            </div>
    )
}