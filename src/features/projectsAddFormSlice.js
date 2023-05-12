import { createSlice } from "@reduxjs/toolkit";

// The initial state value for the projectsAddFormSlice
const initialStateValue = false;

// A Redux slice for managing the state of the project add form
export const projectsAddFormSlice = createSlice({
    name: "projectsAddForm",
    initialState: initialStateValue,
    reducers: {
        // A reducer that toggles the state of the project add form between true and false
        changeFormState: (state) => {
            return !state
        },
    },
})

// Export the changeFormState action creator from the projectsAddFormSlice
export const { changeFormState } = projectsAddFormSlice.actions

// Export the projectsAddFormSlice reducer
export default projectsAddFormSlice.reducer
