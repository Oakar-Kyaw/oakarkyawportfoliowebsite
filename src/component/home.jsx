import image from "../image/animation.gif";
import okk from "../image/oakar.jpg";
import ok from "../image/ok.png";
import cv from "../cv/oakarkyawjuniordevelopercv.pdf";
import {BsFillPersonFill} from "react-icons/bs";
import {BiBrain} from "react-icons/bi";
import {PiRocketLight,PiGraduationCapThin} from "react-icons/pi";
import {HiOutlineEnvelope} from "react-icons/hi2";
import {RxResume} from "react-icons/rx";
import { NavBar } from "./navbar";
import { useNavigate } from "react-router-dom";

export const Home = ({setNavbar})=>{
   const handleDownload = () => {
      const link = document.createElement('a');
      link.download = "Oakar Kyaw's CV";
  
      link.href = cv;
  
      link.click();
    };
    const navigate= useNavigate();
    return (
      <div className="App  h-screen flex flex-col justify-center
         bg-[url(https://i.pinimg.com/564x/94/97/d9/9497d9cb35963cf178dc7e0e94965d3b.jpg)]
          bg-center">
        <div className="animate-swingforward max-w-[355px] font-lobster md:max-w-[700px] mx-auto rounded-[40px] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 mx-6 border shadow-2xl px-6">
          <div className="animate-fadeforward max-w-[355px] md:max-w-[650px]  py-4">
            <NavBar/>
           <div className="font-kanit font-bold max-w-[600px] mx-auto flex mt-10 relative py-4">
            <div className="flex flex-col items-end">
             <div>
               <div
                 className="card bg-blue-700 text-white hover:cursor-pointer
                 hover:-translate-y-2 duration-1000" 
                            
                onClick={()=>{navigate("/about")}} >
                   <BsFillPersonFill className="text-[25px]"/>
               </div>
               <p>About Me</p>
            </div>

            <div className="mt-6">
               <div 
                 className="card bg-[#926af2]  text-white hover:cursor-pointer
                 hover:-translate-y-2 duration-1000
                            mr-20"    
                  onClick={()=>{navigate("/skill")}}>
                   <BiBrain className="text-[25px]"/>
               </div>
               <div className="flex">
                  <p className="ml-4">Skill</p>
               </div>
               
            </div>

            <div className="mt-6">
               <div 
                 className="card bg-[#2f2e31] text-blue-200 hover:cursor-pointer
                 hover:-translate-y-2 duration-1000
                            mr-20" 
                 onClick={()=>{navigate("/project")}}>
                   <PiRocketLight className="text-[25px]"/>
               </div>
               <div className="flex">
                  <p className="ml-2">Project</p>
               </div>
            </div>

            <div className="mt-6">
               <div 
                 className="card bg-[#2f2e31] text-blue-200 hover:cursor-pointer
                 hover:-translate-y-2 duration-1000" 
                 onClick={()=>{navigate("/contact")}}>
                   <HiOutlineEnvelope className="text-[25px]"/>
               </div>
               <div className="flex">
                  <p className="ml-2">Contact</p>
               </div>
            </div>

        </div>

        <div className="flex justify-center items-center max-w-[400px] relative">
          <div className="md:hidden w-5"></div>
          <div className="absolute md:bottom-5 flex items-center justify-center h-[90px] w-[90px] rounded-[50%]">
             <img src={okk} alt="" className="h-full w-full rounded-[50%]" />
          </div>
         <div className="animate-rotate360 md:bottom-0 absolute h-[130px] w-[130px] rounded-[50%]">
            <img src={ok} alt="" className="w-full h-full "/>
          </div>
          
          <div className="hidden md:block absolute top-40 md:top-32 text-[25px] md:text-[35px] text-white" >
           <span class="tracking-[0.1rem] " 
               style={{textShadow:"3px 3px black, 3px 3px lightblue",
               WebkitTextStrokeWidth:"3px",
               WebkitTextStrokeColor:"gray"}} >Oakar Kyaw</span>
            </div>
            <img src={image} alt="" className="hidden md:block max-h-42 md:max-h-60  z-50"/>
        </div>
       

       <div className="flex flex-col justify-end items-end">

            <div className="mt-6">
            
               <div 
                 className="card hover:cursor-pointer
                 hover:-translate-y-2 duration-1000" 
                 onClick={()=>{navigate("/education")}}>
                   <PiGraduationCapThin className="text-[25px]"/>
               </div>
               
               <p>Education</p>
            </div>

            <div className="mt-6">
               <div 
                 className="card hover:cursor-pointer
                 hover:-translate-y-2 duration-1000 mr-20" 
                 onClick={handleDownload}>
                   <RxResume className="text-[25px]"/>
               </div>
               <div className="flex">
                  <p className="ml-2">Download CV</p>
               </div>
            </div>

        </div>
       <div>

       </div>
    </div> 
    </div>
    </div>
    </div>
    );
}