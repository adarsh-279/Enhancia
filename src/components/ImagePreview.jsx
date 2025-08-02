import React from 'react'

const ImagePreview = () => {
  return (
    <div className="w-full min-h-xl flex justify-center items-center flex-col lg:flex-row gap-5 lg:gap-8 pb-3">
      {/* Original Image */}
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        <h1 className="text-lg text-black font-semibold py-2 text-center bg-amber-200">
          Original Image
        </h1>
        <img
          src=""
          alt="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
          className="w-60 h-60 lg:w-70 lg:h-70 object-cover"
        />
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        <h1 className="text-lg text-black font-semibold py-2 text-center bg-blue-300">
          Enhanced Image
        </h1>
        <img
          src=""
          alt="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
          className="w-60 h-60 lg:w-70 lg:h-70 object-cover"
        />
      </div>
    </div>
  );
}

export default ImagePreview