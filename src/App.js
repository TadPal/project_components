import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { PagesDisplayAll } from "./pages/PagesDisplayAll";

//Main app component takes care of all of our components and pages
function App() {
  return (
    <div className="App">
        <PagesDisplayAll />
    </div>
  );
}

export default App;
