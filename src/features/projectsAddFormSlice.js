import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const projectsAddFormSlice = createSlice({
    name: "projectsAddForm",
    initialState: initialStateValue,
    reducers: {
        changeFormState: (state) => {
            return !state
        },
    },
})

export const { changeFormState } = projectsAddFormSlice.actions

export default projectsAddFormSlice.reducer