import React from "react";
import MainVideo from "../MainVideo/MainVideo";

const VideoList = ({ videos, handleVideoSelect }) => {
  const renderedVideos = videos.map((video) => {
    return (
      <MainVideo
        key={video.id.videoId}
        video={video}
        handleVideoSelect={handleVideoSelect}
      />
    );
  });

  return <div className="ui_divided-list">{renderedVideos}</div>;
};

export default VideoList;
