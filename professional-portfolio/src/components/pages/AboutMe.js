import React from "react";
import "../styles/Aboutme.css";
import nightvision from "../media/nightvision.jpg";
import normalvision from '../media/normal.PNG'

const AboutMe = () => {
  return (
    <div className="allabout">
      <div className="columns">
        <div className="column">
          <img id="image" src={normalvision}></img>
        </div>
        <div className="column box is-pulled-left">
          <h1 className="header">Languages</h1>
          <p>HTML</p>
          <p>JavaScript</p>
          <p>CSS</p>
          <p>Python</p>
          <p>GraphQL</p>
          <p>SQL</p>
          <h1 className="header">Frameworks and Libraries</h1>
          <p>Jupyter</p>
          <p>Node.JS</p>
          <p>MongoDB</p>
          <p>Express.JS</p>
          <p>React.JS</p>
          <p>Handlebars</p>
          <p>Bulma</p>
          <p>Bootstrap</p>
          <p>Lambda</p>
          <h1 className="header">Volunteer Experiences</h1>
          <p>Give Big Leader - Mattress Firm</p>
          <p>Firefighter - Elderville Lakeport Volunteer Fire Dept.</p>
          <p>Firefighter/Paramedic - South Hays Fire Dept.</p>
          <h1 className="header">Awards</h1>
          <p>Life Saver Award - San Marcos Police Dept.</p>
        </div>
        <div className="column box">
          <h1 className="header"> Education</h1>
          <p>Bachelor of Arts(Business and Psychology) - Concordia University</p>
          <p>Firefighter Certification - Kilgore College</p>
          <p>EMT Certification - Training Division</p>
          <p>Associate of Applied Science (Paramedic) - Austin Community College</p>
          <p>Full Stack Coding Bootcamp - University of Texas at Austin</p>
          <p>Python 3 Certificate - Codecademy</p>
          <p>Data Analytics Specialist(In Progress) - Codecademy </p>
          <h1 className="header"> Fun Facts </h1>
          <p></p>
          
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
