import React, { useState } from 'react';
import './App.css';
import Header from '../header';
import Project from '../project';
import Profile from '../profile';
import WorkExp from '../workExp';
import Publications from '../publications';

export default function App() {
  const [expand, setExpand] = useState('content-wrapper');

  return (
    <div className="App">
      <Header setExpand={setExpand} />
      <div className={expand}>
        <div className="content-body">
          <Profile />
          <WorkExp />
          <Project />
          <Publications />
        </div>
      </div>
    </div>
  );
}
