import '../styling/Grid.scss'
import principal from '../assets/principal.png'
import lincoln from '../assets/lincoln.jpg'
import desmoines from '../assets/des-moines.jpg'
import kauffman from '../assets/kauffman.jpg'
import chicago from '../assets/chicago.jpg'
import hudl from '../assets/hudl.png'
import raikes from '../assets/raikes-school.png'
import collins from '../assets/collins.png'
import Box from './Experience-Box'

function Experience(){
    return (
        <div className='portfolio-section' aria-label='experience'>
            <div className='title-container'>
                Experience
            </div>
            <div className='experience'>
                <div className='grid'>
                    <Box location={desmoines} company={principal} role="Software Engineering Intern"/>
                    <Box location={lincoln} company={hudl} role="Software Development Intern - Design Studio"/>
                    <Box location={kauffman} company={raikes} role="Computer Science Teaching Assistant"/>
                    <Box location={chicago} company={collins} role="IT Intern"/>
                </div>
            </div>
        </div>
    )
}

export default Experience