import '../styling/Grid.scss'
import principal from '../assets/principal.png'
import hudl from '../assets/hudl.jpg'
import collins from '../assets/collins.png'

function Experience(){
    return (
        <div className='portfolio-section' aria-label='experience'>
            <div className='title-container'>
                Experience
            </div>
            <div className='experience'>
                <div className='grid'>
                    <div className='grid-item'>
                        <img className='projects-image' src={principal}></img>
                        {/* Software Engineering Intern - Principal Financial Group */}
                    </div>
                    <div className='grid-item'>
                        <img className='projects-image' src={hudl}></img>
                        {/* Software Development Intern - Hudl - Design Studio */}
                    </div>
                    <div className='grid-item'>
                        Computer Science Teaching Assistant - Raikes School
                    </div>
                    <div className='grid-item'>
                        <img className='projects-image' src={collins}></img>
                        {/* IT Intern - Collins Engineers */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience