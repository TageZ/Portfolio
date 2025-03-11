import '../styling/Grid.scss';
import garmin from "../assets/garmin-logo.png";
import olathe from "../assets/garmin.png";
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

    return (
        <div className='portfolio-section' aria-label='experience'>
            <div className='title-container'>
                EXPERIENCE
            </div>
            <div className='experience'>
                <div className="grid">
                     <Box
                        primaryImage={olathe}
                        company={garmin}
                        backImage={garmin}
                        tag="garmin"
                    />
                    <Box
                        primaryImage={officeTenaska}
                        tag="daily-nebraskan"
                    />
                    <Box
                        primaryImage={officeTenaska}
                        company={tenaska}
                        backImage={flowTracker}
                        backImageAlt='A new user interface I created to modernize an existing application owned by my team'
                        tag="tenaska"
                    />
                    <Box
                        primaryImage={desmoines}
                        company={principal}
                        backImage={contractapp}
                        backImageAlt='A new user interface I created to modernize an existing application owned by my team'
                        tag="pfg"
                    />
                    <Box
                        primaryImage={lincoln}
                        company={hudl}
                        backImage={assist}
                        tag="hudl"
                    />
                    <Box
                        primaryImage={kauffman}
                        company={raikes}
                        backImage={raikes}
                        tag="raikes"
                    />
                    <Box
                        primaryImage={chicago}
                        company={collins}
                        backImage={collins}
                        tag="collins"
                    />
                </div>
            </div>
        </div>
    );
}

export default Experience;
