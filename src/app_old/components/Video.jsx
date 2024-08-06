import React from "react";

const Video = ({ src }) => {
  const handleClick = () => {
    console.log("video clicked");
  };
  return (
    <video
      src={src}
      width="100%"
      className="bg-blue-200 p-[2px] rounded-lg shadow-lg shadow-blue-200 hover:bg-blue-600 "
      autoPlay={true}
      onClick={handleClick}
      muted
      loop
    >
      Sorry, your browser doesn&apos;t support embedded videos.
    </video>
  );
};

export default Video;
