import 'react';

interface BoxProps {
    company?: string;
    location: string;
    role: string
}

function handleClick(){
    return(
        <div className='grid-item'>
            Hello!
        </div>
    )
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

export default Box
