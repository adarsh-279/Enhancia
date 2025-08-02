import React from 'react'
import ImageUpload from './ImageUpload'
import ImagePreview from './ImagePreview'

const Home = () => {
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
          Upload your Image and let AI enhamce it in seconds.
        </p>
      </div>
      <ImageUpload />
      <ImagePreview />
      <p className="text-lg opacity-60">Powered by @PicWish</p>
    </div>
  );
}

export default Home