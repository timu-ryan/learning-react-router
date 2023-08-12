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

import { BrowserRouter } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom'; //imported routes
import { Navigate } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        {/* <Route path='/learning-react-router' element={<Navigate to='/' />} /> */}
        <Route path="/learning-react-router" element={<Dashboard />} />
        <Route path="/learning-react-router/reviews" element={<Reviews />} />

        <Route path="/learning-react-router/about-me" element={<AboutMe />}>
          <Route path="my-story" element={<MyStory />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/learning-react-router/about-us" element={<AboutUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes> 
    </div>
    </BrowserRouter>
  );
}

export default App; 
// npm i react-router-dom@6.3.0