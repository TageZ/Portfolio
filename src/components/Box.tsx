import '../styling/Box.scss';
import data from '../utils/info.json';

interface BoxProps {
    company?: string;
    location: string;
    role: string;
    tag?: string;
    clickedBox: string | null;
    isVisible: boolean;
    onBoxClick: (tag: string) => void;
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

    function handleClick() {
        if (props.tag) {
            props.onBoxClick(props.tag);
        }
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
            {props.isVisible ? (!props.clickedBox || props.clickedBox !== props.tag ? <Front /> : <Back />) : null}
        </div>
    );
}

export default Box;
