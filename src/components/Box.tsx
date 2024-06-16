import '../styling/Box.scss';
import data from '../utils/info.json';

interface BoxProps {
    type?: string;
    company?: string;
    primaryImage: string;
    backImage?: string;
    role?: string;
    tag?: string;
    clickedBox: string | null;
    isVisible: boolean;
    onBoxClick: (tag: string) => void;
}

interface Info {
    [key: string]: {
        name?: string;
        title: string;
        location?: string;
        date: string;
        p1?: string;
        p2?: string;
        p3?: string;
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
                <img className='experience-image' src={props.primaryImage} alt="Location" />
                {props.company && <img className='company-image' src={props.company} alt="Company" />}
                <span className='role-text'>{props.role}</span>
            </div>
        );
    }

    function Back() {
        return (
            <div className={`grid-item back ${props.type}`} onClick={handleClick}>
                <div className="title-name-box">
                    {props.tag && <span className="title-back">{info[props.tag].title}</span>}
                    {props.tag && <span className="name-back">{info[props.tag].name}</span>}
                </div>
                <div className='date-location-box'>
                    {props.tag && <span className="date-back">{info[props.tag].date}</span>}
                    {props.tag && info[props.tag].location && <span className="location-back"> | {info[props.tag].location}</span>}
                </div>
                <div className='info-image-box'>
                    <div className='paragraph-box'>
                        {props.tag && <span className="paragraph-back">{info[props.tag].p1}</span>}
                        {props.tag && <span className="paragraph-back">{info[props.tag].p2}</span>}
                        {props.tag && <span className="paragraph-back">{info[props.tag].p3}</span>}
                    </div>
                    <div className='image-box'>
                        {props.backImage && <img className='image-back' src={props.backImage}/>}    
                    </div>
                </div>
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
