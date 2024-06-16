import { useState } from 'react';
import '../styling/Grid.scss';
import principal from '../assets/principal.png';
import lincoln from '../assets/lincoln.jpg';
import desmoines from '../assets/des-moines.jpg';
import kauffman from '../assets/kauffman.jpg';
import chicago from '../assets/chicago.jpg';
import hudl from '../assets/hudl.png';
import raikes from '../assets/raikes-school.png';
import collins from '../assets/collins.png';
import Box from './Box';

function Experience() {
    const [clickedBox, setClickedBox] = useState<string | null>(null);

    const handleBoxClick = (tag: string) => {
        setClickedBox(clickedBox === tag ? null : tag);
    };

    const divName = clickedBox ? 'solo-box' : 'grid';

    return (
        <div className='portfolio-section' aria-label='experience'>
            <div className='title-container'>
                EXPERIENCE
            </div>
            <div className='experience'>
                <div className={divName}>
                    <Box
                        location={desmoines}
                        company={principal}
                        role="Software Engineering Intern"
                        tag="pfg"
                        clickedBox={clickedBox}
                        isVisible={clickedBox === null || clickedBox === 'pfg'}
                        onBoxClick={handleBoxClick}
                    />
                    <Box
                        location={lincoln}
                        company={hudl}
                        role="Software Development Intern - Design Studio"
                        tag="hudl"
                        clickedBox={clickedBox}
                        isVisible={clickedBox === null || clickedBox === 'hudl'}
                        onBoxClick={handleBoxClick}
                    />
                    <Box
                        location={kauffman}
                        company={raikes}
                        role="Computer Science Teaching Assistant"
                        tag="raikes"
                        clickedBox={clickedBox}
                        isVisible={clickedBox === null || clickedBox === 'raikes'}
                        onBoxClick={handleBoxClick}
                    />
                    <Box
                        location={chicago}
                        company={collins}
                        role="IT Intern"
                        tag="collins"
                        clickedBox={clickedBox}
                        isVisible={clickedBox === null || clickedBox === 'collins'}
                        onBoxClick={handleBoxClick}
                    />
                </div>
            </div>
        </div>
    );
}

export default Experience;
