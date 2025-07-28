import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Skills from './components/Skills';
import Contact from './components/Contacts';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navigation />
    <Hero />
    <About />
    <Project />
    <Skills />
    <Contact />
  </React.StrictMode>
);
