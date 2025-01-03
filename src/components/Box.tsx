import { useState } from 'react';
import '../styling/Box.scss';
import data from '../utils/info.json';
import { Modal } from "@mui/material";

interface BoxProps {
    type?: string;
    company?: string;
    primaryImage: string;
    backImage?: string;
    backImageAlt?: string;
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
        p4?: string;
    };
}

function Box(props: BoxProps) {
    const [open, setOpen] = useState<boolean>(false);
    const info: Info = data;


    return (
        <>
            <div className='grid-item' onClick={() => setOpen(true)}>
                <img className='experience-image' src={props.primaryImage} alt="Location" />
                {props.company && <img className='company-image' src={props.company} alt="Company" />}
                <span className='role-text'>{props.role}</span>
            </div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
                slotProps={{
                    backdrop: {
                      sx: {
                        backgroundColor: 'rgba(0, 0, 0, 0.95)', 
                      },
                    },
                }}
            >
                <div className={`grid-item back ${props.type}`} onClick={() => setOpen(false)}style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    borderStyle: 'solid',
                    borderColor: 'white',
                    borderWidth: '2px'
                }}>
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
                            {props.tag && info[props.tag].p3 && <span className="paragraph-back">{info[props.tag].p3}</span>}
                            {props.tag && info[props.tag].p4 && <span className="paragraph-back">{info[props.tag].p4}</span>}
                        </div>
                        <div className='image-box'>
                            {props.backImage && <img className='image-back' src={props.backImage} title={props.backImageAlt ? props.backImageAlt : ""} />}
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default Box;
