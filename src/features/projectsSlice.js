import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

// Extract the projects list from the imported data file
const projectsList = data.projects

// Set the initial state of the projects slice to the projectsList
const initialStateValue = projectsList

// A Redux slice for managing the state of the projects
export const projectsSlice = createSlice({
    name: "projects",
    initialState: initialStateValue,
    reducers: {
        // A reducer that adds a new project to the projects state array
        addProject: (state, action) => {
            const newProject = action.payload
            
            state = [...state, newProject]
            return state
        },

        updateProject: (state, action) => {
            const updatedProject = action.payload

            state = state.map(project => project.id === updatedProject.id ? {...project, ...updatedProject} : project)
            return state
        },

        loadProjects: (state, action) => {
            const projects = action.payload
            let newProjects = []
            let isSame = false

            // Iterate through the projects to be loaded
            for (let project of projects) {
                // Check if the project is already present in the state
                for (let proj of state) {
                    if (project.id === proj.id) {
                        isSame = true
                    }
                }
                // If the project is not already present, add it to the newProjects array
                if (!isSame) {
                    newProjects.push(project)
                }
            }

            // Append the newProjects array to the existing state array using the spread operator
            state = [...state, ...newProjects]
            return state
        }
    },
})

// Export the addProject action creator from the projectsSlice
export const { addProject, updateProject, loadProjects } = projectsSlice.actions

// Export the projectsSlice reducer
export default projectsSlice.reducer
