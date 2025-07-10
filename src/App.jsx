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
  // const bioButton = document.getElementById("bioButton");
  //  const myParagraph = document.getElementById("bioParagraph");
  // const profilePicture = document.getElementById("profilePic");

  // bioButton.addEventListener("click", function() {
  //   myParagraph.textContent = "The text has been changed!";
  // });
  const [count, setCount] = useState(0);
  var music = new Audio("");
  const handleClick = () => {
    music.play();
    //music.currentTime=0;
  };

  return (
    <>
      <div>
        {/* <img src='public/images/gabbyhylton.png' alt=''/>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}

      </div>
      <h1>Gabby Hylton ♩</h1>

      {/* <button class="button-1">♩</button> */}

      <h2>Home | Projects | Contact | <a href="https://www.linkedin.com/in/gabriella-hylton/">LinkedIn</a>
      </h2>
      <div class="flex-column">
        <div class="flex-container">
          <div class="flex-column">
            {showBio ? (
              <p id="bioParagraph">"My name is Gabriella Hylton and I am currently a third-year Computer Science and Economics Student at Northeastern University.
                For summer 2025, I am working as a Client Delivery Associate for the Cervantes Group at their Boston location.
                Additionally, I am taking a technical prep workshop as well to increase my current understanding of computer science curriculum while also furthering my knowledge.
                My goal this summer is to complete my personal website!"</p>
            ) : (
              <img src="src/IMG_2941.JPG" alt="Profile Picture" width={200} />
            )}
            <button onClick={() => setShowBio(!showBio)} class="button-2">
              {showBio ? "Show Picture" : "Show Bio"}</button>
          </div>
        </div>

        {/* <p class="border-paragraph">A solid border</p> */}
        <div class="flex-circle">
          <div class="circle-1"></div>
          <div class="circle-2"></div>
          <div class="circle-1"></div>
          <div class="circle-2"></div>
          <div class="circle-1"></div>
          <div class="circle-2"></div>
        </div>

        {/* <table border="1" width="100%">
        <tr>
          <td>
            <h3>Portfolio Highlights</h3>
            <ul>
              <li>Responsive HTML Layout</li>
              <li>Super Cool Super Fly Design</li>
              <li>Incorporated CSS</li>
              <li>Interactive Music</li>
            </ul>
          </td>
          <td>
            <h3>Career Achievements</h3>
            <p>Teaching Assistant at Khoury College of Computer Sciences
              <ul>
                <li>Provided academic support for CS1800, leveraging mathematical and computational concepts to
                  mentor over 40 students.</li>
              </ul>
            </p>
            <h3>Community Involvement</h3>
            <p>Northeastern Wind Ensemble, Rewriting the Code, Explore Program Student Leader</p>
          </td>
          <td>
            <h3>Academic Qualifications</h3>
            <p>Bachelor of Science in Computer Science and Economics at Northeastern University</p>
            <p>Program Knowledge:</p>
            <ul>
              <li>Java</li>
              <li>Python</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>R</li>
            </ul>
          </td>
        </tr>
      </table> */}
      </div>
      {/* <div className="track">
        <Spotify wide link="https://open.spotify.com/track/46CA1H0T1r7u5lDUtVveAh" />
      </div> */}
      {/* <h3>Want to Know More About Me? Visit my LinkedIn!</h3> */}
    </>
  )
}

export default App
