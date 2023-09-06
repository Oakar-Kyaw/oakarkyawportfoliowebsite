import "../dist/output.css";
import {AiOutlineClockCircle} from "react-icons/ai";

export const NavBar = ()=>{
    const months = ["Jan","Feb","Mar","April","May","June","July","August","Sept","Oct","Nov","Dec"];
    const time = new Date();
    const today = time.getDate();
    console.log("tt is "+today)
    const Hours = time.getHours();
    const Minutes = time.getMinutes();
    
    const month =months[time.getMonth()];
    
    return (
     
             
             <div className="flex justify-between space-x-6 items-center">
                <div className="flex space-x-1 md:space-x-3">
                   { 
                   Hours < 12 ?
                        <p className="ml-2 font-bold">Good Morning</p>
                        :
                     12 < Hours < 19 ?
                     
                         <p className="ml-2 font-bold">Good Afternoon</p>
                         :
                         <p className="ml-2 font-bold">Good Night</p>
                    }
                    
                     <p className="ml-2 font-bold"> {today} {month}</p>
                    
                     </div> 
                

                <div className="flex items-center space-x-2"> 
                    <AiOutlineClockCircle />
                    <p>{Hours > 12 ? Hours - 12 :Hours} : {Minutes < 10 ? 0 : ""} {Minutes} {Hours < 12 ? "AM" : "PM" } </p>
                </div>
                
             </div>
            
    );
}