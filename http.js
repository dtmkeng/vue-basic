import axios from 'axios';
export default  axios.create({
    baseURL: "http://localhost:9000/" ,
    helpers: {
        "Content-type": "application/json"
    } 
});