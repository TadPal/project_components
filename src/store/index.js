import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from "../features/projectsSlice"
import projectsAddFormReducer from "../features/projectsAddFormSlice"
import stagesSlice from "../features/stagesSlice"

// Configures the Redux store with reducers
export const store = configureStore({
    reducer: {
        projects: projectsReducer,
        projectsAddForm: projectsAddFormReducer,
        stages: stagesSlice,
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