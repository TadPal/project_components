import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FirstProjectDayPage } from './pages/FirstProjectDayPage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            First project day components
          </p>
          <a
            className="App-link"
            href="https://github.com/TadPal/project_components"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/TadPal/project_components
          </a>
        </header>
        <FirstProjectDayPage />
    </div>
  );
}

export default App;
