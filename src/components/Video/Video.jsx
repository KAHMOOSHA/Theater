import React from "react";
import trailer from "../media/trailer.mp4";
import "./video.css";

const Video = () => {
  return (
    <div className="vid_container">
      <video width={"100%"} src={trailer} controls />
    </div>
  );
};

export default Video;
