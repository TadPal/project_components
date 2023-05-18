import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from "../features/projectsSlice"
import projectsAddFormReducer from "../features/projectsAddFormSlice"
import stagesReducer from "../features/stagesSlice"
import financesReducer from '../features/financesSlice';
import financesSplitFormReducer from "../features/financesSplitFormSlice"

// Configures the Redux store with reducers
export const store = configureStore({
    reducer: {
        projects: projectsReducer,
        projectsAddForm: projectsAddFormReducer,
        stages: stagesReducer,
        finances: financesReducer,
        financesSplitForm: financesSplitFormReducer,
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