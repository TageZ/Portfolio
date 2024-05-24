import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styling/App.scss';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import NavBar from './Navbar';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" Component={About} />
          <Route path="/#education" Component={Education} />
          <Route path="/#experience" Component={Experience} />
          <Route path="/#projects" Component={Projects} />
          <Route path="/#skills" Component={Skills} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
