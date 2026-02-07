import { useEffect, useRef, useState } from 'react'
import { Spotify } from "react-spotify-embed";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from './assets/gabbyhylton.png';
import picture from './assets/IMG_2941.JPG';
import logo2 from './assets/gabbyhylton_2.png';
import './App.css'
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function SkyEffects({ theme }) {
  const count = 20;

  return (
    <div className='sky-effects'>
      {Array.from({ length: count }).map((_, i) => {
        const chromakopia = theme === "chromakopia";
        const symbol = chromakopia ? "⚡" : "⭐";
        
        const color = chromakopia
          ? "#facc15"
          : ["ef4444", "#22c55e", "#3b82f6", "#a855f7"][
              Math.floor(Math.random() * 4)
            ];

        return (
          <span key={i}
            className="sky-item"
            style={{
              left: `${Math.random() * 100}%`,
              color,
              fontSize: `${Math.random() * 20 + 10}px`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          >
            {symbol}
          </span>
        );
      })}
    </div>
  )
};

function App() {
  const [theme, setTheme] = useState('callmeifyougetlost');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    
    <Router>
      <header className="header">
        <img src={theme === "callmeifyougetlost" ? logo2 : logo} alt="Logo" />

        <h2>
          <Link to="/">Home</Link> | {" "}
          <Link to="/projects">Projects</Link> | {" "}
          <Link to="/contact">Contact</Link> | {" "}
          <a
            href="https://www.linkedin.com/in/gabriella-hylton/"
            target="_blank"
            >
              LinkedIn
            </a>
        </h2>
        <button className="theme-toggle" onClick={() => setTheme(theme === "callmeifyougetlost" ? "chromakopia" : "callmeifyougetlost")}>
          {theme === "callmeifyougetlost" ? "Switch to Chromakopia Theme" : "Switch to Call Me If You Get Lost Theme"}
        </button>
      </header>

      <main className='page'>
        <SkyEffects theme={theme} />
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/projects" element={<Projects theme={theme} />} />
        <Route path="/contact" element={<Contact theme={theme} />} />
      </Routes>
      </main>
    </Router>

  );
}
export default App;

// function Bio() {
//   return <p class="border-paragraph">My name is Gabriella Hylton and I am currently a third-year Computer Science and Economics Student at Northeastern University.
//     For summer 2025, I am working as a Client Delivery Associate for the Cervantes Group at their Boston location.
//     Additionally, I am taking a technical prep workshop as well to increase my current understanding of computer science curriculum while also furthering my knowledge.
//     My goal this summer is to complete my personal website!</p>
// }

// function App() {
//   const [showBio, setShowBio] = useState(false);
//   const [count, setCount] = useState(0);
//   var music = new Audio("");
//   const handleClick = () => {
//     music.play();
//     //music.currentTime=0;
//   };

//   return (
//     <>
//       <div className="app-container">
//         <header className="header">
//           <img src={logo}
//              alt='Chromakopia Name' />
//           <h2>Home | Projects | Contact | <a href="https://www.linkedin.com/in/gabriella-hylton/" target='_blank'>LinkedIn</a>
//           </h2>
//         </header>

//         <main className="main-content">
//           <div className="profile-section">
//             {showBio ? (
//               <p className="bio-paragraph">
//                 My name is Gabriella Hylton and I am currently a third-year Computer Science and Economics Student at Northeastern University.
//                 For summer 2025, I am working as a Client Delivery Associate for the Cervantes Group at their Boston location.
//                 Additionally, I am taking a technical prep workshop as well to increase my current understanding of computer science curriculum while also furthering my knowledge.
//                 My goal this summer is to complete my personal website!
//                 </p>
//             ) : (
//               <img src={picture} 
//                    alt="Profile Picture" 
//                    style={{ width: "500px", height: "500px", objectFit: "cover" }} />
//             )}
//             <button onClick={() => setShowBio(!showBio)} className="button-2">
//               {showBio ? "Show Picture" : "Show Bio"}
//               </button>
//           </div>

//           <div className="circle-section">
//             <div class="circle-1"></div>
//           <div class="circle-2"></div>
//           <div class="circle-1"></div>
//           <div class="circle-2"></div>
//           <div class="circle-1"></div>
//           <div class="circle-2"></div>
//           </div>
//         </main>

//       </div>
//       {/* <button class="button-1">♩</button> */}
//         {/* <p class="border-paragraph">A solid border</p> */}
//     </>
//   )
// }

// export default App;
