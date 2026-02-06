import { useState } from 'react';
import plannerdemo from '../assets/nuplannerdemo_TEMP.png';

export default function Projects() {
    const [showDescription1, setShowDescription1] = useState(false);
    return (
        <div className="projects">
            <h1>Projects</h1>
            { showDescription1 ? (
                <p className='plannerdesc'
                onClick={() => setShowDescription1(false)}
                style={{cursor: "pointer"}}>
                    planner description
                </p>
            ) : <img src={plannerdemo} onClick={() => setShowDescription1(!showDescription1)}
            alt="Planner" 
            style= {{ width: "500px", height: "500px", objectFit: "cover" }}
            />}
            <p>Coming soon!!</p>
        </div>
    )
}