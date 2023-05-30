import { createSlice } from "@reduxjs/toolkit";

// The initial state value for the projectsAddFormSlice
const initialStateValue = {addProject: false, addFinance: false, projectDetail: {projectId: "", display: false}};

// A Redux slice for managing the state of the project add form
export const displaySlice = createSlice({
    name: "display",
    initialState: initialStateValue,
    reducers: {
        // A reducer that toggles the state of the project add form between true and false
        changeProjectDisplay: (state) => {
            state.addProject = !state.addProject;
            return state
        },

        changeFinanceDisplay: (state) => {
            state.addFinance = !state.addFinance;
            return state
        },

        changeProjectDetailDisplay: (state, action) => {
            state.projectDetail.projectId = action.payload;
            state.projectDetail.display = !state.projectDetail.display;
            return state
        },
    },
})

// Export the changeFormState action creator from the projectsAddFormSlice
export const { changeProjectDisplay, changeFinanceDisplay, changeProjectDetailDisplay, changeProject } = displaySlice.actions

// Export the projectsAddFormSlice reducer
export default displaySlice.reducer
