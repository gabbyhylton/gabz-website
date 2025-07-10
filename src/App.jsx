import { useEffect, useRef, useState } from 'react'
import { Spotify } from "react-spotify-embed";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Bio() {
  return <p class="border-paragraph">My name is Gabriella Hylton and I am currently a third-year Computer Science and Economics Student at Northeastern University.
    For summer 2025, I am working as a Client Delivery Associate for the Cervantes Group at their Boston location.
    Additionally, I am taking a technical prep workshop as well to increase my current understanding of computer science curriculum while also furthering my knowledge.
    My goal this summer is to complete my personal website!</p>
}

function App() {
  const [showBio, setShowBio] = useState(false);
  const [count, setCount] = useState(0);
  var music = new Audio("");
  const handleClick = () => {
    music.play();
    //music.currentTime=0;
  };

  return (
    <>
      <div className="app-container">
        <header className="header">
          <img src='public/images/gabbyhylton.png'
             alt='Chromakopia Name' />
          <h2>Home | Projects | Contact | <a href="https://www.linkedin.com/in/gabriella-hylton/">LinkedIn</a>
          </h2>
        </header>

        <main className="main-content">
          <div className="profile-section">
            {showBio ? (
              <p className="bio-paragraph">
                My name is Gabriella Hylton and I am currently a third-year Computer Science and Economics Student at Northeastern University.
                For summer 2025, I am working as a Client Delivery Associate for the Cervantes Group at their Boston location.
                Additionally, I am taking a technical prep workshop as well to increase my current understanding of computer science curriculum while also furthering my knowledge.
                My goal this summer is to complete my personal website!
                </p>
            ) : (
              <img src="src/IMG_2941.JPG" 
                   alt="Profile Picture" 
                   style={{ width: "500px", height: "500px", objectFit: "cover" }} />
            )}
            <button onClick={() => setShowBio(!showBio)} className="button-2">
              {showBio ? "Show Picture" : "Show Bio"}
              </button>
          </div>

          <div className="circle-section">
            <div class="circle-1"></div>
          <div class="circle-2"></div>
          <div class="circle-1"></div>
          <div class="circle-2"></div>
          <div class="circle-1"></div>
          <div class="circle-2"></div>
          </div>
        </main>

      </div>
      {/* <button class="button-1">♩</button> */}
        {/* <p class="border-paragraph">A solid border</p> */}
    </>
  )
}

export default App
