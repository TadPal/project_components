import { ProjectsQuery }  from '../queries/ProjectsQuery';
import { loadProjects } from '../features/projectsSlice';


export const ProjectsFetchAsync = () => (dispatch, getState) => {
  ProjectsQuery()
  .then(response => response.json())
  .then(json => {
    const projects = json.data?.projectPage
    if (projects) {
      dispatch(loadProjects(projects))
    }
    return json
  })
}

//   useEffect(
//     () => {
//       ProjectsQuery()
//       .then(response => response.json())
//       .then(json => {
//         const projects = json.data?.projectPage
//         if (projects) {
//          //cokoliv 
//         }
//       })  
//     }, []
//   )
