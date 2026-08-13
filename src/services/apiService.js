import axiosService from "../api/axiosService";

//save resume api : called by ResumeInput compoenent when Finish button click
export const saveResumeAPI = async (resumeDetails)=>{
   return await axiosService("POST","/resumes",resumeDetails)
}

//view resume api : called by View compoenent when page loads in browser
export const viewResumeAPI = async (resumeId)=>{
   return await axiosService("GET",`/resumes/${resumeId}`,{})
}

//get all resume api : called by Saved compoenent when page loads in browser
export const getAllResumesAPI = async ()=>{
   return await axiosService("GET",`/resumes`,{})
}

//remove resume api : called by Saved compoenent when delete btn clicked
export const deleteResumeAPI = async (resumeId)=>{
   return await axiosService("DELETE",`/resumes/${resumeId}`,{})
}

//edit resume api : called by Edit compoenent when update btn clicked
export const editResumeAPI = async (resumeId,resumeDetails)=>{
   return await axiosService("PUT",`/resumes/${resumeId}`,resumeDetails)
}

//add resume to donwload api : called by View compoenent when download cv button click
export const downloadResumeAPI = async (resumeDetails)=>{
   return await axiosService("POST","/downloads",resumeDetails)
}

//get all donwload list api : called by Download compoenent when page open in browser
export const getAlldownloadAPI = async ()=>{
   return await axiosService("GET","/downloads",{})
}