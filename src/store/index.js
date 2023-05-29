import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from "../features/projectsSlice"
import displayReducer from "../features/displaySlice"
import financesReducer from '../features/financesSlice';

// Configures the Redux store with reducers
export const store = configureStore({
    reducer: {
        projects: projectsReducer,
        display: displayReducer,
        finances: financesReducer,
    }
})