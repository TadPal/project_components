import { useDispatch } from 'react-redux';
import { ProjectAsyncInsert } from "../actions/ProjectAsyncInserter"

export const ProjectAddButton = ({project, onClick}) => {
    const dispatch = useDispatch()

    return (
        <button className="btn btn-success" onClick={() => { dispatch(ProjectAsyncInsert(project)); onClick()}}>
        Add
        </button>
    )
}