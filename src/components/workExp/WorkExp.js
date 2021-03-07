import React from 'react';
import './WorkExp.css';

export default function WorkExp(props) {
  return (
    <div id="work-exp">
      <h2>Work Experience</h2>
      <div className="exp-list">
        <div className="exp">
          <h4>Full Stack Web Developer Intern</h4>
          <p>Dec 2020-Current</p>
          <ul>
            <li>Building TwentyBN's new sales website using React and Ruby on Rails.</li>
            <li>Tech Stack: React, Ruby on Rails, AWS, Redux.</li>
          </ul>
        </div>
        <div className="exp">
          <h4>Junior Software Developer: CarltonOne Engagement</h4>
          <p>June 2020-Dec 2020</p>
          <ul>
            <li>Lead development of architecture that processes invoices from hundreds of vendors and converts them into consistent text files, resulting in a hundred fold reduction in processing time (Python). Worked within a team of developers to optimize efficiency of data extraction.</li>
            <li>Tech Stack: Python, SQL Management Server, Navicat GUI, Git/BitBucket, Automate Enterprise, Azure.</li>
          </ul>
        </div>
        <div className="exp">
          <h4>Resturant Manager: Sitara Resturant</h4>
          <p>2018-2019</p>
          <ul>
            <li>Oversaw operations of up to 15 employees at once in a fast-paced environment.</li>
            <li>Consistently delivered exceptional customer service while maintaining status as the #1 out of 119 restaurant in Sarnia (4.7 rating / 641 reviews).</li>
            <li>Cultivated an efficient and professional environment through creative problem solving and progressive conflict resolution.</li>
          </ul>
        </div>
        <div className="exp">
          <h4>Student Researcher: Canadian Mental Health Association</h4>
          <p>2017-2018</p>
          <ul>
            <li>Systematically analyzed qualitative data attained from client feedback reviews in order to identify disparities regarding patient satisfaction.</li>
            <li>Synthesized the identified issues into a succinct and easy to digest format to be presented to staff and community stakeholders.</li>
            <li>Worked with community stakeholders to apply feasible solutions to ongoing problems.</li>
          </ul>
        </div>
        <div className="exp">
          <h4>Research Associate: Lawson Health Research Institute - St. Joseph's Hospital</h4>
          <p>2015-2016</p>
          <ul>
            <li>Worked on a meta-analysis project investigating trends in Rehabilitation Sciences in coordination with the Heart and Stroke Foundation of Canada.</li>
            <li>Systematically extracted and analyzed published research to derive Best Practice Guidelines for clinicians in the field of Rehabilitation.</li>
            <li>Identified gaps in the available literature and lead the initiative to perform and publish meta-analyses on said topics.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}