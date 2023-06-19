import { useDispatch } from 'react-redux';
import { ProjectUpdateAsync } from "../actions/ProjectAsyncUpdater"

export const ProjectUpdateButton = ({project, onClick}) => {
    const dispatch = useDispatch()

    return (
        <button className="btn btn-success" onClick={() => { dispatch(ProjectUpdateAsync(project={project})); onClick()}}>
        Update
        </button>
    )
}