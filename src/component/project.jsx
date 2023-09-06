import {constant} from "./constant";
import {BsGithub} from "react-icons/bs";
import {FiRadio} from "react-icons/fi";
import {FcNext} from "react-icons/fc";
import {FcPrevious} from "react-icons/fc";
import jobportal from "../image/jobportalwebsite.jpg";
import japanesewordguessinggame from "../image/japanesewordguessing.jpg";
import gamewebsite from "../image/gamewebsite.png";
import minirest from "../image/minirestaurantreservationusinglaravel.jpg";
import { useState } from "react";
import { NavBar } from "./navbar";
import { useNavigate } from "react-router-dom";

export const Project = ({setNavbar})=>{
    
    const navigate = useNavigate();
    const [number,setNumber] = useState(0);
    
    const prev = ()=>{
        const isZero = number == 0;
        isZero ? setNumber(constant.length-1) : setNumber(number-1); 
    }

    const next = ()=>{
        const isLastNumber = number == constant.length-1;
        isLastNumber ? setNumber(0) : setNumber(number+1);
    }
    const image = [jobportal,gamewebsite,japanesewordguessinggame,minirest];
    return (
     <div className="App  h-screen flex flex-col justify-center
        bg-[url(https://i.pinimg.com/564x/94/97/d9/9497d9cb35963cf178dc7e0e94965d3b.jpg)]
         bg-center">
      <div className="animate-swingforward max-w-[355px] font-lobster md:max-w-[700px] mx-auto rounded-[40px] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 mx-6 border shadow-2xl px-6">
        <div className="max-w-[355px] md:max-w-[650px]  py-4">
           <NavBar/>
        <div className="animate-fadeforward max-w-[600px] font-kanit font-bold mx-auto flex  relative py-4 ">
        <div className=" flex flex-col w-full justify-center items-center space-y-3 ">
            <div className="flex flex-col space-y-2 ">
                <h2 className="text-blue-900 text-xl md:text-2xl text-center w-full ">{constant[number].name}</h2>
                <h6 className="text-red-900 text-center w-full">Tech Stack: {constant[number].tech}</h6>
                <div className="relative h-40 w-[300px] md:w-[460px] md:h-60  p-2 group">
                    <img src={image[number]} alt="" className="w-full h-40 md:w-full 
                                                               md:h-60 rounded-lg 
                                                              " />
                    <div className="absolute hidden group-hover:block top-20 left-0 
                                    cursor-pointer shadow-lg p-2 md:top-32" onClick={prev}>
                        <FcPrevious />
                    </div>
                    <div className="absolute hidden group-hover:block top-20 md:top-32 cursor-pointer 
                                    right-0 
                                    shadow-lg p-2" onClick={next}>
                        <FcNext/>
                    </div>
                    
                   
           
                </div>
                  
                 </div>
            <div className="flex space-x-1">
                {
                    constant.map((con,key)=><div key={key} className="mt-2 shadow-lg h-3 w-3 rounded-[50%] border border-white flex items-center justify-center"
                                              onClick={()=>{setNumber(key)}}>
                     {  key === number ?
                        <div className="h-1 w-1 rounded-[50%] bg-white"></div>
                        :
                        ""
                     }
                </div>)
                }
               
                
            </div>
            <p className="hidden group-hover:h-40 w-full md:text-start text-gray-800 group-hover:z-50">{constant[number].description}</p>
            <div className="flex flex-col space-y-2 w-full items-center group">
               <div className="flex w-full space-x-2 justify-center mt-2">
                    <a href={constant[number].codeurl} className=" flex items-center  p-2 px-4 bg-green-500 shadow-md text-white rounded-lg hover:scale-90 hover:bg-green-600 duration-1000"><BsGithub className="mr-2"/> Code</a>
                    <a href={constant[number].weburl} className="flex items-center   p-2 px-4 bg-red-500 shadow-md text-white rounded-lg hover:scale-90 hover:bg-red-600 duration-1000"><FiRadio className="mr-2"/>Live</a>
                </div>
                <div className="flex space-x-2 ">
                <button className="text-white hover:block hover:bg-green-700 hover:text-white p-2 rounded-md hover:bg-green-900 transition-all ease-out duration-500" onClick={()=>navigate("/about")} >About</button>
                <button className="text-[#b0b5bf] hover:bg-blue-700 text-white p-2 rounded-md hover:bg-blue-900 transition-all ease-out duration-500" onClick={()=>navigate("/skill")}>Skill</button>
                <button className="text-[#b0b5bf] hover:bg-red-700 text-white p-2 rounded-md hover:bg-red-900 transition-all ease-out duration-500" onClick={()=>navigate("/contact")}>Contact</button>
                <button className="text-[#b0b5bf] hover:bg-orange-700 text-white p-2 rounded-md hover:bg-orange-900 transition-all ease-out duration-500" onClick={()=>navigate("/education")}>Edu</button>
                <button className="text-[#b0b5bf] hover:bg-yellow-700 text-white p-2 rounded-md hover:bg-yellow-900 transition-all ease-out duration-500" onClick={()=>navigate("/")}>Home</button>
             </div>

            </div>
            
        </div>
     </div>
     </div>
     </div>
     </div>
    );
}