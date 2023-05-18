import { createSlice } from "@reduxjs/toolkit";

// The initial state value for the financesAddFormSlice
const initialStateValue = false;

// A Redux slice for managing the state of the finance split form
export const financesSplitFormSlice = createSlice({
    name: "financesSplitForm",
    initialState: initialStateValue,
    reducers: {
        // A reducer that toggles the state of the finance split form between true and false
        changeFormState: (state) => {
            return !state
        },
    },
})

// Export the changeFormState action creator from the financesSplitFormSlice
export const { changeFormState } = financesSplitFormSlice.actions

// Export the financesSplitFormSlice reducer
export default financesSplitFormSlice.reducer
