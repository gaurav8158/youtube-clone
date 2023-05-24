import React, {useState, useEffect} from "react";
import youtube from "../apis/youtube";
import "./SearchBar.css"
import { FaYoutube } from "react-icons/fa";

const SearchBar = ({addVideos}) => {
    const [searchTerm,setSearchTerm] = useState("React Tutorials")
     
    useEffect(()=>{
        getYoutubeVideos() 
    },[])

    function getYoutubeVideos(){

        youtube.get("/search",{
          params:{
            q: searchTerm,
            type: "video"
          }
        })
        .then((response) => addVideos(response.data.items))
        .catch((error) => console.log(error))
  
      }

    return(
        <div>
          <nav className="navbar">
          <div className="left-nav">
           <div className="icon"> 
           < FaYoutube/>
            </div> 
    <h2>YouTube</h2>
          </div>
          <div className="center-nav">
          <input className="search-box" type="text" placeholder="Search" 
              onChange={e => setSearchTerm(e.target.value)}
              value = {searchTerm}
              />
             <button className="search-btn" onClick={getYoutubeVideos}> Search </button> 
          </div>
         <div className="right-nav">
         <img 
         className="logo"
         src="https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg"
/>
         
         </div>
          </nav >
       
        </div>
    )
    
}



export default SearchBar;