import axios from 'axios'; 

export default  axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        key: "AIzaSyAWMnB9y91Qoi0FiKKKu5xctB-wPgpZXpg",
        maxResults: 5,
        part: "snippet"
    }
}) 
