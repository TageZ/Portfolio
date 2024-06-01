import {useState} from 'react';

interface BoxProps {
    company?: string;
    location: string;
    role: string;
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

    return (
        <div>
            {clicked ? (
                <div className='grid-item'  onClick={() => handleClick()}>Hello!</div>
            ) : (
                <Box {...props} />
            )}
        </div>
    );
}

export default Box;