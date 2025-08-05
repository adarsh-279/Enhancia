import axios from "axios";

const API_KEY = "wxj124b5x38xrzy8q";
const BaseURL = 'https://techhk.aoscdn.com';
const MAXIMUM_RETRIES = 10;

export const enhanceImageAPI = async (file) => {

 try {
    
     const taskId = await uploadImage(file)
     console.log("upload image",taskId);
     
     const enhancedImage = await PollForEnhancedImage(taskId)
     console.log('enhance image', enhancedImage);
     
     return enhancedImage;
     
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

const fetchEnhancedImage = async (taskId) => {
       const {data} = await axios.get(`${BaseURL}/api/tasks/visual/scale/${taskId}`, {
        headers: {
            "Content-Type": "multipart/form-data",
            "X-API-KEY": API_KEY,
        }
   })
    return data.data.image;
}

const PollForEnhancedImage = async (taskId, retries = 0) => {
    const result = await fetchEnhancedImage(taskId);

    if (result.state === 4) {
        console.log(`Processing...(${retries}/${MAXIMUM_RETRIES})`);

        if (retries >= MAXIMUM_RETRIES) {
            throw new Error("Max retries reached. Please try again later.");
        }

        await new Promise((resolve) => setTimeout(resolve, 2000));

        return PollForEnhancedImage(taskId, retries + 1);
    }

    return result;
};

//task_id: 5ce547af-d9b8-4a8c-9f41-da3e049c4291