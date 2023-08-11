// App.js

import React from 'react';
// Добавили компонент Header с логотипом проекта
import Header from './Header';
import Dashboard from './Dashboard';
import NavBar from './NavBar';
import Reviews from './Reviews'
import AboutUs from "./about-us/AboutUs";
import AboutMe from './about-me/AboutMe';

import MyStory from "./about-me/MyStory";
import Hobbies from "./about-me/Hobbies";
import Contact from "./about-me/Contact";
import './styles/App.css';

import PageNotFound from './PageNotFound';

import { Routes, Route } from 'react-router-dom'; //imported routes

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />

        <Route path="/about-me" element={<AboutMe />}>
          <Route path="my-story" element={<MyStory />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes> 
    </div>
  );
}

export default App; 
// npm i react-router-dom@6.3.0