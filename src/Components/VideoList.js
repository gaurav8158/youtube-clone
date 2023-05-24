import React, {useEffect} from "react"; 
import "./VideoList.css";


const VideoList = ({videos, videoChosen}) => {

    useEffect(()=>{
        videoChosen(videos[0])
    },[videos])
 
    return(
        <div>
            {
                videos&& 
                videos.map((video, index) => (
                  <div key={index}
                    onClick={() => videoChosen(video)}
                  >
                        <img  
                        className="listimg"
                           src={video.snippet.thumbnails.high.url}
                           alt = {video.snippet.title}
                        />
                        <p>{video.snippet.title}</p>
                  </div>
                ))               
            }
        </div>
    )
}


export default VideoList;