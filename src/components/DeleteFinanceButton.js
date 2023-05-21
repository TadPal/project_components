import { Trash } from "react-bootstrap-icons"
import { useDispatch } from "react-redux";
import { deleteFinance } from "../features/financesSlice";


export const DeleteFinanceButton = ({ financeId }) => {
    const dispatch = useDispatch()

    return(
        <button className="btn btn-danger btn-sm" onClick={() => { dispatch(deleteFinance(financeId)) }}><Trash/></button>
    )
}