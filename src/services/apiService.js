import axiosService from "../api/axiosService";

//save resume api : called by ResumeInput compoenent when Finish button click
export const saveResumeAPI = async (resumeDetails)=>{
   return await axiosService("POST","/resumes",resumeDetails)
}