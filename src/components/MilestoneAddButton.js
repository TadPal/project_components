import { useDispatch } from 'react-redux';
import { MilestoneAsyncInsert } from '../actions/MilestoneAsyncInsert';

export const MilestoneAddButton = ({milestone, onClick}) => {
    const dispatch = useDispatch()

    return (
        <button className="btn btn-success" onClick={() => { dispatch(MilestoneAsyncInsert(milestone)); onClick()}}>
        Add
        </button>
    )
}