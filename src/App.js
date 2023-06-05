import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { PagesDisplayAll } from "./pages/PagesDisplayAll";

//Main app component takes care of all of our components and pages
function App() {
  return (
    <div>
    <div className='container-fluid p-4 bg-success text-white text-center'>
      <h1>Správa projektů</h1>
    </div>
      <div className="App">
          <PagesDisplayAll />
      </div>
    </div>
  );
}

export default App;
