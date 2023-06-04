import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-zone">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>2023 MHB Leadership Hub</h1>
        </div>
        <h2>Quick links:</h2>
        <ul>
          <li>
           <a href="https://forms.gle/ZV5Xvgz4PANJzhQW8">Record attendance</a>
          </li>
          <li>
            <a href="https://docs.google.com/spreadsheets/d/1Y-ZAmVDQ7V-3OSt-miCrIgZgkw8vg61-2xo_zy_9fGg/edit?usp=sharing">
              View skater attendance
            </a>
          </li>
          <li>
           <a href="https://docs.google.com/document/d/1-aSGOohYmIzcBq6V9T9jZPQVL5GE0uLoTYOrbU-UM3w/edit?usp=sharing">
              Attendance policy + periods
              </a>
          </li>
          <li>
           <a href="https://forms.gle/RnCoCBrX3ASfiXHt8">
              Record absenses
            </a>
          </li>
          <li>
           <a href="https://docs.google.com/document/d/1CE3V7HzhCFXQMoZSVmid3woeG4RGdM7zueg5dUtjPfw/edit?usp=drive_link">
              Practice squad and BA/SB crossover policy
            </a>
          </li>
          <li>
           <a href="https://docs.google.com/spreadsheets/d/157oqP3dRCYEjxflS_FDbXCdXH3Pd0jZeS71SF40T3pQ/edit#gid=0">
              Program charter and skater goals
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
