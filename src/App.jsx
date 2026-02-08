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
        <img className="logo" src={theme === "callmeifyougetlost" ? logo2 : logo} alt="Logo" />

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
          {" "} | {" "} 
          <button className="theme-toggle" onClick={() => setTheme(theme === "callmeifyougetlost" ? "chromakopia" : "callmeifyougetlost")}>
          {theme === "callmeifyougetlost" ? "Chromakopia" : "CMIYGL"}
        </button>
        </h2>
        {/* <button className="theme-toggle" onClick={() => setTheme(theme === "callmeifyougetlost" ? "chromakopia" : "callmeifyougetlost")}>
          {theme === "callmeifyougetlost" ? "Chromakopia" : "CMIYGL"}
        </button> */}
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