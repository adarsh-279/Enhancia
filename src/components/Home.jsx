import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'
import { enhanceImageAPI } from '../utils/enhanceImageAPI'

const Home = () => {

  const [uploadImage, setuploadImage] = useState(null)
  const [enhancedImage, setenhancedImage] = useState(null)
  const [loading, setloading] = useState(false)

  const uploadImageHandler = async (file) => {
    setuploadImage(URL.createObjectURL(file));
    setloading(true);
    try {
      const enhancedURL = await enhanceImageAPI(file);
      setenhancedImage(enhancedURL?.image || null);
      setloading(false)
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <div className="w-full flex flex-col items-center justify-center">
        <h1 className="text-4xl lg:text-6xl font-bold font-[PP] tracking-wider border-b-2">
          Enhancia
        </h1>
        <h1 className="text-lg lg:text-2xl font-semibold pt-1 lg:pt-0 opacity-80">
          AI Image Enhancer
        </h1>
        <p className="text-lg opacity-60">
          Upload your Image and let AI enhance it in seconds.
        </p>
      </div>
      <ImageUpload uploadImageHandler={uploadImageHandler} />
      <ImagePreview
        loading={loading}
        uploaded={uploadImage}
        enhanced={enhancedImage}
      />
      <p className="text-lg opacity-60 pt-5 lg:pt-0">Powered by @PicWish</p>
    </div>
  );
}

export default Home