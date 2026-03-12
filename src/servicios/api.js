import axios from "axios";


const API = axios.create({
  baseURL: "https://backendbaguette-production-ca7f.up.railway.app/api/v1"
});


export default API;