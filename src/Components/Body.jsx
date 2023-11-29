import React from "react";
import Rescard from "./Rescard";
import Hotellist from "./Hotellist";
import "./Body.css";

const Body=()=>{
  
   return(
     <div className="Body">
        <div className="Search">Search</div>
        <div className="res-container">
           <Rescard resObj={Hotellist}/>
          
           
        </div>
     </div>
   );
}
export default Body;