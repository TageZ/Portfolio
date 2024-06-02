import {useState} from 'react';
import '../styling/Box.scss'

interface BoxProps {
    company?: string;
    location: string;
    role: string;
    tag?: string;
}

function Box(props: BoxProps) {
    const [clicked, setClicked] = useState(false);

    function handleClick(){
        setClicked(!clicked);
    }

    function Box(props: BoxProps){
        return (
            <div className='grid-item' onClick={() => handleClick()}>
                <img className='experience-image' src={props.location}></img>
                {props.company && <img className='company-image' src={props.company}></img>}
                <span className='role-text'>{props.role}</span>
            </div>
        )
    }

    function Back(props: BoxProps){
        return (
            <div className='grid-item' onClick={() => handleClick()}>
                {//Fill in
                }
            </div>
        )
    }

    return (
        <div>
            {clicked ? (
                <Back {...props} />
            ) : (
                <Box {...props} />
            )}
        </div>
    );
}

export default Box;