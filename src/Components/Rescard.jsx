import React from "react";
import Hotellist from "./Hotellist";
import "./Rescard.css";
const Rescard=(props)=>{
  
  const {resObj}=props
  
  
  return(
    < div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
    
    <h1>{resObj.name}</h1>
     <h2>{resObj.cuisines}</h2>
    <h4>{resObj.rating} star</h4> 
    {/* <h5>{Price}</h5> */}
    <h6>SARWARUL</h6>
    
    </div>
  );
}
export default Rescard