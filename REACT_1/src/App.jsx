import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import About from './About.jsx';  
import Contact from './Contact.jsx';
import Home from './Home.jsx';

function App() {
  return (
    <>
    <Home />
    <About />
    <Contact />
    </>
  );
};

export default App;
