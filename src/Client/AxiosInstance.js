import Axios from "axios";
import {SubjectStore} from "../Store/SubjectStore";
let axios = Axios.create({
    baseURL: '/api',
    /* other custom settings */
});
SubjectStore.subscribe(value=>{
   if(value !== null){
       axios.defaults.headers['x-api-key'] = value.token;
   }
});
export default axios
