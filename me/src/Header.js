import React from 'react';
import { Link, Route } from 'react-router-dom';
import About from './About';
import Contact from './Contact';

export default function() {
  return (
        <div className="Header">
            <h2 className="headerText">React Router Example</h2>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </div>
    );
}