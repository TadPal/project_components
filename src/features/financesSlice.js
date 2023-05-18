import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

// Extract the finances list from the imported data file
const financesList = data.finances

// Set the initial state of the finance slice to the financesList
const initialStateValue = financesList

// A Redux slice for managing the state of the finances
export const financesSlice = createSlice({
    name: "finances",
    initialState: initialStateValue,
    reducers: {
        // A reducer that 
        selectFinance: (state, action) => {
            const newStage = action.payload
    
            return state
        },
      
    },
})

// Export the changeFormState action creator from the 
export const { selectFinance } = financesSlice.actions

// Export the  reducer
export default financesSlice.reducer


