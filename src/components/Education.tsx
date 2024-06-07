import '../styling/Grid.scss'
import scn from '../assets/scn.jpg'
import unl from '../assets/unl.jpg'
import Box from './Box'
import { useState } from 'react';

function Education(){

    const [clickedBox, setClickedBox] = useState<string | null>(null);

    const handleBoxClick = (tag: string) => {
        setClickedBox(clickedBox === tag ? null : tag);
    };

    const divName = clickedBox ? 'solo-box' : 'grid';

    return (
        <div className='portfolio-section' aria-label='education'>
            <div className='title-container'>
                Education
            </div>
            <div className='education'>
                <div className={divName}>
                    <Box
                        location={unl}
                        role="University of Nebraska - Lincoln"
                        tag="unl"
                        clickedBox={clickedBox}
                        isVisible={clickedBox === null || clickedBox === 'unl'}
                        onBoxClick={handleBoxClick}
                        type='education'
                    />
                    <Box
                        location={scn}
                        role="Saint Charles North High School"
                        tag="scn"
                        clickedBox={clickedBox}
                        isVisible={clickedBox === null || clickedBox === 'scn'}
                        onBoxClick={handleBoxClick}
                        type='education'
                    />
                </div>
            </div>
        </div>
    )
}

export default Education