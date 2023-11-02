import HTML from "../image/html.png";
import CSS from "../image/css.png";
import Javascript from "../image/javascript.png";
import Bootstrap from "../image/bootstrap.png";
import TailwindCSS from "../image/tailwindcss.png";
import React from "../image/react.png";
import jQuery from "../image/jquery.png";
import MongoDB from "../image/mongodb.png";
import MySQL from "../image/mysql.png";
import PHP from "../image/php.png";
import NodeJS from "../image/nodejs.jpg";
import Laravel from "../image/laravel.jpg";
import Git from "../image/git.png";
import GitHub from "../image/github.png";
import { useNavigate } from "react-router-dom";
import { NavBar } from "./navbar";

export const Skill = ({setNavbar})=>{
   const navigate = useNavigate();

    return (
     <div className="App  h-screen flex flex-col justify-center
         bg-[url(https://i.pinimg.com/564x/94/97/d9/9497d9cb35963cf178dc7e0e94965d3b.jpg)]
          bg-center">
       <div className="animate-swingforward max-w-[355px] font-lobster md:max-w-[700px] mx-auto rounded-[40px] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 mx-6 border shadow-2xl px-6">
         <div className="max-w-[355px] md:max-w-[650px]  py-4">
            <NavBar/>
        <div className="animate-fadeforward max-w-[600px] font-kanit font-bold mx-auto flex  relative py-4">
        <div className="flex flex-col w-full justify-center items-center space-y-2 md:flex-row  md:space-x-3">
             <div className="flex flex-col p-2 space-y-4 md:p-0 ">
             <h2 className="text-blue-800 text-center uppercase">Skill (Tech Stack)</h2>
             <div className="flex justify-between">

              <div className="flex flex-col space-y-2">
                <h2 className="font-bold text-red-900">FrontEnd</h2>
                <div className="flex flex-col space-y-2">
                    <div className="flex space-x-2">
                       <div className="skill ">
                        <div className="skill-img
                                       hover:cursor-pointer hover:-translate-y-1
                                       duration-1000">
                             <img src={HTML} alt="" className="image"/>
                            </div>
                         <p>HTML</p>
                       </div> 

                       <div className="skill ">
                         <div className="skill-img
                                       hover:cursor-pointer hover:-translate-y-1
                                       duration-1000">
                            <img src={CSS} alt="" className="image"/>
                         </div>
                         <p>CSS</p>
                       </div> 

                       <div className="skill ">
                         <div className="skill-img
                                       hover:cursor-pointer hover:-translate-y-1
                                       duration-1000">
                            <img src={Javascript} alt="" className="image"/>
                         </div>
                         <p>JavaScript</p>
                       </div> 
                    </div>

                    <div className="flex space-x-2">
                       <div className="skill ">
                        <div className="skill-img
                                       hover:cursor-pointer hover:-translate-y-1
                                       duration-1000">
                         <img src={Bootstrap} alt="" className="image"/>
                        </div>
                         <p>Bootstrap</p>
                       </div> 

                       <div className="skill">
                         <div className="skill-img
                                       hover:cursor-pointer hover:-translate-y-1
                                       duration-1000">
                           <img src={jQuery} alt="" className="image"/>
                         </div>
                         <p>jQuery</p>
                       </div> 

                       <div className="skill ">
                        <div className="skill-img
                                       hover:cursor-pointer hover:-translate-y-1
                                       duration-1000">
                         <img src={React} alt="" className="image"/>
                        </div>
                         <p>React</p>
                       </div> 
                    </div>

                    <div className="flex space-x-2">
                       <div className="skill ">
                        <div className="skill-img
                                       hover:cursor-pointer hover:-translate-y-1
                                       duration-1000">
                         <img src={TailwindCSS} alt="" className="image"/>
                        </div>
                         <p>TailwindCss</p>
                       </div> 
                    </div>
                </div>
                </div>
                 
              <div className="flex flex-col space-y-2">
                <h2 className="font-bold text-red-900">Database</h2>
                <div className="flex flex-col space-y-2">
                    <div className="flex space-x-2">
                       <div className="skill">
                        <div className="skill-img
                                       hover:cursor-pointer hover:-translate-y-1
                                       duration-1000">
                         <img src={MongoDB} alt="" className="image"/>
                        </div>
                         <p>MongoDB</p>
                       </div> 
                    </div>

                    <div className="flex space-x-2">
                       <div className="skill ">
                        <div className="skill-img
                                       hover:cursor-pointer hover:-translate-y-1
                                       duration-1000">
                         <img src={MySQL} alt="" className="image"/>
                        </div>
                         <p>MySQL</p>
                       </div>
                    </div>

                </div>
                </div>
             </div>
             <div className="flex justify-between">
              <div className="flex flex-col space-y-2">
                <h2 className="font-bold text-red-900">BackEnd</h2>
                <div className="flex  space-x-2">
                    <div className="flex space-x-2">
                       <div className="skill">
                        <div className="skill-img
                                       hover:cursor-pointer hover:-translate-y-1
                                       duration-1000">
                         <img src={NodeJS} alt="" className="image"/>
                        </div>
                         <p>NodeJS</p>
                       </div> 
                    </div>

                    <div className="flex space-x-2">
                       <div className="skill ">
                        <div className="skill-img
                                       hover:cursor-pointer hover:-translate-y-1
                                       duration-1000">
                         <img src={PHP} alt="" className="image"/>
                        </div>
                         <p>PHP</p>
                       </div> 
                    </div>
                </div>

                <div className="flex space-x-2">
                       <div className="skill ">
                        <div className="skill-img
                                       hover:cursor-pointer hover:-translate-y-1
                                       duration-1000">
                         <img src={Laravel} alt="" className="image"/>
                        </div>
                         <p>Laravel</p>
                       </div> 
                </div>

                </div>

                <div className="flex flex-col space-y-2">
                <h2 className="font-bold text-red-900">Version Control</h2>
                <div className="flex  space-x-2">
                    <div className="flex space-x-2">
                       <div className="skill ">
                        <div className="skill-img
                                       hover:cursor-pointer hover:-translate-y-1
                                       duration-1000">
                         <img src={Git} alt="" className="image bg-white"/>
                        </div>
                         <p>Git</p>
                       </div> 
                    </div>

                    <div className="flex space-x-2">
                       <div className="skill ">
                        <div className="skill-img
                                       hover:cursor-pointer hover:-translate-y-1
                                       duration-1000">
                         <img src={GitHub} alt="" className="image"/>
                        </div>
                         <p>GitHub</p>
                       </div> 
                    </div>
                </div>
                </div>
             </div>
             
             <div className="flex space-x-2">
                
                <button className="bg-green-700 text-white p-2 rounded-md hover:bg-green-900" onClick={()=>navigate("/about")} >About</button>
                <button className="bg-blue-700 text-white p-2 rounded-md hover:bg-blue-900" onClick={()=>navigate("/project")}>Project</button>
                <button className="bg-red-700 text-white p-2 rounded-md hover:bg-red-900" onClick={()=>navigate("/contact")}>Contact</button>
                <button className="bg-orange-700 text-white p-2 rounded-md hover:bg-orange-900" onClick={()=>navigate("/education")}>Edu</button>
                <button className="bg-yellow-700 text-white p-2 rounded-md hover:bg-yellow-900" onClick={()=>navigate("/")}>Home</button>
             </div>
             </div>
        </div>
     </div>
     </div>
     </div>
     </div>
        );
}