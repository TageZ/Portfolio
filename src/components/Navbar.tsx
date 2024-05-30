import { useState, useEffect } from 'react';

import '../styling/Navbar.scss';

function NavBar() {
  const [label, setLabel] = useState('Tage Zerby');

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    console.log(sections);
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.25
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          if (id){
            setLabel(id.charAt(0).toUpperCase() + id.slice(1));
          }
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="navBar">
      <div className='nav-title'><span className="nav-text">{label}</span></div>
      <ul className='navBar-list'>
        <li className='navBar-list-item'><a href="#about" onClick={() => scrollToSection('About')}><span className="nav-text">About</span></a></li>
        <li className='navBar-list-item'><a href="#experience" onClick={() => scrollToSection('Experience')}><span className="nav-text">Experience</span></a></li>
        <li className='navBar-list-item'><a href="#projects" onClick={() => scrollToSection('Projects')}><span className="nav-text">Projects</span></a></li>
        <li className='navBar-list-item'><a href="#education" onClick={() => scrollToSection('Education')}><span className="nav-text">Education</span></a></li>
        <li className='navBar-list-item'><a href="#skills" onClick={() => scrollToSection('Skills')}><span className="nav-text">Skills</span></a></li>
      </ul>
    </nav>
  );
}

export default NavBar;
