import '../styling/Grid.scss'

function Education(){
    return (
        <div className='portfolio-section' aria-label='education'>
            <div className='education'>
                <span className='title'>Education</span>
                <div className='grid'>
                    <div className='grid-item'>
                        University of Nebraska - Lincoln
                    </div>
                    <div className='grid-item'>
                        Saint Charles North High School
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education