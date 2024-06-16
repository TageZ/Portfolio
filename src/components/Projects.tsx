import pegsAndJokers from '../assets/pegs-jokers.png'
import plResource from '../assets/pl-resource.png'
import portfolio from '../assets/portfolio.png'
import '../styling/Projects.scss'
import { useState } from 'react';
import Box from './Box';

function Projects(){

    const [clickedBox, setClickedBox] = useState<string | null>(null);

    const handleBoxClick = (tag: string) => {
        setClickedBox(clickedBox === tag ? null : tag);
    };

    const divName = clickedBox ? 'solo-box' : 'grid';

    return (
        <div className='portfolio-section' aria-label='projects'>
            <div className='title-container'>
                PROJECTS
            </div>
            <div className='projects'>
                <div className={divName}>
                    <Box
                        primaryImage={pegsAndJokers}
                        backImage={pegsAndJokers}
                        tag="pegsAndJokers"
                        clickedBox={clickedBox}
                        isVisible={clickedBox === null || clickedBox === 'pegsAndJokers'}
                        onBoxClick={handleBoxClick}
                    />
                    <Box
                        primaryImage={plResource}
                        backImage={plResource}
                        tag="plResource"
                        clickedBox={clickedBox}
                        isVisible={clickedBox === null || clickedBox === 'plResource'}
                        onBoxClick={handleBoxClick}
                    />
                    <Box
                        primaryImage={portfolio}
                        backImage={portfolio}
                        tag="portfolio"
                        clickedBox={clickedBox}
                        isVisible={clickedBox === null || clickedBox === 'portfolio'}
                        onBoxClick={handleBoxClick}
                    />
                </div>
            </div>
        </div>
    )
}

export default Projects