import '../styling/Grid.scss'
import scn from '../assets/scn.jpg'
import unl from '../assets/unl.jpg'
import kauffman from '../assets/kauffman.jpg'
import Box from './Box'

function Education(){

    return (
        <div className='portfolio-section' aria-label='education'>
            <div className='title-container'>
                EDUCATION
            </div>
            <div className='education'>
                <div className="grid">
                    <Box
                        primaryImage={unl}
                        backImage={kauffman}
                        tag="unl"
                        type='education'
                    />
                    <Box
                        primaryImage={scn}
                        backImage={scn}
                        tag="scn"
                        type='education'
                    />
                </div>
            </div>
        </div>
    )
}

export default Education