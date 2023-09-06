import { useNavigate } from "react-router-dom";
import oakar from "../image/oakar.jpg";
import { NavBar } from "./navbar";
import { useEffect, useRef } from "react";
export const AboutMe = ()=>{
    const navigate = useNavigate();
    
    return (
     <div className="App  h-screen flex flex-col justify-center
        bg-[url(https://i.pinimg.com/564x/94/97/d9/9497d9cb35963cf178dc7e0e94965d3b.jpg)]
         bg-center">
       <div className="animate-swingforward max-w-[355px] font-lobster md:max-w-[700px] mx-auto rounded-[40px] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 mx-6 border shadow-2xl px-6">
         <div className="max-w-[355px] md:max-w-[650px]  py-4">
           <NavBar/>
        <div className="animate-fadeforward max-w-[600px] font-kanit font-bold mx-auto flex  relative py-4">
           <div className="flex flex-col space-y-2 md:flex-row md:space-x-4">
               <div className="w-full  flex justify-center p-2 md:p-1">
                <img src={oakar} class="h-25 w-32 md:h-20 md:w-full rounded-[50%] shadow-lg" alt="" />
               </div>
                <div className="flex-col">
                <h2 className="text-blue-800 text-center md:text-start uppercase">About Me</h2>
                <h2 className="font-bold text-center md:text-start">Full-Stack Developer</h2>
                <p className="text-gray-900 tracking-normal text-center md:text-start p-2 md:p-0">I'm Oakar Kyaw and a web developer with a passion for creating innovative and engaging web applications.
                  I discovered my interest in creating beautiful and functional
                  websites that provide a great user experience. As a web developer, my project experience aligns perfectly with
                  the requirements of the role. Skilled in utilizing React, Redux, and other related technologies to create dynamic
                  and user-friendly interfaces. Developed a Job Portal application, showcasing expertise in front-end
                  development, state management with Redux, and seamless API integration. Continuously staying updated
                  with the latest trends and best practices in web development to ensure optimal performance and user
                  experience
                </p>
                <div className="flex space-x-2 mt-3 hidden md:block">
                   
                   <button className="bg-blue-700 text-white p-2 rounded-md hover:bg-blue-900" onClick={()=>navigate("/project")}>Project</button>
                   <button className="bg-red-700 text-white p-2 rounded-md hover:bg-red-900" onClick={()=>navigate("/skill")}>Skill</button>
                   <button className="bg-green-700 text-white p-2 rounded-md hover:bg-green-900" onClick={()=>navigate("/education")}>Edu</button>
                   <button className="bg-orange-700 text-white p-2 rounded-md hover:bg-orange-900" onClick={()=>navigate("/contact")}>Contact</button>
                   <button className="bg-yellow-700 text-white p-2 rounded-md hover:bg-yellow-900" onClick={()=>navigate("/")}>Home</button>
                </div>
                <div className="flex space-x-2 mt-3 md:hidden justify-center">
                   
                   <button className="bg-blue-700 text-white p-2 rounded-md hover:bg-blue-900" onClick={()=>navigate("/project")}>Project</button>
                   <button className="bg-red-700 text-white p-2 rounded-md hover:bg-red-900" onClick={()=>navigate("/skill")}>Skill</button>
                   <button className="bg-green-700 text-white p-2 rounded-md hover:bg-green-900" onClick={()=>navigate("/education")}>Edu</button>
                </div>

                <div className="flex space-x-2 mt-3 md:hidden justify-center">
                    <button className="bg-orange-700 text-white p-2 rounded-md hover:bg-orange-900" onClick={()=>navigate("/contact")}>Contact</button>
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