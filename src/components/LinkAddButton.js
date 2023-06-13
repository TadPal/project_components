import { MilestoneLinkAsyncInsert } from "../actions/MilestoneLinkAsyncInserter";
import { useDispatch } from "react-redux";

export const LinkAddButton = ({disabled, previous, next}) => {
    const dispatch = useDispatch()
    return (
        <button className="btn btn-success btn-sm" disabled={disabled} onClick={() =>  {dispatch(MilestoneLinkAsyncInsert({nextId: next, previousId: previous}))}}><b>+</b></button>
    )
}