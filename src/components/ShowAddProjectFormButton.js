import { useState } from "react";
import { useSelector } from "react-redux"
import { AddProjectButton } from "./AddProjectButton";
import { changeFormState } from "../features/projectsAddFormSlice";
import { useDispatch } from "react-redux";

export const ShowAddProjectFormButton = () => {
    const formVisibilityState = useSelector((state) => state.projectsAddForm)
    const dispatch = useDispatch()

    if (formVisibilityState === false) {
        return (
            // Button to show the form
            <div className="container mt-4">
                <button className="btn btn-sm btn-success" onClick={() => {dispatch(changeFormState())}}>Add Project</button>
            </div>
        )
    }
    else {
        return (
            <AddProjectForm />
        )
    }
}

const AddProjectForm = () => {
    const [name, setName] = useState("Name")
    const [description, setDescription] = useState("Description")
    const [manager, setManager] = useState("Manager")
    const [budget, setBudget] = useState(0)
    const [submissionDate, setSubmissionDate] = useState("2023-01-01")

    const dispatch = useDispatch()

    const newProject = {
        id: "", 
        name: name, 
        description:description, 
        manager: manager,
        budget: budget,
        submissionDate: submissionDate
    }

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
                        <input className="form-control" type="text" placeholder="Enter project name" onChange={(e) => {setName(e.target.value)}}/>
                    </div>
                    <div className="form-group mb-4" style={{textAlign: "left"}}>
                        <label>Description</label>
                        <input className="form-control" type="text" placeholder="Enter description" onChange={(e) => {setDescription(e.target.value)}}/>
                    </div>
                    <div className="form-group mb-4" style={{textAlign: "left"}}>
                        <label>Project manager</label>
                        <input className="form-control" type="text" placeholder="Enter manager" onChange={(e) => {setManager(e.target.value)}}/>
                    </div>
                    <div className="form-group mb-4" style={{textAlign: "left"}}>
                        <label>Budget</label>
                        <input className="form-control" type="number" placeholder="Enter budget" onChange={(e) => {setBudget(e.target.value)}}/>
                    </div>
                    <div className="form-group mb-4" style={{textAlign: "left"}}>
                        <label>Budget</label>
                        <input className="form-control" type="date" placeholder="Enter manager" onChange={(e) => {setSubmissionDate(e.target.value)}}/>
                    </div>
                    <div className="form-group mb-4" style={{textAlign: "right"}}>
                        <button className="btn btn-warning mx-1" onClick={() => {resetProject(); dispatch(changeFormState())}}>Cancel</button>
                        <AddProjectButton project={ newProject } />
                    </div>
            </div>
    )
}