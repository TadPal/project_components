import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

// Extract the stages list from the imported data file
const stagesList = data.stages

// Set the initial state of the stages slice to the stagesList
const initialStateValue = stagesList

// A Redux slice for managing the state of the stages
export const stagesSlice = createSlice({
    name: "stages",
    initialState: initialStateValue,
    reducers: {
        // A reducer that adds a new stage to the stages state array
        addStage: (state, action) => {
            const newStage = action.payload
    
            state.push(newStage)
            return state
        },
        
        deleteStage: (state, action) => {
            const stageId = action.payload;
            
            state = state.filter(st => st.id !== stageId)
            return state
        },
    },
})

// Export the addStage action creator from the stagesSlice
export const { addStage, deleteStage } = stagesSlice.actions

// Export the stagesSlice reducer
export default stagesSlice.reducer
