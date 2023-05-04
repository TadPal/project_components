import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ProjectsPage } from "./pages/ProjectsPage"

//Main app component takes care of all of our components and pages
function App() {
  return (
    <div className="App">
        <ProjectsPage />
    </div>
  );
}

export default App;
