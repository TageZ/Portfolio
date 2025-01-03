import { useState } from 'react';
import '../styling/Grid.scss';
import principal from '../assets/principal.png';
import contractapp from '../assets/contractapp.png'
import lincoln from '../assets/lincoln.jpg';
import desmoines from '../assets/des-moines.jpg';
import kauffman from '../assets/kauffman.jpg';
import chicago from '../assets/chicago.jpg';
import hudl from '../assets/hudl.png';
import raikes from '../assets/raikes-school.png';
import collins from '../assets/collins.png';
import tenaska from '../assets/tenaska.png';
import officeTenaska from '../assets/office-tenaska.png';
import flowTracker from '../assets/flowTracker.png';
import assist from '../assets/assist.jpg';
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
                        primaryImage={officeTenaska}
                        company={tenaska}
                        backImage={flowTracker}
                        backImageAlt='A new user interface I created to modernize an existing application owned by my team'
                        role="Software Developer"
                        tag="tenaska"
                        clickedBox={clickedBox}
                        isVisible={clickedBox === null || clickedBox === 'pfg'}
                        onBoxClick={handleBoxClick}
                    />
                    <Box
                        primaryImage={desmoines}
                        company={principal}
                        backImage={contractapp}
                        backImageAlt='A new user interface I created to modernize an existing application owned by my team'
                        role="Software Engineering Intern"
                        tag="pfg"
                        clickedBox={clickedBox}
                        isVisible={clickedBox === null || clickedBox === 'pfg'}
                        onBoxClick={handleBoxClick}
                    />
                    <Box
                        primaryImage={lincoln}
                        company={hudl}
                        backImage={assist}
                        role="Software Development Intern - Design Studio"
                        tag="hudl"
                        clickedBox={clickedBox}
                        isVisible={clickedBox === null || clickedBox === 'hudl'}
                        onBoxClick={handleBoxClick}
                    />
                    <Box
                        primaryImage={kauffman}
                        company={raikes}
                        backImage={raikes}
                        role="Computer Science Teaching Assistant"
                        tag="raikes"
                        clickedBox={clickedBox}
                        isVisible={clickedBox === null || clickedBox === 'raikes'}
                        onBoxClick={handleBoxClick}
                    />
                    <Box
                        primaryImage={chicago}
                        company={collins}
                        backImage={collins}
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
