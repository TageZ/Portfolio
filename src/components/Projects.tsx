import pegsAndJokers from '../assets/pegs-jokers.png'
import plResource from '../assets/pl-resource.png'
import portfolio from '../assets/portfolio.png'
import {useState} from 'react'
import '../styling/Projects.scss'

function Projects(){

    const [clicked, setClicked] = useState(false);

    function handleClicked(){
        setClicked(true);
    }

    return (
        <div className='portfolio-section' aria-label='projects'>
            <div className='projects'>
                <div className='grid'>
                    <div className='grid-item'>
                        TBA
                    </div>
                    <div className='grid-item'>
                        <img className='projects-image' src={pegsAndJokers}></img>
                    </div>
                    <div className='grid-item'>
                        <img className='projects-image' src={plResource}></img>
                    </div>
                    <div className='grid-item'>
                        <img className='projects-image' src={portfolio}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects