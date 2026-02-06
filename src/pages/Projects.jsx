import { useState } from 'react';
import plannerdemo from '../assets/nuplannerdemo_TEMP.png';

export default function Projects() {
    const [hovered, setHovered] = useState(false);
    return (
        <div className="projects">
            <h1>Projects</h1>
                <div className="project-card"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    // style={{cursor: "pointer"}}
                >
                    <img src={plannerdemo}
                        alt="Planner"
                        className={`project-image ${hovered ? "hidden" : ""}`}
                        /> 
                    <p className={`plannerdesc ${hovered ? "visible" : ""}`}>
                        A Java-based scheduling application that allows users to view their weekly schedule.
                        The scheduler uses 24-hour time, and highlights the time block in which the current user has an event.
                        Additionally, the scheduler can parse XML schedule files while conversely creating XML files from
                        a registered schedule.
                    </p>

                </div>
            <p>Coming soon!!</p>
        </div>
        
    )
}