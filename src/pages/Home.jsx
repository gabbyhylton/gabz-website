import { useState } from 'react'
import logo from '../assets/gabbyhylton.png';
import picture from '../assets/IMG_2941.JPG';
import '../App.css'

export default function Home() {
    const [showBio, setShowBio] = useState(false);

    return (
    <div className="app-container">
      <main className="main-content">
        <div className="profile-section">
          {showBio ? (
            <p className="bio-paragraph">
              My name is Gabriella Hylton and I am currently a third-year Computer Science and Economics Student at Northeastern University.
              For summer 2025, I am working as a Client Delivery Associate for the Cervantes Group at their Boston location.
              Additionally, I am taking a technical prep workshop as well to increase my current understanding of computer science curriculum.
              My goal this summer is to complete my personal website!
            </p>
          ) : (
            <img
              src={picture}
              alt="Profile"
              style={{ width: "500px", height: "500px", objectFit: "cover" }}
            />
          )}

          <button
            onClick={() => setShowBio(!showBio)}
            className="button-2"
          >
            {showBio ? "Show Picture" : "Show Bio"}
          </button>
        </div>
      </main>
    </div>
  )
}
