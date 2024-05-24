import { Link } from 'react-router-dom';
import '../styling/Navbar.scss'

function NavBar(){
    return (
      <nav className="navBar">
        <ul>
            <li><Link to="/"><span className='nav-text'>About</span></Link></li>
            <li><Link to="/#experience"><span className='nav-text'>Experience</span></Link></li>
            <li><Link to="/#projects"><span className='nav-text'>Projects</span></Link></li>
            <li><Link to="/#education"><span className='nav-text'>Education</span></Link></li>
            <li><Link to="/#skills"><span className='nav-text'>Skills</span></Link></li>
        </ul>
      </nav>
    );
};

export default NavBar;