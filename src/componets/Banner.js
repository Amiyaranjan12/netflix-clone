import axios from '../axios';
import React from 'react'
import requests from '../requestapi';
import { useState } from 'react'
import { useEffect } from 'react';
import "../style/banner.css"

function Banner() {

  const [movie,setMovie]=useState([]);
  useEffect(()=>{
      async function fetchRandomMovie(){
        const request=await axios.get(requests.getNetflixOriginal)
        setMovie(
            request.data.results[Math.floor(Math.random()*request.data.results.length-1)]
        )
        return request
      }
      fetchRandomMovie()
  },[])

  function stringdot(str,n){
    return str?.length>n?str.substr(0,n-1)+"....":str;
  }


  return (
      <header className="banner"
      style={{
          bacgroundSize:"Cover",

          backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
          ,
          backgroundPosition:"center center"
      }}
      >

          <div className="banner_content">

            <h1 className="banner_title">
                {movie?.title||movie?.name||movie?.original_name}
            </h1>

            <div className="banner_buttons">
          
               <button className="banner_button1">Play</button>
               <button className="banner_button2">My List</button>

            </div>
            <h1 className="banner_des">{stringdot(movie?.overview,170)}</h1>
          </div>
          <div className="banner_fade"/>
      </header>



  )
}

export default Banner
