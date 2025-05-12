import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Card1 from './card1';
import Card2 from './card2';


function Home() {
  return  <div style={{display:'flex',flexDirection:'row'}}>
            <h2>🏠 Home Page</h2>;
            <Card1/>
            
            <Card2/>
        </div>
  
}

function About() {
  return <div className='wrapper2'>
         <h2>ℹ️ About Page</h2>;
         <h3>My self Vinayak</h3>
    
        </div>
}

function Contact() {
  return <h2>📞 Contact Page</h2>;

}

function Routerex() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default Routerex;