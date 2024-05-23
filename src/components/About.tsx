import '../styling/About.scss'
import Link from './Link';

function About() {

  return (
    <div className='portfolio-section' title='about'>
        <div className='about'>
          <div className='about-photo'>
              <img className='headshot' src='/headshot.jpg'></img>
          </div>
          <div className='about-info'>
              <h1 className='header'>Tage <span className='text-primary'>Zerby</span></h1>
              <hr className='line'/>
              <p className='summary'>Computer Science <span className='text-accent'>@</span> the Raikes School</p>
              <hr className='line'/>
              <div className='links'>
                <Link social="linked-in" url="https://www.linkedin.com/in/tage-zerby"/>
                <Link social="github" url="https://www.github.com/TageZ"/>
              </div>
          </div>
        </div>
    </div>
  )
}

export default About
