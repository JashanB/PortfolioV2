// import React, { useState } from 'react';
import React from 'react';
import './App.css';
import Header from '../header';
import Project from '../project';
import Profile from '../profile';
import WorkExp from '../workExp';
import Publications from '../publications';

export default function App() {
  // const [collapse, setCollapse] = useState(false); 
  // const collapseMenu = () => {
  //   collapse ? setCollapse(state => false) : setCollapse(state => true);
  // };

  return (
    <div className="App">
        <Header />
        <div className="content-wrapper">
          <Profile />
          <WorkExp />
          <Project />
          <Publications />
        </div>
      </div>
      );
    }
