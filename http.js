import axios from 'axios';


export const data = function httpRequest(method,url) {
    return method + url
}
// function 

export default  axios.create({
    baseURL: "http://localhost:9000/" ,
    helpers: {
        "Content-type": "application/json"
    } 
});