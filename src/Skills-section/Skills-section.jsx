import './Skills-section.css'

import reactIcon from '../assets/react.svg'
import jsIcon from '../assets/js.png'
import htmlIcon from '../assets/html.png'
import cssIcon from '../assets/css_icon.png'
import javaIcon from '../assets/java.png'
import cppICon from '../assets/c++_icon.png'
import gitIcon from '../assets/git.png'
import gitHubIcon from '../assets/github.png'
import mySQLIcon from '../assets/mysql-database.png'
import jsonIcon from '../assets/json.png'
import oopIcon from '../assets/programming.png'

const SKILL_ICONS = [
    { src: reactIcon, alt: 'React' },
    { src: jsIcon, alt: 'JavaScript' },
    { src: htmlIcon, alt: 'HTML' },
    { src: cssIcon, alt: 'CSS' },
    { src: javaIcon, alt: 'Java' },
    { src: cppICon, alt: 'C++' },
    { src: gitIcon, alt: 'Git' },
    { src: gitHubIcon, alt: 'GitHub' },
    { src: mySQLIcon, alt: 'MySQL' },
    { src: jsonIcon, alt: 'JSON' },
    { src: oopIcon, alt: 'OOP' },
]

/* Repeat the list enough times so the full-width viewport shows A→B→C→A→B…; we animate by one copy so the loop is seamless */
const TRACK_COPIES = 4

function SkillsSection() {
    const trackItems = Array(TRACK_COPIES).fill(SKILL_ICONS).flat()
    return (
        <div className="skills-conveyor-wrap">
            <section id='skills-section'>
                <h1>My Skills</h1>
                <p>Some of my relevant skills</p>
            </section>

            <div className="skills-conveyor-track" aria-hidden="true">
                {trackItems.map((skill, i) => (
                    <div key={i} className="skills-conveyor-item">
                        <img src={skill.src} alt={skill.alt} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillsSection
