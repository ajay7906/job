import axios from "axios";
import { showToast } from "../components/showtoast/showToast";

export const createJob = async (JobPostPayload)=>{
    try {
        const reqUrl = `http://localhost:3000/api/v1/job/create`;
        const token = localStorage.getItem("token");
        console.log(token);
        axios.defaults.headers.common["Authorization"] = token;
        const response =  await axios.post(reqUrl, JobPostPayload);
         console.log(response.data);
        return response.data;
      
        
    } catch (error) {
        showToast(error.response.data.errorMessage, { type: 'error' });
       
        
        
    }
}