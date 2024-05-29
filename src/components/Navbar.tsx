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
      <div className='nav-title'><span className="nav-text">Tage Zerby</span></div>
      <ul className='navBar-list'>
        <li className='navBar-list-item'><a href="#about" onClick={() => scrollToSection('about')}><span className="nav-text">About</span></a></li>
        <li className='navBar-list-item'><a href="#experience" onClick={() => scrollToSection('experience')}><span className="nav-text">Experience</span></a></li>
        <li className='navBar-list-item'><a href="#projects" onClick={() => scrollToSection('projects')}><span className="nav-text">Projects</span></a></li>
        <li className='navBar-list-item'><a href="#education" onClick={() => scrollToSection('education')}><span className="nav-text">Education</span></a></li>
        <li className='navBar-list-item'><a href="#skills" onClick={() => scrollToSection('skills')}><span className="nav-text">Skills</span></a></li>
      </ul>
    </nav>
   );
  }
  
  export default NavBar;