import '../styling/About.scss'

function About() {

  return (
    <div className='portfolio-section' title='about'>
        <div className='about'>
          <div className='about-photo'>
              <img className='headshot' src='/headshot.jpg'></img>
          </div>
          <div className='about-info'>
              <h1 className='header'>TAGE <span className='text-primary'>ZERBY</span></h1>
              <p className='summary'>I'm a student at the Raikes School of Computer Science and Management @ UNL</p>
              <p className='summary'>I'm interested in full-stack and back-end software development</p>
          </div>
        </div>
    </div>
  )
}

export default About
