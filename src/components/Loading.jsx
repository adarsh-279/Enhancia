import React from 'react'

const Loading = () => {
  return (
    <div className="w-60 h-60 lg:w-70 lg:h-70 object-cover text-black flex items-center justify-center">
      <div className='border-4 w-12 h-12 scale-120 rounded-full border-zinc-400 border-b-transparent animate-spin'></div>
    </div>
  );
}

export default Loading