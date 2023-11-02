import { useNavigate } from "react-router-dom";
import kwin from "../image/k-win.jpg";
import { NavBar } from "./navbar";
import { useEffect, useRef } from "react";
export const Experience = ()=>{
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
                <img src={kwin} class="h-20 w-20 md:h-20 md:w-full rounded-[50%] shadow-lg" alt="" />
               </div>
                <div className="flex-col">
                <h2 className="text-blue-800 text-center md:text-start uppercase">Experience</h2>
                <h2 className="font-bold text-center md:text-start font-black">Full-Stack Developer at K-Win Technologies</h2>
                <p className="text-gray-900 tracking-normal text-center md:text-start p-2 md:p-0">As a Full Stack Software Engineer at K-Win Technology, I'm responsible for managing the servers of Cherry K Company, Clinic Denovo Company, and HRM. 
                K-Win specializes in providing HRM software, point of sale software, and various website services.
                 During my tenure, I gains experience in server management, software development, and providing technical support for these products.

                </p>
                <div className="flex space-x-2 mt-3 hidden md:block">
                   <button className="bg-red-700 text-white p-2 rounded-md hover:bg-red-900" onClick={()=>navigate("/About")}>About</button> 
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
                    <button className="bg-blue-700 text-white p-2 rounded-md hover:bg-blue-900" onClick={()=>navigate("/about")}>About</button>
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