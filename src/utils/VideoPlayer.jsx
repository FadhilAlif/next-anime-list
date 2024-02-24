"use client";

import { useState } from "react";
import Youtube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const Player = () => {
    return (
      <div className="fixed bottom-5 right-5">
        <button
          onClick={handleVideoPlayer}
          className="text-color-primary bg-color-accent px-4 mb-2 float-right rounded"
        >
          X
        </button>
        <Youtube
          videoId={youtubeId}
          onReady={(e) => e.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };

  return isOpen ? (
    <Player />
  ) : (
    <button
      onClick={handleVideoPlayer}
      className="fixed bottom-5 right-5 px-2 bg-color-accent text-color-dark rounded w-32"
    >
      Watch Trailer
    </button>
  );
};

export default VideoPlayer;
