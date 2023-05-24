import { useState } from "react";
import { useSelector } from "react-redux"
import { SplitFinanceButton } from "./SplitFinanceButton";
import { changeFormState } from "../features/financesSplitFormSlice";
import { useDispatch } from "react-redux";

/**
 * A button that toggles the visibility of the "Add Project" form.
 * 
 * @returns {JSX.Element} - Button component
 */
export const ShowSplitFinanceFormButton = () => {
    const formVisibilityState = useSelector((state) => state.financesSplitForm) // Selects the current visibility state of the "Add Project" form.
    const dispatch = useDispatch()

    // If the form is not visible, return a button that, when clicked, changes the form's visibility state.
    if (formVisibilityState === false) {
        return (
            <div className="container my-4">
                <button className="btn btn-sm btn-success" onClick={() => {dispatch(changeFormState())}}>Add finance</button>
            </div>
        )
    }
    // If the form is visible, return the "Add Project" form.
    else {
        return (
            <SplitFinanceForm />
        )
    }
}

/**
 * A form for adding a new project.
 * 
 * @returns {JSX.Element} - Form component
 */
const SplitFinanceForm = () => {
    const [name, setName] = useState("Name") // 
    const [change, setChange] = useState("Last change") // 
    const [amount, setAmount] = useState("Amount") // 
    const [type, setType] = useState("Type of finance") // 
    

    const dispatch = useDispatch()

    // Creates a new project object with the current state values.
    const newFinance = {
        id: "", 
        name: name, 
        change:change, 
        amount: amount,
        type: type,
    }

    // Resets the state values to their default values.
    const resetFinance = () => {
        setName("Name")
        setChange("Last change")
        setAmount("Amount")
        setType("Type of finance")
    
    }

    return(
        <div className="container">
                    <h2 className="m-4" style={{textAlign: "left"}}>Split Finance</h2>
                    <div className="form-group mb-4" style={{textAlign: "left"}}>
                        <label>Finance name</label>
                        <input id="93094cdc-f22d-11ed-a05b-0242ac120003" className="form-control" type="text" placeholder="Enter finance name" onChange={(e) => {setName(e.target.value)}}/>
                    </div>
                    <div className="form-group mb-4" style={{textAlign: "left"}}>
                        <label>Last change</label>
                        <input id="93094f3c-f22d-11ed-a05b-0242ac120003" className="form-control" type="date" placeholder="Enter date of the last change" onChange={(e) => {setChange(e.target.value)}}/>
                    </div>
                    <div className="form-group mb-4" style={{textAlign: "left"}}>
                        <label>Amount</label>
                        <input id="9309507c-f22d-11ed-a05b-0242ac120003" className="form-control" type="number" placeholder="Enter amount" onChange={(e) => {setAmount(e.target.value)}}/>
                    </div>
                    <div className="form-group mb-4" style={{textAlign: "left"}}>
                        <label>Type of finance</label>
                        <input id="9309553bc-f22d-11ed-a05b-0242ac120003" className="form-control" type="text" placeholder="Enter type of finance" onChange={(e) => {setType(e.target.value)}}/>
                    </div>
                    <div className="form-group mb-4" style={{textAlign: "right"}}>
                        <button className="btn btn-warning mx-1" onClick={() => {resetFinance(); dispatch(changeFormState())}}>Cancel</button>
                        <SplitFinanceButton finance={ newFinance } />
                    </div>
            </div>
    )
}