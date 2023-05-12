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
    
            state.push(newProject)
            return state
        },
    },
})

// Export the addProject action creator from the projectsSlice
export const { addProject } = projectsSlice.actions

// Export the projectsSlice reducer
export default projectsSlice.reducer
