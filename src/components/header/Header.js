import './Header.css';
import React, { useState } from 'react';
import hamburger from './hamburger.png';

export default function Header() {
  const [headerState, setHeaderState] = useState("header-expanded");

  function hamburgerOnClick(headerState) {
    if (headerState === 'header-expanded') {
      setHeaderState(state => "header-collapsed");
    } else {
      setHeaderState(state => "header-expanded");
    }
  }

  return (
    <div className={headerState}>
      <span className="hamburger-button" onClick={() => hamburgerOnClick(headerState)}><img alt="" src={hamburger}></img></span>
      <div className="nav">
        <h2>Jashan Brar</h2>
        <ul className="section-list">
          <li>
            <a href="#profile">Profile</a>
          </li>
          <li>
            <a href="#work-exp">Work Experience</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <ul className="project-list">
            <li>
              <a href="#Bettr-Trip.">Bettr Trip.</a>
            </li>
            <li>
              <a href="#WeatherApp">WeatherApp</a>
            </li>
            <li>
              <a href="#Newton">Newton</a>
            </li>
            <li>
              <a href="#Life">Game of Life</a>
            </li>
            <li>
              <a href="#Number-Guesser">Number Guesser</a>
            </li>
          </ul>
          <li>
            <a href="#publications">Publications</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
