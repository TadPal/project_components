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

        loadFinances: (state, action) => {
            const finances = action.payload
            let newFinances = []
            let isSame = false

            // Iterate through the projects to be loaded
            for (let finance of finances) {
                // Check if the project is already present in the state
                for (let fin of state) {
                    if (finance.id === fin.id) {
                        isSame = true
                    }
                }
                // If the project is not already present, add it to the newProjects array
                if (!isSame) {
                    newFinances.push(finance)
                }
            }

            // Append the newProjects array to the existing state array using the spread operator
            state = [...state, ...newFinances]
            return state
        },

        updateFinance: (state, action) => {
            const updatedFinance = action.payload
            
            state = state.map(finance => finance.id === updatedFinance.id ? {...finance, ...updatedFinance} : finance)
            return state
        },
    },
})

// Export the changeFormState action creator from the financesSlice
export const { loadFinances, updateFinance } = financesSlice.actions

// Export the financesSlice reducer
export default financesSlice.reducer


