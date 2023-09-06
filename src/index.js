import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './component/navbar';
import { AboutMe } from './component/aboutme';
import { Project } from './component/project';
import { Skill } from './component/skill';
import { Education } from './component/education';
import { Contact } from './component/contact';
import { Home } from './component/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<AboutMe/>}/>
       <Route path="/project" element={<Project/>}/>
       <Route path="/skill" element={<Skill/>}/>
       <Route path="/education" element={<Education/>}/>
       <Route path="/contact" element={<Contact/>}/>
     </Routes>
       
    </BrowserRouter>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
