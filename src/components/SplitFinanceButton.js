import { useDispatch } from "react-redux";
import { splitFinance } from "../features/financesSlice"
import {v1 as uuid} from "uuid";
import { changeFinanceDisplay } from "../features/displaySlice";

/**
 * A button component used to add a new finance to the store.
 * @param {Object} finance - The finance object to add.
 * 
 * @returns {JSX.Element} - Bootstrap button
 */
export const SplitFinanceButton = ({ finance }) => {
    const dispatch = useDispatch()
    const newFinance = finance

    /**
     * Event handler that adds a unique id to the newProject object, logs it to the console,
     * and dispatches an action to add the project to the store.
     */
    const OnAddClick = () => {
        newFinance["id"] = uuid(); // Add a unique id to the newProject object
        console.log(newFinance)
        dispatch(splitFinance(newFinance)) // Dispatch an action to add the new project to the store
    }

    return (
        // A button element that triggers the OnAddClick event handler and dispatches an action to change the form state.
        <button type="submit" className="btn btn-success mx-1" onClick={() => {OnAddClick(); dispatch(changeFinanceDisplay())}}>Add</button>
    )
}
