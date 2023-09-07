import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import logo from './images/logo.jpg';
import past1 from './images/past1.jpg';
import past2 from './images/past2.jpg';
import past3 from './images/past3.jpg';
import upcoming1 from './images/upcoming1.jpg';

const App = () => {
  const [showFirstText, setShowFirstText] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);
  const [showImage, setshowImage] = useState(false);
  const [showUpcomingEvents, setShowUpcomingEvents] = useState(false);
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);

  const upcomingRef = useRef(null);
  const pastRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setShowFirstText(true), 500);
    setTimeout(() => setShowSecondText(true), 1000);
    setTimeout(() => setshowImage(true), 1500);
    setTimeout(() => setShowUpcomingEvents(true), 2500);
    setTimeout(() => setShowPastEvents(true), 3500);
    setTimeout(() => setShowAboutUs(true), 4500);

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

    if (upcomingRef.current) observer.observe(upcomingRef.current);
    if (pastRef.current) observer.observe(pastRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);

    return () => {
      observer.disconnect();
    };
  }, [showUpcomingEvents, showPastEvents, showAboutUs]);
  
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='container'>
      {showFirstText && <h1 className='fade-in'>IEEE PELS & PES </h1>}
      {showSecondText && <h2 className='fade-in'>Welcome to the PELS & PES IEEE Chapter at the University of Connecticut</h2>}
      {showImage && <img src={logo} alt='Logo' className='fade-in' style={{width: '600px', height: 'auto'}} />}
      <div className='navbar'>
        <button onClick={() => handleScroll(upcomingRef)}>Upcoming Events</button>
        <button onClick={() => handleScroll(pastRef)}>Past Events</button>
        <button onClick={() => handleScroll(aboutRef)}>About Us</button>
      </div>
      {showUpcomingEvents && (
        <div id='upcoming-events' className='section' ref={upcomingRef}>
          <h2>Upcoming Events</h2>
          <img src={upcoming1} alt='Upcoming Event 1' style={{width: '600px', height: 'auto', marginBottom: '20px'}} />
        </div>
      )}
      {showPastEvents && (
        <div id='past-events' className='section' ref={pastRef}>
          <h2>Past Events</h2>
          <img src={past1} alt='Past Event 1' style={{width: '600px', height: 'auto', marginBottom: '20px'}} />
          <img src={past2} alt='Past Event 2' style={{width: '600px', height: 'auto', marginBottom: '20px'}} />
          <img src={past3} alt='Past Event 3' style={{width: '600px', height: 'auto', marginBottom: '20px'}} />
        </div>
      )}
      {showAboutUs && (
        <div id='about-us' className='section' ref={aboutRef}>
          <h2>About Us</h2>
          {/* Placeholder for future content */}
        </div>
      )}
    </div>
  );
};

export default App;
