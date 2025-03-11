import pegsAndJokers from '../assets/pegs-jokers.png'
import plResource from '../assets/pl-resource.png'
import portfolio from '../assets/portfolio.png'
import '../styling/Projects.scss'
import Box from './Box';

function Projects(){

    return (
        <div className='portfolio-section' aria-label='projects'>
            <div className='title-container'>
                PROJECTS
            </div>
            <div className='projects'>
                <div className="grid">
                    <Box
                        primaryImage={pegsAndJokers}
                        backImage={pegsAndJokers}
                        tag="pegsAndJokers"
                        type='project'
                    />
                    <Box
                        primaryImage={plResource}
                        backImage={plResource}
                        tag="plResource"
                        type='project'
                    />
                    <Box
                        primaryImage={portfolio}
                        backImage={portfolio}
                        tag="portfolio"
                        type='project'
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects