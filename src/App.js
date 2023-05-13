import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ProjectsPage } from "./pages/ProjectsPage"
import { StagesPage } from './pages/StagesPage';

//Main app component takes care of all of our components and pages
function App() {
  return (
    <div className="App">
        <ProjectsPage />
        <StagesPage/>
    </div>
  );
}

export default App;
