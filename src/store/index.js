import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from "../features/projectsSlice"
import projectsAddFormReducer from "../features/projectsAddFormSlice"

export const store = configureStore({
    reducer: {
        projects: projectsReducer,
        projectsAddForm: projectsAddFormReducer
    }
})