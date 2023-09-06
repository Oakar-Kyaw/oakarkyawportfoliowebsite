import { useNavigate } from "react-router-dom";
import taunggyi from "../image/taunggyi.jpeg";
import { NavBar } from "./navbar";

export const Education = ({setNavbar})=>{
   const navigate = useNavigate();
    return (
     <div className="App  h-screen flex flex-col justify-center
      bg-[url(https://i.pinimg.com/564x/94/97/d9/9497d9cb35963cf178dc7e0e94965d3b.jpg)]
       bg-center">
      <div className="animate-swingforward max-w-[355px] font-lobster md:max-w-[700px] mx-auto rounded-[40px] bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 mx-6 border shadow-2xl px-6">
       <div className="max-w-[355px] md:max-w-[650px]  py-4">
         <NavBar/>
        <div className="animate-fadeforward max-w-[600px] font-kanit font-bold mx-auto flex  relative py-4">
        <div className="flex flex-col w-full justify-center items-center space-y-2 md:flex-row md:items-start md:space-x-3">
            <div className="flex justify-center p-2 md:p-0">
             <img src={taunggyi} class="h-25 w-32 md:h-20 md:w-20 rounded-md shadow-lg" alt="" />
            </div>
             <div className="flex-col p-2 space-y-3 md:p-0 ">
             <h2 className="text-blue-800 text-center md:text-start uppercase">Education</h2>
             <h2 className=" text-center md:text-start">Technological University, Taunggyi</h2>
             <h5 className="w-full text-gray-800 text-center md:text-start">Bachelor of Engineering (Electronics)</h5>
             <div className="flex space-x-2">
                <button className="bg-green-700 text-white p-2 rounded-md hover:bg-green-900" onClick={()=>navigate("/about")}>About</button>
                <button className="bg-blue-700 text-white p-2 rounded-md hover:bg-blue-900" onClick={()=>navigate("/project")}>Project</button>
                <button className="bg-red-700 text-white p-2 rounded-md hover:bg-red-900" onClick={()=>navigate("/skill")}>Skill</button>
                <button className="bg-orange-700 text-white p-2 rounded-md hover:bg-orange-900" onClick={()=>navigate("/contact")}>Contact</button>
                <button className="bg-yellow-700 text-white p-2 rounded-md hover:bg-yellow-900" onClick={()=>navigate("/")}>Home</button>
             </div>
             </div>
        </div>
     </div>
   </div>
   </div>
   </div>
    )
}