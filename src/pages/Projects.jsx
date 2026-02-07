import { useState } from 'react';
import plannerdemo from '../assets/nuplannerdemo_TEMP.png';
import girlmath from '../assets/girlmath_1.png'

export default function Projects() {
    const [hoveredIndex, setHovered] = useState(null);
    return (
        <div className="projects">
            <h1>Projects</h1>
                <div className="project-card"
                    onMouseEnter={() => setHovered(0)}
                    onMouseLeave={() => setHovered(null)}
                    // style={{cursor: "pointer"}}
                >
                    <img src={plannerdemo}
                        alt="Planner"
                        className={`project-image ${hoveredIndex === 0 ? "hidden" : ""}`}
                        /> 
                    <p className={`plannerdesc ${hoveredIndex === 0 ? "visible" : ""}`}>
                        A Java-based scheduling application that allows users to view their weekly schedule.
                        The scheduler uses 24-hour time, and highlights the time block in which the current user has an event.
                        Additionally, the scheduler can parse XML schedule files while conversely creating XML files from
                        a registered schedule.
                    </p>


                </div>
                <div className="project-card"
                    onMouseEnter={() => setHovered(1)}
                    onMouseLeave={() => setHovered(null)}
                    // style={{cursor: "pointer"}}
                >
                    <img src={girlmath}
                        alt="Girl Math"
                        className={`girlmath ${hoveredIndex === 1 ? "hidden" : ""}`}
                    />
                    <p className={`girlmathdesc ${hoveredIndex === 1 ? "visible" : ""}`}>
                        A Typescript-based web application that allows users to input their expenses and categorize them.
                        The application then provides a visual representation of the user's spending habits, allowing them to better understand their financial situation and make informed decisions about their spending.
                    </p>
                </div>

            <p>More projects coming soon!!</p>
        </div>
        
    )
}