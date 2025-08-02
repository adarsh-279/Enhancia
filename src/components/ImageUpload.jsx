import React from 'react'

const ImageUpload = () => {
  return (
    <div className="text-black bg-[#d0cece] shadow-xl rounded-2xl p-6 w-[81.6%] max-w-4xl lg:w-full lg:max-w-2xl m-10">
      <label htmlFor="fileInput" className='block w-full cursor-pointer border-4 border-dashed border-gray-500 rounded-lg p-6 hover:border-blue-400 hover:transition-1 text-center'>
        <input type="file" id='fileInput' className='hidden'/>
        <p>Click and drag to upload your image</p>
      </label>
    </div>
  );
}

export default ImageUpload