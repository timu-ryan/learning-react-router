import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles/NavBar.css';

function NavBar () {
  return (
    <nav className="menu">
      <NavLink to="/learning-react-router" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Домой</NavLink>
      <NavLink to="/learning-react-router/reviews" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Обзоры эмодзи</NavLink>
      <NavLink to="/learning-react-router/about-me" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>Обо мне</NavLink>
      <NavLink to="/learning-react-router/about-US" className={({isActive}) => `menu__link ${isActive ? "menu__link_active" : ""}`}>О нас</NavLink>
    </nav>
  )
}

export default NavBar; 