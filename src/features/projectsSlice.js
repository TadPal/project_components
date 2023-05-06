import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

const projectsList = data.projects

const initialStateValue = projectsList

export const projectsSlice = createSlice({
    name: "projects",
    initialState: initialStateValue,
    reducers: {
        addProject: (state, action) => {
            const newProject = action.payload
    
            state.push(newProject)
            return state
        },
    },
})

export const { addProject } = projectsSlice.actions

export default projectsSlice.reducer