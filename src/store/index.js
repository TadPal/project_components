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


/*
zobrazení dat docker -> http://localhost:31180/ui/api

query {
  projectPage{
    id
    name
    projectType {
      id
      name
    }
    milestones {
      id
      startdate
      enddate
    }
    
    finances {
      id
      name
      lastchange
      amount
      financeType {
        id
        name
        
      }
    }
  }
}

*/