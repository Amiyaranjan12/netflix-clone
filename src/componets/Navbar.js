import React from 'react'
import '../style/Navbar.css'
import {useState,useEffect} from"react"

export default function Navbar() {

  const[show,handleShow]=useState(false);

  useEffect(()=>{
   window.addEventListener("scroll",()=>{

    if(window.scrollY>120){

        handleShow(true)

    }
    else{
        handleShow(false)
    }

   });
   return ()=>{
       window.removeEventListener("scroll")
   };
},[])

  return (
    <div className={`nav ${show && "navcolor"}`}>


      


      <div className="start_nav">

      <img className="netflix-logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
      alt="Netflix_Logo"/>
  
      <span>Homepage</span>
      <span>Series</span>
      <span>Movies</span>
      <span>Recently Added</span>
      <span>My List</span>
      </div>
      

      <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
      alt="Netflix_avatar"/>

    </div>
  )
}


