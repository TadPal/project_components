import { createSlice } from "@reduxjs/toolkit";

// The initial state value for the projectsAddFormSlice
const initialStateValue = {projectId: "", display: false};

// A Redux slice for managing the state of the display
export const displaySlice = createSlice({
    name: "display",
    initialState: initialStateValue,
    reducers: {
        // A reducer that toggles the state of the project add form between true and false
        changeProjectDetailDisplay: (state, action) => {
            state.projectId = action.payload;
            state.display = !state.display;
            return state
        },
    },
})

// Export the changeFormState action creator from the projectsAddFormSlice
export const {changeProjectDetailDisplay} = displaySlice.actions

// Export the projectsAddFormSlice reducer
export default displaySlice.reducer
