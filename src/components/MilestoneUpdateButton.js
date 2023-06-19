import { useDispatch } from 'react-redux';
import { MilestoneAsyncUpdate } from '../actions/MilestoneAsyncUpdater';

export const MilestoneUpdateButton = ({milestone, onClick}) => {
    const dispatch = useDispatch()

    return (
        <button className="btn btn-success" onClick={() => { dispatch(MilestoneAsyncUpdate(milestone)); onClick()}}>
        Update
        </button>
    )
}