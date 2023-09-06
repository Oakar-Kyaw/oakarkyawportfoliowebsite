import { NavBar } from './component/navbar';
import './dist/output.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutMe } from './component/aboutme';
import { Project } from './component/project';
import { Skill } from './component/skill';
import { Education } from './component/education';
import { Contact } from './component/contact';
import { Home } from './component/home';

function App() {
  return (
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
  );
}

export default App;
//bg-gradient-to-br from-white via-gray-100 to-gray-200
//https://i.pinimg.com/564x/e5/dc/82/e5dc822a9a00c2b598e158ad9905eac9.jpg
//https://i.pinimg.com/564x/dd/48/1f/dd481f0b36d64e2723af1482e8a87fe5.jpg
//https://i.pinimg.com/564x/bb/cc/64/bbcc64ba133a8c3319f6a89a0d6cb249.jpg
//https://i.pinimg.com/564x/da/0b/d5/da0bd5422deefec196ffdb7b3e331ef6.jpg
//https://i.pinimg.com/564x/63/58/2d/63582d1e4f6954371dccad7094d5c738.jpg
//https://i.pinimg.com/564x/f8/39/4d/f8394dfa97526826b31823593b61d138.jpg https://i.pinimg.com/564x/54/33/61/5433614be4de96694c47b5693d33c444.jpg