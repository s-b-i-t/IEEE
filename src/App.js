import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import logo from './images/logo.jpg';

const App = () => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showThirdText, setShowThirdText] = useState(false);
  const upcomingRef = useRef(null);
  const pastRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setShowFirstText(true), 1000);
    setTimeout(() => setShowSecondText(true), 2000);
    setTimeout(() => setShowThirdText(true), 3000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      {
        threshold: 0.1
      }
    );

    observer.observe(upcomingRef.current);
    observer.observe(pastRef.current);
    observer.observe(aboutRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container">
      {showFirstText && <h1 className="fade-in">PELS & PES IEEE Chapter</h1>}
      {showSecondText && <h2 className="fade-in">Welcome to the PELS & PES IEEE Chapter at the University of Connecticut</h2>}
      {showThirdText && <img src={logo} alt="Logo" className="fade-in" />}
      
      <div className="navbar">
        <button onClick={() => handleScroll(upcomingRef)}>Upcoming Events</button>
        <button onClick={() => handleScroll(pastRef)}>Past Events</button>
        <button onClick={() => handleScroll(aboutRef)}>About Us</button>
      </div>

      <div id="upcoming-events" className="section" ref={upcomingRef}>
        <h2>Upcoming Events</h2>
        <p>Placeholder text for upcoming events.</p>
        <img src={logo} alt="Logo"></img>
      </div>

      <div id="past-events" className="section" ref={pastRef}>
        <h2>Past Events</h2>
        <p>Placeholder text for past events.</p>
        <img src={logo} alt="Logo"></img>
      </div>

      <div id="about-us" className="section" ref={aboutRef}>
        <h2>About Us</h2>
        <p>Placeholder text for about us.</p>
        <img src={logo} alt="Logo"></img>
      </div>
    </div>
  );
};

export default App;