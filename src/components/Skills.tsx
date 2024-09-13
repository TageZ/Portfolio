import data from '../utils/skills.json';
import '../styling/Skills.scss'

function Skills(){
    return (
        <div className='portfolio-section' aria-label="skills">
            <div className='title-container'>
                SKILLS
            </div>
            <div className="skills">
                {data.map((skill, i) => (
                    <div className="skill" key={i} style={{backgroundColor: skill.hex}}>
                        <span>{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills