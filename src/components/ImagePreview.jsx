import React from 'react'
import Loading from "./Loading"

const ImagePreview = (props) => {
  return (
    <div className="w-full min-h-xl flex justify-center items-center flex-col lg:flex-row gap-5 lg:gap-8 pb-3">
      {/* Original Image */}
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        <h1 className="text-lg text-black font-semibold py-2 text-center bg-amber-200">
          Original Image
        </h1>
        {props.uploaded ? (
          <img
            src={props.uploaded}
            alt=""
            className="w-60 h-60 lg:w-70 lg:h-70 object-cover"
          />
        ) : (
          <h1 className="w-60 h-60 lg:w-70 lg:h-70 object-cover text-black flex items-center justify-center">
            No Image Uploaded
          </h1>
        )}
      </div>

      {/* Enhanced Image */}
      <div className="bg-white shadow-xl rounded-xl overflow-hidden">
        <h1 className="text-lg text-black font-semibold py-2 text-center bg-blue-300">
          Enhanced Image
        </h1>
        {props.enhanced && !props.loading && (
          <img
            src={props.enhanced}
            alt=""
            className="w-60 h-60 lg:w-70 lg:h-70 object-cover"
          />
        )}

        {props.loading ? <Loading /> :(
          <h1 className="w-60 h-60 lg:w-70 lg:h-70 object-cover text-black flex items-center justify-center">
            No Enhanced Image
          </h1>
        )}

      </div>
    </div>
  );
}

export default ImagePreview