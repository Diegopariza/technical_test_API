import React from "react";

const DetailVideo = ({ video }) => {
  if (!video) {
    return (
      <div>
        <h1>Enter a word for search...</h1>
        <br />
        <p className="ui_informative-text" style={{ fontSize: "25px" }}>
          This APP is created under the Youtube API , this application was made
          for an entrance test to the company Experimentality. Here you can
          enter a word and press the "Enter" key to obtain a list of 6
          recommended videos according to your request. also you can select your
          preference video to enjoy it.
        </p>
      </div>
    );
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="ui_video-description">
      <div className="ui_embed">
        <iframe
          className="iframe-video"
          src={videoSrc}
          allowFullScreen
          title="Video Player"
        />
      </div>
      <div className="ui_segment">
        <h4 className="ui_header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default DetailVideo;
