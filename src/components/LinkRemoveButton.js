import { MilestoneLinkAsyncRemove } from "../actions/MilestoneLinkAsyncRemover";
import { useDispatch } from "react-redux";

export const LinkRemoveButton = ({disabled, previous, next}) => {
    const dispatch = useDispatch()
    return (
        <button className="btn btn-danger btn-sm" disabled={disabled} onClick={() => {dispatch(MilestoneLinkAsyncRemove({nextId: next, previousId: previous}))}}><b>-</b></button>
    )
}