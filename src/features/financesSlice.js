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
        splitFinance: (state, action) => {
            const newFinance = action.payload
    
            state.push(newFinance)
            return state
        },
      
    },
})

// Export the changeFormState action creator from the financesSlice
export const { selectFinance, splitFinance } = financesSlice.actions

// Export the financesSlice reducer
export default financesSlice.reducer


