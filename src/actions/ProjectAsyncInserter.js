import { ProjectInsert } from "../queries/ProjectInsert";
import { addProject } from "../features/projectsSlice";

/**
 * Asynchronous action creator that sends a project insert request to a server.
 * 
 * @param {Object} newProject - Milestone object to be added
 * @returns {Function} A promise representing the asynchronous operation.
 */
export const ProjectAsyncInsert = (newProject) => (dispatch, getState) => (
ProjectInsert(newProject.projectType, newProject.name, newProject.startdate, newProject.enddate, newProject.team)
    .then(response => response.json())
    .then(json => {
        const message = json.data?.projectInsert.msg
        const project = json.data?.projectInsert.project;
        if (message === 'ok') {
            dispatch(addProject(project));
        }
        else {
            console.log("Project insert failed.")
        }
        return json
        })
)