import '../styling/Grid.scss'
import principal from '../assets/principal.png'
import lincoln from '../assets/lincoln.jpg'
import desmoines from '../assets/des-moines.jpg'
import kauffman from '../assets/kauffman.jpg'
import chicago from '../assets/chicago.jpg'
import hudl from '../assets/hudl.png'
import raikes from '../assets/raikes-school.png'
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
                        <img className='experience-image' src={desmoines}></img>
                        <img className='company-image' src={principal}></img>
                        <span className='role-text'>Software Engineering Intern</span>
                    </div>
                    <div className='grid-item'>
                        <img className='experience-image' src={lincoln}></img>
                        <img className='company-image' src={hudl}></img>
                        <span className='role-text'>Software Development Intern - Design Studio</span>
                    </div>
                    <div className='grid-item'>
                        <img className='experience-image' src={kauffman}></img>
                        <img className='company-image' src={raikes}></img>
                        <span className='role-text'>Computer Science Teaching Assistant</span>
                    </div>
                    <div className='grid-item'>
                        <img className='experience-image' src={chicago}></img>
                        <img className='company-image' src={collins}></img>
                        <span className='role-text'>IT Intern</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience