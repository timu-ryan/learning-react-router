// AboutMe.js

import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import './styles/AboutMe.css';

function AboutMe () {
  return (
    <div className="about-me">
      <ul className="links">
        <li>
          <Link to="my-story">Моя история</Link>
        </li>
        <li>
          <Link to="hobbies">Хобби</Link>
        </li>
        <li>
          <Link to="contact">Контактная информация</Link>
        </li>
      </ul>
      <Outlet/> {/* тут будут отрисовываться  */}
    </div>
  )
}

export default AboutMe; 