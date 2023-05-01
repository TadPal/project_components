import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FirstProjectDayPage } from './pages/FirstProjectDayPage';
import { ReducersPage } from './pages/ReducersPage';

//Main app component takes care of all of our components and pages
function App() {
  return (
    <div className="App">
        <FirstProjectDayPage />
        <ReducersPage />
    </div>
  );
}

export default App;
