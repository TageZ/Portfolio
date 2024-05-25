import '../styling/Navbar.scss';

function NavBar() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navBar">
      <ul>
        <li><a href="#about" onClick={() => scrollToSection('about')}><span className="nav-text">About</span></a></li>
        <li><a href="#experience" onClick={() => scrollToSection('experience')}><span className="nav-text">Experience</span></a></li>
        <li><a href="#projects" onClick={() => scrollToSection('projects')}><span className="nav-text">Projects</span></a></li>
        <li><a href="#education" onClick={() => scrollToSection('education')}><span className="nav-text">Education</span></a></li>
        <li><a href="#skills" onClick={() => scrollToSection('skills')}><span className="nav-text">Skills</span></a></li>
      </ul>
    </nav>
   );
  }
  
  export default NavBar;