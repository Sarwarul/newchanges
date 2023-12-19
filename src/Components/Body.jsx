import React, { useEffect, useState } from "react";
import Rescard from "./Rescard";
import Hotellist from "./Hotellist";
import shimmer from "./shimmer";
import "./Body.css";

const Body=()=>{
  // let listofHotel=[{
  //  name:"Loly's",
  //  img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  //  cuisines:["Salad","sandwich"],
  //  rating: "3.2",
  //  Price:"$10"
  // },{
  //  name:"Loly's",
  //  img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
  //  cuisines:["Salad","sandwich"],
  //  rating: "3.2",
  //  Price:"$10"
  // },{
  //   // id:"11",
  //   name:"Vishnu",
  //   img: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  //   cuisines:["Dosa ","Idli"],
  //   rating: "4.5",
  //   Price:"$10"
  // },]
  const[listofHotel,setlistHotel]=useState([]);
  useEffect(()=>{
    fetchData();
  },[]);
  const fetchData=async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    console.log(json);
     setlistHotel(json.data.cards[2].data.data.cards);
  };
  // if(listofHotel.length===0)
  // {
  //   return <shimmer/>
  // }
 
   return(
     <div className="Body">
        <div className="filter">
        <button className="filter-btn" onClick={()=>{const  filterlist=listofHotel.filter(
          (item)=>item.rating>4);
          setlistHotel(filterlist);
        }}
        >
          TopRatedHotel
          </button>
        </div>
        <div className="res-container">
       {listofHotel?.map((res)=>(<Rescard key={res.id} resObj={res}/>))}
        
           
        </div>
     </div>
   );
}
export default Body;