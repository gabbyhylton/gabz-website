import { useState } from 'react'
import logo from '../assets/gabbyhylton.png';
import picture from '../assets/IMG_2941.JPG';
import picture2 from '../assets/gabby_pic2.JPG';
import '../App.css'

export default function Home( { theme }) {
    const [showBio, setShowBio] = useState(false);

    return (
    <div className="app-container">
      <main className="main-content">
        <div className="profile-section">
          {showBio ? (
            <p className="bio-paragraph">
              My name is Gabriella Hylton and I am currently a fourth-year Computer Science and Economics Student at Northeastern University.
              For summer 2025, I worked as a Client Delivery Associate for the Cervantes Group at their Boston location. I then went to study
              abroad in Madrid, Spain in the fall semester. Now, I'm back in Boston Spring 2026 and currently doing my second co-op 
              as a Power and Renewables Research Co-op at Wood Mackenzie!
              In my free time, I've been fixing up my old projects while also building new ones and refining my technical skills. This website is 
              inspired by Tyler, the Creator, one of my favorite music artists. Additionally, I box with my friend at Title Boxing, and I'm hoping 
              to get back in yoga this summer!
              Thank you for stopping by my personal website!
            </p>
          ) : (
            <img className='images'
              src={theme === "callmeifyougetlost" ? picture2 : picture}
              alt="Profile"
              style={{ width: "500px", height: "500px", objectFit: "cover" }}
            />
          )}

          <button
            onClick={() => setShowBio(!showBio)}
            className={`button-2 ${theme === "callmeifyougetlost" ? "callmeifyougetlost" : "chromakopia"}`}
          >
            {showBio ? "Show Picture" : "Show Bio"}
          </button>
        </div>
      </main>
    </div>
  )
}
