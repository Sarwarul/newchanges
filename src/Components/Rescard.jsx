import React from "react";
import Hotellist from "./Hotellist";
import "./Rescard.css";
const Rescard=(props)=>{
  const {resObj}=props;
  
  const {name,cuisines,rating,Price}=resObj;
  
  
  return(
    < div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
    
    <h1>{name}</h1>
     <h2>{cuisines}</h2>
    <h4>{rating} star</h4> 
    <h5>{Price}</h5> 
    
    
    </div>
  );
}
export default Rescard