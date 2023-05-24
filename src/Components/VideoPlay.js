import React from "react";

const VideoPlay = ({video}) => {
     

    return(
        <div>
              { 
              video==null ? <h1>Loading .... </h1> : (
                <div>
<iframe width="85%" height="515" src={`https://www.youtube.com/embed/${video.id.videoId}`} ></iframe>
                <h4>Title : {video.snippet.title}</h4>
                </div>
                
              )

              }
        </div>
    )
}

export default VideoPlay;