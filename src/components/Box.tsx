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
        p5?: string;
        p6?: string;
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
                        {props.type !== "education" && <div className='paragraph-box'>
                            {props.tag && <span className="paragraph-back">{info[props.tag].p1}</span>}
                            {props.tag && <span className="paragraph-back">{info[props.tag].p2}</span>}
                            {props.tag && <span className="paragraph-back">{info[props.tag].p3}</span>}
                            {props.tag && <span className="paragraph-back">{info[props.tag].p4}</span>}
                        </div>}
                        {props.type === "education" && <div className='paragraph-box'>
                            <h2 className="edu-section">Academics</h2>
                            {props.tag && <span className="paragraph-back"><ul>
                                {info[props.tag].p1?.split('|').map((academic, i) => (
                                    <li key={i}>{academic}</li>
                                ))}
                            </ul></span>}

                            {props.tag === "unl" && 
                            
                            <>

                            <h2 className="edu-section">Raikes School</h2>

                            {props.tag && <span className="paragraph-back"><ul>{info[props.tag].p2}</ul></span>}

                            <h2 className="edu-section">Coursework</h2>

                            <ul>
                                <li>
                                    <h3 className='course-headers'>{'\t'}Computer Science</h3>
                                    {props.tag && <span className="paragraph-back"><ul className="course-list">
                                    {info[props.tag].p4?.split(',').map((course, i) => (
                                        <li key={i}>{course}</li>
                                    ))}
                                    </ul></span>}
                                </li>

                                <li>
                                    <h3 className='course-headers'>{'\t'}Business</h3>
                                    {props.tag && <span className="paragraph-back"><ul className="course-list">
                                    {info[props.tag].p5?.split(',').map((course, i) => (
                                        <li key={i}>{course}</li>
                                    ))}
                                    </ul></span>}
                                </li>

                                <li>
                                    <h3 className='course-headers'>{'\t'}Mathematics</h3>
                                    {props.tag && <span className="paragraph-back"><ul className="course-list">
                                    {info[props.tag].p6?.split(',').map((course, i) => (
                                        <li key={i}>{course}</li>
                                    ))}
                                    </ul></span>}
                                </li>
                            </ul>

                            </>
                            
                            }

                            <h2 className="edu-section">Honors</h2>
                            {props.tag && <span className="paragraph-back"><ul>
                                {info[props.tag].p3?.split(',').map((honor, i) => (
                                    <li key={i}>{honor}</li>
                                ))}
                            </ul></span>}

                        </div>}
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
