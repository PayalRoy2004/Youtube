import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Watch = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get('v');
  console.log(videoId);

  return (
    <div className="p-4 w-full">
      <div className="w-full flex justify-center">
        <iframe
          className="rounded-lg"
          width="80%"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}  // ✅ FIXED: wrapped in backticks
          title="YouTube Video Player"
          allowFullScreen
        ></iframe>
      </div> 
    </div>
  );
};

export default Watch;
