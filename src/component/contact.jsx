import {BsFillTelephoneFill} from "react-icons/bs";
import {HiOutlineMail} from "react-icons/hi";
import {BsFacebook} from "react-icons/bs";
import {BsGithub} from "react-icons/bs";
import {AiOutlineLinkedin} from "react-icons/ai";
import taunggyi from "../image/taunggyi.jpeg";
import { NavBar } from "./navbar";
import { useNavigate } from "react-router-dom";

export const Contact = ({setNavbar})=>{
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
             <div className="flex-col p-2 space-y-4 md:p-0 ">
             <h2 className="text-blue-800 text-center uppercase">Contact</h2>
             <div className="w-full flex justify-center items-center space-x-2">
                 <div className="contact-icon bg-blue-700 hover:cursor-pointer
                 hover:-translate-y-2 duration-1000">
                    <BsFillTelephoneFill />
                 </div>
                 <a href="tel:09784727952">09784727952</a>
             </div>

             <div className="w-full flex justify-center items-center space-x-2">
                 <div className="contact-icon bg-black hover:cursor-pointer
                 hover:-translate-y-2 duration-1000">
                    <BsGithub />
                 </div>
                 <a href="https://github.com/Oakar-Kyaw">Oakar Kyaw (Github)</a>
             </div>

             <div className="w-full flex justify-center items-center space-x-2">
                 <div className="contact-icon bg-black hover:cursor-pointer
                 hover:-translate-y-2 duration-1000">
                    <AiOutlineLinkedin />
                 </div>
                 <a href="https://www.linkedin.com/in/oakar-kyaw-43b38822a/">Oakar Kyaw (Linkeldn)</a>
             </div>
             
             <div className="w-full flex justify-center items-center space-x-2">
                 <div className="contact-icon bg-white text-black hover:cursor-pointer
                 hover:-translate-y-2 duration-1000">
                    <BsFacebook />
                 </div>
                 <a href="https://www.facebook.com/profile.php?id=100007419615097&mibextid=ZbWKwL">Oakar Kyaw (Facebook)</a>
             </div>

             <div className="w-full flex justify-center items-center space-x-2">
                 <div className="contact-icon bg-violet-700 text-white hover:cursor-pointer
                 hover:-translate-y-2 duration-1000">
                    <HiOutlineMail />
                 </div>
                 <a href="mailto:oakarkyaw7090@gmail.com">oakarkyaw7090@gmail.com</a>
             </div>
             
             
             
             <div className="flex space-x-2">
                <button className="bg-green-700 text-white p-2 rounded-md hover:bg-green-900" onClick={()=>navigate("/about")}>About</button>
                <button className="bg-blue-700 text-white p-2 rounded-md hover:bg-blue-900" onClick={()=>navigate("/project")}>Project</button>
                <button className="bg-red-700 text-white p-2 rounded-md hover:bg-red-900" onClick={()=>navigate("/skill")}>Skill</button>
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