import axios from "axios";

const instance = axios.create({
    baseURL: 'https://team-play-xyz-default-rtdb.firebaseio.com/'
});


export default instance;