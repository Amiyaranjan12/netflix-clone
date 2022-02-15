import React from 'react' //rfce
import {useState} from 'react';
import {useEffect} from 'react';
import axios from '../axios';
import "../style/Row.css"
import YouTube from'react-youtube'
import movieTrailer from "movie-trailer"



const baseImageUrl="https://image.tmdb.org/t/p/original";

function Row({title,fetchAdress,isLargeRow}) {
    const[movies,setMovies]= useState([]);
    const [movieUrl,setMovieUrl]=useState("")
    useEffect(()=>{

        async function getData(){
           const request=await axios.get(fetchAdress);
           setMovies(request.data.results)
           return request;
        }
        getData();

    },[fetchAdress]);

  const opts={
    height:"400",
    width:"100%",
    playerVars:{
      autoplay:1,
    }
  }

  const userClick=(movie)=>{
    if(movieUrl){
      setMovieUrl('')
    }else{

    

      movieTrailer(movie?.name || "")
       .then(url=>{

           
          const urlParams=new URLSearchParams(new URL(url).search);
          setMovieUrl(urlParams.get('v'));

       }).catch((error)=>console.log(error));
    }
  }

  return (
    <div className="row">

     <h2>{title}</h2>
     
     <div className="row_movie" >
    
       {movies.map(movie => (
         
       
       <img   key={movie.id} onClick={()=>userClick(movie)} className={`row_imagemovie ${isLargeRow && "row_imagemovielarge"}`} src={`${baseImageUrl}${isLargeRow ?movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
        
        
       ))}

     </div>

     {movieUrl && <YouTube videoId={movieUrl} opts={opts}/> }

    </div>
  )
}

export default Row
