import { ProjectQueryLarge } from "../queries/ProjectQueryLarge"
import { ProjectsQuery } from "../queries/ProjectsQuery"
import { useDispatch } from "react-redux"

/**
 * Ask for the item on server and adds it or update it in the store to the heap
 * @param {*} id 
 * @returns promise
 */
export const ProjectFetchHelper = (id="", query, resultselector) => {
    const dispatch = useDispatch()

    const log = (text) => (p) => {
        console.log(text)
        console.log(JSON.stringify(p))
        return p
    }
    
    const p = query(id)
        .then(
            response => response.json(),
            error => error
        )
        .then(
            j => log('incomming')(j)
        )
        // .then(
        //     response => log('received')(response.json()),
        //     error => error
        //     //error
        //     )
        .then(
            json => log('converted')(resultselector(json)),
            error => error
        )
        .then(
            json => log('dispatching')(dispatch(/*update state*/)),
            error => error
        )

    return p
}

/**
 * Fetch the project from server checks its type and asks once more for detailed data. Finally puts the result in the store.
 * @param {*} id 
 * @returns 
 */
export const ProjectFetch = (id) => {
    const projectSelector = (json) => json.data.projectById
    const bodyfunc = async () => {
        let projectData = await ProjectFetchHelper(id, ProjectQueryLarge, projectSelector)
        
        return projectData
    }
    return bodyfunc()
}

export const AllProjectsFetch = () => {
    const projectSelector = (json) => json.data.projectPage
    const bodyfunc = async () => {
        let projectData = await ProjectFetchHelper(ProjectsQuery, projectSelector)
        
        return projectData
    }
    return bodyfunc()
}
