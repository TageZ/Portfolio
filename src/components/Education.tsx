import '../styling/Grid.scss'
import scn from '../assets/scn.jpg'
import unl from '../assets/unl.jpg'
import Box from './Experience-Box'

function Education(){
    return (
        <div className='portfolio-section' aria-label='education'>
            <div className='title-container'>
                Education
            </div>
            <div className='education'>
                <div className='grid'>
                    <Box location={unl} role='University of Nebraska - Lincoln'/>
                    <Box location={scn} role='Saint Charles North High School'/>
                </div>
            </div>
        </div>
    )
}

export default Education