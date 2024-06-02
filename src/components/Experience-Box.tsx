import { useState } from 'react';
import '../styling/Box.scss';
import data from '../utils/info.json';

interface BoxProps {
    company?: string;
    location: string;
    role: string;
    tag?: string;
}

interface Info {
    [key: string]: {
        name: string;
        title: string;
        location?: string;
        date: string;
        p1?: string;
        p2?: string;
    };
}

function Box(props: BoxProps) {
    const info: Info = data;
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setClicked(!clicked);
    }

    function Front() {
        return (
            <div className='grid-item' onClick={handleClick}>
                <img className='experience-image' src={props.location} alt="Location" />
                {props.company && <img className='company-image' src={props.company} alt="Company" />}
                <span className='role-text'>{props.role}</span>
            </div>
        );
    }

    function Back() {
        return (
            <div className='grid-item back' onClick={handleClick}>
                {props.tag && <span className="date-back">{info[props.tag].date}</span>}
                {props.tag && <span className="title-back">{info[props.tag].title}</span>}
                {props.tag && <span className="name-back">{info[props.tag].name}</span>}
                {props.tag && <span className="location-back">{info[props.tag].location}</span>}
            </div>
        );
    }

    return (
        <div>
            {!clicked ? <Front /> : <Back />}
        </div>
    );
}

export default Box;
