import '../styling/App.scss';
import About from './About';
import Experience from './Experience';
import Projects from './Projects';
import Education from './Education';
import Skills from './Skills';
import NavBar from './Navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
      </div>
    </div>
  );
}

export default App;
