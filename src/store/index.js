import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from "../features/projectsSlice";
import financesReducer from '../features/financesSlice';

// Configures the Redux store with reducers
export const store = configureStore({
    reducer: {
        projects: projectsReducer,
        finances: financesReducer,
    }
})