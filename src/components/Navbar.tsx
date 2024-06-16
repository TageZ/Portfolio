import '../styling/Navbar.scss';

function NavBar() {

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navBar">
      {/* <div className='nav-title'><span className="nav-text">Tage Zerby</span></div> */}
      <ul className='navBar-list'>
        <li className='navBar-list-item'><a href="#about" onClick={() => scrollToSection('About')}><span className="nav-text">ABOUT</span></a></li>
        <li className='navBar-list-item'><a href="#experience" onClick={() => scrollToSection('Experience')}><span className="nav-text">EXPERIENCE</span></a></li>
        <li className='navBar-list-item'><a href="#projects" onClick={() => scrollToSection('Projects')}><span className="nav-text">PROJECTS</span></a></li>
        <li className='navBar-list-item'><a href="#education" onClick={() => scrollToSection('Education')}><span className="nav-text">EDUCATION</span></a></li>
        <li className='navBar-list-item'><a href="#skills" onClick={() => scrollToSection('Skills')}><span className="nav-text">SKILLS</span></a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
