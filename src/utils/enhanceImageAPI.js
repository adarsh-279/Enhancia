import axios from "axios";

const API_KEY = "wxj124b5x38xrzy8q";
const BaseURL = 'https://techhk.aoscdn.com';

export const enhanceImageAPI = async (file) => {

 try {
    
     const taskId = await uploadImage(file)
     console.log("upload image",taskId);
     
     const enhancedImage = await fetchEnhancedImage(taskId)
     console.log('enhance image',enhancedImage);
     
 } catch (error) {
    console.log(error);
    }
    
}

const uploadImage = async (file) => {
    const formData = new FormData()
    formData.append('image_file', file)

   const {data} = await axios.post(`${BaseURL}/api/tasks/visual/scale`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        }
   })
    return data.data.task_id;
}

const fetchEnhancedImage = async (taskId) => { }

//task_id: 5ce547af-d9b8-4a8c-9f41-da3e049c4291